import { ImageResponse } from "next/og";
import writings from "../../../../content/writing.json";

export const runtime = "edge";
export const alt = "BABZI writing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Writing = { slug: string; title: string; meta: string; excerpt: string; publishedAt: string };

async function face(url: string) {
  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (writings as Writing[]).find((item) => item.slug === slug);
  const title = post?.title ?? "BABZI";
  const meta = post?.meta ?? "Writings";
  const date = post?.publishedAt ?? "";
  const excerpt = (post?.excerpt ?? "").replace(/\s+/g, " ").trim();
  const [display, sans] = await Promise.all([
    face("https://fonts.gstatic.com/s/newsreader/v26/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojADA.ttf"),
    face("https://fonts.gstatic.com/s/schibstedgrotesk/v7/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNEMEATw.ttf"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0b0a", color: "#eee8dc", padding: "68px 76px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 36, letterSpacing: "-0.03em" }}>Babzi.xyz</div>
          <div style={{ display: "flex", fontFamily: "Schibsted", fontSize: 18, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c56f32" }}>{meta}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020 }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.03em" }}>{title}</div>
          {excerpt ? <div style={{ display: "flex", marginTop: 28, fontFamily: "Newsreader", fontSize: 32, lineHeight: 1.28, color: "#c56f32" }}>{excerpt}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", width: 84, height: 2, background: "#c56f32" }} />
          <div style={{ display: "flex", fontFamily: "Schibsted", fontSize: 20, color: "#aaa295" }}>{date}</div>
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
