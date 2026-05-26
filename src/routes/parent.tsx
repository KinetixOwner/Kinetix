import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";

type ProgressRow = { day_number: number; completed_at: string | null };
type Plan = { title: string; summary: string | null; days: { day: number; title: string; language: string }[] };

export const Route = createFileRoute("/parent")({
  component: Parent,
  head: () => ({ meta: [{ title: "Parent dashboard — Kinetix" }] }),
});

function Parent() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [streak, setStreak] = useState(0);
  const [rows, setRows] = useState<ProgressRow[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: prof }, { data: planData }, { data: progressData }] = await Promise.all([
        supabase.from("profiles").select("display_name,streak_count").eq("id", user.id).maybeSingle(),
        supabase.from("learning_plans").select("title,summary,days").eq("user_id", user.id).eq("is_active", true).maybeSingle(),
        supabase.from("lesson_progress").select("day_number,completed_at").eq("user_id", user.id).eq("completed", true).order("completed_at", { ascending: false }),
      ]);
      setName(prof?.display_name ?? "Your child");
      setStreak(prof?.streak_count ?? 0);
      setRows(progressData ?? []);
      if (planData) setPlan({ ...planData, days: planData.days as unknown as Plan["days"] });
    })();
  }, [user]);

  // last 7 days
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const dates = new Set(rows.map((r) => (r.completed_at ?? "").slice(0, 10)));
  const lessonsThisWeek = last7.filter((d) => dates.has(d)).length;
  const totalLessons = rows.length;
  const planTotal = plan?.days.length ?? 0;
  const planPct = planTotal ? Math.round((totalLessons / planTotal) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Parent dashboard</p>
        <h1 className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">{name}'s coding journey</h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Stat label="Lessons this week" value={`${lessonsThisWeek}`} suffix="/ 7" />
          <Stat label="Current streak" value={`${streak}`} suffix="🔥" />
          <Stat label="Plan progress" value={`${planPct}%`} />
        </div>

        <section className="mt-8 glossy-card p-7">
          <h2 className="text-lg font-extrabold">Weekly summary</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {lessonsThisWeek === 0
              ? `${name} hasn't completed any lessons this week. Encourage a quick 15-minute session today!`
              : `Great week! ${name} completed ${lessonsThisWeek} lesson${lessonsThisWeek === 1 ? "" : "s"} and built up a ${streak}-day streak.`}
          </p>

          <div className="mt-5 flex gap-1.5">
            {last7.map((d) => {
              const active = dates.has(d);
              const dayName = new Date(d).toLocaleDateString(undefined, { weekday: "short" });
              return (
                <div key={d} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className={`h-12 w-full rounded-lg ${active ? "" : "bg-muted"}`}
                    style={active ? { background: "var(--gradient-primary)" } : undefined}
                    title={d}
                  />
                  <span className="text-[10px] font-semibold uppercase text-muted-foreground">{dayName}</span>
                </div>
              );
            })}
          </div>
        </section>

        {plan && (
          <section className="mt-6 glossy-card p-7">
            <h2 className="text-lg font-extrabold">Current plan</h2>
            <p className="mt-1 text-sm font-semibold">{plan.title}</p>
            {plan.summary && <p className="mt-1 text-sm text-muted-foreground">{plan.summary}</p>}
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {plan.days.map((d) => {
                const done = rows.some((r) => r.day_number === d.day);
                return (
                  <div key={d.day} className="flex items-center gap-3 rounded-xl border border-border px-4 py-3">
                    <div className={`h-7 w-7 shrink-0 rounded-full text-center text-xs font-black leading-7 ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {done ? "✓" : d.day}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{d.title}</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-muted-foreground">{d.language}</span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to="/pricing" className="glossy-card flex items-center justify-between p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upgrade</p>
              <p className="mt-1 text-lg font-extrabold">Unlock more plans & features</p>
            </div>
            <span className="text-2xl">⭐</span>
          </Link>
          <Link to="/dashboard" className="glossy-card flex items-center justify-between p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Back</p>
              <p className="mt-1 text-lg font-extrabold">Kid view</p>
            </div>
            <span className="text-2xl">🚀</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="glossy-card p-7">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-4xl font-black">
        {value} <span className="text-2xl">{suffix}</span>
      </p>
    </div>
  );
}
