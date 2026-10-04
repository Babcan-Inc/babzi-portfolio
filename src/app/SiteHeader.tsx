"use client";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark">Babzi.xyz</a>
      <nav><a href="#proof">Research</a><a href="/work">Writings</a><a href="/services">Scope</a><span className="header-signal" aria-hidden="true" /></nav>
    </header>
  );
}
