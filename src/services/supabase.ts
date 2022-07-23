import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

// Create Supabase Client ->
export const supabaseClient = createClient(supabaseUrl as string, supabaseKey as string);
