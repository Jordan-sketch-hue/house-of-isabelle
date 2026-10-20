import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  length: number;
  texture: string;
  quantity: number;
  image: string;
  slug: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, length: number, texture: string) => void;
  updateQty: (id: string, length: number, texture: string, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  total: () => number;
  count: () => number;
}

const key = (item: { id: string; length: number; texture: string }) =>
  `${item.id}-${item.length}-${item.texture}`;

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (newItem) => {
        set((s) => {
          const k = key(newItem);
          const existing = s.items.find((i) => key(i) === k);
          if (existing) {
            return {
              items: s.items.map((i) =>
                key(i) === k ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...s.items, { ...newItem, quantity: 1 }] };
        });
      },

      removeItem: (id, length, texture) => {
        const k = key({ id, length, texture });
        set((s) => ({ items: s.items.filter((i) => key(i) !== k) }));
      },

      updateQty: (id, length, texture, qty) => {
        const k = key({ id, length, texture });
        if (qty <= 0) {
          set((s) => ({ items: s.items.filter((i) => key(i) !== k) }));
        } else {
          set((s) => ({
            items: s.items.map((i) => (key(i) === k ? { ...i, quantity: qty } : i)),
          }));
        }
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      total: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "hoi-cart" }
  )
);
