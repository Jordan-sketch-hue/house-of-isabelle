export default function StandardsSection() {
  const items = [
    { title: "Single Donor", body: "Every bundle traced back to one person. No blending, no mixing." },
    { title: "Full Cuticle Aligned", body: "Cuticles intact and aligned in the same direction — zero tangling." },
    { title: "Chemical Free", body: "No acid wash, no silicone coating. Just clean, natural hair." },
    { title: "Tested Personally", body: "Isabel approves every batch before it reaches your hands." },
  ];
  return (
    <section style={{ background: "var(--obsidian)", padding: "80px clamp(24px,6vw,96px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Our Standards</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 48px" }}>
          The <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Isabel</em> guarantee
        </h2>
        <div className="standards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }}>
          {items.map((item, i) => (
            <div key={i} style={{ background: "var(--obsidian)", padding: "40px 32px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--champagne)", margin: "0 0 12px" }}>{item.title}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 300, color: "var(--fg-muted)", lineHeight: 1.6, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}