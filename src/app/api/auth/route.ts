'use server'

import { createSupabaseClient } from "../../../../utils/supabase/server"

export async function addUser({
  full_name,
  email,
  userType,
}: {
  full_name: string
  email: string
  userType: 'student' | 'teacher'
}) {
  const { supabase } = await createSupabaseClient()

  const { data, error } = await supabase.from('users').insert([
    { full_name, email, role: userType }
  ])

  if (error) {
    throw new Error(error.message)
  }

  return data
}
