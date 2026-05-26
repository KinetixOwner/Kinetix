import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";

type ProgressRow = { day_number: number; completed_at: string | null; plan_id: string };

export const Route = createFileRoute("/progress")({
  component: Progress,
  head: () => ({ meta: [{ title: "Progress — Kinetix" }] }),
});

function Progress() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<ProgressRow[]>([]);
  const [streak, setStreak] = useState(0);
  const [planTotal, setPlanTotal] = useState(0);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: progressData }, { data: planData }, { data: prof }] = await Promise.all([
        supabase.from("lesson_progress").select("day_number,completed_at,plan_id").eq("user_id", user.id).eq("completed", true).order("completed_at", { ascending: false }),
        supabase.from("learning_plans").select("days").eq("user_id", user.id).eq("is_active", true).maybeSingle(),
        supabase.from("profiles").select("streak_count").eq("id", user.id).maybeSingle(),
      ]);
      setRows(progressData ?? []);
      const days = (planData?.days as unknown as { day: number }[]) ?? [];
      setPlanTotal(days.length);
      setStreak(prof?.streak_count ?? 0);
    })();
  }, [user]);

  const completedCount = rows.length;
  const percent = planTotal ? Math.round((completedCount / planTotal) * 100) : 0;

  // Build last-30-days calendar
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    return d.toISOString().slice(0, 10);
  });
  const completedDates = new Set(rows.map((r) => (r.completed_at ?? "").slice(0, 10)));

  const badges = [
    { name: "First Step", desc: "Complete your first lesson", earned: completedCount >= 1, icon: "👣" },
    { name: "On Fire", desc: "3-day streak", earned: streak >= 3, icon: "🔥" },
    { name: "Halfway Hero", desc: "Complete 4 lessons", earned: completedCount >= 4, icon: "⚡" },
    { name: "Plan Master", desc: "Finish your 7-day plan", earned: planTotal > 0 && completedCount >= planTotal, icon: "🏆" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Your progress</h1>
        <p className="mt-2 text-muted-foreground">Every line of code is a win. Keep going!</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Stat label="Streak" value={`${streak}`} suffix="🔥" />
          <Stat label="Lessons done" value={`${completedCount}`} suffix={planTotal ? `/${planTotal}` : ""} />
          <Stat label="Plan complete" value={`${percent}%`} />
        </div>

        <section className="mt-10 glossy-card p-7">
          <h2 className="text-lg font-extrabold">Last 30 days</h2>
          <div className="mt-4 grid grid-cols-10 gap-1.5 sm:grid-cols-15">
            {days.map((d) => {
              const active = completedDates.has(d);
              return (
                <div
                  key={d}
                  title={d}
                  className={`aspect-square rounded-md transition-all ${
                    active ? "shadow-[0_0_12px_oklch(0.55_0.25_258_/_0.4)]" : "bg-muted"
                  }`}
                  style={active ? { background: "var(--gradient-primary)" } : undefined}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-extrabold">Badges</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((b) => (
              <div
                key={b.name}
                className={`glossy-card p-6 text-center ${b.earned ? "" : "opacity-40 grayscale"}`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-3xl" style={{ background: b.earned ? "var(--gradient-primary)" : "var(--color-muted)" }}>
                  {b.icon}
                </div>
                <p className="mt-3 text-sm font-extrabold">{b.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
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
