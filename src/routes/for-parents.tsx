import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck, TrendingUp, Cpu, GraduationCap, Star, Lock, BarChart3, Clock, CheckCircle, ArrowRight, Zap, Brain, Eye, Bell, Calendar, Award, Users, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute('/for-parents')({
  component: ForParents,
})

function ForParents() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "94%", label: "of students improve math scores within 90 days" },
    { value: "3.2x", label: "faster learning velocity vs. traditional methods" },
    { value: "8–15", label: "age range with custom-tailored difficulty paths" },
    { value: "99.9%", label: "uptime — learning never stops" },
  ];

  const safetyFeatures = [
    {
      icon: <Lock className="text-blue-400" size={28} />,
      title: "Sandboxed AI Environment",
      desc: "Our Neural Engine has zero access to the open web. Every interaction is logged, filtered, and restricted to curriculum-approved content only. Your child cannot be exposed to external information."
    },
    {
      icon: <Eye className="text-purple-400" size={28} />,
      title: "Full Session Transparency",
      desc: "Review every prompt your child submitted and every response they received — timestamped, searchable, and exportable. You see exactly what the AI said, word for word."
    },
    {
      icon: <Bell className="text-green-400" size={28} />,
      title: "Real-Time Anomaly Alerts",
      desc: "If a student attempts to circumvent the system or inputs off-curriculum content, you receive an instant notification with the full context of what occurred."
    },
    {
      icon: <Clock className="text-amber-400" size={28} />,
      title: "Screen Time Controls",
      desc: "Set daily session limits, blackout windows, and weekend restrictions directly from the Parent Dashboard. The system enforces hard stops with no workarounds."
    },
    {
      icon: <Users className="text-rose-400" size={28} />,
      title: "No Social Features",
      desc: "Kinetix is not a social platform. There are no DMs, no public profiles, no friend lists, and no community chat. Pure learning, zero distraction."
    },
    {
      icon: <Globe className="text-cyan-400" size={28} />,
      title: "COPPA & FERPA Compliant",
      desc: "We adhere to all federal child data protection regulations. Student data is never sold, never shared with advertisers, and encrypted at rest and in transit."
    },
  ];

  const progressFeatures = [
    {
      icon: <BarChart3 className="text-blue-400" size={24} />,
      title: "Weekly Neural Maps",
      desc: "Every Friday, receive a visual breakdown of exactly which concepts your child mastered, struggled with, and revisited. Color-coded by difficulty tier."
    },
    {
      icon: <Calendar className="text-purple-400" size={24} />,
      title: "Milestone Projections",
      desc: "Our algorithm projects when your child will complete each module based on current velocity. See the roadmap from their first lesson to their first deployed app."
    },
    {
      icon: <Award className="text-amber-400" size={24} />,
      title: "Certificate Issuance",
      desc: "Upon completing each curriculum tier, students receive a verifiable digital certificate — designed to look impressive in a college application portfolio."
    },
    {
      icon: <Brain className="text-green-400" size={24} />,
      title: "Cognitive Skill Tagging",
      desc: "Beyond coding, we track transferable skills: logical decomposition, pattern recognition, error analysis, and systems thinking — all mapped to academic standards."
    },
  ];

  const curriculum = [
    { tier: "01", name: "Logic Foundations", duration: "4 weeks", skills: ["Boolean Logic", "Conditional Thinking", "Variables & State", "Debugging Mindset"], color: "blue" },
    { tier: "02", name: "Python Fundamentals", duration: "6 weeks", skills: ["Syntax & Structure", "Functions", "Loops & Iteration", "Data Types"], color: "purple" },
    { tier: "03", name: "Object-Oriented Design", duration: "5 weeks", skills: ["Classes & Objects", "Inheritance", "Encapsulation", "Real-World Modeling"], color: "green" },
    { tier: "04", name: "AI Integration", duration: "6 weeks", skills: ["API Architecture", "Prompt Engineering", "Neural Networks", "Model Deployment"], color: "amber" },
    { tier: "05", name: "Full-Stack Capstone", duration: "8 weeks", skills: ["React Fundamentals", "Database Design", "Authentication", "Live Deployment"], color: "rose" },
  ];

  const faqs = [
    {
      q: "Is Kinetix appropriate for a child with zero coding experience?",
      a: "Absolutely. Tier 01 begins with pure logic — no syntax, no screens, just thinking exercises. We build the cognitive muscle before we introduce any programming language. Most parents are surprised how quickly their child adapts."
    },
    {
      q: "How much parental involvement is required?",
      a: "None — the platform is fully self-directed. However, we recommend parents review the weekly neural map together with their child. The Parent Dashboard gives you everything you need to have meaningful conversations about their progress without needing to understand code yourself."
    },
    {
      q: "What if my child falls behind or loses interest?",
      a: "Our AI detects disengagement patterns within a single session. When a student repeatedly struggles with a concept, the system automatically introduces an alternative teaching modality — visual, kinesthetic, or narrative — without the student needing to ask for help."
    },
    {
      q: "How is Kinetix different from Scratch, Code.org, or Khan Academy?",
      a: "Those platforms teach children how to execute coding tasks. We teach them how to think like engineers. Our curriculum is designed to build transferable cognitive architecture — the same mental models used by professional software developers — not just the ability to drag blocks around."
    },
    {
      q: "Can I cancel at any time?",
      a: "Yes. No contracts, no cancellation fees, no retention dark patterns. Cancel from the Parent Dashboard in one click. Your child's progress data is exported automatically and stored for 12 months post-cancellation."
    },
    {
      q: "What devices does Kinetix support?",
      a: "Kinetix runs in any modern browser on any device — Chromebook, iPad, Windows, Mac. We recommend a keyboard for older students, but the platform is fully touch-optimized for younger learners."
    },
  ];

  const testimonials = [
    {
      quote: "My son went from struggling with fractions to explaining recursion to me. I don't know exactly what Kinetix did but his math teacher noticed the change first.",
      name: "Sarah K.",
      role: "Parent of a 12-year-old, Toronto"
    },
    {
      quote: "The transparency dashboard is what sold me. I can see every single thing the AI said to my daughter. That level of accountability doesn't exist anywhere else.",
      name: "Marcus T.",
      role: "Parent of a 10-year-old, Austin"
    },
    {
      quote: "She built a working app for her school science fair. Her teacher had no idea what to do with it. Neither did I, but I couldn't be more proud.",
      name: "Priya M.",
      role: "Parent of a 13-year-old, London"
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    green: "text-green-400 border-green-500/30 bg-green-500/10",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    rose: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Parental Oversight Protocol</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-[1000] tracking-tighter italic leading-none mb-10">
            YOUR CHILD'S<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">NEURAL</span><br />
            UPGRADE.
          </h1>

          <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12">
            Kinetix isn't a coding app. It's a cognitive development system designed to rewire how your child approaches every complex problem they'll ever face — starting with software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/pricing" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group">
              Start Now!
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/curriculum" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all">
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-slate-800 py-12 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-[1000] italic text-blue-400 mb-2">{stat.value}</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PARENT PROMISE ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">The Parent Promise</p>
              <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8">
                YOU ARE IN<br />COMPLETE<br />CONTROL.
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                We built Kinetix for parents who want to give their child an unfair advantage — without sacrificing transparency, safety, or their own peace of mind. Every feature we ship starts with one question: <span className="text-white font-bold italic">"Would a thoughtful parent approve of this?"</span>
              </p>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                You don't need to understand code to understand your child's progress. Our Parent Dashboard translates every technical metric into plain language — so you're never in the dark about what your child is learning, how fast they're learning it, and whether they're being challenged enough.
              </p>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="p-1 bg-gradient-to-br from-blue-500/50 to-purple-600/50 rounded-[2rem]">
                <div className="bg-slate-900 rounded-[1.8rem] p-6 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parent Dashboard</span>
                    <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">● Live</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Sessions This Week", value: "7" },
                      { label: "Avg. Focus Score", value: "94%" },
                      { label: "Concepts Mastered", value: "23" },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-3 text-center">
                        <div className="text-xl font-black text-blue-400">{item.value}</div>
                        <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-white">Weekly Progress</span>
                      <span className="text-[10px] text-blue-400 font-bold">Tier 02 — Python</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Variables & State", pct: 100, color: "bg-green-500" },
                        { label: "Functions", pct: 87, color: "bg-blue-500" },
                        { label: "Loops", pct: 62, color: "bg-amber-500" },
                        { label: "Data Types", pct: 34, color: "bg-slate-600" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] font-bold mb-1">
                            <span className="text-slate-400">{item.label}</span>
                            <span className="text-slate-500">{item.pct}%</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">AI Tutor Summary</p>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      "Emma showed strong pattern recognition today. She independently caught a loop error before I flagged it — a significant milestone for Tier 02."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFETY GRID ── */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Safety Architecture</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter">
              BUILT SAFE.<br />NOT PATCHED SAFE.
            </h2>
            <p className="text-slate-400 font-medium text-lg mt-6 max-w-2xl mx-auto">
              Safety isn't a feature we added. It's the foundation every other feature was built on top of.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all group">
                <div className="mb-6 h-14 w-14 rounded-2xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM BREAKDOWN ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Roadmap</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6">
              FROM ZERO TO<br />DEPLOYED APP.
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-2xl">
              29 weeks. 5 tiers. One comprehensive transformation from logical thinker to full-stack engineer.
            </p>
          </div>

          <div className="space-y-4">
            {curriculum.map((tier, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border ${colorMap[tier.color]} transition-all hover:scale-[1.01] group`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`text-5xl font-[1000] italic ${colorMap[tier.color].split(' ')[0]} shrink-0`}>{tier.tier}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                      <h3 className="text-2xl font-black">{tier.name}</h3>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500 border border-slate-700 px-3 py-1 rounded-full w-fit">{tier.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tier.skills.map((skill, j) => (
                        <span key={j} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CheckCircle className={`${colorMap[tier.color].split(' ')[0]} shrink-0 opacity-40 group-hover:opacity-100 transition-opacity`} size={28} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRESS REPORTING ── */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Progress Intelligence</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter">
              YOU'LL ALWAYS<br />KNOW WHERE THEY STAND.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {progressFeatures.map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all">
                <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── FAQ ── */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Common Questions</p>
            <h2 className="text-5xl font-[1000] italic tracking-tighter">PARENT FAQ.</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-all"
                >
                  <span className="font-black text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-blue-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[3rem]">
            <div className="bg-slate-950 rounded-[2.8rem] p-16">
              <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Ready to Begin?</p>
              <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6">
                GIVE THEM THE<br />
                <span className="text-blue-400">UNFAIR ADVANTAGE.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto">
                Start with a couple clicks!. Cancel anytime. Your child could write their first program by tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group">
                  Start Now!
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
