export default function InstagramSection() {
  return (
    <section style={{ background: "var(--ebony)", padding: "80px clamp(24px,6vw,96px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Instagram</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 40px" }}>
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>@houseofisabelja</em>
        </h2>
        <a href="https://www.instagram.com/houseofisabelja/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid var(--border-light)", color: "var(--fg-mid)", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", padding: "14px 32px", textDecoration: "none" }}>
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
