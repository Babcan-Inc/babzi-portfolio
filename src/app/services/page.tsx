import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scope · Babzi.xyz",
  description: "Scoped research and design work for protocol incentives, governance, token design, and agentic economies.",
};

const services = [
  {name:"Focused Research Memo",price:"$75",scope:"One focused question.",detail:"A concise memo that answers a defined question with the relevant evidence, implications, and design questions."},
  {name:"Protocol Design Review",price:"$150",scope:"One mechanism or design area.",detail:"A structured review of how the mechanism works, what behaviour it rewards, which actors it assumes, and where the incentive surface can fail."},
  {name:"Deep Design Review",price:"$250",scope:"Multiple connected mechanisms.",detail:"A deeper review when incentives, reputation, governance, token design, or other mechanisms need to be examined as one system."},
  {name:"Custom Research",price:"$300+",scope:"Broader or more involved work.",detail:"For work outside the defined reviews. Scope, timing, and price are agreed before the work starts."},
];

export default function ServicesPage(){
 return <main className="site-shell min-h-screen"><div className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-8 lg:px-10">
  <header className="site-header"><Link href="/" className="wordmark">Babzi.xyz</Link><nav><Link href="/#proof">Research</Link><Link href="/work">Writings</Link><Link href="/services">Scope</Link><span className="header-signal"/></nav></header>
  <section className="hero-section" style={{minHeight:"auto",gridTemplateColumns:"1fr",paddingBottom:"55px"}}>
   <div className="hero-copy"><p className="eyebrow">Scope · Applied work</p><h1 className="hero-title" style={{maxWidth:"720px"}}>Start with the behaviour the system is creating.</h1><p className="hero-subtitle">Commissioned work is scoped through three questions: who can act, what the system rewards, and where rational behaviour can break the design.</p></div>
  </section>
  <div className="section-rule"/>
  <section className="section-block"><div className="method-grid">
   {[["01","Actors","Who can act, what they can observe and optimize, and which actors the design leaves unaccounted for."],["02","Rewards","What the mechanism makes worth doing, including the behaviour participants can rationally learn to optimize."],["03","Failure modes","Where those incentives can produce outcomes the protocol did not intend, especially under pressure or at scale."]].map(([n,t,d])=><article className="method-item" key={n}><span className="method-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
  </div></section>
  <div className="section-rule"/>
  <section className="section-block"><div className="section-heading-row"><h2 className="section-title">Available scopes</h2><span className="section-note">Defined before work begins</span></div>
   <div className="research-grid">{services.map(s=><article className="research-card" key={s.name}><div className="research-card-body" style={{minHeight:"220px"}}><div className="research-meta"><span>{s.scope}</span><span>{s.price}</span></div><h3>{s.name}</h3><p>{s.detail}</p></div></article>)}</div>
  </section>
  <div className="section-rule"/>
  <section className="cta-section"><div><p className="eyebrow">Have a mechanism to stress test?</p><h2>Start with the question.</h2></div><a className="cta-link" href="mailto:babziweb3@gmail.com">Email BABZI ↗</a></section>
  <footer className="site-footer"><span>Babzi.xyz</span><div><Link href="/">Home</Link><a href="https://x.com/Babzi_web3" target="_blank" rel="noreferrer">X</a></div></footer>
 </div></main>
}
