export default function ReviewsSection() {
  const reviews = [
    { name: "Shantel M.", text: "I've tried so many bundles — nothing compares. The quality is unreal.", rating: 5 },
    { name: "Kezia B.", text: "Isabel was so helpful. My wig looks absolutely natural. Worth every penny.", rating: 5 },
    { name: "Tanya W.", text: "Shipping was fast and the hair arrived perfectly packaged. 10/10.", rating: 5 },
  ];
  return (
    <section style={{ background: "var(--ebony)", padding: "80px clamp(24px,6vw,96px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Reviews</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 48px" }}>
          What she <em style={{ fontStyle: "italic", color: "var(--gold)" }}>says</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ border: "1px solid var(--border)", padding: "32px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontStyle: "italic", color: "var(--fg-mid)", lineHeight: 1.6, margin: "0 0 24px" }}>&ldquo;{r.text}&rdquo;</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", margin: 0 }}>{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
