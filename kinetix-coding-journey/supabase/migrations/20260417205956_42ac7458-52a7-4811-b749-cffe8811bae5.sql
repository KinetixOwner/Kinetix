create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  age integer,
  role text not null default 'kid' check (role in ('kid','parent')),
  streak_count integer not null default 0,
  last_active_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "view own profile" on public.profiles for select using (auth.uid() = id);
create policy "insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "update own profile" on public.profiles for update using (auth.uid() = id);

create table public.onboarding_answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  age integer,
  experience text,
  interests text[],
  goal text,
  daily_minutes integer,
  created_at timestamptz not null default now()
);
alter table public.onboarding_answers enable row level security;
create policy "own onboarding select" on public.onboarding_answers for select using (auth.uid() = user_id);
create policy "own onboarding insert" on public.onboarding_answers for insert with check (auth.uid() = user_id);
create policy "own onboarding update" on public.onboarding_answers for update using (auth.uid() = user_id);
create policy "own onboarding delete" on public.onboarding_answers for delete using (auth.uid() = user_id);

create table public.learning_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  summary text,
  days jsonb not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.learning_plans enable row level security;
create policy "own plans select" on public.learning_plans for select using (auth.uid() = user_id);
create policy "own plans insert" on public.learning_plans for insert with check (auth.uid() = user_id);
create policy "own plans update" on public.learning_plans for update using (auth.uid() = user_id);
create policy "own plans delete" on public.learning_plans for delete using (auth.uid() = user_id);
create index learning_plans_user_active_idx on public.learning_plans(user_id, is_active);

create table public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id uuid not null references public.learning_plans(id) on delete cascade,
  day_number integer not null,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, plan_id, day_number)
);
alter table public.lesson_progress enable row level security;
create policy "own progress select" on public.lesson_progress for select using (auth.uid() = user_id);
create policy "own progress insert" on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy "own progress update" on public.lesson_progress for update using (auth.uid() = user_id);
create policy "own progress delete" on public.lesson_progress for delete using (auth.uid() = user_id);

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  content text not null,
  created_at timestamptz not null default now()
);
alter table public.chat_messages enable row level security;
create policy "own chat select" on public.chat_messages for select using (auth.uid() = user_id);
create policy "own chat insert" on public.chat_messages for insert with check (auth.uid() = user_id);
create policy "own chat delete" on public.chat_messages for delete using (auth.uid() = user_id);
create index chat_messages_user_created_idx on public.chat_messages(user_id, created_at);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  tier text not null default 'free' check (tier in ('free','premium','pro')),
  stripe_customer_id text,
  stripe_subscription_id text,
  status text,
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);
alter table public.subscriptions enable row level security;
create policy "view own subscription" on public.subscriptions for select using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)),
    coalesce(new.raw_user_meta_data->>'role','kid')
  )
  on conflict (id) do nothing;
  insert into public.subscriptions (user_id, tier) values (new.id, 'free') on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();