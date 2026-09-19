"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "method", label: "Method" },
  { id: "proof", label: "Proof" },
  { id: "offer", label: "Offer" },
  { id: "contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const [active, setActive] = useState<string>("method");

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header sticky top-0 z-40 -mx-5 mb-12 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-5 backdrop-blur-md sm:-mx-8 sm:mb-16 sm:px-8">
      <div className="flex items-baseline justify-between gap-4 py-4">
        <a
          href="#top"
          className="font-display text-[1.55rem] tracking-tight text-[var(--ink)]"
        >
          BABZI
        </a>
        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-[12.5px] text-[var(--muted)]">
          {links.map((link) => {
            const on = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={
                  on
                    ? "font-semibold text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-[6px]"
                    : "transition hover:text-[var(--ink)]"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
