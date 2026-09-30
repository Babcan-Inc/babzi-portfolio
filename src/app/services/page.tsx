import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work with BABZI",
  description:
    "Scoped research and design reviews for protocol incentives, governance, and agent economies.",
  openGraph: {
    title: "Work with BABZI",
    description:
      "Scoped research and design reviews for protocol incentives, governance, and agent economies.",
    url: "https://www.babzi.xyz/services",
  },
};

const services = [
  {
    name: "Focused Research Memo",
    price: "$75",
    scope: "One focused question.",
    detail:
      "A concise research memo with the relevant findings, evidence, and design questions. Best when you already know the specific issue you want examined.",
  },
  {
    name: "Protocol Design Review",
    price: "$150",
    scope: "One mechanism or design area in context.",
    detail:
      "A structured review of how the mechanism works, what behaviour it rewards, where the assumptions sit, and what risks or questions deserve attention.",
  },
  {
    name: "Deep Design Review",
    price: "$250",
    scope: "Multiple connected mechanisms.",
    detail:
      "A deeper review when incentives, reputation, governance, token design, or other mechanisms interact and need to be examined as one system.",
  },
  {
    name: "Custom Research",
    price: "$300+",
    scope: "Broader or more involved work.",
    detail:
      "For work that falls outside the defined reviews. Scope, timing, and price are agreed before the work starts.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell relative min-h-screen">
      <div className="mx-auto max-w-[680px] px-5 pb-28 pt-3 sm:px-8 sm:pt-4">
        <header className="mb-12 flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-4 sm:mb-16">
          <Link href="/" className="font-display text-[1.55rem] tracking-tight text-[var(--ink)]">
            BABZI
          </Link>
          <Link href="/" className="text-[12.5px] text-[var(--muted)] transition hover:text-[var(--ink)]">
            Home
          </Link>
        </header>

        <section className="mb-12">
          <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
            Work with BABZI
          </p>
          <h1 className="font-display text-[2rem] tracking-tight sm:text-[2.35rem]">
            Scoped research and design work.
          </h1>
          <p className="mt-4 max-w-[36rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
            The work is intentionally scoped. Start with the question or mechanism you need examined. Broader work is priced after the scope is clear.
          </p>
        </section>

        <section>
          <ul className="border-y border-[var(--line)]">
            {services.map((service) => (
              <li key={service.name} className="border-b border-[var(--line)] py-7 last:border-b-0">
                <div className="flex items-baseline justify-between gap-5">
                  <h2 className="font-display text-[1.35rem] tracking-tight text-[var(--ink)]">
                    {service.name}
                  </h2>
                  <p className="shrink-0 text-[14px] font-medium text-[var(--accent)]">
                    {service.price}
                  </p>
                </div>
                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                  {service.scope}
                </p>
                <p className="mt-3 max-w-[38rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
                  {service.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-7 sm:px-7">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            Terms
          </p>
          <ul className="space-y-2 text-[14px] leading-relaxed text-[var(--muted)]">
            <li>Payment is in cash before the work starts.</li>
            <li>Timing is agreed with the scope before work begins.</li>
            <li>Implementation, retainers, and full token model rebuilds are separate scopes.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-[1.5rem] tracking-tight">Start with the question.</h2>
          <p className="mt-3 max-w-[34rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
            Send the mechanism, the question, and any material that matters. I will confirm the scope before work begins.
          </p>
          <p className="mt-5">
            <a href="mailto:babziweb3@gmail.com" className="text-[13px] font-medium text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-[5px]">
              Email BABZI
            </a>
          </p>
        </section>

        <footer className="mt-14 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
          <p>© 2026 BABZI</p>
        </footer>
      </div>
    </main>
  );
}
