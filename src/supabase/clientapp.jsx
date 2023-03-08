import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

export async function signout() {
  const { error } = await supabase.auth.signOut();
}

// export default supabase;
