import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { a as useAuth, u as useNavigate, t as toast, s as supabase, B as Button, L as Link } from "./router-BMdv6_PJ.js";
import { L as LoaderCircle } from "./loader-circle-Bs3vu2Ol.js";
import { Z as Zap } from "./zap-DGhWpSD8.js";
import { A as Activity } from "./activity-ct3BEHRd.js";
import { T as Trophy } from "./trophy-smHJiL40.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { S as Sparkles } from "./sparkles-T3LTtS6o.js";
import { S as Shield } from "./shield-BmAcp9IG.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Dashboard() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [plan, setPlan] = reactExports.useState(null);
  const [profile, setProfile] = reactExports.useState(null);
  const [completed, setCompleted] = reactExports.useState(/* @__PURE__ */ new Set());
  const [fetching, setFetching] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!user) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      toast.success("System Access Confirmed.");
      const checkStatus = async () => {
        const {
          data
        } = await supabase.from("profiles").select("subscription_status, subscription_tier").eq("id", user.id).single();
        if (data?.subscription_status === "active") {
          setProfile((prev) => ({
            ...prev,
            subscription_status: "active",
            subscription_tier: data.subscription_tier
          }));
          clearInterval(interval);
        }
      };
      const interval = setInterval(checkStatus, 2e3);
      setTimeout(() => clearInterval(interval), 15e3);
    }
  }, [user]);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
    if (user) {
      (async () => {
        const {
          data: planData
        } = await supabase.from("learning_plans").select("*").eq("user_id", user.id).eq("is_active", true).maybeSingle();
        const {
          data: profileData
        } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
        if (planData) {
          setPlan(planData);
          const {
            data: progress
          } = await supabase.from("lesson_progress").select("day_number").eq("user_id", user.id).eq("plan_id", planData.id).eq("completed", true);
          setCompleted(new Set(progress?.map((p) => p.day_number) || []));
        }
        setProfile(profileData);
        setFetching(false);
      })();
    }
  }, [user, loading, navigate]);
  const isSubscribed = profile?.subscription_status === "active";
  const tier = profile?.subscription_tier || "recruit";
  const progressPercent = plan ? Math.round(completed.size / plan.days.length * 100) : 0;
  const nextLesson = plan?.days.find((d) => !completed.has(d.day)) || plan?.days[0];
  if (loading || fetching) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen items-center justify-center bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-black" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-white text-slate-900 font-mono antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: `p-8 max-w-7xl mx-auto space-y-8 transition-all duration-500 ${!isSubscribed ? "blur-md pointer-events-none select-none" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6 border-b border-slate-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold tracking-widest text-slate-500 uppercase", children: [
          "SYS_MODE // ",
          tier.toUpperCase()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-black uppercase tracking-tight text-slate-950 mt-1", children: [
          "KINETIX.OS // ",
          profile?.display_name || "USER"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Streak", value: `${profile?.streak_count || 0}d`, icon: Zap }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Progress", value: `${progressPercent}%`, icon: Activity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Rank", value: tier === "architect" ? "Architect" : tier === "operator" ? "Operator" : "Recruit", icon: Trophy }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Status", value: isSubscribed ? "Verified" : "Pending", icon: ShieldCheck })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-slate-50 border border-slate-200 text-slate-950 square-corners space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-bold uppercase tracking-widest text-[10px]", children: "Active Training Node" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black uppercase tracking-tight", children: nextLesson?.title || "Welcome to Kinetix" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-slate-950 text-white font-bold h-11 px-6 rounded-none uppercase tracking-wider hover:bg-slate-800 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/lesson/$day", params: {
              day: String(nextLesson?.day || 1)
            }, children: "Launch Terminal" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-slate-200 p-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 14 }),
              " Roadmap Protocol"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-100 border-t border-b border-slate-100", children: (plan?.days || [1, 2, 3]).map((d, i) => {
              const isDayLockedForRecruit = tier === "recruit" && (d.day || i + 1) > 7;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-4 relative bg-white", children: [
                isDayLockedForRecruit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-white/95 z-10 flex items-center justify-between px-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-400 font-bold tracking-wider uppercase flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 12 }),
                    " RESTRICTED PROFILE CLEARANCE // UPGRADE REQUIRED"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
                    to: "/pricing"
                  }), size: "sm", className: "h-7 bg-slate-100 hover:bg-slate-200 text-slate-950 text-[10px] font-bold uppercase rounded-none border border-slate-200", children: "Upgrade" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs text-slate-400 w-6", children: String(d.day || i + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs text-slate-800", children: d.title || "Module Target" })
                ] })
              ] }, i);
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white border border-slate-200 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest text-slate-400 uppercase", children: "⚡ SYNTAX DEFUSAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-600 font-bold border border-slate-200 px-1.5 py-0.5", children: "READY" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-slate-950 text-sm font-black uppercase tracking-tight", children: "Daily Micro-Puzzle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-xs leading-normal", children: "Isolate and resolve the syntax anomaly to sustain your account multiplier loop." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full py-2 h-auto bg-slate-150 hover:bg-slate-200 border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded-none transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/daily-puzzle", children: "Initialize System Test" }) })
          ] }),
          tier === "operator" || tier === "architect" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white border border-slate-950 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold tracking-widest text-slate-950 uppercase flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
                " DOCK_HACK"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-slate-950 text-white px-1.5 py-0.5 font-bold", children: "ONLINE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-slate-950 text-sm font-black uppercase tracking-tight", children: "The Daily KINETIX Hack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-xs leading-normal", children: "Universal synchronized cryptographic puzzle environment. Match parameters against global logic." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full py-2 h-auto bg-slate-950 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-none transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/daily-puzzle", children: "Open Array Terminal" }) })
          ] }) : (
            /* UPSELL BLOCK FOR BASIC USERS */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 border-dashed text-center py-6 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[10px] text-slate-400 uppercase tracking-wider font-bold", children: "Daily Global Hack Locked" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 max-w-[200px] mx-auto leading-normal", children: "Upgrade your profile account to Operator to bypass daily cryptographic sequences." })
            ] })
          ),
          tier === "architect" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-slate-950 text-white space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 12 }),
              " ARCHITECT CONSOLE"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white text-sm font-black uppercase tracking-tight", children: "Telemetry Audit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs leading-normal", children: "Deploy fully automated structural logic compilation reviews across active sandbox assets." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full py-2 h-auto bg-white text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-none hover:bg-slate-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/daily-puzzle", children: "Run Structural Analysis" }) })
          ] }) : tier === "operator" && /* SYSTEM BANNER UPSELL FOR OPERATORS */
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 border border-slate-200 border-dashed text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-[9px] text-slate-400 uppercase tracking-widest font-bold", children: "Unlock Architect Auditing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: "Acquire fully automated AI structural diagnostic tracking nodes weekly." })
          ] })
        ] })
      ] })
    ] }),
    !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-xs p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white border-2 border-slate-950 p-10 text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black uppercase tracking-tight text-slate-950", children: "Authorization Deficit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-xs font-medium max-w-xs mx-auto leading-relaxed", children: "Your sandbox execution channel is currently offline. Commit to an operational workspace profile model to sync your terminal nodes." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
        to: "/pricing"
      }), className: "w-full h-12 bg-slate-950 text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-800 transition-colors", children: [
        "Initialize Plan Selection ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2", size: 14 })
      ] })
    ] }) })
  ] });
}
function StatCard({
  label,
  value,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 p-5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase text-slate-400 tracking-widest", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-slate-950 mt-1", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) })
  ] });
}
export {
  Dashboard as component
};
