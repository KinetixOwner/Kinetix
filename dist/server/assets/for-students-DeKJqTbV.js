import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import { R as Rocket } from "./rocket-DL-Altiu.js";
import { C as Clock } from "./clock-DpKP54rv.js";
import { P as Play } from "./play-3GQz5-0X.js";
import { C as CircleCheckBig } from "./circle-check-big-DXQRlrZt.js";
import { B as Brain } from "./brain-ChGqDjJW.js";
import { c as createLucideIcon, g as ChevronDown } from "./router-BMdv6_PJ.js";
import { F as Flame } from "./flame-BTfdjBNn.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import { S as Sparkles } from "./sparkles-T3LTtS6o.js";
import { T as Trophy } from "./trophy-smHJiL40.js";
import { L as Layers } from "./layers-B7G8LIBu.js";
import { G as Globe } from "./globe-13oO7l01.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode);
function ForStudents() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [activeProject, setActiveProject] = reactExports.useState(0);
  const xpLevels = [{
    level: 1,
    name: "Init",
    xp: "0",
    color: "text-slate-400"
  }, {
    level: 2,
    name: "Debugger",
    xp: "500",
    color: "text-blue-400"
  }, {
    level: 3,
    name: "Loop Lord",
    xp: "1,200",
    color: "text-purple-400"
  }, {
    level: 4,
    name: "Function Master",
    xp: "2,500",
    color: "text-green-400"
  }, {
    level: 5,
    name: "Class Architect",
    xp: "5,000",
    color: "text-amber-400"
  }, {
    level: 6,
    name: "Neural Engineer",
    xp: "10,000",
    color: "text-rose-400"
  }];
  const projects = [{
    name: "Neural Logic Bot",
    tier: "Protocol 04",
    // Changed from 'Tier' to 'Protocol' for that OS feel
    desc: "Engineer a high-density logic bot utilizing prompt-injection layers. Architect a personality matrix and verify secure API integration within the local system environment.",
    stack: ["Python", "FastAPI", "Neural Engine", "Tailwind"],
    // Swapped HTML for Tailwind to sound more modern
    color: "blue",
    lines: "~340 lines of logic"
    // Swapped 'code' for 'logic'
  }, {
    name: "Platformer Game",
    tier: "Tier 02",
    desc: "Build a side-scrolling platformer from scratch with physics, collision detection, enemies, and a scoring system. No game engine — pure code.",
    stack: ["Python", "Pygame", "OOP", "Game Loop"],
    color: "purple",
    lines: "~520 lines of code"
  }, {
    name: "Full-Stack App",
    tier: "Tier 05",
    desc: "Your capstone project. A real web application with a database, user authentication, and a live URL you can share with anyone on the internet.",
    stack: ["React", "Node.js", "PostgreSQL", "Vercel"],
    color: "green",
    lines: "~1,200+ lines of code"
  }, {
    name: "Data Dashboard",
    tier: "Tier 03",
    desc: "Scrape real data from the internet, clean it with Python, and build a live dashboard that visualizes it. Make your data tell a story.",
    stack: ["Python", "BeautifulSoup", "Pandas", "Chart.js"],
    color: "amber",
    lines: "~280 lines of code"
  }];
  const tools = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 20, className: "text-green-400" }),
    name: "Neural IDE",
    desc: "A browser-based code editor built for learners. Syntax highlighting, error underlining, and AI hints — all in one place."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 20, className: "text-purple-400" }),
    name: "AI Co-Pilot",
    desc: "Your personal debugging partner. Ask it to explain your error, challenge it to quiz you, or have it review your code structure."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 20, className: "text-amber-400" }),
    name: "XP Engine",
    desc: "Every concept you master, every challenge you complete, every bug you squash earns you XP. Level up. Unlock rewards."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { size: 20, className: "text-blue-400" }),
    name: "Code History",
    desc: "Every version of every program you've ever written is saved automatically. Watch your skills evolve in real time."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 20, className: "text-rose-400" }),
    name: "Project Lab",
    desc: "A sandbox where you can build anything. No curriculum guardrails. Just you, your imagination, and infinite compute."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 20, className: "text-cyan-400" }),
    name: "Logic Architect:",
    desc: "One mission. Your code is verified against production-grade standards. Earn your Proof-of-Work. Show your parents your progress. Show your friends your rank. Build it."
  }];
  const faqs = [{
    q: "Do I need to know anything about coding to start?",
    a: "Zero. Literally nothing. Tier 01 doesn't even involve a computer for the first few lessons — it's all about learning to think like a programmer. We've had 8-year-olds with no tech experience ship their first app within 3 months."
  }, {
    q: "Is this like school? Will I be bored?",
    a: "We designed Kinetix specifically because school-style coding classes are boring. There are no lectures, no worksheets, and no multiple choice tests. Every lesson ends with something you built. That's the whole point."
  }, {
    q: "What if I get completely stuck?",
    a: "The AI Co-Pilot is available 24/7. It won't just give you the answer — it'll ask you questions that help you figure it out yourself. You'll feel way more proud when you crack it than if someone just told you. And if you're really stuck, our support team can jump in live."
  }, {
    q: "What do I actually end up being able to build?",
    a: "By the end of Tier 05, you'll have built a chatbot, a game, a data tool, and a full web app with real users and a live URL. These are things adult developers get paid real money to build. You'll be doing it at 13."
  }, {
    q: "How long does each session take?",
    a: "Most sessions are 20–45 minutes. You can go longer if you're in the zone. The platform is designed to respect your time — every lesson has a clear endpoint so you're never left hanging mid-concept."
  }, {
    q: "Can I do Kinetix if I'm already pretty good at coding?",
    a: "Yes. We have a placement assessment that will skip you past concepts you already know. If you can already write Python functions, we won't waste your time with the basics. We'll put you where you belong."
  }];
  const dailyChallenges = [{
    title: "Fibonacci Speedrun",
    difficulty: "Medium",
    xp: "+80 XP",
    time: "15 min"
  }, {
    title: "Fix the Broken Loop",
    difficulty: "Easy",
    xp: "+40 XP",
    time: "8 min"
  }, {
    title: "Build a Mini API",
    difficulty: "Hard",
    xp: "+200 XP",
    time: "45 min"
  }];
  const colorMap = {
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    green: "border-green-500/30 bg-green-500/10 text-green-400",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-400"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 text-white selection:bg-blue-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10 animate-pulse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.3em]", children: "Neural Interface: Active" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl lg:text-[10rem] font-[1000] tracking-tighter italic leading-none mb-10", children: [
          "STOP",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "PLAYING.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600", children: "START BUILDING." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12", children: "You've spent thousands of hours inside games someone else built. It's time to build your own. Kinetix gives you the code, the tools, and the AI to make it happen — starting today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/signup", className: "inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group", children: [
            "Boot Up",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 16, className: "group-hover:translate-y-[-2px] transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/curriculum", className: "inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all", children: "See What You'll Build" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[2.5rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-[2.3rem] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-6 py-4 border-b border-slate-800 bg-slate-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-rose-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "kinetix_hero.py" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-sm md:text-base text-blue-300 overflow-x-auto leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `class KinetixStudent:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.level = 1
        self.xp = 0
        self.projects_shipped = 0
        self.skills = []
    
    def learn(self, concept: str) -> str:
        self.skills.append(concept)
        self.xp += 100
        self._check_level_up()
        return f"✓ {concept} added to neural stack"
    
    def ship_project(self, name: str) -> str:
        self.projects_shipped += 1
        self.xp += 500
        return f"🚀 '{name}' is LIVE at {self.name}.kinetix.app"
    
    def _check_level_up(self):
        thresholds = [0, 500, 1200, 2500, 5000, 10000]
        for i, threshold in enumerate(thresholds):
            if self.xp >= threshold:
                self.level = i + 1

# --- INITIALIZE ---
you = KinetixStudent(name="You", age=12)

you.learn("Boolean Logic")      # ✓ Boolean Logic added to neural stack
you.learn("Python Functions")   # ✓ Python Functions added to neural stack
you.learn("AI API Integration") # ✓ AI API Integration added to neural stack
you.ship_project("My Chatbot")  # 🚀 'My Chatbot' is LIVE at You.kinetix.app

print(f"Level: {you.level} | XP: {you.xp} | Projects: {you.projects_shipped}")
# Output: Level: 3 | XP: 1800 | Projects: 1` }) }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 border-y border-slate-800/50 bg-slate-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6", children: "The XP System" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8", children: [
          "CODING IS",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "THE GAME.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "YOU'RE THE PLAYER." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed mb-6", children: "Every concept you learn, every bug you fix, every project you ship earns you XP. XP unlocks levels. Levels unlock new challenges, new tools, and exclusive cosmetics for your Neural Profile." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed", children: "The difference between Kinetix and a video game? The skills are real. The XP you earn here translates directly to a skill stack that could land you a job at 17, a startup at 19, or a $200k engineering salary at 22." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: xpLevels.map((lvl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-[1000] italic ${lvl.color} w-8 text-center shrink-0`, children: lvl.level }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-black text-sm ${lvl.color}`, children: lvl.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-slate-500", children: [
              lvl.xp,
              " XP"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full bg-gradient-to-r ${lvl.color.includes("blue") ? "from-blue-600 to-blue-400" : lvl.color.includes("purple") ? "from-purple-600 to-purple-400" : lvl.color.includes("green") ? "from-green-600 to-green-400" : lvl.color.includes("amber") ? "from-amber-600 to-amber-400" : "from-rose-600 to-rose-400"}`, style: {
            width: `${(i + 1) / xpLevels.length * 100}%`
          } }) })
        ] })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Today's Challenges" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter", children: [
          "NEW MISSIONS.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "EVERY DAY."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-16", children: dailyChallenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${c.difficulty === "Easy" ? "text-green-400 border-green-500/30 bg-green-500/10" : c.difficulty === "Medium" ? "text-amber-400 border-amber-500/30 bg-amber-500/10" : "text-rose-400 border-rose-500/30 bg-rose-500/10"}`, children: c.difficulty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 font-black text-sm", children: c.xp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black mb-3", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: c.time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-blue-400 font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start Challenge" })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-slate-900/30 border-y border-slate-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Real Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6", children: [
          "THINGS YOU'LL",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "ACTUALLY BUILD."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg", children: 'Not toy examples. Not "Hello World." Real software.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-8 flex-wrap", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveProject(i), className: `px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeProject === i ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`, children: p.name }, i)) }),
      projects[activeProject] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-10 rounded-[2rem] border ${colorMap[projects[activeProject].color]} transition-all`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 block", children: projects[activeProject].tier }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl font-black italic mb-4", children: projects[activeProject].name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium leading-relaxed text-lg mb-6", children: projects[activeProject].desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black text-slate-500 uppercase tracking-widest", children: projects[activeProject].lines })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4", children: "Tech Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: projects[activeProject].stack.map((s, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-black text-white", children: s }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2", children: "After this project you'll be able to:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Build it from scratch without tutorials", "Explain every line of code you wrote", "Add new features independently"].map((item, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm font-medium text-slate-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14, className: "text-green-400 shrink-0" }),
              item
            ] }, k)) })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "The Arsenal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter", children: [
          "BUILT FOR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "SERIOUS BUILDERS."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: tools.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center mb-6 transition-all", children: tool.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black mb-3", children: tool.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium text-sm leading-relaxed", children: tool.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 bg-slate-900/30 border-y border-slate-800/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6", children: "AI Co-Pilot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8", children: [
          "YOUR AI DOESN'T",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "DO YOUR HOMEWORK.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "IT MAKES YOU SMARTER." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed mb-6", children: "When you're stuck, the AI doesn't just give you the answer. It asks you questions. It hints. It points you toward the problem so you can crack it yourself." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg leading-relaxed", children: "Because the goal isn't a working program. The goal is a working brain that knows how to make working programs — without ever needing to ask for help again." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-slate-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 14, className: "text-purple-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-white", children: "Neural Co-Pilot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-green-400 font-bold", children: "● Online" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-800 rounded-2xl rounded-tl-sm p-4 max-w-[85%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-medium", children: "My loop runs forever and I don't know why" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-medium leading-relaxed", children: "Okay, let's diagnose this. What's supposed to make the loop stop? What condition are you checking?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-800 rounded-2xl rounded-tl-sm p-4 max-w-[85%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-medium", children: "i think when x equals 10" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-medium leading-relaxed", children: "Good. Now look at your loop — is x ever actually reaching 10? What's x's value at the start, and what's changing it each iteration?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-800 rounded-2xl rounded-tl-sm p-4 max-w-[85%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-400 font-bold", children: "oh. i forgot to increment x. i found it!" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 font-medium leading-relaxed", children: "Exactly. You just diagnosed your first infinite loop. That's +80 XP and a skill you'll use for the rest of your career. 🔥" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4", children: "Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl font-[1000] italic tracking-tighter", children: "REAL TALK." })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 14 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.3em]", children: "Your First Session Is Free" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-[1000] italic tracking-tighter mb-6", children: [
        "BOOT UP.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "LEVEL UP." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto", children: "Start your mission immediately." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/signup", className: "inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group", children: [
        "Initialize Your Account",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
      ] })
    ] }) }) }) })
  ] });
}
export {
  ForStudents as component
};
