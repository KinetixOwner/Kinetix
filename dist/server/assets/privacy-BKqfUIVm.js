import { U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { H as History, D as Database } from "./history-CAtVzwkA.js";
import { G as Globe } from "./globe-13oO7l01.js";
import { C as CircleCheck } from "./circle-check-D7Mv44sH.js";
import { c as createLucideIcon } from "./router-BMdv6_PJ.js";
import { F as FingerprintPattern } from "./fingerprint-pattern-BrY6f5j4.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { M as Mail } from "./mail-D4hfM70y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10 16h.01", key: "1bzywj" }],
  [
    "path",
    {
      d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "18tbho"
    }
  ],
  ["path", { d: "M21.946 12.013H2.054", key: "zqlbp7" }],
  ["path", { d: "M6 16h.01", key: "1pmjb7" }]
];
const HardDrive = createLucideIcon("hard-drive", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }]
];
const Scale = createLucideIcon("scale", __iconNode$1);
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
function PrivacyPage() {
  const lastUpdated = "April 18, 2026";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", style: {
        backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
          " Trust & Safety Portal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-6", children: [
          "Privacy ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Infrastructure" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 text-slate-400 font-bold uppercase text-sm tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 16 }),
            " Last Updated: ",
            lastUpdated
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 }),
            " Version 4.2.0"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-emerald-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16 }),
            " COPPA Compliant"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-3 hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-32 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 ml-4", children: "Table of Contents" }),
        [{
          id: "overview",
          label: "Executive Overview"
        }, {
          id: "coppa",
          label: "COPPA Compliance"
        }, {
          id: "collection",
          label: "Data Collection"
        }, {
          id: "usage",
          label: "How We Use Data"
        }, {
          id: "security",
          label: "Security Protocols"
        }, {
          id: "rights",
          label: "Parental Rights"
        }, {
          id: "contact",
          label: "Legal Contact"
        }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${item.id}`, className: "block px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-all border-l-2 border-transparent hover:border-blue-600", children: item.label }, item.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "lg:col-span-9 space-y-24 pb-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "overview", className: "scroll-mt-32 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block p-4 bg-slate-50 rounded-3xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 32, className: "text-slate-900" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight", children: "1. Executive Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-slate max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-slate-600 leading-relaxed font-medium", children: [
            'Kinetix Learning Systems ("we," "us," or "our") operates with a primary philosophy:',
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 font-bold italic", children: " Children are not products." }),
            " Our infrastructure is designed to provide world-class AI education while maintaining a zero-knowledge stance on sensitive personal identifiers. This document outlines our rigorous protocols for data handling and the legal frameworks that govern our platform."
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 pt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black uppercase mb-2 italic", children: "The Gold Standard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 text-sm leading-relaxed font-medium", children: "We exceed the requirements of COPPA, GDPR-K, and FERPA. Our security team performs weekly audits on all AI interaction logs to ensure no PII (Personally Identifiable Information) is inadvertently stored." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black uppercase mb-2 italic", children: "Zero Ad Policy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 text-sm leading-relaxed font-medium", children: "There are no third-party advertisements on Kinetix. We do not use behavioral tracking, nor do we sell or rent data to any third-party entity for any reason." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "coppa", className: "scroll-mt-32 p-12 bg-blue-50 rounded-[4rem] border border-blue-100 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 40, className: "text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight", children: "2. Account Sovereignty" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 font-medium leading-relaxed", children: "Kinetix operates on a **Parent-First** architecture. Access to the learning environment is managed entirely through the primary account holder's dashboard. No invasive ID checks, no government verification—just pure parental oversight." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-white rounded-3xl shadow-sm border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black uppercase italic text-slate-900 mb-2", children: "Instant Dashboard Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm", children: "Every student account is tethered to a Parent Command Center. You see what they see, in real-time." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-white rounded-3xl shadow-sm border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black uppercase italic text-slate-900 mb-2", children: "Zero-Knowledge Enrollment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm", children: "We don't ask for birthdates or social identifiers. We only require a nickname to get the mission started." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "rights", className: "scroll-mt-32 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 24 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight text-slate-900", children: "6. Total Oversight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-500 font-medium italic", children: `"You are the administrator of your child's digital growth."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [{
            title: "One-Click Deletion",
            desc: "Instantly wipe all project history and account data."
          }, {
            title: "Progress Transparency",
            desc: "View every line of code written by the student."
          }, {
            title: "Session Control",
            desc: "Remotely manage learning hours and wellness breaks."
          }].map((feat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-black uppercase italic text-sm mb-2", children: feat.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-xs leading-relaxed", children: feat.desc })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "collection", className: "scroll-mt-32 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-black uppercase italic tracking-tight flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "text-slate-400" }),
            " 3. Data Collection"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-2 border-slate-100 rounded-[3rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-8 text-xs font-black uppercase tracking-widest text-slate-400", children: "Data Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-8 text-xs font-black uppercase tracking-widest text-slate-400", children: "Collected For" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-8 text-xs font-black uppercase tracking-widest text-slate-400", children: "Retention" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-900 uppercase italic", children: "User Alias" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Non-identifying nickname" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-medium text-slate-600 italic", children: "Platform Personalization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-bold text-blue-600", children: "Until Deletion" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-900 uppercase italic", children: "Parent Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Legal account holder" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-medium text-slate-600 italic", children: "Billing & Safety Alerts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-bold text-blue-600", children: "Until Deletion" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-900 uppercase italic", children: "Coding History" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Code snippets & logs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-medium text-slate-600 italic", children: "AI Tutor Context" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-bold text-blue-600", children: "30 Day Rolling" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-900 uppercase italic", children: "Device Meta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Browser/OS type" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-medium text-slate-600 italic", children: "Performance Optimization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-8 text-sm font-bold text-blue-600", children: "Session Only" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "usage", className: "scroll-mt-32 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight", children: "4. AI Intelligence Logic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 bg-slate-950 text-white rounded-[4rem] relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FingerprintPattern, { className: "absolute top-10 right-10 text-blue-600 opacity-20", size: 150 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-300 font-medium leading-relaxed italic", children: `"Our AI does not 'learn' from your child. It is a pre-trained model that uses a secure API tunnel to process code logic. We do not use student code to train future versions of our AI."` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "text-yellow-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-400", children: [
                  "We use ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "Anonymized Prompt Processing" }),
                  ". When a student asks the AI for help, their identity is replaced with a unique session ID before it reaches the AI server."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "security", className: "scroll-mt-32 space-y-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight", children: "5. Security Protocols" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black uppercase italic", children: "Encryption at Rest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 leading-relaxed text-sm", children: "All database entries are encrypted using AES-256 standards. Our database is hosted on dedicated, SOC2-compliant hardware in geographically isolated zones." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-black uppercase italic", children: "SSL in Transit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 leading-relaxed text-sm", children: "Every packet of data sent between your child's browser and our servers is protected by TLS 1.3 encryption, preventing Man-in-the-Middle (MITM) attacks." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "rights", className: "scroll-mt-32 p-12 border-2 border-slate-900 rounded-[4rem] space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight text-slate-900", children: "6. Parental Rights & Controls" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-slate-600 italic", children: "Under our Global Privacy Policy, parents maintain absolute control over their child's digital footprint." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: ["Access and Review Data", "Request Data Portability", "Update Identification Info", "Revoke AI Processing Consent", "Permanent Account Erasure", "Download Progress History"].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-slate-50 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "text-emerald-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-slate-700 uppercase", children: item })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "scroll-mt-32 space-y-8 bg-blue-600 text-white p-16 rounded-[4rem] text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 48, className: "mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black uppercase italic tracking-tight", children: "Data Protection Officer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl opacity-90 font-medium max-w-xl mx-auto italic", children: "Questions regarding our privacy framework or requests for data deletion should be sent to our legal department." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-widest opacity-60 mb-2", children: "Legal Correspondence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black italic", children: "privacy@kinetix.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold opacity-70 mt-4 uppercase", children: "Kinetix Learning Systems, Attn: Legal, Winnipeg, Manitoba, CA" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-slate-50 py-24 border-t border-slate-200 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black uppercase italic mb-4", children: "Your Trust is Our Infrastructure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 max-w-xl mx-auto mb-8 font-medium italic", children: "We update this policy as new regulations emerge. By using Kinetix, you agree to these security standards." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase italic tracking-widest text-xs hover:bg-blue-600 transition-colors", children: "Accept Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black uppercase italic tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all", children: "Download PDF" })
      ] })
    ] })
  ] });
}
export {
  PrivacyPage as component
};
