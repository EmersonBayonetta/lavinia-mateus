create extension if not exists pgcrypto;

create table if not exists public.wedding_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.wedding_messages enable row level security;

drop policy if exists "Anyone can read wedding messages" on public.wedding_messages;
create policy "Anyone can read wedding messages"
on public.wedding_messages
for select
to anon
using (true);

drop policy if exists "Anyone can create wedding messages" on public.wedding_messages;
create policy "Anyone can create wedding messages"
on public.wedding_messages
for insert
to anon
with check (
  length(trim(name)) between 1 and 80
  and length(trim(message)) between 1 and 800
);
