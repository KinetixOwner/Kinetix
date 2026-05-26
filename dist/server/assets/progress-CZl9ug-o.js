import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { a as useAuth, u as useNavigate, s as supabase, A as AppHeader } from "./router-BMdv6_PJ.js";
import { F as Footer } from "./Footer-BtU2QYex.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Progress() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = reactExports.useState([]);
  const [streak, setStreak] = reactExports.useState(0);
  const [planTotal, setPlanTotal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [user, loading, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const [{
        data: progressData
      }, {
        data: planData
      }, {
        data: prof
      }] = await Promise.all([supabase.from("lesson_progress").select("day_number,completed_at,plan_id").eq("user_id", user.id).eq("completed", true).order("completed_at", {
        ascending: false
      }), supabase.from("learning_plans").select("days").eq("user_id", user.id).eq("is_active", true).maybeSingle(), supabase.from("profiles").select("streak_count").eq("id", user.id).maybeSingle()]);
      setRows(progressData ?? []);
      const days2 = planData?.days ?? [];
      setPlanTotal(days2.length);
      setStreak(prof?.streak_count ?? 0);
    })();
  }, [user]);
  const completedCount = rows.length;
  const percent = planTotal ? Math.round(completedCount / planTotal * 100) : 0;
  const days = Array.from({
    length: 30
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (29 - i));
    return d.toISOString().slice(0, 10);
  });
  const completedDates = new Set(rows.map((r) => (r.completed_at ?? "").slice(0, 10)));
  const badges = [{
    name: "First Step",
    desc: "Complete your first lesson",
    earned: completedCount >= 1,
    icon: "👣"
  }, {
    name: "On Fire",
    desc: "3-day streak",
    earned: streak >= 3,
    icon: "🔥"
  }, {
    name: "Halfway Hero",
    desc: "Complete 4 lessons",
    earned: completedCount >= 4,
    icon: "⚡"
  }, {
    name: "Plan Master",
    desc: "Finish your 7-day plan",
    earned: planTotal > 0 && completedCount >= planTotal,
    icon: "🏆"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-black tracking-tight sm:text-5xl", children: "Your progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Every line of code is a win. Keep going!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Streak", value: `${streak}`, suffix: "🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Lessons done", value: `${completedCount}`, suffix: planTotal ? `/${planTotal}` : "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Plan complete", value: `${percent}%` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10 glossy-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold", children: "Last 30 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-10 gap-1.5 sm:grid-cols-15", children: days.map((d) => {
          const active = completedDates.has(d);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { title: d, className: `aspect-square rounded-md transition-all ${active ? "shadow-[0_0_12px_oklch(0.55_0.25_258_/_0.4)]" : "bg-muted"}`, style: active ? {
            background: "var(--gradient-primary)"
          } : void 0 }, d);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold", children: "Badges" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glossy-card p-6 text-center ${b.earned ? "" : "opacity-40 grayscale"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-3xl", style: {
            background: b.earned ? "var(--gradient-primary)" : "var(--color-muted)"
          }, children: b.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-extrabold", children: b.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: b.desc })
        ] }, b.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Stat({
  label,
  value,
  suffix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glossy-card p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-4xl font-black", children: [
      value,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: suffix })
    ] })
  ] });
}
export {
  Progress as component
};
