export default function MarqueeBanner() {
  const items = [
    "Raw Single Donor",
    "Full Cuticle Aligned",
    "Ships Islandwide",
    "Free Consultation",
    "Certified Installers",
    "100% Human Hair",
    "Vietnamese · Burmese · Indian",
    "Kingston, Jamaica",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--ebony)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <div
        className="marquee-inner"
        style={{ display: "flex", whiteSpace: "nowrap", gap: "0" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-mid)",
              padding: "0 40px",
              flexShrink: 0,
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--gold-dim)",
                margin: "0 40px 2px",
                verticalAlign: "middle",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
