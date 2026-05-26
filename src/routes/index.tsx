import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  ArrowRight,
  Terminal,
  Rocket,
  ShieldCheck,
  Cpu,
  BadgeCheck,
  Flame,
  ChevronRight,
  Users,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "KINETIX — Engineering the Next Generation" },
      {
        name: "description",
        content:
          "KINETIX is the AI-powered coding platform turning kids 8–12+ into builders. 30-day missions. Real projects. Verified results.",
      },
    ],
  }),
});

/* ─── tiny counter hook ─── */
function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
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

/* ─── Metric card (animated counter) ─── */
function Metric({ value, suffix, label, started }) {
  const count = useCountUp(value, 1600, started);
  return (
    <div className="flex flex-col items-center gap-1 p-8 rounded-[2rem] bg-slate-900 border border-slate-800">
      <span className="text-5xl font-[1000] italic tracking-tighter text-white">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 mt-1">
        {label}
      </span>
    </div>
  );
}

const FEATURES = [
  {
    icon: <Brain size={22} className="text-blue-400" />,
    tag: "Module 01",
    title: "AI Mentor 1.0",
    desc: "An adaptive AI tutor that never gives answers — only precision questions that build real problem-solving instinct. Available 24/7. Gets smarter as your student does.",
  },
  {
    icon: <Rocket size={22} className="text-purple-400" />,
    tag: "Module 02",
    title: "Custom 30-Day Roadmaps",
    desc: "Every learner gets a bespoke mission generated from their interests, age, and pace. No two students see the same curriculum. Powered by our fine-tuned learning model.",
  },
  {
    icon: <BadgeCheck size={22} className="text-green-400" />,
    tag: "Module 03",
    title: "Verified Certifications",
    desc: "Blockchain-anchored credentials that prove what a student actually built — not just what they watched. Accepted by over 40 partner schools and coding programs.",
  },
];

const STATS = [
  { value: 99, suffix: "%", label: "Pass Rate of students" },
  { value: 94, suffix: "%", label: "30-Day Completion Rate" },
  { value: 3, suffix: "x", label: "Faster than Bootcamps" },

];

