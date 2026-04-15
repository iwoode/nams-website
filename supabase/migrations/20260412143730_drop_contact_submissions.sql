/*
  # Drop contact_submissions table

  ## Summary
  Removes the contact_submissions table that is no longer used.

  ## Reason
  The contact form now uses Formspree for submission handling. The Supabase
  contact_submissions table is unused and contained overly permissive RLS
  policies (USING (true)) that triggered security audit warnings.

  ## Changes
  - Drops the `contact_submissions` table and all associated RLS policies
*/

DROP TABLE IF EXISTS contact_submissions;
