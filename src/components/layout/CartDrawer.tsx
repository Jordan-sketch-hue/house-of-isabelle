"use client";
import { X } from "lucide-react";
import { useCart } from "@/lib/store";

export default function CartDrawer() {
  const { isOpen, toggleCart, items, total, removeItem } = useCart();
  if (!isOpen) return null;
  return (
    <>
      <div onClick={toggleCart} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 90 }} />
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px,100vw)", background: "var(--ebony)", zIndex: 100, display: "flex", flexDirection: "column", borderLeft: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 28px", borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 400, color: "var(--fg)", margin: 0 }}>Your Cart</h2>
          <button onClick={toggleCart} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg-mid)", padding: 0 }}><X size={20} /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {items.length === 0 ? (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--fg-muted)", textAlign: "center", marginTop: "60px" }}>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.length}-${item.texture}`} style={{ display: "flex", gap: "16px", marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
                <img src={item.image} alt={item.name} style={{ width: "72px", height: "96px", objectFit: "cover", background: "var(--obsidian)" }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--fg)", margin: "0 0 4px" }}>{item.name}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--fg-muted)", margin: "0 0 8px" }}>{item.length}&quot; · {item.texture} × {item.quantity}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--gold)", margin: 0 }}>J${(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <button onClick={() => removeItem(item.id, item.length, item.texture)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg-muted)", padding: 0, alignSelf: "flex-start" }}><X size={14} /></button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div style={{ padding: "24px 28px", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Total</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--champagne)" }}>J${total().toLocaleString()}</span>
            </div>
            <a href="https://wa.me/18765993402" target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--gold)", color: "var(--obsidian)", textAlign: "center", padding: "16px", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Order via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
}
