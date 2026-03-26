import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zhfseorcstefcsvkgszl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZnNlb3Jjc3RlZmNzdmtnc3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1Mjg0MjIsImV4cCI6MjA5MDEwNDQyMn0.2foot-mwWw416R8ZSYH_FEeNS4hoNEU85tGcf3oPCBA"
);