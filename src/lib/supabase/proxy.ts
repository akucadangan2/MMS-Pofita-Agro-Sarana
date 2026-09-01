import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  const pathname = request.nextUrl.pathname;
  const halamanPublik = pathname.startsWith("/login") || pathname.startsWith("/kebijakan-privasi");

  if (!claims) {
    if (!halamanPublik) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return supabaseResponse;
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/gudang")) {
    const { data: userRow } = await supabase
      .from("users")
      .select("role")
      .eq("auth_id", claims.sub as string)
      .maybeSingle();

    const role = userRow?.role;

    if (pathname.startsWith("/admin") && role !== "admin" && role !== "super_admin") {
      const url = request.nextUrl.clone();
      url.pathname = role === "gudang" ? "/gudang/dashboard" : "/login";
      return NextResponse.redirect(url);
    }

if (pathname.startsWith("/gudang") && role !== "gudang" && role !== "admin" && role !== "super_admin") {      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}