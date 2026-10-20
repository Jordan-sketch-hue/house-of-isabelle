import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0B0A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: "#C8A96A",
              fontSize: "18px",
              fontWeight: 300,
              fontFamily: "serif",
              letterSpacing: "-0.02em",
            }}
          >
            HI
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}