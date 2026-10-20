"use client";
import Link from "next/link";
import { ShoppingBag, Grid2x2, Home, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/store";

export default function MobileBar() {
  const { count, toggleCart } = useCart();
  return (
    <nav className="md:hidden" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 70, background: "var(--obsidian)", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-around", padding: "12px 0 calc(12px + env(safe-area-inset-bottom))" }}>
      {[
        { href: "/", icon: <Home size={20} />, label: "Home" },
        { href: "/shop", icon: <Grid2x2 size={20} />, label: "Shop" },
        { href: "https://wa.me/18765993402", icon: <MessageCircle size={20} />, label: "Chat" },
      ].map((item) => (
        <Link key={item.href} href={item.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "var(--fg-muted)", textDecoration: "none", minWidth: "48px" }}>
          {item.icon}
          <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</span>
        </Link>
      ))}
      <button onClick={toggleCart} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "var(--fg-muted)", background: "none", border: "none", cursor: "pointer", position: "relative", minWidth: "48px" }}>
        <ShoppingBag size={20} />
        {count() > 0 && <span style={{ position: "absolute", top: "-4px", right: "6px", background: "var(--gold)", color: "var(--obsidian)", borderRadius: "50%", width: "14px", height: "14px", fontSize: "9px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{count()}</span>}
        <span style={{ fontFamily: "var(--font-body)", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Cart</span>
      </button>
    </nav>
  );
}
