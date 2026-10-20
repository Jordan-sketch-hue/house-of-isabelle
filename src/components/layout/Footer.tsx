import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--obsidian)", borderTop: "1px solid var(--border)", padding: "60px clamp(24px,6vw,96px) 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px" }}>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 300, color: "var(--champagne)", margin: "0 0 4px" }}>HOUSE OF</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: "var(--gold)", margin: "0 0 20px" }}>Isabel</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, color: "var(--fg-muted)", lineHeight: 1.7, maxWidth: "280px" }}>Luxury raw hair extensions. Kingston, Jamaica.</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--fg-muted)", marginTop: "16px" }}>876-599-3402</p>
        </div>
        {[
          { heading: "Shop", links: [{ href: "/bundles", label: "Bundles" }, { href: "/closures", label: "Closures" }, { href: "/wigs", label: "Wigs" }, { href: "/raw", label: "Raw Hair" }] },
          { heading: "Company", links: [{ href: "/our-house", label: "Our House" }, { href: "/contact", label: "Contact" }, { href: "/faq", label: "FAQ" }] },
          { heading: "Connect", links: [{ href: "https://www.instagram.com/houseofisabelja/", label: "Instagram" }, { href: "https://wa.me/18765993402", label: "WhatsApp" }] },
        ].map((col) => (
          <div key={col.heading}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", margin: "0 0 20px" }}>{col.heading}</p>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, color: "var(--fg-mid)", textDecoration: "none", marginBottom: "12px" }}>{l.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "1280px", margin: "40px auto 0", paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--fg-muted)" }}>© {new Date().getFullYear()} House of Isabel. All rights reserved.</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#666" }}>house-of-isabel.com</p>
      </div>
    </footer>
  );
}
