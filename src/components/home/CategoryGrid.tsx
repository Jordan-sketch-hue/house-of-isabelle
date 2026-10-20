"use client";
import ImageWithShimmer from "@/components/ui/ImageWithShimmer";

export default function CategoryGrid() {
  const cats = [
    { label: "Bundles", sub: "Raw Vietnamese, Burmese, Indian", href: "/bundles", img: "/images/cat-bundles.jpg" },
    { label: "Closures", sub: "HD Lace · 4x4 · 5x5", href: "/closures", img: "/images/cat-closures.jpg" },
    { label: "Wigs", sub: "Full Lace · Lace Front", href: "/wigs", img: "/images/cat-wigs.jpg" },
    { label: "Raw Hair", sub: "Unprocessed single donor", href: "/raw", img: "/images/cat-raw.jpg" },
  ];

  return (
    <section style={{ background: "var(--ebony-2)", padding: "80px clamp(24px,6vw,96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Categories</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 48px" }}>
          Shop by <em style={{ fontStyle: "italic", color: "var(--gold)" }}>collection</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
          {cats.map((c) => (
            <a key={c.href} href={c.href} style={{ textDecoration: "none", display: "block", position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <ImageWithShimmer src={c.img} alt={c.label} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,10,0.85) 0%, transparent 60%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px", zIndex: 3 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--fg)", margin: "0 0 4px" }}>{c.label}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--fg-muted)", margin: 0 }}>{c.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}