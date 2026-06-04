
-- 1) user_roles: only admins can write. Prevents privilege escalation.
CREATE POLICY "Admins can insert roles"
ON public.user_roles FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles"
ON public.user_roles FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles"
ON public.user_roles FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- 2) page_subscribers: only the trusted server (service_role) should insert.
-- Revoke direct write privileges from anon/authenticated so the email gate
-- cannot be bypassed by a crafted client-side insert.
REVOKE INSERT, UPDATE, DELETE ON public.page_subscribers FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.page_subscribers FROM anon;
