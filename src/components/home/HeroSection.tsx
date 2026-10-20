"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "var(--obsidian)",
      }}
    >
      {/* Background video / fallback gradient */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          opacity: 0.55,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — dark bottom for text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(12,11,10,0.1) 0%, rgba(12,11,10,0.0) 30%, rgba(12,11,10,0.75) 75%, rgba(12,11,10,0.97) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero copy */}
      <div
        className="hero-animate"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 clamp(24px, 6vw, 96px) clamp(64px, 10vh, 120px)",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow */}
        <p
          className="section-eyebrow"
          style={{ marginBottom: "20px", animationDelay: "0.1s" }}
        >
          Raw Single Donor · Kingston, Jamaica
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 8vw, 112px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            margin: "0 0 8px",
          }}
        >
          A House
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 8vw, 112px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            color: "var(--gold)",
            margin: "0 0 32px",
          }}
        >
          Built For Her.
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 300,
            color: "var(--fg-mid)",
            maxWidth: "480px",
            lineHeight: 1.6,
            margin: "0 0 40px",
          }}
        >
          Raw, responsibly sourced extensions for the woman who knows exactly
          what she wants — and refuses to settle for less.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="/shop"
            style={{
              display: "inline-block",
              background: "var(--gold)",
              color: "var(--obsidian)",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--champagne)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--gold)")
            }
          >
            Shop Now
          </a>
          <a
            href="/our-house"
            style={{
              display: "inline-block",
              border: "1px solid var(--border-light)",
              color: "var(--fg-mid)",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-dim)";
              e.currentTarget.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.color = "var(--fg-mid)";
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "clamp(24px, 6vw, 96px)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "60px",
            background:
              "linear-gradient(to bottom, transparent, var(--gold-dim))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            writingMode: "vertical-lr",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
