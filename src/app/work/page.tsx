import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../Reveal";
import { publishedPosts, hrefFor } from "@/lib/writing";
import { loadWriting } from "@/lib/writingStore";

export const metadata: Metadata = {
  title: "Writings · Babzi.xyz",
  description: "Research notes and design proposals on protocol incentives, governance, token design, and agentic economies.",
};

export default async function WorkPage() {
  const posts = publishedPosts(await loadWriting());
  return (
    <main className="site-shell min-h-screen">
      <div className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-8 lg:px-10">
        <header className="site-header"><Link href="/" className="wordmark">Babzi.xyz</Link><nav><Link href="/#proof">Research</Link><Link href="/work">Writings</Link><Link href="/services">Scope</Link><span className="header-signal" /></nav></header>
        <Reveal eager>
          <section className="hero-section" style={{minHeight:"auto",gridTemplateColumns:"1fr",paddingBottom:"58px"}}>
            <div className="hero-copy">
              <p className="eyebrow">Archive · Research notes</p>
              <h1 className="hero-title" style={{maxWidth:"760px"}}>Writings that examine how systems make behaviour profitable.</h1>
              <p className="hero-subtitle">The home page is the short version. This is the full shelf: observations, protocol reads, frameworks, and design notes.</p>
            </div>
          </section>
        </Reveal>
        <div className="section-rule" />
        <Reveal>
          <section className="section-block">
            <div className="section-heading-row"><h2 className="section-title">All writings</h2><span className="section-note">{posts.length} published</span></div>
            <div className="research-grid">
              {posts.map(item => {
                const href=hrefFor(item); const external=href.startsWith("http");
                return <article className="research-card" key={item.id}><a className="research-card-link" href={href} {...(external?{target:"_blank",rel:"noreferrer"}:{})}><div className="research-card-body" style={{minHeight:"220px"}}><div className="research-meta"><span>{item.meta}</span><span>Research</span></div><h3>{item.title}</h3><p>{item.excerpt}</p><span className="arrow">↗</span></div></a></article>
              })}
            </div>
          </section>
        </Reveal>
        <footer className="site-footer"><span>Babzi.xyz</span><div><Link href="/">Home</Link><a href="https://x.com/Babzi_web3" target="_blank" rel="noreferrer">X</a></div></footer>
      </div>
    </main>
  );
}
