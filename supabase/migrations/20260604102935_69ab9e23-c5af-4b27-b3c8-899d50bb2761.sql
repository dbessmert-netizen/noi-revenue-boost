
CREATE TABLE public.page_subscribers (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  page text NOT NULL,
  blocked boolean NOT NULL DEFAULT false,
  user_agent text,
  ip text,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (email, page)
);

CREATE INDEX page_subscribers_page_idx ON public.page_subscribers(page);
CREATE INDEX page_subscribers_email_idx ON public.page_subscribers(email);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.page_subscribers TO authenticated;
GRANT ALL ON public.page_subscribers TO service_role;

ALTER TABLE public.page_subscribers ENABLE ROW LEVEL SECURITY;

-- Only admins can read or modify the list directly.
-- Inserts/updates from the public gate go through a server function using the service role.
CREATE POLICY "Admins can view subscribers"
ON public.page_subscribers FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update subscribers"
ON public.page_subscribers FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete subscribers"
ON public.page_subscribers FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
