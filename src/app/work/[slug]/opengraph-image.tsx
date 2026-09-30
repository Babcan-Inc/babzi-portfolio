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
  publishedAt: string;
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (writings as Writing[]).find((item) => item.slug === slug);
  const title = post?.title ?? "BABZI";
  const meta = post?.meta ?? "WRITINGS";
  const date = post?.publishedAt ?? "";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f1ebe1", color: "#161210", padding: "64px 72px", border: "12px solid #7a2e24", fontFamily: "Georgia, serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "-0.02em" }}>BABZI</div>
        <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 20, letterSpacing: "0.14em", color: "#7a2e24" }}>{meta}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ display: "flex", fontSize: 58, lineHeight: 1.08, letterSpacing: "-0.025em" }}>{title}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "Arial, sans-serif", fontSize: 20, color: "#5f574f" }}>
        <div style={{ display: "flex" }}>Protocol incentives · governance · agent economies</div>
        <div style={{ display: "flex" }}>{date}</div>
      </div>
    </div>,
    size,
  );
}
