import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { a as useAuth, u as useNavigate, s as supabase, A as AppHeader, L as Link } from "./router-BMdv6_PJ.js";
import { F as Footer } from "./Footer-BtU2QYex.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Parent() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [streak, setStreak] = reactExports.useState(0);
  const [rows, setRows] = reactExports.useState([]);
  const [plan, setPlan] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [user, loading, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const [{
        data: prof
      }, {
        data: planData
      }, {
        data: progressData
      }] = await Promise.all([supabase.from("profiles").select("display_name,streak_count").eq("id", user.id).maybeSingle(), supabase.from("learning_plans").select("title,summary,days").eq("user_id", user.id).eq("is_active", true).maybeSingle(), supabase.from("lesson_progress").select("day_number,completed_at").eq("user_id", user.id).eq("completed", true).order("completed_at", {
        ascending: false
      })]);
      setName(prof?.display_name ?? "Your child");
      setStreak(prof?.streak_count ?? 0);
      setRows(progressData ?? []);
      if (planData) setPlan({
        ...planData,
        days: planData.days
      });
    })();
  }, [user]);
  const last7 = Array.from({
    length: 7
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const dates = new Set(rows.map((r) => (r.completed_at ?? "").slice(0, 10)));
  const lessonsThisWeek = last7.filter((d) => dates.has(d)).length;
  const totalLessons = rows.length;
  const planTotal = plan?.days.length ?? 0;
  const planPct = planTotal ? Math.round(totalLessons / planTotal * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Parent dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-1 text-4xl font-black tracking-tight sm:text-5xl", children: [
        name,
        "'s coding journey"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Lessons this week", value: `${lessonsThisWeek}`, suffix: "/ 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Current streak", value: `${streak}`, suffix: "🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Plan progress", value: `${planPct}%` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 glossy-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold", children: "Weekly summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: lessonsThisWeek === 0 ? `${name} hasn't completed any lessons this week. Encourage a quick 15-minute session today!` : `Great week! ${name} completed ${lessonsThisWeek} lesson${lessonsThisWeek === 1 ? "" : "s"} and built up a ${streak}-day streak.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-1.5", children: last7.map((d) => {
          const active = dates.has(d);
          const dayName = new Date(d).toLocaleDateString(void 0, {
            weekday: "short"
          });
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-full rounded-lg ${active ? "" : "bg-muted"}`, style: active ? {
              background: "var(--gradient-primary)"
            } : void 0, title: d }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase text-muted-foreground", children: dayName })
          ] }, d);
        }) })
      ] }),
      plan && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6 glossy-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-extrabold", children: "Current plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold", children: plan.title }),
        plan.summary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: plan.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2 sm:grid-cols-2", children: plan.days.map((d) => {
          const done = rows.some((r) => r.day_number === d.day);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-7 w-7 shrink-0 rounded-full text-center text-xs font-black leading-7 ${done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`, children: done ? "✓" : d.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-bold", children: d.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-semibold text-muted-foreground", children: d.language })
          ] }, d.day);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pricing", className: "glossy-card flex items-center justify-between p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Upgrade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-extrabold", children: "Unlock more plans & features" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "glossy-card flex items-center justify-between p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-extrabold", children: "Kid view" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🚀" })
        ] })
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
  Parent as component
};
