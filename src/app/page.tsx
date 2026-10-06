import SiteHeader from "./SiteHeader";
import CursorTrace from "./CursorTrace";
import Link from "next/link";
import Reveal from "./Reveal";
import { homeFeatured, hrefFor } from "@/lib/writing";
import { loadWriting } from "@/lib/writingStore";

const research = [
  { label: "01 / Protocol read", name: "APYX", title: "The actor the table is paying for", text: "A detail read of the incentive surface, including the gap between what the documentation says and what the interface makes legible.", href: "/work/the-actor-the-table-is-paying-for", visual: "apyx" },
  { label: "02 / Field test", name: "Vocdoni / DaVinci", title: "When real constraints expose assumptions in the deck", text: "I tested products from both the parent organisation and its DaVinci build path under ordinary infrastructure constraints.", href: "https://paragraph.com/@babziweb3%40gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened", visual: "vocdoni" },
  { label: "03 / Framework", name: "Canopy", title: "Progressive Tokenization for Canopy", text: "A public framework for progressive sovereignty and the point where an economy should graduate into a tokenized system.", href: "https://x.com/Its_Babzi/status/2077252115513131290", visual: "canopy" },
  { label: "04 / Design note", name: "Polymarket", title: "Polymarket $POLY design note", text: "A public design note looking at the incentive surface around a new token and what the mechanism makes worth doing.", href: "https://x.com/Its_Babzi/status/2075075380470280507", visual: "polymarket" },
];

const interventions = [
  { name: "Oarcoin", text: "Governance design proposal and tokenomics work, helping formalize the whitepaper so its structure matches the project’s philosophy." },
  { name: "PIM Protocol", text: "Tokenomics review used to shape incentive design. Past engagement, not an ongoing retainer." },
];

function EvidenceVisual({ type }: { type: string }) {
  if (type === "vocdoni") {
    return (
      <div className="evidence-visual evidence-grid">
        <div className="evidence-logo-row">
          <img src="/vocdoni.svg" alt="Vocdoni" className="protocol-logo" />
          <span>Vocdoni</span><span className="evidence-separator">/</span>
          <img src="/davinci.svg" alt="DaVinci" className="protocol-logo protocol-logo-small" />
          <span>DaVinci</span>
        </div>
        <div className="field-map"><span className="map-dot" /><span className="map-line map-line-one" /><span className="map-line map-line-two" /><span className="map-label">LAGOS / 4G</span></div>
      </div>
    );
  }
  const mark = type === "apyx" ? "APYX" : type === "canopy" ? "CANOPY" : "POLY";
  const caption = type === "apyx" ? "incentives / points / exit" : type === "canopy" ? "progressive sovereignty" : "incentive surface";
  return <div className={"evidence-visual evidence-" + type}><span className="evidence-kicker">FIELD NOTE</span><span className="evidence-mark">{mark}</span><span className="evidence-rule" /><span className="evidence-caption">{caption}</span></div>;
}

export default async function Home() {
  const posts = await loadWriting();
  const featured = homeFeatured(posts);

  return (
    <main id="top" className="site-shell">
      <CursorTrace />
      <div className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-8 lg:px-10">
        <SiteHeader />
        <Reveal eager>
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Protocol incentives · Governance · Token design · Agentic economies</p>
              <h1 className="hero-title">The economy receives the behaviour it makes profitable.</h1>
              <p className="hero-subtitle"><span>I stress test that system.</span> Actors, rewards, and the points where they split, especially when machines become actors.</p>
            </div>
            <div className="hero-evidence" aria-hidden="true">
              <div className="hero-texture" /><div className="hero-orbit" /><div className="hero-point" />
              <div className="hero-path hero-path-one" /><div className="hero-path hero-path-two" />
              <div className="hero-note">REAL INCENTIVES.<br />REAL PARTICIPANTS.<br />REAL BEHAVIOUR.</div><div className="hero-index">01 — 04</div>
            </div>
          </section>
        </Reveal>
        <div className="section-rule" />
        <Reveal>
          <section id="method" className="section-block scroll-mt-24">
            <div className="section-heading-row"><h2 className="section-title">How I intervene</h2><span className="section-index">01</span></div>
            <div className="method-grid">
              {[["01","Actors","Who can act, what they can optimize, and who the system fails to account for."],["02","Rewards","What the system makes worth doing, and what participants learn to optimize."],["03","Failure modes","Where those incentives break when actors behave rationally under pressure."]].map(([n,title,text]) => <article className="method-item" key={n}><span className="method-number">{n}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>
        </Reveal>
        <div className="section-rule" />
        <Reveal>
          <section id="proof" className="section-block scroll-mt-24">
            <div className="section-heading-row"><h2 className="section-title">Selected research</h2><span className="section-note">Independent protocol reads</span></div>
            <div className="research-grid">
              {research.map((item) => {
                const external = item.href.startsWith("http");
                return <article className="research-card" key={item.name}><a href={item.href} {...(external ? {target:"_blank",rel:"noreferrer"} : {})} className="research-card-link"><EvidenceVisual type={item.visual} /><div className="research-card-body"><div className="research-meta"><span>{item.label}</span><span>{item.name}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className="arrow">↗</span></div></a></article>;
              })}
            </div>
          </section>
        </Reveal>
        <div className="section-rule" />
        <Reveal>
          <section className="section-block writings-section">
            <div className="section-heading-row"><h2 className="section-title">Writings</h2><Link href="/work" className="section-link">View all ↗</Link></div>
            <div className="writing-grid">
              {featured.slice(0,3).map((item) => { const href=hrefFor(item); const external=href.startsWith("http"); return <a key={item.id} href={href} {...(external ? {target:"_blank",rel:"noreferrer"} : {})} className="writing-card"><span>{item.meta}</span><h3>{item.title}</h3><p>{item.excerpt}</p><span className="writing-arrow">↗</span></a>; })}
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="section-block interventions-section">
            <div className="section-heading-row"><h2 className="section-title">Interventions</h2><span className="section-note">Applied work</span></div>
            <div className="intervention-grid">{interventions.map((item) => <article className="intervention-card" key={item.name}><h3>{item.name}</h3><p>{item.text}</p></article>)}</div>
          </section>
        </Reveal>
        <div className="section-rule" />
        <Reveal>
          <section id="offer" className="cta-section scroll-mt-24"><div><p className="eyebrow">Need this applied to your protocol?</p><h2>Let’s talk.</h2></div><Link href="/services" className="cta-link">Scope, pricing and terms ↗</Link></section>
        </Reveal>
        <footer className="site-footer"><span>Babzi.xyz</span><div><a href="https://x.com/Its_Babzi" target="_blank" rel="noreferrer">X</a><a href="mailto:babziweb3@gmail.com">Email</a></div></footer>
      </div>
    </main>
  );
}
