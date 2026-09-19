const work = [
  {
    title: "Canopy Progressive Tokenization",
    blurb:
      "Published proposal on progressive sovereignty and how nested chain economies can unlock ownership without forcing a premature token model.",
    kind: "Public proposal",
  },
  {
    title: "Polymarket $POLY design note",
    blurb:
      "Public thread and design proposal on token mechanics for an information market. Stress tested incentives and actor behaviour in the open.",
    kind: "Public proposal",
  },
  {
    title: "How to Build an Economy for Autonomous Agents",
    blurb:
      "Implementation framework covering actors, incentives, reputation, governance, economic security, and token architecture for agent economies.",
    kind: "Framework",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-10 sm:px-8">
        <header className="mb-16 flex items-center justify-between gap-4">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--muted)]">
            BABZI
          </p>
          <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
            <a href="#work" className="transition hover:text-[var(--text)]">
              Work
            </a>
            <a href="#offer" className="transition hover:text-[var(--text)]">
              Offer
            </a>
            <a href="#contact" className="transition hover:text-[var(--text)]">
              Contact
            </a>
          </nav>
        </header>

        <section className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Research · Token design · Agent economies
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Protocol incentives, governance design, and economies for autonomous agents.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            I write scoped reviews of who a protocol rewards, what behaviour that buys, and where the design breaks under stress. Founders get a clear memo, not theatre.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:babziweb3@gmail.com"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#0b0c0f] transition hover:brightness-110"
            >
              Email BABZI
            </a>
            <a
              href="https://x.com/Babzi_web3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm text-[var(--text)] transition hover:border-[var(--muted)]"
            >
              𝕏 @Babzi_web3
            </a>
          </div>
        </section>

        <section id="offer" className="mb-20 scroll-mt-24">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            What I deliver
          </h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">
              Protocol Incentive and Actor Review
            </h3>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              A written memo on your incentive surface: actors, rewards, failure modes, and what the design produces when points, vaults, or governance pull in different directions.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--muted)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                Scoped written review, usually five to seven days
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                Actor map and stress notes you can share with founders or a board
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                Cash engagement. Overflow friendly for tokenomics shops
              </li>
            </ul>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Not full token model ownership. Clear written judgment on the incentive layer.
            </p>
          </div>
        </section>

        <section id="work" className="mb-20 scroll-mt-24">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Selected public work
          </h2>
          <div className="space-y-4">
            {work.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[#3a4152]"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                  {item.kind}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{item.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact
          </h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-6 sm:p-8">
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text)]">
              If you are redesigning incentives, migrating points to a token, or shipping an agent economy with thin economic design, send a short note with the mechanism and the question you want answered.
            </p>
            <p className="mt-6">
              <a
                href="mailto:babziweb3@gmail.com"
                className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
              >
                babziweb3@gmail.com
              </a>
            </p>
            <p className="mt-2 text-[var(--muted)]">𝕏 — @Babzi_web3</p>
          </div>
        </section>

        <footer className="mt-20 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <p>BABZI · protocol research</p>
        </footer>
      </div>
    </main>
  );
}
