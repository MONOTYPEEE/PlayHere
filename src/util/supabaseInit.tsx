import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(process.env.NEXT_PUBLIC_SB_URL as string, process.env.NEXT_PUBLIC_SB_APIKEY as string);