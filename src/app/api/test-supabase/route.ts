import { createSupabaseClient } from "../../../../utils/supabase/server";

export async function GET() {
  const { supabase } = await createSupabaseClient();

  const { data, error } = await supabase.from('users').select('*'); 

  if (error) {
    return new Response(`Connection failed: ${error.message}`, { status: 500 });
  }

  return new Response(`Connected! Rows fetched: ${data.length}`, { status: 200 });
}
