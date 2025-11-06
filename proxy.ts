import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerSupabase } from "@/lib/supabaseServer";

export async function proxy(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getSession();

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  if (isAdminRoute && !data.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
