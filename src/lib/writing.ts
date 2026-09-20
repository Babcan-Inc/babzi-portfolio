import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

export type WritingPost = {
  id: string;
  slug: string;
  title: string;
  meta: string;
  excerpt: string;
  /** If set, Writings list links out. If empty and body exists, uses /work/[slug]. */
  externalUrl: string;
  body: string;
  publishedAt: string;
  featuredOnHome: boolean;
  published: boolean;
};

const LOCAL_PATH = path.join(process.cwd(), "content", "writing.json");

function sortPosts(posts: WritingPost[]) {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function readWritingLocal(): WritingPost[] {
  if (!existsSync(LOCAL_PATH)) return [];
  const raw = readFileSync(LOCAL_PATH, "utf8");
  return sortPosts(JSON.parse(raw) as WritingPost[]);
}

export function writeWritingLocal(posts: WritingPost[]) {
  const dir = path.dirname(LOCAL_PATH);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(LOCAL_PATH, JSON.stringify(sortPosts(posts), null, 2) + "\n", "utf8");
}

export function publishedPosts(posts: WritingPost[]) {
  return posts.filter((p) => p.published);
}

export function homeFeatured(posts: WritingPost[]) {
  return publishedPosts(posts).filter((p) => p.featuredOnHome).slice(0, 2);
}

export function hrefFor(post: WritingPost) {
  if (post.externalUrl) return post.externalUrl;
  return `/work/${post.slug}`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Enforce max two featured home posts. */
export function withFeaturedCap(posts: WritingPost[], id?: string): WritingPost[] {
  const featured = posts.filter((p) => p.featuredOnHome);
  if (featured.length <= 2) return posts;
  // Keep the newly featured id plus the newest other featured
  const keep = new Set<string>();
  if (id) keep.add(id);
  for (const p of sortPosts(featured)) {
    if (keep.size >= 2) break;
    keep.add(p.id);
  }
  return posts.map((p) => ({
    ...p,
    featuredOnHome: keep.has(p.id) ? p.featuredOnHome : false,
  }));
}
