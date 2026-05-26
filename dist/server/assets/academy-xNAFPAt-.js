import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, u as useNavigate, B as Button, S as Star } from "./router-BMdv6_PJ.js";
import { C as Cpu } from "./cpu-SbOaHMOt.js";
import { B as BrainCircuit } from "./brain-circuit-Cz7DLbqU.js";
import { A as Activity } from "./activity-ct3BEHRd.js";
import { Z as Zap } from "./zap-DGhWpSD8.js";
import { H as History, D as Database } from "./history-CAtVzwkA.js";
import { S as Search } from "./search-DOtS_TuU.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { C as CircleCheck } from "./circle-check-D7Mv44sH.js";
import { P as Play } from "./play-3GQz5-0X.js";
import { S as Shield } from "./shield-BmAcp9IG.js";
import { B as Boxes } from "./boxes-COiTE1Nf.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import { L as Layers } from "./layers-B7G8LIBu.js";
import { F as FingerprintPattern } from "./fingerprint-pattern-BrY6f5j4.js";
import { G as Globe } from "./globe-13oO7l01.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
];
const Microscope = createLucideIcon("microscope", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
];
const MousePointer2 = createLucideIcon("mouse-pointer-2", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$1);
const __iconNode = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", __iconNode);
const phases = [{
  number: 1,
  title: "The Substrate Layer",
  description: "Zero-state initialization. Master memory allocation, the JavaScript event loop, and high-concurrency paradigms.",
  locked: false,
  modules: [{
    id: "1.01",
    title: "Memory Management & Pointers",
    type: "Technical",
    level: "Beginner",
    duration: "1.5h",
    completed: true
  }, {
    id: "1.02",
    title: "Asynchronous Execution Chains",
    type: "Logic",
    level: "Beginner",
    duration: "2h",
    completed: true
  }, {
    id: "1.03",
    title: "Functional Composition Patterns",
    type: "Logic",
    level: "Beginner",
    duration: "1h",
    completed: true
  }, {
    id: "1.04",
    title: "API Contract Architecture",
    type: "Design",
    level: "Beginner",
    duration: "3h",
    completed: false
  }, {
    id: "1.05",
    title: "State Machine Implementation",
    type: "Logic",
    level: "Intermediate",
    duration: "2.5h",
    completed: false
  }]
}, {
  number: 2,
  title: "Fullstack Synchronization",
  description: "Bridging reactive frontends with distributed database clusters and LLM orchestrators.",
  locked: true,
  modules: [{
    id: "2.01",
    title: "Distributed State Management",
    type: "Infrastructure",
    level: "Intermediate",
    duration: "4h",
    completed: false
  }, {
    id: "2.02",
    title: "Vector Database Fundamentals",
    type: "AI/ML",
    level: "Intermediate",
    duration: "5h",
    completed: false
  }, {
    id: "2.03",
    title: "Agentic Workflow Design",
    type: "AI/ML",
    level: "Intermediate",
    duration: "6h",
    completed: false
  }, {
    id: "2.04",
    title: "Serverless Edge Functions",
    type: "Deployment",
    level: "Intermediate",
    duration: "2h",
    completed: false
  }, {
    id: "2.05",
    title: "PostgreSQL Query Optimization",
    type: "Technical",
    level: "Advanced",
    duration: "3.5h",
    completed: false
  }]
}, {
  number: 3,
  title: "The Neural Link Integration",
  description: "Deploying the Lyria-3 logic engine. Training proprietary datasets and fine-tuning model weight responses.",
  locked: true,
  modules: [{
    id: "3.01",
    title: "Tokenization & Embeddings",
    type: "AI/ML",
    level: "Advanced",
    duration: "4h",
    completed: false
  }, {
    id: "3.02",
    title: "Prompt Injection Defense",
    type: "Security",
    level: "Advanced",
    duration: "3h",
    completed: false
  }, {
    id: "3.03",
    title: "Fine-Tuning Workflow",
    type: "AI/ML",
    level: "Expert",
    duration: "12h",
    completed: false
  }, {
    id: "3.04",
    title: "Model Deployment at Edge",
    type: "Deployment",
    level: "Expert",
    duration: "5h",
    completed: false
  }]
}, {
  number: 4,
  title: "Global Scale Orchestration",
  description: "Optimizing for millions. Kubernetes, Load Balancing, and Global CDN synchronization strategies.",
  locked: true,
  modules: [{
    id: "4.01",
    title: "Containerization Mastery",
    type: "DevOps",
    level: "Advanced",
    duration: "3h",
    completed: false
  }, {
    id: "4.02",
    title: "Kubernetes Cluster Management",
    type: "DevOps",
    level: "Expert",
    duration: "15h",
    completed: false
  }, {
    id: "4.03",
    title: "Global Load Balancing",
    type: "Infrastructure",
    level: "Expert",
    duration: "4h",
    completed: false
  }, {
    id: "4.04",
    title: "Final Capstone Certification",
    type: "Build",
    level: "Master",
    duration: "40h",
    completed: false
  }]
}];
function AcademyPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const moduleTypes = ["All", "Technical", "Logic", "Design", "AI/ML", "DevOps", "Infrastructure"];
  const filteredPhases = reactExports.useMemo(() => {
    return phases.map((phase) => ({
      ...phase,
      modules: phase.modules.filter((m) => (filter === "All" || m.type === filter) && (search === "" || m.title.toLowerCase().includes(search.toLowerCase())))
    })).filter((p) => p.modules.length > 0);
  }, [filter, search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 bg-white overflow-y-auto selection:bg-blue-600 selection:text-white scroll-smooth", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-40 pb-32 px-8 border-b border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-900 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] italic mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 14, className: "animate-pulse" }),
          " Archive_v2.06"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[12rem] font-[1000] text-slate-900 italic uppercase tracking-tighter leading-[0.7] mb-12", children: [
          "Acad",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "emy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold italic text-slate-500 leading-relaxed max-w-2xl", children: [
          "The technical manifest for high-frequency neural engineering.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900", children: " Zero abstraction. Raw logic. " }),
          "Master the substrate and scale the machine."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-80 space-y-6 border-l-4 border-blue-600 pl-12 pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Active Nodes", value: "12,482" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Archive Density", value: "480GB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Signal Integrity", value: "99.9%" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900 py-16 px-8 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-20 opacity-5 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { size: 400, className: "text-blue-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardMetric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, {}), label: "Network Load", value: "Optimal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardMetric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, {}), label: "Threat Level", value: "Minimal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardMetric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, {}), label: "Compute", value: "High" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardMetric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(History, {}), label: "Uptime", value: "842h" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardMetric, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, {}), label: "Registry", value: "Active" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 no-scrollbar", children: moduleTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(t), className: `px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest italic transition-all whitespace-nowrap
                  ${filter === t ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}
                `, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-300", size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Query curriculum...", className: "w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 font-black italic uppercase text-slate-900 focus:outline-none focus:ring-2 ring-blue-600 transition-all" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-8 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-40", children: filteredPhases.map((phase) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 sticky top-48 h-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-7xl font-[1000] italic ${phase.locked ? "text-slate-100" : "text-slate-900"}`, children: [
            "0",
            phase.number
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-[2px] flex-1 ${phase.locked ? "bg-slate-100" : "bg-slate-900"}` }),
          phase.locked && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 24, className: "text-blue-600" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl font-black italic uppercase text-slate-900 tracking-tighter mb-6", children: phase.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium italic leading-relaxed mb-10", children: phase.description }),
        phase.locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
          to: "/settings"
        }), className: "w-full h-16 rounded-2xl bg-blue-600 text-white font-black italic uppercase hover:bg-slate-900 transition-all shadow-2xl shadow-blue-500/20", children: "Unlock Mastery Protocol" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-3xl bg-slate-50 border border-slate-100 italic", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-blue-600 uppercase mb-2", children: "Phase Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-900 uppercase", children: "Baseline Access Established" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `lg:col-span-8 space-y-4 ${phase.locked ? "opacity-40 grayscale pointer-events-none" : ""}`, children: phase.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col md:flex-row items-center justify-between p-8 rounded-[2.5rem] border-2 border-slate-50 bg-white hover:border-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-16 w-16 rounded-2xl flex items-center justify-center transition-all ${m.completed ? "bg-blue-600 text-white" : "bg-slate-900 text-white group-hover:bg-blue-600"}`, children: m.completed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black text-blue-600 uppercase tracking-widest italic", children: [
                m.id,
                " // ",
                m.type
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-slate-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-slate-400 uppercase italic", children: m.level })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-black italic uppercase text-slate-900 tracking-tight", children: m.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 md:mt-0 md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase italic mb-1", children: "Compute Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black italic uppercase text-slate-900", children: m.duration })
        ] })
      ] }, m.id)) })
    ] }, phase.number)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-slate-50 py-32 px-8 border-y border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 italic", children: "Core_Logic_Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl font-[1000] italic uppercase tracking-tighter text-slate-900", children: "Signal Flow Architecture." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium italic text-lg leading-relaxed", children: "In Module 2.04, we dismantle the standard request-response cycle and implement a multi-threaded neural signal chain. This allows your application to process logic before the data even hits the primary database." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Microscope, {}), label: "Deep Inspection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, {}), label: "Signal Guard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, {}), label: "Thread Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Feature, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Boxes, {}), label: "Vector Shifting" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden border-[12px] border-slate-800 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-[10px] font-mono text-slate-500 italic", children: "kinetix_logic_engine.ts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "font-mono text-sm leading-relaxed overflow-x-auto no-scrollbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-blue-400", children: "async function" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white", children: "authorizeSignal(token, flow)" }),
          " ",
          "{",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-slate-500 pl-6", children: "// Check token integrity against vector manifest" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-blue-400 pl-6", children: "const" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white", children: "registry = " }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-blue-400", children: "await" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white", children: "db.neural_registry.fetch();" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-blue-400 pl-6", children: "if" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white", children: "( !registry.active )" }),
          " ",
          "{",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-orange-400 pl-12 text-xs", children: "throw new NeuralLinkError('PROTOCOL_MISMATCH');" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white pl-6", children: "}" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-slate-500 pl-6", children: "// Initialize high-concurrency pipe" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-blue-400 pl-6", children: "return await" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white", children: "pipe.initialize(token, flow);" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "}"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-[1000] italic uppercase text-slate-900 tracking-tighter", children: "Documentation Registry." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "Kinetix CLI Manifest", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "Logic Flow Schematics", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "Database Indexing Whitepaper", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "Neural Security Protocol", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FingerprintPattern, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "UI Component Library", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointer2, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCard, { title: "Deployment Checklist", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, {}) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-slate-50 py-32 px-8 border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-[1000] italic uppercase text-slate-900 mb-16 text-center underline decoration-blue-600 decoration-8 underline-offset-[12px]", children: "System Directives (FAQ)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: "What hardware is required for the Academy labs?", a: "Minimum requirement is a logic-capable processor with 16GB RAM. However, all intensive neural compute is handled by our remote edge clusters once your Kinetix API key is active." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: "How do I verify my Neural Architect certification?", a: "Every certification is etched onto the blockchain registry. Recruiters can verify your unique ID via our public verification endpoint /verify/{CERT_ID}." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: "Can I pause my progress and return later?", a: "Your neural state is synchronized to the Supabase cloud every 30 seconds. You can swap devices or platforms instantly without losing a single line of progress." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: "Is there support for enterprise teams?", a: "Yes. Organizations with 10+ architects receive a dedicated node and custom logic training sessions with the Kinetix lead engineers." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-40 px-8 text-center relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 }),
        " Peak_Performance_Initialized"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-8xl font-[1000] italic uppercase tracking-tighter text-slate-900 mb-12 leading-[0.8]", children: [
        "Elevate",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " Your Code."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-bold italic text-xl mb-16", children: "The baseline is active. The curriculum is mapped. Upgrade to Mastery Tier to unlock Phases 02, 03, and 04 immediately." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
        to: "/settings"
      }), className: "h-24 px-16 rounded-[3rem] bg-blue-600 text-white font-black italic uppercase text-2xl shadow-2xl shadow-blue-500/20 hover:bg-slate-900 transition-all transform hover:scale-105", children: [
        "Upgrade Membership Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 32, className: "ml-4" })
      ] })
    ] }) })
  ] });
}
function StatItem({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest italic mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black italic uppercase text-slate-900 leading-none", children: value })
  ] });
}
function DashboardMetric({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1 italic", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black italic uppercase text-white", children: value })
    ] })
  ] });
}
function Feature({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-600", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase italic tracking-widest text-slate-900", children: label })
  ] });
}
function ResourceCard({
  title,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 rounded-[3rem] border border-slate-100 hover:border-slate-900 hover:shadow-2xl transition-all group cursor-pointer bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black italic uppercase text-slate-900 mb-6", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 italic tracking-widest group-hover:gap-4 transition-all", children: [
      "Access Node ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
    ] })
  ] });
}
function FaqItem({
  q,
  a
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-600 font-black italic text-sm pt-1", children: "Query_" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black italic uppercase text-slate-900 mb-4 group-hover:text-blue-600 transition-colors", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium italic leading-relaxed", children: a })
    ] })
  ] });
}
export {
  AcademyPage as component
};
