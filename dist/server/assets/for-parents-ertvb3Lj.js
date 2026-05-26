import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import { C as CircleCheckBig } from "./circle-check-big-DXQRlrZt.js";
import { c as createLucideIcon, g as ChevronDown, h as Award } from "./router-BMdv6_PJ.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { E as Eye } from "./eye-5kswavvw.js";
import { C as Clock } from "./clock-DpKP54rv.js";
import { U as Users } from "./users-3fJUauSG.js";
import { G as Globe } from "./globe-13oO7l01.js";
import { C as ChartColumn } from "./chart-column-rZ-jlRbH.js";
import { B as Brain } from "./brain-ChGqDjJW.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$1);
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
function ForParents() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const stats = [{
    value: "94%",
    label: "of students improve math scores within 90 days"
  }, {
    value: "3.2x",
    label: "faster learning velocity vs. traditional methods"
  }, {
    value: "8–15",
    label: "age range with custom-tailored difficulty paths"
  }, {
    value: "99.9%",
    label: "uptime — learning never stops"
  }];
  const safetyFeatures = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "text-blue-400", size: 28 }),
    title: "Sandboxed AI Environment",
    desc: "Our Neural Engine has zero access to the open web. Every interaction is logged, filtered, and restricted to curriculum-approved content only. Your child cannot be exposed to external information."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "text-purple-400", size: 28 }),
    title: "Full Session Transparency",
    desc: "Review every prompt your child submitted and every response they received — timestamped, searchable, and exportable. You see exactly what the AI said, word for word."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "text-green-400", size: 28 }),
    title: "Real-Time Anomaly Alerts",
    desc: "If a student attempts to circumvent the system or inputs off-curriculum content, you receive an instant notification with the full context of what occurred."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "text-amber-400", size: 28 }),
    title: "Screen Time Controls",
    desc: "Set daily session limits, blackout windows, and weekend restrictions directly from the Parent Dashboard. The system enforces hard stops with no workarounds."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "text-rose-400", size: 28 }),
    title: "No Social Features",
    desc: "Kinetix is not a social platform. There are no DMs, no public profiles, no friend lists, and no community chat. Pure learning, zero distraction."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "text-cyan-400", size: 28 }),
    title: "COPPA & FERPA Compliant",
    desc: "We adhere to all federal child data protection regulations. Student data is never sold, never shared with advertisers, and encrypted at rest and in transit."
  }];
  const progressFeatures = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "text-blue-400", size: 24 }),
    title: "Weekly Neural Maps",
    desc: "Every Friday, receive a visual breakdown of exactly which concepts your child mastered, struggled with, and revisited. Color-coded by difficulty tier."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-purple-400", size: 24 }),
    title: "Milestone Projections",
    desc: "Our algorithm projects when your child will complete each module based on current velocity. See the roadmap from their first lesson to their first deployed app."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "text-amber-400", size: 24 }),
    title: "Certificate Issuance",
    desc: "Upon completing each curriculum tier, students receive a verifiable digital certificate — designed to look impressive in a college application portfolio."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "text-green-400", size: 24 }),
    title: "Cognitive Skill Tagging",
    desc: "Beyond coding, we track transferable skills: logical decomposition, pattern recognition, error analysis, and systems thinking — all mapped to academic standards."
  }];
  const curriculum = [{
    tier: "01",
    name: "Logic Foundations",
    duration: "4 weeks",
    skills: ["Boolean Logic", "Conditional Thinking", "Variables & State", "Debugging Mindset"],
    color: "blue"
  }, {
    tier: "02",
    name: "Python Fundamentals",
    duration: "6 weeks",
    skills: ["Syntax & Structure", "Functions", "Loops & Iteration", "Data Types"],
    color: "purple"
  }, {
    tier: "03",
    name: "Object-Oriented Design",
    duration: "5 weeks",
    skills: ["Classes & Objects", "Inheritance", "Encapsulation", "Real-World Modeling"],
    color: "green"
  }, {
    tier: "04",
    name: "AI Integration",
    duration: "6 weeks",
    skills: ["API Architecture", "Prompt Engineering", "Neural Networks", "Model Deployment"],
    color: "amber"
  }, {
    tier: "05",
    name: "Full-Stack Capstone",
    duration: "8 weeks",
    skills: ["React Fundamentals", "Database Design", "Authentication", "Live Deployment"],
    color: "rose"
  }];
  const faqs = [{
    q: "Is Kinetix appropriate for a child with zero coding experience?",
    a: "Absolutely. Tier 01 begins with pure logic — no syntax, no screens, just thinking exercises. We build the cognitive muscle before we introduce any programming language. Most parents are surprised how quickly their child adapts."
  }, {
    q: "How much parental involvement is required?",
    a: "None — the platform is fully self-directed. However, we recommend parents review the weekly neural map together with their child. The Parent Dashboard gives you everything you need to have meaningful conversations about their progress without needing to understand code yourself."
  }, {
    q: "What if my child falls behind or loses interest?",
    a: "Our AI detects disengagement patterns within a single session. When a student repeatedly struggles with a concept, the system automatically introduces an alternative teaching modality — visual, kinesthetic, or narrative — without the student needing to ask for help."
  }, {
    q: "How is Kinetix different from Scratch, Code.org, or Khan Academy?",
    a: "Those platforms teach children how to execute coding tasks. We teach them how to think like engineers. Our curriculum is designed to build transferable cognitive architecture — the same mental models used by professional software developers — not just the ability to drag blocks around."
  }, {
    q: "Can I cancel at any time?",
    a: "Yes. No contracts, no cancellation fees, no retention dark patterns. Cancel from the Parent Dashboard in one click. Your child's progress data is exported automatically and stored for 12 months post-cancellation."
  }, {
    q: "What devices does Kinetix support?",
    a: "Kinetix runs in any modern browser on any device — Chromebook, iPad, Windows, Mac. We recommend a keyboard for older students, but the platform is fully touch-optimized for younger learners."
  }];
  const colorMap = {
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    green: "text-green-400 border-green-500/30 bg-green-500/10",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    rose: "text-rose-400 border-rose-500/30 bg-rose-500/10"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 text-white selection:bg-blue-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.3em]", children: "Parental Oversight Protocol" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl lg:text-9xl font-[1000] tracking-tighter italic leading-none mb-10", children: [
          "YOUR CHILD'S",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600", children: "NEURAL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "UPGRADE."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12", children: "Kinetix isn't a coding app. It's a cognitive development system designed to rewire how your child approaches every complex problem they'll ever face — starting with software." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/pricing", className: "inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group", children: [
            "Start Now!",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/curriculum", className: "inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all", children: "View Curriculum" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-slate-800 py-12 px-6 bg-slate-900/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-[1000] italic text-blue-400 mb-2", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight", children: stat.label })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6", children: "The Parent Promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8", children: [
          "YOU ARE IN",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "COMPLETE",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "CONTROL."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-400 font-medium text-lg leading-relaxed mb-8", children: [
          "We built Kinetix for parents who want to give their child an unfair advantage — without sacrificing transparency, safety, or their own peace of mind. Every feature we ship starts with one question: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold italic", children: '"Would a thoughtful parent approve of this?"' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed", children: "You don't need to understand code to understand your child's progress. Our Parent Dashboard translates every technical metric into plain language — so you're never in the dark about what your child is learning, how fast they're learning it, and whether they're being challenged enough." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 bg-gradient-to-br from-blue-500/50 to-purple-600/50 rounded-[2rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-[1.8rem] p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Parent Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-green-400 uppercase tracking-widest", children: "● Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [{
          label: "Sessions This Week",
          value: "7"
        }, {
          label: "Avg. Focus Score",
          value: "94%"
        }, {
          label: "Concepts Mastered",
          value: "23"
        }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 rounded-xl p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black text-blue-400", children: item.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1", children: item.label })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-white", children: "Weekly Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-blue-400 font-bold", children: "Tier 02 — Python" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
            label: "Variables & State",
            pct: 100,
            color: "bg-green-500"
          }, {
            label: "Functions",
            pct: 87,
            color: "bg-blue-500"
          }, {
            label: "Loops",
            pct: 62,
            color: "bg-amber-500"
          }, {
            label: "Data Types",
            pct: 34,
            color: "bg-slate-600"
          }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-bold mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
                item.pct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-slate-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${item.color} rounded-full`, style: {
              width: `${item.pct}%`
            } }) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-600/20 border border-blue-500/30 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1", children: "AI Tutor Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-300 font-medium leading-relaxed", children: '"Emma showed strong pattern recognition today. She independently caught a loop error before I flagged it — a significant milestone for Tier 02."' })
        ] })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-slate-900/30 border-y border-slate-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Safety Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter", children: [
          "BUILT SAFE.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "NOT PATCHED SAFE."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg mt-6 max-w-2xl mx-auto", children: "Safety isn't a feature we added. It's the foundation every other feature was built on top of." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: safetyFeatures.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 h-14 w-14 rounded-2xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center transition-all", children: feature.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black mb-3", children: feature.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium leading-relaxed text-sm", children: feature.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "The Roadmap" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6", children: [
          "FROM ZERO TO",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "DEPLOYED APP."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg max-w-2xl", children: "29 weeks. 5 tiers. One comprehensive transformation from logical thinker to full-stack engineer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: curriculum.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-8 rounded-[2rem] border ${colorMap[tier.color]} transition-all hover:scale-[1.01] group`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-5xl font-[1000] italic ${colorMap[tier.color].split(" ")[0]} shrink-0`, children: tier.tier }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: tier.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500 border border-slate-700 px-3 py-1 rounded-full w-fit", children: tier.duration })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tier.skills.map((skill, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full", children: skill }, j)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: `${colorMap[tier.color].split(" ")[0]} shrink-0 opacity-40 group-hover:opacity-100 transition-opacity`, size: 28 })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-slate-900/30 border-y border-slate-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Progress Intelligence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter", children: [
          "YOU'LL ALWAYS",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "KNOW WHERE THEY STAND."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: progressFeatures.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0", children: feature.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black mb-2", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium leading-relaxed text-sm", children: feature.desc })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-slate-900/30 border-y border-slate-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Common Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-[1000] italic tracking-tighter", children: "PARENT FAQ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-800 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-lg pr-4", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 20, className: `text-blue-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}` })
        ] }),
        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800 pt-4", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[3rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950 rounded-[2.8rem] p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6", children: "Ready to Begin?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6", children: [
        "GIVE THEM THE",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "UNFAIR ADVANTAGE." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto", children: "Start with a couple clicks!. Cancel anytime. Your child could write their first program by tomorrow." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/signup", className: "inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group", children: [
          "Start Now!",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all", children: "Talk to Our Team" })
      ] })
    ] }) }) }) })
  ] });
}
export {
  ForParents as component
};
