import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://drhrvnupeysnddxcickh.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyaHJ2bnVwZXlzbmRkeGNpY2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MjI2NzQsImV4cCI6MjA2MTQ5ODY3NH0.ku3tbZ2zB4GeVHmJWPe2ruK3_yyM0cMtTzl8h6YUFmc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);