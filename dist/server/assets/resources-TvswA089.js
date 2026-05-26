import { U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { B as BookOpen } from "./book-open-D2BZmq3g.js";
import { C as CircleQuestionMark } from "./circle-question-mark-CfSSjSNC.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BMdv6_PJ.js";
function ResourcesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-24 px-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl font-black uppercase italic tracking-tighter mb-16", children: [
      "Resources & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Learning Portal"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 bg-blue-600 rounded-[3rem] text-white space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black uppercase italic", children: "AI Tutor Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 font-medium", children: "Learn how to prompt your personal AI coach for better results and faster debugging." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-8 py-3 bg-white text-blue-600 font-black uppercase text-xs rounded-xl italic", children: "Read Guide" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 bg-slate-900 rounded-[3rem] text-white space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { size: 48, className: "text-blue-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black uppercase italic", children: "Community FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 font-medium", children: "Questions about billing, curriculum, or technical setups? Find the answers here." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-8 py-3 bg-blue-600 text-white font-black uppercase text-xs rounded-xl italic", children: "Visit FAQ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 p-12 border-2 border-slate-100 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 100, className: "text-slate-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-black uppercase italic text-slate-900", children: "Developer Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium max-w-xl", children: "For advanced students who want to explore our open-source API and build their own Kinetix integrations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase text-blue-600 italic", children: "API Reference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase text-blue-600 italic", children: "SDK Github" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ResourcesPage as component
};
