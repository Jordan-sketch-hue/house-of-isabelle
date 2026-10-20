export default function NewsletterSection() {
  return (
    <section style={{ background: "var(--ebony-2)", padding: "80px clamp(24px,6vw,96px)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Stay in the know</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 300, color: "var(--fg)", margin: "0 0 20px" }}>
          New arrivals, <em style={{ fontStyle: "italic", color: "var(--gold)" }}>first.</em>
        </h2>
        <form style={{ display: "flex", gap: "0", marginTop: "32px" }}>
          <input type="email" placeholder="Your email address" style={{ flex: 1, background: "var(--obsidian)", border: "1px solid var(--border-light)", borderRight: "none", color: "var(--fg)", fontFamily: "var(--font-body)", fontSize: "13px", padding: "14px 20px", outline: "none" }} />
          <button type="submit" style={{ background: "var(--gold)", border: "none", color: "var(--obsidian)", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", padding: "14px 28px", cursor: "pointer" }}>
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
