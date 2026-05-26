import { createFileRoute } from '@tanstack/react-router'
import { Cpu, Zap, ShieldCheck, BrainCircuit, ArrowRight, Terminal, Lock, Eye, MessageCircle, Target, GitBranch, BarChart3, Layers, ChevronDown, Flame, Star, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/ai-tutor-guide')({
  component: AIGuidePage,
})

function AIGuidePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [activeDemo, setActiveDemo] = useState(0);

  const principles = [
    {
      number: "01",
      title: "Socratic, Not Oracular",
      color: "blue",
      icon: <MessageCircle size={24} className="text-blue-400" />,
      short: "The AI asks questions. It doesn't give answers.",
      detail: "When a student is stuck, a traditional tool gives the answer. The Kinetix Co-Pilot asks a targeted question designed to guide the student toward discovering the answer themselves. This is not a limitation — it is the entire pedagogical strategy. The goal is to build a brain that can solve problems, not a student who knows how to ask an AI for solutions."
    },
    {
      number: "02",
      title: "Encapsulated & Walled",
      color: "purple",
      icon: <Lock size={24} className="text-purple-400" />,
      short: "Zero internet access. Zero distractions.",
      detail: "Our AI model runs in a hermetically sealed environment. It has no access to the open web, no knowledge of current events, no social awareness, and no ability to engage with topics outside coding and curriculum content. Students cannot jailbreak it, trick it into off-topic conversations, or use it to do their homework in other subjects."
    },
    {
      number: "03",
      title: "Error-First Philosophy",
      color: "green",
      icon: <Target size={24} className="text-green-400" />,
      short: "Bugs are features. Struggle is the curriculum.",
      detail: "The Co-Pilot is specifically designed to let students sit with confusion for a moment before intervening. Research in cognitive science consistently shows that the struggle phase — the period of effortful problem-solving before a breakthrough — is where the most durable learning occurs. We calibrate our AI to maximize this productive discomfort without letting students become genuinely stuck."
    },
    {
      number: "04",
      title: "Persistent Memory",
      color: "amber",
      icon: <BrainCircuit size={24} className="text-amber-400" />,
      short: "The AI remembers every session. It learns your student.",
      detail: "Every interaction is stored in a per-student memory graph. The Co-Pilot knows which concepts a student has struggled with historically, which teaching modalities resonated, which analogies landed, and which didn't. Over time, the AI builds a high-fidelity model of how each individual student learns — and adapts every future interaction accordingly."
    },
    {
      number: "05",
      title: "Transparent to Parents",
      color: "rose",
      icon: <Eye size={24} className="text-rose-400" />,
      short: "Every word the AI says is logged and reviewable.",
      detail: "Parents have full access to the complete transcript of every AI interaction their child has ever had on the platform. This is not just a compliance feature — it's a parenting tool. We encourage parents to read sessions with their child, use the AI's explanations as conversation starters, and flag anything that seems off. Our curriculum team reviews flagged content within 24 hours."
    },
    {
      number: "06",
      title: "Anti-Dependency Design",
      color: "cyan",
      icon: <Zap size={24} className="text-cyan-400" />,
      short: "The AI's goal is to make itself unnecessary.",
      detail: "Kinetix tracks a 'help frequency' metric for every student. As students progress, we expect and actively design for their AI usage to decrease — because they're internalizing the problem-solving process. If a student's help frequency isn't declining over time, that triggers an intervention: a curriculum adjustment, a parent notification, or a direct challenge from the Co-Pilot itself."
    },
  ];

  const demos = [
    {
      title: "Debugging a Loop",
      scenario: "Student has an infinite loop and doesn't know why",
      conversation: [
        { role: "student", msg: "My program runs forever and won't stop. What's wrong?" },
        { role: "ai", msg: "Let's figure it out. What's the loop supposed to stop doing, and when should that happen?" },
        { role: "student", msg: "It should stop when x equals 10" },
        { role: "ai", msg: "Okay. Walk me through what happens to x during each loop iteration. Is x's value actually changing?" },
        { role: "student", msg: "Oh. I'm checking x but I never change x inside the loop." },
        { role: "ai", msg: "Exactly. You found it. What do you need to add to make x eventually reach 10? +120 XP incoming. 🔥" },
      ]
    },
    {
      title: "Understanding Functions",
      scenario: "Student doesn't understand why functions exist",
      conversation: [
        { role: "student", msg: "Why do we need functions? I can just write all the code in one place." },
        { role: "ai", msg: "You can. So here's a question: if you needed to calculate a discount in 8 different parts of your program, what would happen when the discount rule changes?" },
        { role: "student", msg: "I'd have to change it 8 times" },
        { role: "ai", msg: "And what's the risk of doing that?" },
        { role: "student", msg: "I might miss one and have a bug" },
        { role: "ai", msg: "That's exactly why functions exist. Write the logic once, name it, call it everywhere. Now what do you think happens when the rule changes?" },
        { role: "student", msg: "I change it in one place." },
        { role: "ai", msg: "You just discovered the DRY principle — Don't Repeat Yourself. Every senior engineer lives by this. +80 XP." },
      ]
    },
    {
      title: "Planning a Project",
      scenario: "Student wants to build something but doesn't know where to start",
      conversation: [
        { role: "student", msg: "I want to build a game but I don't know where to start. It's too big." },
        { role: "ai", msg: "Every complex system starts the same way. What's the smallest version of your game that would still be fun?" },
        { role: "student", msg: "Maybe just a character that can move left and right" },
        { role: "ai", msg: "Perfect. That's your v0.1. What does the program need to know about the character to make that work?" },
        { role: "student", msg: "Its position? And which direction it's moving?" },
        { role: "ai", msg: "You just designed your first data model. Two variables: position and direction. Start there. Build that. Everything else comes after." },
      ]
    },
  ];

  const safetyLayers = [
    { layer: "L1", title: "Content Classifier", desc: "Every student input is classified before the AI sees it. Off-curriculum content is intercepted and redirected before any response is generated." },
    { layer: "L2", title: "Response Filter", desc: "Every AI output is scanned against a prohibited content list before it reaches the student. Incorrect technical information is also flagged and corrected." },
    { layer: "L3", title: "Behavioral Monitor", desc: "Patterns across sessions are analyzed for anomalous usage — repeated jailbreak attempts, off-topic probing, or distress signals are escalated to the parent dashboard instantly." },
    { layer: "L4", title: "Human Review", desc: "All flagged interactions are reviewed by our curriculum team within 24 hours. Parents can also manually flag any interaction for priority review." },
  ];

  const metrics = [
    { label: "Avg. sessions before first independent debug", value: "3.2", unit: "sessions" },
    { label: "Reduction in AI help requests by Tier 03", value: "67%", unit: "less help needed" },
    { label: "Student satisfaction with Co-Pilot approach", value: "4.8", unit: "/ 5 stars" },
    { label: "Parent approval of AI transparency features", value: "96%", unit: "approval rate" },
  ];

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
    purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    green: { text: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
    amber: { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" },
    rose: { text: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/10" },
    cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-10">
            <BrainCircuit size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Neural Co-Pilot Documentation</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-[1000] tracking-tighter italic leading-none mb-10">
            THE AI THAT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">TEACHES.</span><br />
            NOT DOES.
          </h1>

          <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12">
            Most AI tools make students dependent. Kinetix's Neural Co-Pilot is specifically engineered to do the opposite — to build the cognitive muscle that makes students need it less and less over time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/signup" className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group">
              Try It Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/for-parents" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all">
              Parent Overview
            </a>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="border-y border-slate-800 py-12 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-[1000] italic text-purple-400 mb-1">{m.value}</div>
              <div className="text-purple-400/60 text-[10px] font-black uppercase tracking-widest mb-2">{m.unit}</div>
              <div className="text-slate-500 text-xs font-bold leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PHILOSOPHY ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Design Philosophy</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6">
              SIX PRINCIPLES.<br />ONE OUTCOME:<br />
              <span className="text-purple-400">INDEPENDENT THINKERS.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {principles.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <div key={i} className={`border rounded-[2rem] overflow-hidden transition-all ${openSection === i ? `${c.border} ${c.bg}` : 'border-slate-800 bg-slate-900/50'}`}>
                  <button
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                    className="w-full flex items-center gap-6 p-8 text-left"
                  >
                    <div className={`text-3xl font-[1000] italic ${c.text} shrink-0 w-12`}>{p.number}</div>
                    <div className="flex-1">
                      <div className={`font-black text-xl mb-1 ${openSection === i ? 'text-white' : 'text-slate-200'}`}>{p.title}</div>
                      <div className="text-slate-500 font-medium text-sm">{p.short}</div>
                    </div>
                    <div className="shrink-0">
                      {p.icon}
                    </div>
                    <ChevronDown size={20} className={`${c.text} shrink-0 transition-transform duration-300 ${openSection === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === i && (
                    <div className="px-8 pb-8 text-slate-300 font-medium leading-relaxed text-lg border-t border-slate-800/50 pt-6">
                      {p.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Real Conversations</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6">
              SEE THE AI<br />IN ACTION.
            </h2>
            <p className="text-slate-400 font-medium text-lg">These are representative examples of how the Co-Pilot actually responds.</p>
          </div>

          <div className="flex gap-3 justify-center mb-10 flex-wrap">
            {demos.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDemo(i)}
                className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeDemo === i ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
              >
                {d.title}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="mb-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Scenario</p>
              <p className="text-sm font-medium text-slate-300">{demos[activeDemo].scenario}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Neural Co-Pilot — Active Session</span>
              </div>

              <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                {demos[activeDemo].conversation.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'student' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 ${
                      msg.role === 'student'
                        ? 'bg-slate-800 rounded-tl-sm'
                        : 'bg-purple-500/10 border border-purple-500/20 rounded-tr-sm'
                    }`}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2 ${msg.role === 'student' ? 'text-slate-500' : 'text-purple-400'}">
                        {msg.role === 'student' ? 'Student' : 'Neural Co-Pilot'}
                      </p>
                      <p className="text-sm font-medium text-slate-300 leading-relaxed">{msg.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFETY LAYERS ── */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Safety Architecture</p>
              <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter leading-tight mb-8">
                FOUR LAYERS<br />OF PROTECTION.<br />
                <span className="text-purple-400">ZERO GAPS.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                Every AI interaction passes through four independent validation layers before a student ever sees a response. No single point of failure. No trust assumptions.
              </p>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                We don't believe in "trust the AI." We believe in "verify, then trust." The architecture reflects that.
              </p>
            </div>

            <div className="space-y-4">
              {safetyLayers.map((layer, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-black text-xs">{layer.layer}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-2">{layer.title}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{layer.desc}</p>
                  </div>
                  <ShieldCheck size={18} className="text-green-400 shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT DOESN'T DO ── */}
      <section className="py-32 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-rose-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Hard Limits</p>
            <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter">
              WHAT THE AI<br />WILL NEVER DO.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Write code for students", desc: "The Co-Pilot will explain concepts, ask questions, and review code — but it will not write the assignment for the student. Ever." },
              { title: "Browse the internet", desc: "The AI has no internet access. It cannot retrieve current events, external content, or anything outside the Kinetix curriculum corpus." },
              { title: "Engage in social conversation", desc: "The Co-Pilot is not a companion app. It will redirect any off-topic social conversation back to the current lesson." },
              { title: "Discuss other subjects", desc: "The AI is scoped exclusively to coding, computer science, and logical thinking. It cannot help with math homework, essays, or any other subject." },
              { title: "Provide personal advice", desc: "The Co-Pilot is not a therapist or counselor. Any interaction that suggests a student needs emotional support is immediately escalated to parents." },
              { title: "Store identifying information", desc: "The AI does not know your child's real name, school, or location. It knows their username, their progress, and their learning patterns — nothing more." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-900 border border-rose-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-rose-500" />
                  <h3 className="font-black text-rose-400">{item.title}</h3>
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-1 bg-gradient-to-br from-purple-500/40 to-blue-600/40 rounded-[3rem]">
            <div className="bg-slate-950 rounded-[2.8rem] p-16">
              <p className="text-purple-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Experience It</p>
              <h2 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter mb-6">
                MEET YOUR<br />
                <span className="text-purple-400">CO-PILOT.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto">
                The best way to understand how the AI teaches is to let it teach you. Start now and have your first conversation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group">
                  Start Now!
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/for-parents" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all">
                  Parent Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
