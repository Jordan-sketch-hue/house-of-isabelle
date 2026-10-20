export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Clients Served", sub: "And counting" },
    { number: "3+", label: "Years in Business", sub: "Est. 2021" },
    { number: "100%", label: "Raw Human Hair", sub: "No synthetic blend" },
    { number: "5★", label: "Average Review", sub: "Google & Instagram" },
  ];

  return (
    <section
      style={{
        background: "var(--obsidian)",
        borderBottom: "1px solid var(--border)",
        padding: "80px clamp(24px, 6vw, 96px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "var(--obsidian)",
              padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 5vw, 80px)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--champagne)",
                letterSpacing: "-0.02em",
              }}
            >
              {s.number}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--fg)",
              }}
            >
              {s.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 400,
                color: "var(--fg-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {s.sub}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
