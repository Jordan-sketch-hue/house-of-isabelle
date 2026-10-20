"use client";
import ImageWithShimmer from "@/components/ui/ImageWithShimmer";
import { getFeatured } from "@/lib/data";

export default function FeaturedProducts() {
  const products = getFeatured();
  return (
    <section style={{ background: "var(--obsidian)", padding: "80px clamp(24px,6vw,96px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Featured</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 48px" }}>
          Signature <em style={{ fontStyle: "italic", color: "var(--gold)" }}>pieces</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          {products.slice(0, 3).map((p) => (
            <a key={p.id} href={`/shop/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: "16px" }}>
                <ImageWithShimmer src={p.image} alt={p.name} />
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 400, color: "var(--fg)", margin: "0 0 4px" }}>{p.name}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--fg-muted)", margin: "0 0 8px" }}>{p.subtitle}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--gold)", margin: 0 }}>
                From J${Math.min(...p.lengths.map((l) => p.priceMap[l])).toLocaleString()}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}