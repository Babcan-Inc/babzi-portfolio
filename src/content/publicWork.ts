export type PublicWork = {
  title: string;
  meta: string;
  href: string;
  /** Show in the home "Also public" strip. Keep at most two. */
  featuredOnHome?: boolean;
};

/** Canonical public shelf. Home shows featured only. Admin will edit this later. */
export const publicWork: PublicWork[] = [
  {
    title: "Polymarket $POLY design note",
    meta: "Public proposal",
    href: "https://x.com/Babzi_web3/status/2075075380470280507",
    featuredOnHome: true,
  },
  {
    title: "How to Build an Economy for Autonomous Agents",
    meta: "Framework",
    href: "https://x.com/Babzi_web3/status/2098649769748926551",
    featuredOnHome: true,
  },
  {
    title: "When real constraints expose assumptions in the deck",
    meta: "Field stress test · Vocdoni",
    href: "https://paragraph.com/@babziweb3%40gmail.com/i-tested-three-digital-voting-tools-from-nigeria-here-is-what-actually-happened",
  },
  {
    title: "Progressive Tokenization for Canopy",
    meta: "Public framework",
    href: "https://x.com/Babzi_web3/status/2077252115513131290",
  },
];

export const homePublicWork = publicWork.filter((w) => w.featuredOnHome);
