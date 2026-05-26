import { createFileRoute } from '@tanstack/react-router'
import { Cpu, Zap, ShieldCheck, BrainCircuit, ArrowRight, Terminal, Lock, Eye, MessageCircle, Target, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/ai-tutor')({
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
      title: "Anti-Dependency Design",
      color: "cyan",
      icon: <Zap size={24} className="text-cyan-400" />,
      short: "The AI's goal is to make itself unnecessary.",
      detail: "Kinetix tracks a 'help frequency' metric for every student. As students progress, we expect and actively design for their AI usage to decrease — because they're internalizing the problem-solving process. If a student's help frequency isn't declining over time, that triggers an intervention: a curriculum adjustment, or a direct challenge from the Co-Pilot itself."
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
        { role: "ai", msg: "Exactly. You found it. What do you need to add to make x eventually reach 10? +120 XP incoming. ??" },
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
    }
  ];

  const safetyLayers = [
    { layer: "L1", title: "Content Classifier", desc: "Every student input is classified before the AI sees it. Off-curriculum content is intercepted and redirected before any response is generated." },
    { layer: "L2", title: "Response Filter", desc: "Every AI output is scanned against a prohibited content list before it reaches the student. Incorrect technical information is also flagged and corrected." },
    { layer: "L3", title: "Behavioral Monitor", desc: "Patterns across sessions are analyzed for anomalous usage — repeated jailbreak attempts or off-topic probing are escalated instantly." }
  ];

  const metrics = [
    { label: "Avg. sessions before first independent debug", value: "3.2", unit: "sessions" },
    { label: "Reduction in AI help requests by Tier 03", value: "67%", unit: "less help needed" },
    { label: "Student satisfaction with Co-Pilot approach", value: "4.8", unit: "/ 5 stars" }
  ];

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
    purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    green: { text: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" },
    amber: { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" },
    cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 flex-1 overflow-y-auto p-8">
      {/* HERO */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
            <BrainCircuit size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Neural Co-Pilot Console</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[1000] tracking-tighter italic leading-none mb-6">
            THE AI THAT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">TEACHES.</span><br />
            NOT DOES.
          </h1>

          <p className="text-base text-slate-400 font-medium max-w-xl leading-relaxed">
            Most AI tools make students dependent. Kinetix's Neural Co-Pilot is specifically engineered to do the opposite — to build the cognitive muscle that makes students need it less over time.
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-slate-800 py-8 bg-slate-900/50 rounded-2xl mb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-[1000] italic text-purple-400 mb-1">{m.value}</div>
              <div className="text-purple-400/60 text-[9px] font-black uppercase tracking-widest mb-1">{m.unit}</div>
              <div className="text-slate-500 text-xs font-bold leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="pb-12">
        <div className="space-y-4">
          {principles.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <div key={i} className={`border rounded-[2rem] overflow-hidden transition-all ${openSection === i ? `${c.border} ${c.bg}` : 'border-slate-800 bg-slate-900/50'}`}>
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center gap-6 p-6 text-left"
                >
                  <div className={`text-2xl font-[1000] italic ${c.text} shrink-0 w-8`}>{p.number}</div>
                  <div className="flex-1">
                    <div className={`font-black text-lg mb-1 ${openSection === i ? 'text-white' : 'text-slate-200'}`}>{p.title}</div>
                    <div className="text-slate-500 font-medium text-xs">{p.short}</div>
                  </div>
                  <div className="shrink-0">{p.icon}</div>
                  <ChevronDown size={16} className={`${c.text} shrink-0 transition-transform duration-300 ${openSection === i ? 'rotate-180' : ''}`} />
                </button>
                {openSection === i && (
                  <div className="px-6 pb-6 text-slate-300 font-medium leading-relaxed text-sm border-t border-slate-800/50 pt-4">
                    {p.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}
