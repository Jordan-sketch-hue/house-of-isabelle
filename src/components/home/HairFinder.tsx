export default function HairFinder() {
  return (
    <section style={{ background: "var(--ebony-2)", padding: "80px clamp(24px,6vw,96px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Hair Finder</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 20px" }}>
          Not sure where to <em style={{ fontStyle: "italic", color: "var(--gold)" }}>start?</em>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 300, color: "var(--fg-mid)", lineHeight: 1.7, margin: "0 0 40px" }}>
          Tell us your texture, lifestyle, and look — we&apos;ll match you to the perfect bundle set.
        </p>
        <a href="https://wa.me/18765993402" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--gold)", color: "var(--obsidian)", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}>
          Start Consultation
        </a>
      </div>
    </section>
  );
}
