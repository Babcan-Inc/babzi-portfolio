import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { persistenceHint } from "@/lib/writingStore";

export async function GET() {
  const ok = await isAdminRequest();
  return NextResponse.json({ ok, persistence: persistenceHint() });
}
