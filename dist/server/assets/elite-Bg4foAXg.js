import { U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { F as Flame } from "./flame-BTfdjBNn.js";
import { c as createLucideIcon } from "./router-BMdv6_PJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function ElitePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-slate-950 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "text-orange-500 mx-auto mb-6 animate-pulse", size: 48 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-black italic uppercase tracking-tighter mb-6", children: "The Elite Cohort" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 max-w-2xl mx-auto font-medium", children: "A selective, high-intensity program for students who have completed Levels 1-3 and are ready for professional deployment." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tighter mb-12 text-center", children: "Success Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [{
        name: "Leo, 12",
        project: "Crypto Tracker",
        quote: "I used to just play Minecraft. Now I'm building tools that use real-time data APIs."
      }, {
        name: "Sarah, 14",
        project: "AI Health Bot",
        quote: "Kinetix taught me that coding is about solving real world problems, not just puzzles."
      }, {
        name: "Arjun, 11",
        project: "Solar System Sim",
        quote: "The AI coach helped me understand physics through JavaScript. It was amazing."
      }].map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-500 transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "text-blue-600 mb-6 group-hover:rotate-12 transition-transform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-medium text-slate-700 italic mb-8", children: [
          '"',
          story.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-slate-300 rounded-full flex items-center justify-center font-black text-white", children: story.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black uppercase text-sm", children: story.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 font-bold uppercase tracking-widest", children: story.project })
          ] })
        ] })
      ] }, i)) })
    ] })
  ] });
}
export {
  ElitePage as component
};
