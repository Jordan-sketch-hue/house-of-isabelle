"use client";
import ImageWithShimmer from "@/components/ui/ImageWithShimmer";

export default function FounderSection() {
  return (
    <section
      style={{
        background: "var(--ebony)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "600px",
        }}
      >
        {/* Portrait — full bleed left half */}
        <div
          style={{
            position: "relative",
            minHeight: "500px",
            background: "var(--obsidian)",
            overflow: "hidden",
          }}
        >
          <ImageWithShimmer
            src="/images/founder.jpg"
            alt="Isabel, founder of House of Isabel"
            style={{ objectPosition: "center top" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "120px",
              background: "linear-gradient(to top, rgba(12,11,10,0.7), transparent)",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
        </div>

        {/* Copy — right half */}
        <div
          style={{
            padding: "clamp(48px, 6vw, 96px) clamp(40px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="section-eyebrow" style={{ marginBottom: "24px" }}>
            The Founder
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--fg)",
              margin: "0 0 8px",
            }}
          >
            Born from a
          </h2>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--gold)",
              margin: "0 0 36px",
            }}
          >
            personal standard.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--fg-mid)",
              margin: "0 0 20px",
              maxWidth: "420px",
            }}
          >
            Isabel started this house because the market kept giving her
            options — never excellence. She refused to accept shedding, tangling
            or mismatched textures as &ldquo;just how it is.&rdquo;
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--fg-mid)",
              margin: "0 0 36px",
              maxWidth: "420px",
            }}
          >
            Every bundle we carry is sourced directly from single donors whose
            hair we have personally verified. No middlemen. No compromises. Just
            hair that performs exactly as promised.
          </p>

          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "28px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontStyle: "italic",
                  color: "var(--champagne)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Isabel
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  margin: "4px 0 0",
                }}
              >
                Founder &amp; Curator
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .founder-portrait { min-height: 360px !important; }
        }
      `}</style>
    </section>
  );
}