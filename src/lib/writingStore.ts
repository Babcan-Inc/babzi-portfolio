import {
  readWritingLocal,
  writeWritingLocal,
  type WritingPost,
} from "./writing";

const REPO = process.env.GITHUB_REPO || "Babcan-Inc/babzi-portfolio";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const PATH = "content/writing.json";

async function githubGet(): Promise<{ posts: WritingPost[]; sha: string | null }> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { posts: readWritingLocal(), sha: null };
  }
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${PATH}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 0 },
    },
  );
  if (res.status === 404) return { posts: readWritingLocal(), sha: null };
  if (!res.ok) {
    throw new Error(`GitHub read failed: ${res.status}`);
  }
  const data = (await res.json()) as { content: string; encoding: string; sha: string };
  const json = Buffer.from(data.content, "base64").toString("utf8");
  return { posts: JSON.parse(json) as WritingPost[], sha: data.sha };
}

async function githubPut(posts: WritingPost[], sha: string | null) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    writeWritingLocal(posts);
    return { mode: "local" as const };
  }
  const body = {
    message: "Update Writings from Babzi admin",
    content: Buffer.from(JSON.stringify(posts, null, 2) + "\n").toString("base64"),
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  };
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub write failed: ${res.status} ${text}`);
  }
  // Keep local mirror in sync when possible (local/dev)
  try {
    writeWritingLocal(posts);
  } catch {
    /* read-only filesystem on some hosts */
  }
  return { mode: "github" as const };
}

export async function loadWriting(): Promise<WritingPost[]> {
  const { posts } = await githubGet();
  return posts;
}

export async function saveWriting(posts: WritingPost[]) {
  const { sha } = await githubGet();
  return githubPut(posts, sha);
}

export function persistenceHint() {
  if (process.env.GITHUB_TOKEN) return "github";
  return "local";
}
