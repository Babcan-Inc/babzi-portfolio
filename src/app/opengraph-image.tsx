import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Babzi.xyz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function face(url: string) {
  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [display, sans] = await Promise.all([
    face("https://fonts.gstatic.com/s/newsreader/v26/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojADA.ttf"),
    face("https://fonts.gstatic.com/s/schibstedgrotesk/v7/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNEMEATw.ttf"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0b0a", color: "#eee8dc", padding: "68px 76px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 40, letterSpacing: "-0.03em" }}>Babzi.xyz</div>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#c56f32" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={{ display: "flex", fontFamily: "Schibsted", fontSize: 18, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c56f32" }}>
            Protocol incentives · Governance · Token design
          </div>
          <div style={{ display: "flex", marginTop: 26, fontFamily: "Newsreader", fontSize: 68, lineHeight: 0.98, letterSpacing: "-0.035em" }}>
            The economy receives the behaviour it makes profitable.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 30, color: "#aaa295" }}>I stress test that system.</div>
          <div style={{ display: "flex", width: 84, height: 2, background: "#c56f32" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: display, weight: 600, style: "normal" },
        { name: "Schibsted", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
