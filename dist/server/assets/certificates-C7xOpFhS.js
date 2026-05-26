import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, a as useAuth, u as useNavigate, s as supabase, h as Award, B as Button } from "./router-BMdv6_PJ.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { T as Trophy } from "./trophy-smHJiL40.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function Certificates() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = reactExports.useState(null);
  const [fetching, setFetching] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
    if (user) {
      supabase.from("profiles").select("*").eq("id", user.id).single().then(({
        data
      }) => {
        setProfile(data);
        setFetching(false);
      });
    }
  }, [user, loading, navigate]);
  const isSubscribed = profile?.subscription_status === "active";
  const handleDownload = () => {
    window.print();
  };
  if (loading || fetching) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `flex-1 p-8 lg:p-16 bg-slate-50 overflow-y-auto transition-all duration-700 ${!isSubscribed ? "blur-xl grayscale pointer-events-none select-none" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic mb-2", children: "Registry / Proof_Of_Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl font-[1000] text-slate-900 italic uppercase tracking-tighter", children: [
          "Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Achievements." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5 text-blue-600 rotate-12 group-hover:rotate-0 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 120 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-10 shadow-lg shadow-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 32 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-black italic uppercase leading-none mb-4", children: [
              "Foundation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              " Protocol"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10 italic", children: [
              "Issued: ",
              (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
              }),
              " // ID: KX-",
              profile?.id?.slice(0, 4).toUpperCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleDownload, className: "flex-1 h-14 bg-slate-900 text-white rounded-2xl font-black italic uppercase text-xs tracking-widest hover:bg-blue-600 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2", size: 16 }),
                " Download"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "h-14 w-14 rounded-2xl border-slate-200 hover:border-blue-600 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 18 }) })
            ] })
          ] })
        ] }),
        [{
          title: "Neural Logic",
          level: "Lvl 10"
        }, {
          title: "Fullstack Architect",
          level: "Lvl 25"
        }, {
          title: "AI Integration",
          level: "Lvl 50"
        }].map((locked, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/50 border-2 border-dashed border-slate-200 rounded-[3.5rem] p-12 flex flex-col items-center justify-center text-center opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 32 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black italic uppercase text-slate-400", children: locked.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-4 py-1 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 italic", children: [
            "Unlocks at ",
            locked.level
          ] })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-20 pt-20 border-t border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-4 gap-8", children: [{
        val: "01",
        label: "Certs Earned"
      }, {
        val: profile?.streak_count || "0",
        label: "Current Streak"
      }, {
        val: "TOP 5%",
        label: "Global Rank"
      }, {
        val: "88%",
        label: "Path Completion"
      }].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-[1000] text-slate-900 italic uppercase leading-none", children: stat.val }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-4 italic", children: stat.label })
      ] }, stat.label)) }) })
    ] }) }),
    !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl bg-white border border-slate-100 shadow-2xl rounded-[3.5rem] p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-blue-500/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "text-white w-10 h-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-black text-slate-900 italic uppercase tracking-tighter leading-tight", children: [
        "Claim Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Credentials." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-slate-500 font-medium text-lg italic", children: "Verification required. Upgrade to Pro to download your official certificates and share your progress with the world." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
        to: "/pricing"
      }), className: "w-full mt-10 h-20 bg-slate-950 text-white text-xl font-black uppercase italic rounded-2xl hover:bg-blue-600 transition-all group", children: [
        "Unlock Certificates ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest", children: "Secure Certification Registry // KX-OS" })
    ] }) })
  ] });
}
export {
  Certificates as component
};
