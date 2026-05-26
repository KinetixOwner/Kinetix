import { U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { S as Search } from "./search-DOtS_TuU.js";
import { M as Mail } from "./mail-D4hfM70y.js";
import { c as createLucideIcon, i as Instagram, M as MessageSquare } from "./router-BMdv6_PJ.js";
import { G as Globe } from "./globe-13oO7l01.js";
import { C as CircleQuestionMark } from "./circle-question-mark-CfSSjSNC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode);
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 py-24 text-white text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-[1000] uppercase italic tracking-tighter mb-6", children: "Mission Control" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xl max-w-2xl mx-auto font-medium", children: "Need a hand with your mission? Our team is standing by to help you and your young builder succeed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto mt-12 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500", size: 20 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-slate-900 border border-slate-800 p-5 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium", placeholder: "Search our knowledge base..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 -mt-12 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 bg-white border border-slate-100 shadow-2xl rounded-[3rem] p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-[1000] uppercase italic mb-8", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid md:grid-cols-2 gap-6", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold", placeholder: "John Doe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold", placeholder: "john@kinetix.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold appearance-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Technical Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Billing Question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Curriculum Feedback" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "School Partnerships" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 6, className: "w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-medium", placeholder: "Tell us how we can help..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:col-span-2 py-5 bg-blue-600 text-white font-[1000] uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-600/20", children: "Initiate Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-[1000] uppercase italic mb-6", children: "Direct Lines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 24 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60 font-black uppercase tracking-widest", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: "hello@kinetixcode.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 24 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60 font-black uppercase tracking-widest", children: "Instagram" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: "@kinetixcode" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 24 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60 font-black uppercase tracking-widest", children: "HQ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: "Winnipeg Manitoba" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-[1000] uppercase italic mb-4 text-slate-900", children: "Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: [{
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { size: 18 }),
            label: "Community FAQ"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18 }),
            label: "Safety Guide"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 18 }),
            label: "AI Tutor Guide"
          }].map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-slate-600 font-bold hover:text-blue-600 cursor-pointer transition-colors group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300 group-hover:text-blue-500 transition-colors", children: link.icon }),
            link.label
          ] }, i)) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
