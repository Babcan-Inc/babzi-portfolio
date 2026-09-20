import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  slugify,
  withFeaturedCap,
  type WritingPost,
} from "@/lib/writing";
import { loadWriting, saveWriting } from "@/lib/writingStore";
import crypto from "crypto";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const posts = await loadWriting();
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json()) as Partial<WritingPost>;
  if (!body.title?.trim()) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }
  const posts = await loadWriting();
  const id = crypto.randomUUID();
  const slugBase = slugify(body.slug || body.title);
  let slug = slugBase || id.slice(0, 8);
  if (posts.some((p) => p.slug === slug)) slug = `${slug}-${id.slice(0, 4)}`;

  const next: WritingPost = {
    id,
    slug,
    title: body.title.trim(),
    meta: (body.meta || "Note").trim(),
    excerpt: (body.excerpt || "").trim(),
    externalUrl: (body.externalUrl || "").trim(),
    body: body.body || "",
    publishedAt: body.publishedAt || new Date().toISOString().slice(0, 10),
    featuredOnHome: Boolean(body.featuredOnHome),
    published: body.published !== false,
  };

  let updated = [next, ...posts];
  if (next.featuredOnHome) updated = withFeaturedCap(updated, next.id);
  const result = await saveWriting(updated);
  return NextResponse.json({ post: next, persistence: result.mode });
}

export async function PUT(req: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json()) as Partial<WritingPost> & { id: string };
  if (!body.id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }
  const posts = await loadWriting();
  const idx = posts.findIndex((p) => p.id === body.id);
  if (idx < 0) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  const current = posts[idx];
  const slug = slugify(body.slug || current.slug);
  if (!slug) {
    return NextResponse.json({ error: "Bad slug." }, { status: 400 });
  }
  if (posts.some((p) => p.slug === slug && p.id !== current.id)) {
    return NextResponse.json({ error: "Slug already used." }, { status: 400 });
  }
  const next: WritingPost = {
    ...current,
    title: (body.title ?? current.title).trim(),
    meta: (body.meta ?? current.meta).trim(),
    excerpt: (body.excerpt ?? current.excerpt).trim(),
    externalUrl: (body.externalUrl ?? current.externalUrl).trim(),
    body: body.body ?? current.body,
    publishedAt: body.publishedAt ?? current.publishedAt,
    featuredOnHome:
      body.featuredOnHome !== undefined
        ? Boolean(body.featuredOnHome)
        : current.featuredOnHome,
    published:
      body.published !== undefined ? Boolean(body.published) : current.published,
    slug,
  };
  let updated = posts.map((p) => (p.id === next.id ? next : p));
  if (next.featuredOnHome) updated = withFeaturedCap(updated, next.id);
  const result = await saveWriting(updated);
  return NextResponse.json({ post: next, persistence: result.mode });
}

export async function DELETE(req: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }
  const posts = await loadWriting();
  const updated = posts.filter((p) => p.id !== id);
  const result = await saveWriting(updated);
  return NextResponse.json({ ok: true, persistence: result.mode });
}
