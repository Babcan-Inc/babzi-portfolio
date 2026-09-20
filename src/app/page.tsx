import SiteHeader from "./SiteHeader";

const stressTests = [
  {
    num: "01",
    kicker: "Field stress test",
    title: "When real constraints expose assumptions in the deck",
    excerpt:
      "Most digital voting tools do not fail in theory. They fail when ordinary infrastructure meets product assumptions. Invited by Vocdoni, I tested three surfaces from Lagos on ordinary Android 4G: one production path, two DAVINCI MVPs. Wallet friction, NFC assumptions, and silent exclusion showed up as design, not bad luck.",
    href: "https://paragraph.com/@babziweb3%40gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened",
    cta: "Read the Vocdoni report",
  },
  {
    num: "02",
    kicker: "Public framework",
    title: "Progressive Tokenization for Canopy",
    excerpt:
      "Public proposal. Progressive Sovereignty raised the next question sovereign appchains face: how nested economies unlock ownership without forcing a premature token. Two intentional paths, Builder and Sovereign, so graduation is designed, not improvised.",
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
    <main id="top" className="page-shell relative">
      <div className="mx-auto max-w-[680px] px-5 pb-28 pt-3 sm:px-8 sm:pt-4">
        <SiteHeader />

        {/* Thesis */}
        <section className="mb-16 sm:mb-24">
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
            A written memo on your incentive surface. Actors, rewards, and failure modes. Built for founders who need judgment before they lock emissions, points, or governance.
          </p>

          <div className="mt-8 max-w-[36rem] space-y-6">
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                You receive
              </p>
              <ul className="space-y-2 text-[14.5px] leading-relaxed text-[var(--muted)]">
                <li>A short memo that maps who can act, what the system pays for, and where it breaks</li>
                <li>Concrete failure modes tied to your mechanism, not generic tokenomics advice</li>
                <li>Clear recommendations on what to change, what to leave, and what to test next</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                Out of scope for this review
              </p>
              <ul className="space-y-2 text-[14.5px] leading-relaxed text-[var(--muted)]">
                <li>Owning or rebuilding the full token model</li>
                <li>Retainer or implementation unless scoped separately</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                Timing and terms
              </p>
              <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">
                Usually five to seven days from a clean brief. Paid in cash once we agree, before the work starts.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                How to start
              </p>
              <p className="text-[14.5px] leading-relaxed text-[var(--muted)]">
                Send the mechanism and the question you want answered. If points, vaults, or governance are pulling apart, say so.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-8 sm:px-8">
          <h2 className="font-display text-[1.45rem] tracking-tight">Contact</h2>
          <p className="mt-4 max-w-[32rem] text-[14.5px] leading-relaxed text-[var(--muted)]">
            Email, X, or Telegram. Start from the offer above if you already know the mechanism and the question.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href="mailto:babziweb3@gmail.com"
              aria-label="Email BABZI"
              className="text-[var(--accent)] transition hover:opacity-80"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h12.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H5.75A2.25 2.25 0 0 1 3.5 17.25V6.75Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://x.com/Babzi_web3"
              target="_blank"
              rel="noreferrer"
              aria-label="BABZI on X"
              className="text-[var(--accent)] transition hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.894L2.25 2.25h6.993l4.263 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a
              href="https://t.me/its_BABZI"
              target="_blank"
              rel="noreferrer"
              aria-label="BABZI on Telegram"
              className="text-[var(--accent)] transition hover:opacity-80"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </section>

        <footer className="mt-14 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--muted)]">
          <p>© 2026 BABZI</p>
        </footer>
      </div>
    </main>
  );
}
