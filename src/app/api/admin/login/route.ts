import { NextResponse } from "next/server";
import {
  expectedPassword,
  makeSessionToken,
  sessionCookieOptions,
} from "@/lib/adminAuth";

export async function POST(req: Request) {
  const password = expectedPassword();
  if (!password) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD is not set on the server." },
      { status: 500 },
    );
  }
  const body = (await req.json()) as { password?: string };
  if (!body.password || body.password !== password) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  const token = makeSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(sessionCookieOptions(token));
  return res;
}
