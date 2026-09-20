import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { publishedPosts } from "@/lib/writing";
import { loadWriting } from "@/lib/writingStore";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = publishedPosts(await loadWriting());
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found · BABZI" };
  return {
    title: `${post.title} · BABZI`,
    description: post.excerpt || post.meta,
    openGraph: {
      title: `${post.title} · BABZI`,
      description: post.excerpt || post.meta,
      url: `https://www.babzi.xyz/work/${post.slug}`,
    },
  };
}

export default async function WritingSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const posts = publishedPosts(await loadWriting());
  const post = posts.find((p) => p.slug === slug);

  // Prefer on-site body when visiting the slug and body exists
  if (!post || !post.body.trim()) {
    notFound();
  }

  const html = await marked.parse(post.body);

  return (
    <main id="top" className="page-shell relative">
      <div className="mx-auto max-w-[680px] px-5 pb-28 pt-3 sm:px-8 sm:pt-4">
        <header className="mb-12 flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-4 sm:mb-16">
          <Link
            href="/"
            className="font-display text-[1.55rem] tracking-tight text-[var(--ink)]"
          >
            BABZI
          </Link>
          <Link
            href="/work"
            className="text-[12.5px] text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            Writings
          </Link>
        </header>

        <article>
          <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
            {post.meta}
          </p>
          <h1 className="font-display text-[2rem] tracking-tight sm:text-[2.35rem]">
            {post.title}
          </h1>
          {post.publishedAt ? (
            <p className="mt-3 text-[12px] text-[var(--muted)]">{post.publishedAt}</p>
          ) : null}
          <div
            className="writing-body mt-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <p className="mt-12 text-[13px]">
          <Link
            href="/work"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-[5px] hover:decoration-[var(--accent)]"
          >
            More writings
          </Link>
        </p>

        <footer className="mt-14 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
          <p>© 2026 BABZI</p>
        </footer>
      </div>
    </main>
  );
}
