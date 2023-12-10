import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://zazmasmjvxvlewdbsmuk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphem1hc21qdnh2bGV3ZGJzbXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjQ1OTEsImV4cCI6MjAxNTIwMDU5MX0.Zv2i930h7iEJD--YDOPq8yZqkwXWbVo-pzaD7jQ5ZP8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
