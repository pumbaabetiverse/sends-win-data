import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://amuiooxiugdjiigbwxuq.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdWlvb3hpdWdkamlpZ2J3eHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyOTE4MTMsImV4cCI6MjA3Mjg2NzgxM30.zdhTlH5zok2MG8M9K3zKzH8NmK5CQUf-pFwDWHFv_pQ";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: "marketing",
    },
    auth: {
        persistSession: true,
    },
});
