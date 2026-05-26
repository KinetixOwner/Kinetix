import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, L as Link, B as Button, X, C as ChevronRight, s as supabase, t as toast } from "./router-BMdv6_PJ.js";
import { F as FingerprintPattern } from "./fingerprint-pattern-BrY6f5j4.js";
import { A as Activity } from "./activity-ct3BEHRd.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import { C as CircleCheck } from "./circle-check-D7Mv44sH.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { L as Layers } from "./layers-B7G8LIBu.js";
import { B as Boxes } from "./boxes-COiTE1Nf.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$1);
const __iconNode = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
];
const Network = createLucideIcon("network", __iconNode);
const tiers = [{
  name: "Explorer",
  price: "24",
  id: "price_1TNbdg7z117f9uiLk3CfvJmO",
  desc: "Your first step into real coding.",
  protocol: "P-01_RECRUIT",
  features: ["Week 1 Full Core Access (HTML/CSS)", "Standard JS & Python Mission Tracks", "Daily Mini-Puzzles (Syntax Defusal)", "Daily Streak Tracker Node", "Standard AI Hints"],
  accent: "slate"
}, {
  name: "Mastery",
  price: "49",
  id: "price_1TNyoj8YkXydDChvFLKoKVX3",
  desc: "The standard for serious young builders.",
  protocol: "P-02_OPERATOR",
  features: ["Month 1 + 2 Complete Access Matrix", "Full AI Tutor Inside Every Sandbox Unit", "The Daily KINETIX Hack (Wordle-Style Game)", "Interactive XP & Level-Up Protocols", "Shareable Proof-of-Work Certificates", "Priority AI Response Pipeline"],
  recommended: true,
  accent: "blue"
}, {
  name: "Elite",
  price: "99",
  id: "price_1TNgMe7z117f9uiLZcZ8IL5N",
  desc: "Maximum velocity for future founders.",
  protocol: "P-03_ARCHITECT",
  features: ["Unlimited Terminal Curriculum Modules", "Early Deployment Access Alpha Nodes", "Weekly AI-Driven Structural Engine Audits", "Automated Portfolio Blueprint Generator", "Priority Global Matchmaking Nodes"],
  accent: "indigo"
}];
const competitors = ["Scratch", "Code.org", "Tynker"];
const comparisonFeatures = [{
  category: "Neural Core Logic",
  features: [{
    name: "Native Code Frameworks (HTML, CSS, JS, Python)",
    kinetix: true,
    scratch: false,
    codeorg: "partial",
    tynker: "partial"
  }, {
    name: "Low-Latency Execution Sandbox Terminal",
    kinetix: true,
    scratch: false,
    codeorg: "partial",
    tynker: true
  }, {
    name: "Daily Syntax Defusal Protocols & Logic Overrides",
    kinetix: true,
    scratch: false,
    codeorg: "partial",
    tynker: false
  }, {
    name: "Synchronized Global Daily Hacks (Worldle-Style)",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }, {
    name: "On-Demand Curriculum Deep Dives",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }]
}, {
  category: "AI Integration",
  features: [{
    name: "Inline Neural AI Tutor Guidance",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }, {
    name: "Real-Time Structural Engine Audits",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }, {
    name: "Automated AI Syntax Refactoring Vectors",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }, {
    name: "Telemetry-Driven Progression Roadmaps",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }]
}, {
  category: "Engagement Protocols",
  features: [{
    name: "Mission Streak Tracks & Sync Multipliers",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: true
  }, {
    name: "Gamified XP Metrics & Competitive Hubs",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: true
  }, {
    name: "Verified 'Proof-of-Work' Achievement Certificates",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }, {
    name: "Interactive Milestone Security Clearance Levels",
    kinetix: true,
    scratch: false,
    codeorg: false,
    tynker: false
  }]
}];
const DecorativeGrid = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
    backgroundSize: "40px 40px"
  } }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" })
] });
const FeatureRow = ({
  text
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-4 py-4 border-b border-slate-50 transition-colors hover:bg-slate-50/50 px-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase italic tracking-wider text-slate-500 group-hover:text-slate-900 transition-colors", children: text })
] });
const CellValue = ({
  value
}) => {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14, className: "text-white" }) }) });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-300" }) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14, className: "text-yellow-500" }) }) });
};
function PricingPage() {
  const [loading, setLoading] = reactExports.useState(null);
  const [mousePos, setMousePos] = reactExports.useState({
    x: 0,
    y: 0
  });
  reactExports.useEffect(() => {
    const handleMove = (e) => setMousePos({
      x: e.clientX,
      y: e.clientY
    });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  const handleCheckout = async (priceId) => {
    setLoading(priceId);
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    if (!session) {
      toast.error("Please sign in first");
      window.location.href = "/login?redirect=/pricing";
      setLoading(null);
      return;
    }
    try {
      const response = await fetch("https://mfhfktddqaqvkoxizqqp.supabase.co/functions/v1/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          priceId,
          email: session.user.email
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.error || "Checkout failed. Please try again.");
      }
    } catch (err) {
      toast.error("Connection error. Please try again.");
    } finally {
      setLoading(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecorativeGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed pointer-events-none w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px] transition-transform duration-300 ease-out z-0", style: {
      transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-12 border-b border-slate-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-green-500 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic", children: "Network_Status: Optimal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic hidden md:block", children: "Region: CA_EAST_1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 italic hover:underline", children: "Exit_Portal" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FingerprintPattern, { size: 14, className: "text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 italic", children: "Verification Protocol Required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[12vw] md:text-[8rem] font-[1000] italic uppercase tracking-tighter leading-[0.75] mb-8 text-slate-900", children: [
        "Neural ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-blue-600 relative", children: [
          "Evolution.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "text-blue-200 animate-pulse", size: 80 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-400 font-bold uppercase italic text-xs tracking-[0.2em] leading-relaxed", children: [
          "The transition from consumer to architect starts here. No annual traps. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Monthly synchronization only. Cancel at any lifecycle point."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full border-2 border-white bg-slate-200" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase italic text-slate-400 tracking-widest", children: "+12,400 Nodes Synced" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1400px] mx-auto py-20 px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `group relative p-1 rounded-[4rem] transition-all duration-500 hover:-translate-y-4 ${tier.recommended ? "bg-gradient-to-b from-blue-600 to-indigo-900 shadow-[0_60px_100px_-20px_rgba(37,99,235,0.2)]" : "bg-slate-100 hover:bg-slate-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[3.8rem] p-10 md:p-14 h-full flex flex-col relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 120 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-blue-600 uppercase tracking-widest italic", children: tier.protocol }),
          tier.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter italic", children: "Optimal_Value" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-5xl font-[1000] italic uppercase tracking-tighter text-slate-900 mb-4", children: tier.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-slate-400 uppercase italic tracking-wider leading-relaxed pr-8", children: tier.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-7xl font-[1000] tracking-tighter text-slate-900 transition-transform group-hover:scale-110 duration-500 origin-left", children: [
          "$",
          tier.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 font-black uppercase italic text-xs", children: "CAD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-bold uppercase italic text-[10px]", children: "/ Mo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 mb-12 flex-1", children: tier.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureRow, { text: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleCheckout(tier.id), disabled: loading === tier.id, className: `h-20 w-full rounded-[2.5rem] font-[1000] text-xl italic uppercase tracking-[0.1em] transition-all ${tier.recommended ? "bg-blue-600 hover:bg-slate-900 text-white" : "bg-slate-900 hover:bg-blue-600 text-white"}`, children: [
        loading === tier.id ? "Initializing..." : "Engage Protocol",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20, className: "ml-2" })
      ] })
    ] }) }, tier.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-8 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 italic mb-4", children: "Why Kinetix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-7xl font-[1000] italic uppercase tracking-tighter text-slate-900 leading-[0.85]", children: [
          "We're Not ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Even Close." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-slate-400 font-bold italic uppercase text-xs tracking-widest max-w-xl mx-auto", children: "While others teach kids to drag blocks around a screen, Kinetix builds real engineers with AI-powered precision." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-[3rem] border-2 border-slate-100 bg-white shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 border-b-2 border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 col-span-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-blue-600 flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-[1000] text-xl italic", children: "K" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-white italic", children: "Kinetix" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-widest text-blue-200 italic", children: "The Future" })
          ] }),
          competitors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 border-l border-slate-100 flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center grayscale opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-black text-xl", children: c[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-300 italic", children: c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-widest text-slate-200 italic", children: "The Past" })
          ] }, c))
        ] }),
        comparisonFeatures.map((category, catIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 bg-slate-50 border-b border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-4 col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 italic", children: category.category }) }) }),
          category.features.map((feature, featIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 border-b border-slate-50 hover:bg-slate-50/50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-5 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase italic tracking-wide text-slate-700", children: feature.name }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-5 bg-blue-50/30 border-l-2 border-blue-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CellValue, { value: feature.kinetix }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-5 border-l border-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CellValue, { value: feature.scratch }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-5 border-l border-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CellValue, { value: feature.codeorg }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-5 border-l border-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CellValue, { value: feature.tynker }) })
          ] }, featIdx))
        ] }, catIdx)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 border-t-2 border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 bg-blue-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "h-12 px-6 rounded-2xl bg-white text-blue-600 font-black uppercase italic text-xs hover:bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Start Now" }) }) }),
          competitors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 border-l border-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-widest text-slate-200 italic", children: "Limited" }) }, c))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-8 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 10, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 italic", children: "Full Support" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 10, className: "text-yellow-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 italic", children: "Partial" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10, className: "text-slate-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 italic", children: "Not Available" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto pb-40 px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group overflow-hidden rounded-[5rem] bg-slate-900 p-1 md:p-2 transition-all duration-700 hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-[4.5rem] p-16 md:p-24 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 blur-[120px] rounded-full animate-pulse delay-700" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid lg:grid-cols-2 gap-20 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10 italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14 }),
            " Level_04 Security Access"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-7xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-[0.85] text-white mb-10", children: [
            "Protocol ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600", children: "X-Alpha." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xl font-medium italic leading-relaxed mb-12 max-w-lg", children: "Bespoke architecture for engineering leads and startup founders. Direct neural link to senior tech oversight and private deployment pipelines." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [{
            icon: Network,
            label: "Private Node Support"
          }, {
            icon: Layers,
            label: "Custom OS Architecture"
          }, {
            icon: Boxes,
            label: "Whale Tier Assets"
          }, {
            icon: ShieldCheck,
            label: "Ironclad Security"
          }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 group/item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase italic tracking-widest text-slate-300", children: item.label })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-xl relative group-hover:border-blue-500/30 transition-all duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 italic mb-8", children: "Admission Requirement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-3xl font-[1000] italic uppercase tracking-tighter mb-12 leading-tight", children: [
            "Requires ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " Manual ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " Verification."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => window.location.href = "mailto:admin@kinetix.com?subject=PROTOCOL X INQUIRY", className: "h-24 w-full rounded-[2.5rem] bg-white text-slate-900 font-[1000] text-xl italic uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-4", children: [
            "Request Entry ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 24 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 italic", children: "Expected Response: 24h - 48h" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-20 border-t border-slate-50 bg-slate-50/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12", children: [{
      label: "Active Nodes",
      val: "42,892"
    }, {
      label: "Uptime",
      val: "99.99%"
    }, {
      label: "Neural Latency",
      val: "14ms"
    }, {
      label: "Security",
      val: "AES-256"
    }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic mb-2", children: stat.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-[1000] italic uppercase tracking-tighter text-slate-900", children: stat.val })
    ] }, i)) }) })
  ] });
}
export {
  PricingPage as component
};
