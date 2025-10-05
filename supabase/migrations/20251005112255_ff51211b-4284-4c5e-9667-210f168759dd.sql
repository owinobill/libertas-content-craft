-- Add explicit RLS policies to prevent UPDATE and DELETE operations on contacts table
-- This ensures contact form submissions are immutable and cannot be modified or deleted
-- except through the Supabase dashboard with proper admin credentials

-- Explicitly deny UPDATE operations on contacts table
CREATE POLICY "No one can update contact submissions"
ON public.contacts
FOR UPDATE
TO public
USING (false);

-- Explicitly deny DELETE operations on contacts table
CREATE POLICY "No one can delete contact submissions"
ON public.contacts
FOR DELETE
TO public
USING (false);