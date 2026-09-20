"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { WritingPost } from "@/lib/writing";

const emptyForm = {
  id: "",
  slug: "",
  title: "",
  meta: "Note",
  excerpt: "",
  externalUrl: "",
  body: "",
  publishedAt: new Date().toISOString().slice(0, 10),
  featuredOnHome: false,
  published: true,
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [persistence, setPersistence] = useState("local");
  const [posts, setPosts] = useState<WritingPost[]>([]);
  const [form, setForm] = useState({ ...emptyForm });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const refreshSession = useCallback(async () => {
    const res = await fetch("/api/admin/session");
    const data = await res.json();
    setAuthed(Boolean(data.ok));
    if (data.persistence) setPersistence(data.persistence);
    setChecking(false);
  }, []);

  const loadPosts = useCallback(async () => {
    const res = await fetch("/api/admin/posts");
    if (!res.ok) return;
    const data = await res.json();
    setPosts(data.posts || []);
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  useEffect(() => {
    if (authed) loadPosts();
  }, [authed, loadPosts]);

  async function login(e: FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
      setPassword("");
      setAuthed(true);
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setPosts([]);
    setForm({ ...emptyForm });
  }

  function edit(post: WritingPost) {
    setForm({
      id: post.id,
      slug: post.slug,
      title: post.title,
      meta: post.meta,
      excerpt: post.excerpt,
      externalUrl: post.externalUrl,
      body: post.body,
      publishedAt: post.publishedAt,
      featuredOnHome: post.featuredOnHome,
      published: post.published,
    });
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setForm({ ...emptyForm, publishedAt: new Date().toISOString().slice(0, 10) });
    setStatus("");
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("");
    setBusy(true);
    try {
      const updating = Boolean(form.id);
      const res = await fetch("/api/admin/posts", {
        method: updating ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Save failed");
        return;
      }
      setStatus(updating ? "Updated." : "Saved to Writings.");
      if (data.persistence) setPersistence(data.persistence);
      resetForm();
      await loadPosts();
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this piece?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/posts?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Delete failed");
        return;
      }
      if (form.id === id) resetForm();
      await loadPosts();
    } finally {
      setBusy(false);
    }
  }

  if (checking) {
    return (
      <main className="page-shell min-h-screen px-5 py-16 text-[var(--muted)]">
        Checking session…
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="page-shell min-h-screen px-5 py-16">
        <div className="mx-auto max-w-sm">
          <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
            Admin
          </p>
          <h1 className="font-display text-3xl text-[var(--ink)]">Writings desk</h1>
          <p className="mt-3 text-[14px] text-[var(--muted)]">
            Publish to Babzi.xyz Writings. Home stays at two featured pieces.
          </p>
          <form onSubmit={login} className="mt-8 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2.5 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--accent)]"
              required
            />
            {error ? <p className="text-[13px] text-red-700">{error}</p> : null}
            <button
              type="submit"
              disabled={busy}
              className="w-full bg-[var(--accent)] px-3 py-2.5 text-[13px] font-medium text-[var(--bg)] disabled:opacity-60"
            >
              Enter
            </button>
          </form>
          <p className="mt-6 text-[12px] text-[var(--muted)]">
            <Link href="/" className="underline underline-offset-4">
              Back to home
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-[720px] px-5 pb-24 pt-6 sm:px-8">
        <header className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
              Admin
            </p>
            <h1 className="font-display text-2xl text-[var(--ink)]">Writings desk</h1>
          </div>
          <div className="flex items-center gap-4 text-[12.5px]">
            <span className="text-[var(--muted)]">Save mode: {persistence}</span>
            <Link href="/work" className="text-[var(--ink)] underline underline-offset-4">
              View Writings
            </Link>
            <button
              type="button"
              onClick={logout}
              className="text-[var(--muted)] underline underline-offset-4"
            >
              Log out
            </button>
          </div>
        </header>

        <form onSubmit={save} className="mb-14 space-y-4 border border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-6">
          <h2 className="font-display text-xl text-[var(--ink)]">
            {form.id ? "Edit piece" : "New piece"}
          </h2>
          <Field label="Title">
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
              required
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Slug">
              <input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className={inputClass}
                placeholder="auto from title if empty"
              />
            </Field>
            <Field label="Meta label">
              <input
                value={form.meta}
                onChange={(e) => setForm({ ...form, meta: e.target.value })}
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="Excerpt">
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className={inputClass + " min-h-[72px]"}
            />
          </Field>
          <Field label="External URL (optional, for X or Paragraph)">
            <input
              value={form.externalUrl}
              onChange={(e) => setForm({ ...form, externalUrl: e.target.value })}
              className={inputClass}
              placeholder="Leave blank to publish body on Babzi.xyz"
            />
          </Field>
          <Field label="Body (markdown, used when no external URL)">
            <textarea
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className={inputClass + " min-h-[180px] font-mono text-[13px]"}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Date">
              <input
                type="date"
                value={form.publishedAt}
                onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
                className={inputClass}
              />
            </Field>
            <label className="flex items-end gap-2 pb-2 text-[13px] text-[var(--ink)]">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm({ ...form, published: e.target.checked })}
              />
              Published
            </label>
            <label className="flex items-end gap-2 pb-2 text-[13px] text-[var(--ink)]">
              <input
                type="checkbox"
                checked={form.featuredOnHome}
                onChange={(e) =>
                  setForm({ ...form, featuredOnHome: e.target.checked })
                }
              />
              Feature on home (max 2)
            </label>
          </div>
          {error ? <p className="text-[13px] text-red-700">{error}</p> : null}
          {status ? <p className="text-[13px] text-[var(--accent)]">{status}</p> : null}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              disabled={busy}
              className="bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-[var(--bg)] disabled:opacity-60"
            >
              {form.id ? "Save changes" : "Publish"}
            </button>
            {form.id ? (
              <button
                type="button"
                onClick={resetForm}
                className="border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--ink)]"
              >
                New piece
              </button>
            ) : null}
          </div>
          {persistence === "local" ? (
            <p className="pt-2 text-[12px] text-[var(--muted)]">
              Local save mode. On Vercel, set ADMIN_PASSWORD and GITHUB_TOKEN so publishes commit to the repo and stay live.
            </p>
          ) : null}
        </form>

        <section>
          <h2 className="mb-4 font-display text-xl text-[var(--ink)]">Shelf</h2>
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-[15px] font-medium text-[var(--ink)]">
                    {post.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                    {post.meta}
                    {post.featuredOnHome ? " · home" : ""}
                    {post.published ? "" : " · draft"}
                  </p>
                </div>
                <div className="flex gap-3 text-[12.5px]">
                  <button
                    type="button"
                    onClick={() => edit(post)}
                    className="text-[var(--accent)] underline underline-offset-4"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(post.id)}
                    className="text-[var(--muted)] underline underline-offset-4"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--accent)]";
