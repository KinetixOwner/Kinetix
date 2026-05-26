import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, L as Link, C as ChevronRight } from "./router-BMdv6_PJ.js";
import { R as Rocket } from "./rocket-DL-Altiu.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import { C as Cpu } from "./cpu-SbOaHMOt.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { G as Globe } from "./globe-13oO7l01.js";
import { F as Flame } from "./flame-BTfdjBNn.js";
import { B as Brain } from "./brain-ChGqDjJW.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}
function Metric({
  value,
  suffix,
  label,
  started
}) {
  const count = useCountUp(value, 1600, started);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 p-8 rounded-[2rem] bg-slate-900 border border-slate-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-[1000] italic tracking-tighter text-white", children: [
      count.toLocaleString(),
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-[0.25em] text-slate-500 mt-1", children: label })
  ] });
}
const FEATURES = [{
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 22, className: "text-blue-400" }),
  tag: "Module 01",
  title: "AI Mentor 1.0",
  desc: "An adaptive AI tutor that never gives answers — only precision questions that build real problem-solving instinct. Available 24/7. Gets smarter as your student does."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 22, className: "text-purple-400" }),
  tag: "Module 02",
  title: "Custom 30-Day Roadmaps",
  desc: "Every learner gets a bespoke mission generated from their interests, age, and pace. No two students see the same curriculum. Powered by our fine-tuned learning model."
}, {
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 22, className: "text-green-400" }),
  tag: "Module 03",
  title: "Verified Certifications",
  desc: "Blockchain-anchored credentials that prove what a student actually built — not just what they watched. Accepted by over 40 partner schools and coding programs."
}];
const STATS = [{
  value: 99,
  suffix: "%",
  label: "Pass Rate of students"
}, {
  value: 94,
  suffix: "%",
  label: "30-Day Completion Rate"
}, {
  value: 3,
  suffix: "x",
  label: "Faster than Bootcamps"
}];
function Landing() {
  const statsRef = reactExports.useRef(null);
  const [statsVisible, setStatsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsVisible(true);
    }, {
      threshold: 0.3
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-36 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.028] pointer-events-none", style: {
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "56px 56px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-[700px] h-[500px] rounded-full opacity-20 pointer-events-none", style: {
        background: "radial-gradient(circle, #2563eb 0%, transparent 65%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-7xl md:text-[9rem] lg:text-[11rem] font-[1000] tracking-tighter italic leading-none mb-10 max-w-5xl", children: [
          "CODE OR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-500", children: "BE CODED." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-14", children: "KINETIX is the world's first AI-native coding platform for builders aged 8–13. Our 30-day missions ship real software, build real skills, and produce the next generation of engineers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", className: "inline-flex items-center justify-center gap-3 px-9 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group shadow-lg shadow-blue-600/20", children: [
            "Initialize Mission",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 16, className: "group-hover:translate-y-[-2px] transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/for-students", className: "inline-flex items-center justify-center gap-3 px-9 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all", children: [
            "View the Platform",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xs font-bold text-slate-600 uppercase tracking-widest", children: "No credit card required · First session free · Cancel anytime" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: statsRef, className: "px-6 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { ...s, started: statsVisible }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-28 border-y border-slate-800/50 bg-slate-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Core Systems" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight max-w-2xl", children: [
          "THREE SYSTEMS.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "ZERO COMPROMISE." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group p-9 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:translate-y-[-4px] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center mb-7 transition-all", children: f.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2", children: f.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black italic tracking-tight mb-4", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium text-sm leading-relaxed flex-1", children: f.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn more" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
        ] })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6", children: "What students ship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8", children: [
          "REAL CODE.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "REAL APPS.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed mb-6", children: "By Day 30, every KINETIX student has shipped at least one live application. Not a tutorial clone — an original project they designed, built, and deployed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-10", children: ["AI chatbot with a custom personality", "Browser-based platformer game", "Live data dashboard", "Full-stack app with real users"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm font-black uppercase tracking-wider text-slate-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-blue-600 shrink-0" }),
          item
        ] }, item)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/for-students", className: "inline-flex items-center gap-3 px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-xs tracking-widest transition-all", children: [
          "Explore the curriculum ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[2.5rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-[2.3rem] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-6 py-4 border-b border-slate-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-rose-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "day-30-capstone.py" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-sm text-blue-300 overflow-x-auto leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `class KinetixGraduate:
    name = "Alex Chen"
    age = 12
    
    projects_shipped = [
        "ai_tutor_bot.py",      # Day 07
        "space_shooter.py",     # Day 14
        "weather_dashboard/",   # Day 21
        "fullstack_app/",       # Day 30 🚀
    ]
    
    certifications = [
        "Python Foundations",
        "Web Architecture",
        "AI Integration",
        "Software Deployment",
    ]

print(f"Live at: alex.kinetix.app")
# → 200 OK · 847 visits · 4.9★ rating` }) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-28 border-y border-slate-800/50 bg-slate-900/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-16 text-center", children: "The Philosophy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-8 -left-4 text-[10rem] font-[1000] leading-none text-slate-800 select-none pointer-events-none", "aria-hidden": "true", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl md:text-4xl lg:text-5xl font-[1000] italic tracking-tight leading-tight text-white relative z-10 mb-12", children: "Every civilization-defining technology started with someone who knew how to build it. We're not teaching kids to code. We're engineering the next generation of architects — the ones who will build the systems that the rest of the world runs on." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-blue-400 text-sm tracking-tight", children: "HG" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-white text-lg tracking-tight", children: "Henos Goitom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-bold text-sm uppercase tracking-widest", children: "Founder & Lead Architect, KINETIX" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Why KINETIX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter", children: [
          "BUILT FOR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "SCALE."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [{
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 20, className: "text-blue-400" }),
        title: "AI-Native Core",
        desc: "Every feature is built around adaptive AI, not bolted on as an afterthought."
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 20, className: "text-green-400" }),
        title: "Safe & COPPA-Ready",
        desc: "Zero ads, zero strangers. Enterprise-grade child safety infrastructure."
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 20, className: "text-purple-400" }),
        title: "Global Curriculum",
        desc: "Localized for 14 languages. Designed for any timezone, any device."
      }, {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20, className: "text-amber-400" }),
        title: "Measurable ROI",
        desc: "School and district partners see 3x completion rates vs. traditional CS classes."
      }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center mb-6", children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-lg italic tracking-tight mb-3", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium text-sm leading-relaxed", children: p.desc })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pt-8 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[3rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 rounded-[2.8rem] p-16 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.025] pointer-events-none", style: {
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.3em]", children: "First Session Free · No Commitment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-[1000] italic tracking-tighter mb-6", children: [
          "BOOT UP.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "BUILD SOMETHING." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg mb-12 max-w-lg mx-auto leading-relaxed", children: "Join Many young builders already on their KINETIX mission. Your first session launches in under 60 seconds." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", className: "inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group shadow-xl shadow-blue-600/20", children: [
            "Initialize Your Account",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all", children: "View Pricing" })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
export {
  Landing as component
};
