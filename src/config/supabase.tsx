import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ayvehiztpbzuwtcshzyj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5dmVoaXp0cGJ6dXd0Y3NoenlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNDU3MDMsImV4cCI6MjA0NTYyMTcwM30.0a2cs7CHFxC6_1JnvkCBu-SQS-uJnHRWyLXmh20fjds"
);
