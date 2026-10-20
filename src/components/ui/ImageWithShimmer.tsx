"use client";
import { useState } from "react";
import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  priority?: boolean;
}

export default function ImageWithShimmer({ src, alt, style, containerStyle, priority }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "var(--ebony)",
        ...containerStyle,
      }}
    >
      {/* Shimmer skeleton */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "var(--ebony)",
            overflow: "hidden",
          }}
        >
          <div className="hoi-shimmer" />
        </div>
      )}

      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        onLoad={() => setLoaded(true)}
        style={{
          objectFit: "cover",
          objectPosition: "center top",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          zIndex: 2,
          ...style,
        }}
      />

      <style>{`
        .hoi-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(200, 169, 106, 0.08) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          animation: hoi-shimmer-sweep 1.6s infinite ease-in-out;
        }
        @keyframes hoi-shimmer-sweep {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}