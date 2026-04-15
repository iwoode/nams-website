/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required) - Sender's full name
      - `email` (text, required) - Sender's email address
      - `message` (text, required) - Message body
      - `created_at` (timestamptz, defaults to now) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Public insert policy: anyone can submit the contact form (no auth required)
    - Authenticated read policy: only authenticated users (admin) can read submissions

  3. Notes
    - This table stores contact form submissions from the school website
    - No user auth required to submit — it's a public-facing contact form
    - Admins authenticated via Supabase Auth can read all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
