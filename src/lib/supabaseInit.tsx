import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(process.env.SB_URL as string, process.env.SB_KEY as string);