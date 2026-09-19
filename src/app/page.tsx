const featured = [
  {
    kicker: "Field research · 2026",
    title: "I tested three digital voting tools from Nigeria",
    excerpt:
      "Most digital voting tools do not fail in theory. They fail in environments like mine. Invited by Vocdoni to stress test three surfaces from Lagos on ordinary Android 4G: one production path, two DAVINCI MVPs.",
    href: "https://paragraph.com/@babziweb3@gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened",
    linkLabel: "Read on Paragraph",
  },
  {
    kicker: "Public proposal · Canopy",
    title: "Progressive Tokenization",
    excerpt:
      "Reading Progressive Sovereignty raised the next question sovereign appchains face: how nested economies unlock ownership without forcing a premature token. A public framework for intentional graduation paths.",
    href: "https://x.com/Babzi_web3/status/2077252115513131290",
    linkLabel: "Open thread",
  },
];

const moreWork = [
  {
    title: "Polymarket $POLY design note",
    meta: "Public proposal",
    href: "https://x.com/Babzi_web3/status/2075075380470280507",
  },
  {
    title: "How to Build an Economy for Autonomous Agents",
    meta: "Framework",
    href: "https://x.com/Babzi_web3/status/2098649769748926551",
  },
];

const engagements = [
  {
    title: "Oarcoin",
    blurb:
      "Submitted a 32 page governance design proposal, still under review. Wrote the tokenomics and helped formalize the whitepaper so structure matches their philosophy.",
  },
  {
    title: "PIM Protocol",
    blurb:
      "Delivered a tokenomics review used to shape their incentive design. Past engagement, not an ongoing retainer.",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-[720px] px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
        <header className="mb-14 flex items-baseline justify-between gap-4 sm:mb-20">
          <a href="/" className="font-display text-2xl tracking-tight text-[var(--ink)]">
            BABZI
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[13px] text-[var(--muted)]">
            <a href="#writing" className="transition hover:text-[var(--ink)]">
              Writing
            </a>
            <a href="#work" className="transition hover:text-[var(--ink)]">
              Work
            </a>
            <a href="#offer" className="transition hover:text-[var(--ink)]">
              Offer
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </nav>
        </header>

        <section className="mb-16 sm:mb-24">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            Protocol research
          </p>
          <h1 className="font-display max-w-[18ch] text-[2.15rem] leading-[1.12] tracking-[-0.01em] text-[var(--ink)] sm:text-[3.15rem] sm:leading-[1.08]">
            Designing the incentives behind protocol economies.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[15.5px] leading-relaxed text-[var(--muted)] sm:text-base">
            I write scoped reviews of who a protocol rewards, what behaviour that buys, and where the design breaks under stress. Founders get a clear memo, not theatre.
          </p>
          <p className="mt-6 text-[13.5px] text-[var(--muted)]">
            <a
              href="mailto:babziweb3@gmail.com"
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              babziweb3@gmail.com
            </a>
            <span className="mx-2 text-[var(--line)]">/</span>
            <a
              href="https://x.com/Babzi_web3"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              @Babzi_web3
            </a>
          </p>
        </section>

        <div className="rule mb-14 sm:mb-20" />

        <section id="writing" className="mb-16 scroll-mt-24 sm:mb-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl tracking-tight sm:text-[1.75rem]">
              Featured writing
            </h2>
            <p className="pb-1 text-[12px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Two pieces
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {featured.map((piece) => (
              <article key={piece.title} className="group">
                <p className="mb-3 text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                  {piece.kicker}
                </p>
                <h3 className="font-display text-[1.45rem] leading-snug tracking-tight sm:text-[1.85rem]">
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[var(--accent)]"
                  >
                    {piece.title}
                  </a>
                </h3>
                <p className="pull mt-5 max-w-[36rem] text-[15px] leading-relaxed text-[var(--muted)]">
                  {piece.excerpt}
                </p>
                <p className="mt-5">
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13.5px] font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[5px] transition hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                  >
                    {piece.linkLabel}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-24">
          <h2 className="mb-6 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
            Also public
          </h2>
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {moreWork.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-1 py-4 transition hover:bg-[var(--bg-elevated)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-1"
                >
                  <span className="text-[15px] font-medium text-[var(--ink)]">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">
                    {item.meta}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="mb-16 scroll-mt-24 sm:mb-24">
          <h2 className="font-display mb-8 text-2xl tracking-tight sm:text-[1.75rem]">
            Selected engagements
          </h2>
          <div className="space-y-8">
            {engagements.map((item) => (
              <div key={item.title} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[var(--accent)]">
                  {item.title}
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                  {item.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule mb-14 sm:mb-20" />

        <section id="offer" className="mb-16 scroll-mt-24 sm:mb-24">
          <p className="mb-3 text-[12px] uppercase tracking-[0.12em] text-[var(--muted)]">
            How to work together
          </p>
          <h2 className="font-display text-[1.65rem] tracking-tight sm:text-[2rem]">
            Protocol Incentive and Actor Review
          </h2>
          <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-[var(--muted)]">
            A written memo on your incentive surface: actors, rewards, failure modes, and what the design produces when points, vaults, or governance pull in different directions. Usually five to seven days. Cash engagement. Not full token model ownership.
          </p>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 rounded-sm bg-[var(--bg-elevated)] px-5 py-8 sm:px-8 sm:py-10"
        >
          <h2 className="font-display text-2xl tracking-tight">Contact</h2>
          <p className="mt-4 max-w-[32rem] text-[15px] leading-relaxed text-[var(--muted)]">
            If you are redesigning incentives, migrating points to a token, or shipping an agent economy with thin economic design, send a short note with the mechanism and the question you want answered.
          </p>
          <p className="mt-6 text-[14px]">
            <a
              href="mailto:babziweb3@gmail.com"
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              babziweb3@gmail.com
            </a>
          </p>
          <p className="mt-2 text-[14px] text-[var(--muted)]">
            <a
              href="https://x.com/Babzi_web3"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
            >
              𝕏 — @Babzi_web3
            </a>
          </p>
        </section>

        <footer className="mt-16 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
          <p>BABZI · Lagos</p>
          <p>Protocol research</p>
        </footer>
      </div>
    </main>
  );
}
