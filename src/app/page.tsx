import SiteHeader from "./SiteHeader";

const stressTests = [
  {
    num: "01",
    kicker: "Field stress test",
    title: "Stress testing digital voting infrastructure under real constraints",
    excerpt:
      "Most digital voting tools do not fail in theory. They fail in environments like mine. From Lagos on ordinary Android 4G, invited by Vocdoni to test three surfaces: one production path, two DAVINCI MVPs. Wallet friction, NFC assumptions, and silent exclusion showed up as design, not bad luck.",
    href: "https://paragraph.com/@babziweb3@gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened",
    cta: "Read the Vocdoni report",
  },
  {
    num: "02",
    kicker: "Public framework",
    title: "Progressive Tokenization for Canopy",
    excerpt:
      "Progressive Sovereignty raised the next question sovereign appchains face: how nested economies unlock ownership without forcing a premature token. Two intentional paths, Builder and Sovereign, so graduation is designed, not improvised.",
    href: "https://x.com/Babzi_web3/status/2077252115513131290",
    cta: "Open the Canopy thread",
  },
];

const index = [
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

const interventions = [
  {
    name: "Oarcoin",
    text: "Submitted a 32 page governance design proposal, still under review. Wrote the tokenomics and helped formalize the whitepaper so structure matches their philosophy.",
  },
  {
    name: "PIM Protocol",
    text: "Delivered a tokenomics review used to shape their incentive design. Past engagement, not an ongoing retainer.",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative">
      <div className="brand-bar" aria-hidden="true" />
      <div className="mx-auto max-w-[680px] px-5 pb-28 pt-3 sm:px-8 sm:pt-4">
        <SiteHeader />

        {/* Thesis */}
        <section className="hero-field mb-16 -mx-5 px-5 py-10 sm:mb-24 sm:-mx-8 sm:px-8 sm:py-12">
          <p className="banner-whisper">Designing systems that last.</p>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Governance · Token design · Agentic economies
          </p>
          <h1 className="font-display text-[2.05rem] leading-[1.12] tracking-[-0.015em] text-[var(--ink)] sm:text-[2.85rem] sm:leading-[1.08]">
            I design systems for how economies reward behaviour, including when agents become actors.
          </h1>
          <p className="mt-6 max-w-[36rem] text-[15px] leading-relaxed text-[var(--muted)] sm:text-[15.5px]">
            Governance, tokens, and incentives are parts of one system. I stress test how that system behaves under pressure, especially when agents enter economies built for humans, or when real constraints expose the assumptions in the deck.
          </p>
        </section>

        <div className="rule mb-14 sm:mb-20" />

        {/* Method */}
        <section id="method" className="mb-16 scroll-mt-24 sm:mb-24">
          <h2 className="font-display mb-8 text-[1.55rem] tracking-tight sm:text-[1.7rem]">
            How I intervene
          </h2>
          <ol className="space-y-6">
            {[
              {
                n: "01",
                t: "Actors",
                d: "Who can act, who is pretended to be the same actor, and who is invisible in the model.",
              },
              {
                n: "02",
                t: "Rewards",
                d: "What the token, points, or reputation actually pay for, and what behaviour that buys when it works.",
              },
              {
                n: "03",
                t: "Failure modes",
                d: "Where vaults, points, and governance pull apart, and what breaks under stress or thin infrastructure.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_7rem_1fr] sm:gap-6"
              >
                <span className="font-display text-[1.1rem] text-[var(--accent)]">
                  {step.n}
                </span>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[var(--ink)]">
                  {step.t}
                </span>
                <p className="col-span-2 text-[14.5px] leading-relaxed text-[var(--muted)] sm:col-span-1">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="rule mb-14 sm:mb-20" />

        {/* Proof */}
        <section id="proof" className="mb-16 scroll-mt-24 sm:mb-24">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-[1.55rem] tracking-tight sm:text-[1.7rem]">
              Stress tests
            </h2>
            <p className="pb-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Two deep cuts
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            {stressTests.map((item) => (
              <article key={item.num}>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-display text-[1.05rem] text-[var(--accent)]">
                    {item.num}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item.kicker}
                  </span>
                </div>
                <h3 className="font-display text-[1.4rem] leading-snug tracking-tight sm:text-[1.65rem]">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--accent)]"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="pull mt-5 max-w-[38rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
                  {item.excerpt}
                </p>
                <p className="mt-5">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[5px] hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                  >
                    {item.cta}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Index */}
        <section className="mb-16 sm:mb-24">
          <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
            Also public
          </h2>
          <ul className="border-y border-[var(--line)]">
            {index.map((item) => (
              <li key={item.title} className="border-b border-[var(--line)] last:border-b-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-1 py-3.5 transition hover:bg-[var(--bg-elevated)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-[14.5px] font-medium text-[var(--ink)]">
                    {item.title}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                    {item.meta}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Interventions */}
        <section className="mb-16 sm:mb-24">
          <h2 className="font-display mb-8 text-[1.55rem] tracking-tight sm:text-[1.7rem]">
            Interventions
          </h2>
          <div className="space-y-8">
            {interventions.map((item) => (
              <div
                key={item.name}
                className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-8"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--accent)]">
                  {item.name}
                </p>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule mb-14 sm:mb-20" />

        {/* Offer */}
        <section id="offer" className="mb-16 scroll-mt-24 sm:mb-24">
          <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            Scoped work
          </p>
          <h2 className="font-display text-[1.55rem] tracking-tight sm:text-[1.85rem]">
            Protocol Incentive and Actor Review
          </h2>
          <p className="mt-5 max-w-[36rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
            A written memo on your incentive surface: actors, rewards, and failure modes. Usually five to seven days. Cash. Not full token model ownership. Clear judgment on the rules and goals of the system.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-8 sm:px-8">
          <h2 className="font-display text-[1.45rem] tracking-tight">Contact</h2>
          <p className="mt-4 max-w-[32rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
            Send the mechanism and the question you want answered. If points, vaults, or governance are pulling in different directions, say so.
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

        <footer className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
          <p>BABZI · Lagos</p>
          <p>Incentive instrument</p>
        </footer>
      </div>
    </main>
  );
}