function Landing() {
  /* trigger stat counters when section enters viewport */
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-36 px-6 overflow-hidden">
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.028] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* radial glow — top left */}
        <div className="absolute top-0 left-0 w-[700px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 65%)" }} />
        {/* thin top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">


          {/* headline */}
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-[1000] tracking-tighter italic leading-none mb-10 max-w-5xl">
            CODE OR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-500">
              BE CODED.
            </span>
          </h1>

          {/* sub-headline */}
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-14">
            KINETIX is the world's first AI-native coding platform for builders aged 8–12+.
            Our 30-day missions ship real software, build real skills, and produce the next generation of engineers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-3 px-9 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group shadow-lg shadow-blue-600/20"
            >
              Initialize Mission
              <Rocket size={16} className="group-hover:translate-y-[-2px] transition-transform" />
            </Link>
            <Link
              to="/for-students"
              className="inline-flex items-center justify-center gap-3 px-9 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all"
            >
              View the Platform
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* sub-trust line */}
          <p className="mt-8 text-xs font-bold text-slate-600 uppercase tracking-widest">
            Create an account for free · Choose a plan to start learning
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STAT COUNTER BAR
      ══════════════════════════════════════════ */}
      <section ref={statsRef} className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <Metric key={s.label} {...s} started={statsVisible} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE GRID
      ══════════════════════════════════════════ */}
      <section className="px-6 py-28 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          {/* section label */}
          <div className="mb-16">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              Core Systems
            </p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight max-w-2xl">
              THREE SYSTEMS.<br />
              <span className="text-blue-400">ZERO COMPROMISE.</span>
            </h2>
          </div>

          {/* cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-9 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:translate-y-[-4px] flex flex-col"
              >
                <div className="h-12 w-12 rounded-2xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center mb-7 transition-all">
                  {f.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {f.tag}
                </p>
                <h3 className="text-2xl font-black italic tracking-tight mb-4">{f.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed flex-1">{f.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CODE PREVIEW (social proof artifact)
      ══════════════════════════════════════════ */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
              What students ship
            </p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8">
              REAL CODE.<br />
              REAL APPS.<br />
              <span className="text-blue-400"></span>
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed mb-6">
              By Day 30, every KINETIX student has shipped at least one live application. Not a tutorial clone — an original project they designed, built, and deployed.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "AI chatbot with a custom personality",
                "Browser-based platformer game",
                "Live data dashboard",
                "Full-stack app with real users",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-slate-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/for-students"
              className="inline-flex items-center gap-3 px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-xs tracking-widest transition-all"
            >
              Explore the curriculum <ChevronRight size={14} />
            </Link>
          </div>

          {/* terminal */}
          <div className="p-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[2.5rem]">
            <div className="bg-slate-900 rounded-[2.3rem] overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800">
                <div className="h-3 w-3 rounded-full bg-rose-500" />
                <div className="h-3 w-3 rounded-full bg-amber-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  day-30-capstone.py
                </span>
              </div>
              <div className="p-8">
                <pre className="font-mono text-sm text-blue-300 overflow-x-auto leading-relaxed">
                  <code>{`class KinetixGraduate:
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
# → 200 OK · 847 visits · 4.9★ rating`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PHILOSOPHY (founder quote)
      ══════════════════════════════════════════ */}
      <section className="px-6 py-28 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-16 text-center">
            The Philosophy
          </p>

          <blockquote className="relative">
            {/* giant quote mark */}
            <span
              className="absolute -top-8 -left-4 text-[10rem] font-[1000] leading-none text-slate-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[1000] italic tracking-tight leading-tight text-white relative z-10 mb-12">
              Every civilization-defining technology started with someone who knew how to build it.
              We're not teaching kids to code. We're engineering the next generation of architects —
              the ones who will build the systems that the rest of the world runs on.
            </p>
            <footer className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="font-black text-blue-400 text-sm tracking-tight">HG</span>
              </div>
              <div>
                <p className="font-black text-white text-lg tracking-tight">Henos Goitom</p>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
                  Founder & Lead Architect, KINETIX
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORM PILLARS (icon grid)
      ══════════════════════════════════════════ */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              Why KINETIX
            </p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter">
              BUILT FOR<br />SCALE.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Cpu size={20} className="text-blue-400" />, title: "AI-Native Core", desc: "Every feature is built around adaptive AI, not bolted on as an afterthought." },
              { icon: <ShieldCheck size={20} className="text-green-400" />, title: "Safe & COPPA-Ready", desc: "Zero ads, zero strangers. Enterprise-grade child safety infrastructure." },
              { icon: <Globe size={20} className="text-purple-400" />, title: "Global Curriculum", desc: "Localized for 14 languages. Designed for any timezone, any device." },
              { icon: <TrendingUp size={20} className="text-amber-400" />, title: "Measurable ROI", desc: "School and district partners see 3x completion rates vs. traditional CS classes." },
            ].map((p) => (
              <div key={p.title} className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="font-black text-lg italic tracking-tight mb-3">{p.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINALE
      ══════════════════════════════════════════ */}
      <section className="px-6 pt-8 pb-28">
        <div className="max-w-4xl mx-auto">
          <div className="p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[3rem]">
            <div className="bg-slate-950 rounded-[2.8rem] p-16 text-center relative overflow-hidden">
              {/* texture */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10">
                  <Flame size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    First Session Free · No Commitment
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-[1000] italic tracking-tighter mb-6">
                  BOOT UP.<br />
                  <span className="text-blue-400">BUILD SOMETHING.</span>
                </h2>
                <p className="text-slate-400 font-medium text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                  Join Many young builders already on their KINETIX mission. Your first session launches in under 60 seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group shadow-xl shadow-blue-600/20"
                  >
                    Initialize Your Account
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
