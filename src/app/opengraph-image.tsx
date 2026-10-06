import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Babzi.xyz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          color: "#eee8dc",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 34, letterSpacing: "-0.03em" }}>Babzi.xyz</div>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#c56f32" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c56f32" }}>
            Protocol incentives · Governance · Token design
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 62, lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            The economy receives the behaviour it makes profitable.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#aaa295" }}>I stress test that system.</div>
          <div style={{ display: "flex", width: 84, height: 2, background: "#c56f32" }} />
        </div>
      </div>
    ),
    size,
  );
}
