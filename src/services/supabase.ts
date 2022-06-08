import { createClient } from "@supabase/supabase-js";

// Create Supabase Client ->
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
