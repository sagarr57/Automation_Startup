-- Run this in Supabase Dashboard → SQL Editor (once per project).
-- Contact form: anonymous visitors may INSERT only.
-- Admin dashboard: authenticated users may SELECT only.

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

drop policy if exists "enquiries_insert_anon" on public.enquiries;
drop policy if exists "enquiries_select_authenticated" on public.enquiries;

-- Allow public contact form submissions
create policy "enquiries_insert_anon"
  on public.enquiries
  for insert
  to anon
  with check (true);

-- Allow signed-in admins to read submissions
create policy "enquiries_select_authenticated"
  on public.enquiries
  for select
  to authenticated
  using (true);

grant insert on table public.enquiries to anon;
grant select on table public.enquiries to authenticated;
