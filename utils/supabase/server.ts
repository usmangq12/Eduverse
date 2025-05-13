'use server';

import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

export async function createSupabaseClient() {
  const cookieStore = await cookies();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return {
    supabase,
    cookieStore
  };
}
