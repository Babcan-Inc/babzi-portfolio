import { ImageResponse } from "next/og";
import writings from "../../../../content/writing.json";

export const runtime = "edge";
export const alt = "BABZI writing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Writing = {
  slug: string;
  title: string;
  meta: string;
  excerpt: string;
  publishedAt: string;
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (writings as Writing[]).find((item) => item.slug === slug);
  const title = post?.title ?? "BABZI";
  const meta = post?.meta ?? "Writings";
  const date = post?.publishedAt ?? "";
  const excerpt = (post?.excerpt ?? "").replace(/\s+/g, " ").trim();

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
          <div style={{ display: "flex", fontSize: 32, letterSpacing: "-0.03em" }}>Babzi.xyz</div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c56f32" }}>{meta}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 1.05, letterSpacing: "-0.03em" }}>{title}</div>
          {excerpt ? (
            <div style={{ display: "flex", marginTop: 28, fontSize: 28, lineHeight: 1.35, color: "#c56f32" }}>{excerpt}</div>
          ) : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", width: 84, height: 2, background: "#c56f32" }} />
          <div style={{ display: "flex", fontSize: 20, color: "#aaa295" }}>{date}</div>
        </div>
      </div>
    ),
    size,
  );
}
