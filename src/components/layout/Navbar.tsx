"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/store";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, toggleCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--obsidian)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          paddingTop: "0",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 40px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: "var(--champagne)",
                lineHeight: 1,
              }}
            >
              HOUSE OF
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "0.06em",
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              Isabel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: "36px" }}>
            {[
              { href: "/shop", label: "SHOP" },
              { href: "/bundles", label: "BUNDLES" },
              { href: "/wigs", label: "WIGS" },
              { href: "/our-house", label: "OUR HOUSE" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--fg-mid)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--champagne)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-mid)")}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center" style={{ gap: "20px" }}>
            {/* Phone — desktop only */}
            <a
              href="tel:8765993402"
              className="hidden lg:block"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--fg-muted)",
                textDecoration: "none",
              }}
            >
              876-599-3402
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/18765993402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{ color: "var(--fg-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
            >
              <MessageCircle size={18} />
            </a>

            {/* Cart */}
            <button
              onClick={toggleCart}
              aria-label="Open cart"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-mid)",
                position: "relative",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-mid)")}
            >
              <ShoppingBag size={18} />
              {count() > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-6px",
                    background: "var(--gold)",
                    color: "var(--obsidian)",
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    fontSize: "9px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {count()}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--fg-mid)",
                padding: 0,
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "var(--obsidian)",
              borderTop: "1px solid var(--border)",
              padding: "24px 40px 32px",
            }}
          >
            {[
              { href: "/shop", label: "SHOP" },
              { href: "/bundles", label: "BUNDLES" },
              { href: "/wigs", label: "WIGS" },
              { href: "/our-house", label: "OUR HOUSE" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--fg-mid)",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:8765993402"
              style={{
                display: "block",
                marginTop: "20px",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                textDecoration: "none",
              }}
            >
              876-599-3402
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
