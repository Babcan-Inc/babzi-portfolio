import type { Metadata } from "next";
import Link from "next/link";
import { publicWork } from "@/content/publicWork";
import Reveal from "../Reveal";

export const metadata: Metadata = {
  title: "Public work — BABZI",
  description:
    "Public writing and proposals on protocol incentives, governance, and agent economies.",
  openGraph: {
    title: "Public work — BABZI",
    description:
      "Public writing and proposals on protocol incentives, governance, and agent economies.",
    url: "https://www.babzi.xyz/work",
  },
};

export default function WorkPage() {
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
            href="/"
            className="text-[12.5px] text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            Home
          </Link>
        </header>

        <Reveal eager>
          <section className="mb-10 sm:mb-12">
            <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
              Archive
            </p>
            <h1 className="font-display text-[2rem] tracking-tight sm:text-[2.35rem]">
              Public work
            </h1>
            <p className="mt-4 max-w-[34rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
              Writing and proposals on protocol incentives, governance, and agent economies. The home page stays short on purpose. This is the full shelf.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <ul className="border-y border-[var(--line)]">
            {publicWork.map((item) => (
              <li
                key={item.href}
                className="border-b border-[var(--line)] last:border-b-0"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-1 py-4 transition hover:bg-[var(--bg-elevated)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-[15px] font-medium text-[var(--ink)]">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                    {item.meta}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-10 text-[13px] text-[var(--muted)]">
          <Link
            href="/#offer"
            className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[5px] hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            Protocol Incentive and Actor Review
          </Link>
        </p>

        <footer className="mt-14 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
          <p>© 2026 BABZI</p>
        </footer>
      </div>
    </main>
  );
}
