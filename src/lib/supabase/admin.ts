import { createClient } from "@supabase/supabase-js";

/**
 * PERINGATAN: pakai service role key, punya akses penuh ke semua data
 * (nembus RLS). HANYA boleh dipakai di Server Action / Server Component,
 * JANGAN PERNAH diimport dari file "use client" atau dikirim ke browser.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}