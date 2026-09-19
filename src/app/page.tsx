const publicWork = [
  {
    title: "Canopy Progressive Tokenization",
    blurb:
      "Published proposal on progressive sovereignty and how nested chain economies can unlock ownership without forcing a premature token model.",
    kind: "Public proposal",
    href: "https://x.com/Babzi_web3/status/2077252115513131290",
  },
  {
    title: "Polymarket $POLY design note",
    blurb:
      "Public thread and design proposal on token mechanics for an information market. Stress tested incentives and actor behaviour in the open.",
    kind: "Public proposal",
    href: "https://x.com/Babzi_web3/status/2075075380470280507",
  },
  {
    title: "How to Build an Economy for Autonomous Agents",
    blurb:
      "Implementation framework covering actors, incentives, reputation, governance, economic security, and token architecture for agent economies.",
    kind: "Framework",
    href: "https://x.com/Babzi_web3/status/2098649769748926551",
  },
  {
    title: "Vocdoni voting tools, Lagos stress test",
    blurb:
      "Invited by Vocdoni to test three voting surfaces from Lagos on ordinary Android 4G. One production path, two DAVINCI MVPs. Reported wallet, metadata, NFC, and silent exclusion issues. Public writeup on Paragraph.",
    kind: "Field research",
    href: "https://paragraph.com/@babziweb3@gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened",
  },
];

const engagements = [
  {
    title: "Oarcoin",
    blurb:
      "Submitted a 32 page governance design proposal, still under review. Wrote the tokenomics and helped formalize the whitepaper so structure matches their philosophy.",
    kind: "Governance and token design",
  },
  {
    title: "PIM Protocol",
    blurb:
      "Delivered a tokenomics review used to shape their incentive design. Their tokenomics largely followed that framing. Past engagement; not an ongoing retainer.",
    kind: "Tokenomics review",
  },
];

function WorkCard({
  title,
  blurb,
  kind,
  href,
}: {
  title: string;
  blurb: string;
  kind: string;
  href?: string;
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[0_1px_0_rgba(31,27,23,0.04)] transition hover:border-[#d2c4ae] sm:p-6">
      <p className="label mb-2 text-[var(--accent)]">{kind}</p>
      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base">
        {blurb}
      </p>
      {href ? (
        <p className="mt-4">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            View source
          </a>
        </p>
      ) : null}
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10">
        <header className="mb-12 flex items-start justify-between gap-3 sm:mb-16 sm:items-center sm:gap-4">
          <p className="shrink-0 text-sm font-medium tracking-[0.14em] text-[var(--muted)] sm:tracking-[0.18em]">
            BABZI
          </p>
          <nav className="flex max-w-[70%] flex-wrap items-center justify-end gap-x-3 gap-y-2 text-xs text-[var(--muted)] sm:max-w-none sm:gap-5 sm:text-sm">
            <a href="#work" className="transition hover:text-[var(--text)]">
              Work
            </a>
            <a href="#engagements" className="transition hover:text-[var(--text)]">
              Engagements
            </a>
            <a href="#offer" className="transition hover:text-[var(--text)]">
              Offer
            </a>
            <a href="#contact" className="transition hover:text-[var(--text)]">
              Contact
            </a>
          </nav>
        </header>

        <section className="mb-16 sm:mb-20">
          <p className="label mb-3 text-[var(--accent)] sm:mb-4">
            Research · Token design · Agent economies
          </p>
          <h1 className="max-w-2xl text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[var(--text)] sm:text-4xl sm:leading-tight md:text-5xl">
            Protocol incentives, governance design, and economies for autonomous agents.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-lg">
            I write scoped reviews of who a protocol rewards, what behaviour that buys, and where the design breaks under stress. Founders get a clear memo, not theatre.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:mt-7">
            <a
              href="mailto:babziweb3@gmail.com"
              className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
            >
              babziweb3@gmail.com
            </a>
            <a
              href="https://x.com/Babzi_web3"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              𝕏 @Babzi_web3
            </a>
          </div>
        </section>

        <section id="offer" className="mb-16 scroll-mt-24 sm:mb-20">
          <h2 className="label mb-4 text-[var(--muted)]">What I deliver</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[0_1px_0_rgba(31,27,23,0.04)] sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Protocol Incentive and Actor Review
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base">
              A written memo on your incentive surface: actors, rewards, failure modes, and what the design produces when points, vaults, or governance pull in different directions.
            </p>
            <ul className="mt-6 space-y-3 text-[0.95rem] text-[var(--muted)] sm:text-base">
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

        <section id="work" className="mb-16 scroll-mt-24 sm:mb-20">
          <h2 className="label mb-4 text-[var(--muted)]">Selected public work</h2>
          <div className="space-y-4">
            {publicWork.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="engagements" className="mb-16 scroll-mt-24 sm:mb-20">
          <h2 className="label mb-4 text-[var(--muted)]">Selected engagements</h2>
          <div className="space-y-4">
            {engagements.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="label mb-4 text-[var(--muted)]">Contact</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-5 sm:p-8">
            <p className="max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
              If you are redesigning incentives, migrating points to a token, or shipping an agent economy with thin economic design, send a short note with the mechanism and the question you want answered.
            </p>
            <p className="mt-5 text-sm sm:mt-6">
              <a
                href="mailto:babziweb3@gmail.com"
                className="break-all text-[var(--accent)] underline-offset-4 hover:underline"
              >
                babziweb3@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="https://x.com/Babzi_web3"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
              >
                𝕏 — @Babzi_web3
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-16 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] sm:mt-20">
          <p>BABZI · protocol research</p>
        </footer>
      </div>
    </main>
  );
}
