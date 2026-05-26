import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { 
  BookOpen, Lock, CheckCircle2, Play, FileCode, 
  Terminal, Zap, Target, Hexagon, Code2, Boxes, 
  Shield, Activity, Cpu, Binary, Search, Filter, 
  ArrowRight, BrainCircuit, Download, Layers, 
  Fingerprint, MousePointer2, Network, Radio,
  Sparkles, History, HardDrive, Microscope,
  Database, Globe, Server, ShieldAlert, 
  FileText, Workflow, MessageSquare, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
  head: () => ({ meta: [{ title: "Academy Protocol — Kinetix" }] }),
});

// --- DATA STRUCTURE ---
const phases = [
  {
    number: 1,
    title: "The Substrate Layer",
    description: "Zero-state initialization. Master memory allocation, the JavaScript event loop, and high-concurrency paradigms.",
    locked: false,
    modules: [
      { id: "1.01", title: "Memory Management & Pointers", type: "Technical", level: "Beginner", duration: "1.5h", completed: true },
      { id: "1.02", title: "Asynchronous Execution Chains", type: "Logic", level: "Beginner", duration: "2h", completed: true },
      { id: "1.03", title: "Functional Composition Patterns", type: "Logic", level: "Beginner", duration: "1h", completed: true },
      { id: "1.04", title: "API Contract Architecture", type: "Design", level: "Beginner", duration: "3h", completed: false },
      { id: "1.05", title: "State Machine Implementation", type: "Logic", level: "Intermediate", duration: "2.5h", completed: false },
    ]
  },
  {
    number: 2,
    title: "Fullstack Synchronization",
    description: "Bridging reactive frontends with distributed database clusters and LLM orchestrators.",
    locked: true,
    modules: [
      { id: "2.01", title: "Distributed State Management", type: "Infrastructure", level: "Intermediate", duration: "4h", completed: false },
      { id: "2.02", title: "Vector Database Fundamentals", type: "AI/ML", level: "Intermediate", duration: "5h", completed: false },
      { id: "2.03", title: "Agentic Workflow Design", type: "AI/ML", level: "Intermediate", duration: "6h", completed: false },
      { id: "2.04", title: "Serverless Edge Functions", type: "Deployment", level: "Intermediate", duration: "2h", completed: false },
      { id: "2.05", title: "PostgreSQL Query Optimization", type: "Technical", level: "Advanced", duration: "3.5h", completed: false },
    ]
  },
  {
    number: 3,
    title: "The Neural Link Integration",
    description: "Deploying the Lyria-3 logic engine. Training proprietary datasets and fine-tuning model weight responses.",
    locked: true,
    modules: [
      { id: "3.01", title: "Tokenization & Embeddings", type: "AI/ML", level: "Advanced", duration: "4h", completed: false },
      { id: "3.02", title: "Prompt Injection Defense", type: "Security", level: "Advanced", duration: "3h", completed: false },
      { id: "3.03", title: "Fine-Tuning Workflow", type: "AI/ML", level: "Expert", duration: "12h", completed: false },
      { id: "3.04", title: "Model Deployment at Edge", type: "Deployment", level: "Expert", duration: "5h", completed: false },
    ]
  },
  {
    number: 4,
    title: "Global Scale Orchestration",
    description: "Optimizing for millions. Kubernetes, Load Balancing, and Global CDN synchronization strategies.",
    locked: true,
    modules: [
      { id: "4.01", title: "Containerization Mastery", type: "DevOps", level: "Advanced", duration: "3h", completed: false },
      { id: "4.02", title: "Kubernetes Cluster Management", type: "DevOps", level: "Expert", duration: "15h", completed: false },
      { id: "4.03", title: "Global Load Balancing", type: "Infrastructure", level: "Expert", duration: "4h", completed: false },
      { id: "4.04", title: "Final Capstone Certification", type: "Build", level: "Master", duration: "40h", completed: false },
    ]
  }
];

function AcademyPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const moduleTypes = ["All", "Technical", "Logic", "Design", "AI/ML", "DevOps", "Infrastructure"];

  const filteredPhases = useMemo(() => {
    return phases.map(phase => ({
      ...phase,
      modules: phase.modules.filter(m => 
        (filter === "All" || m.type === filter) &&
        (search === "" || m.title.toLowerCase().includes(search.toLowerCase()))
      )
    })).filter(p => p.modules.length > 0);
  }, [filter, search]);

  return (
    <main className="flex-1 bg-white overflow-y-auto selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* --- SECTION 1: THE HERO (PITCH WHITE) --- */}
      <section className="relative pt-40 pb-32 px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-900 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] italic mb-8">
                <Cpu size={14} className="animate-pulse" /> Archive_v2.06
              </div>
              <h1 className="text-[12rem] font-[1000] text-slate-900 italic uppercase tracking-tighter leading-[0.7] mb-12">
                Acad<br />emy<span className="text-blue-600">.</span>
              </h1>
              <p className="text-2xl font-bold italic text-slate-500 leading-relaxed max-w-2xl">
                The technical manifest for high-frequency neural engineering. 
                <span className="text-slate-900"> Zero abstraction. Raw logic. </span> 
                Master the substrate and scale the machine.
              </p>
            </div>
            
            <div className="lg:w-80 space-y-6 border-l-4 border-blue-600 pl-12 pb-2">
              <StatItem label="Active Nodes" value="12,482" />
              <StatItem label="Archive Density" value="480GB" />
              <StatItem label="Signal Integrity" value="99.9%" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SYSTEM DASHBOARD (STATIC DATA) --- */}
      <section className="bg-slate-900 py-16 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <BrainCircuit size={400} className="text-blue-500" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <DashboardMetric icon={<Activity />} label="Network Load" value="Optimal" />
          <DashboardMetric icon={<ShieldAlert />} label="Threat Level" value="Minimal" />
          <DashboardMetric icon={<Zap />} label="Compute" value="High" />
          <DashboardMetric icon={<History />} label="Uptime" value="842h" />
          <DashboardMetric icon={<Database />} label="Registry" value="Active" />
        </div>
      </section>

      {/* --- SECTION 3: BROWSER & FILTER --- */}
      <section className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 no-scrollbar">
            {moduleTypes.map(t => (
              <button 
                key={t} 
                onClick={() => setFilter(t)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest italic transition-all whitespace-nowrap
                  ${filter === t ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}
                `}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Query curriculum..." 
              className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 font-black italic uppercase text-slate-900 focus:outline-none focus:ring-2 ring-blue-600 transition-all"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE MAIN FEED --- */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="space-y-40">
          {filteredPhases.map((phase) => (
            <div key={phase.number} className="grid lg:grid-cols-12 gap-20">
              {/* Sidebar Info */}
              <div className="lg:col-span-4 sticky top-48 h-fit">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-7xl font-[1000] italic ${phase.locked ? 'text-slate-100' : 'text-slate-900'}`}>0{phase.number}</span>
                  <div className={`h-[2px] flex-1 ${phase.locked ? 'bg-slate-100' : 'bg-slate-900'}`} />
                  {phase.locked && <Lock size={24} className="text-blue-600" />}
                </div>
                <h3 className="text-4xl font-black italic uppercase text-slate-900 tracking-tighter mb-6">{phase.title}</h3>
                <p className="text-slate-500 font-medium italic leading-relaxed mb-10">{phase.description}</p>
                
                {phase.locked ? (
                  <Button onClick={() => navigate({ to: '/settings' })} className="w-full h-16 rounded-2xl bg-blue-600 text-white font-black italic uppercase hover:bg-slate-900 transition-all shadow-2xl shadow-blue-500/20">
                    Unlock Mastery Protocol
                  </Button>
                ) : (
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 italic">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-2">Phase Status</p>
                    <p className="text-sm font-bold text-slate-900 uppercase">Baseline Access Established</p>
                  </div>
                )}
              </div>

              {/* Modules List */}
              <div className={`lg:col-span-8 space-y-4 ${phase.locked ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                {phase.modules.map((m) => (
                  <div key={m.id} className="group flex flex-col md:flex-row items-center justify-between p-8 rounded-[2.5rem] border-2 border-slate-50 bg-white hover:border-slate-900 transition-all cursor-pointer shadow-sm hover:shadow-2xl">
                    <div className="flex items-center gap-8">
                      <div className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all ${m.completed ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white group-hover:bg-blue-600'}`}>
                        {m.completed ? <CheckCircle2 size={24} /> : <Play size={24} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest italic">{m.id} // {m.type}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-200" />
                          <span className="text-[10px] font-black text-slate-400 uppercase italic">{m.level}</span>
                        </div>
                        <h4 className="text-2xl font-black italic uppercase text-slate-900 tracking-tight">{m.title}</h4>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-10">
                      <p className="text-[10px] font-black text-slate-400 uppercase italic mb-1">Compute Time</p>
                      <p className="text-xl font-black italic uppercase text-slate-900">{m.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: TECHNICAL DEEP-DIVE (STATIC CODE) --- */}
      <section className="bg-slate-50 py-32 px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 italic">Core_Logic_Preview</p>
              <h2 className="text-6xl font-[1000] italic uppercase tracking-tighter text-slate-900">Signal Flow Architecture.</h2>
            </div>
            <p className="text-slate-500 font-medium italic text-lg leading-relaxed">
              In Module 2.04, we dismantle the standard request-response cycle and implement a multi-threaded neural signal chain. This allows your application to process logic before the data even hits the primary database.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <Feature icon={<Microscope />} label="Deep Inspection" />
              <Feature icon={<Shield />} label="Signal Guard" />
              <Feature icon={<Workflow />} label="Thread Optimization" />
              <Feature icon={<Boxes />} label="Vector Shifting" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden border-[12px] border-slate-800 shadow-2xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 text-[10px] font-mono text-slate-500 italic">kinetix_logic_engine.ts</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto no-scrollbar">
              <code className="text-blue-400">async function</code> <code className="text-white">authorizeSignal(token, flow)</code> {"{"} <br />
              <code className="text-slate-500 pl-6">// Check token integrity against vector manifest</code> <br />
              <code className="text-blue-400 pl-6">const</code> <code className="text-white">registry = </code> <code className="text-blue-400">await</code> <code className="text-white">db.neural_registry.fetch();</code> <br /><br />
              <code className="text-blue-400 pl-6">if</code> <code className="text-white">( !registry.active )</code> {"{"} <br />
              <code className="text-orange-400 pl-12 text-xs">throw new NeuralLinkError('PROTOCOL_MISMATCH');</code> <br />
              <code className="text-white pl-6">{"}"}</code> <br /><br />
              <code className="text-slate-500 pl-6">// Initialize high-concurrency pipe</code> <br />
              <code className="text-blue-400 pl-6">return await</code> <code className="text-white">pipe.initialize(token, flow);</code> <br />
              {"}"}
            </pre>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: KNOWLEDGE VAULT (STATIC RESOURCES) --- */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <h2 className="text-5xl font-[1000] italic uppercase text-slate-900 tracking-tighter">Documentation Registry.</h2>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard title="Kinetix CLI Manifest" icon={<Terminal />} />
            <ResourceCard title="Logic Flow Schematics" icon={<Layers />} />
            <ResourceCard title="Database Indexing Whitepaper" icon={<Database />} />
            <ResourceCard title="Neural Security Protocol" icon={<Fingerprint />} />
            <ResourceCard title="UI Component Library" icon={<MousePointer2 />} />
            <ResourceCard title="Deployment Checklist" icon={<Globe />} />
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ (KNOWLEDGE BASE) --- */}
      <section className="bg-slate-50 py-32 px-8 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-[1000] italic uppercase text-slate-900 mb-16 text-center underline decoration-blue-600 decoration-8 underline-offset-[12px]">System Directives (FAQ)</h2>
          <div className="space-y-12">
            <FaqItem 
              q="What hardware is required for the Academy labs?" 
              a="Minimum requirement is a logic-capable processor with 16GB RAM. However, all intensive neural compute is handled by our remote edge clusters once your Kinetix API key is active."
            />
            <FaqItem 
              q="How do I verify my Neural Architect certification?" 
              a="Every certification is etched onto the blockchain registry. Recruiters can verify your unique ID via our public verification endpoint /verify/{CERT_ID}."
            />
            <FaqItem 
              q="Can I pause my progress and return later?" 
              a="Your neural state is synchronized to the Supabase cloud every 30 seconds. You can swap devices or platforms instantly without losing a single line of progress."
            />
            <FaqItem 
              q="Is there support for enterprise teams?" 
              a="Yes. Organizations with 10+ architects receive a dedicated node and custom logic training sessions with the Kinetix lead engineers."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA (PURIST WHITE) --- */}
      <section className="bg-white py-40 px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic">
            <Star size={14} /> Peak_Performance_Initialized
          </div>
          <h2 className="text-8xl font-[1000] italic uppercase tracking-tighter text-slate-900 mb-12 leading-[0.8]">Elevate<br /> Your Code.</h2>
          <p className="text-slate-500 font-bold italic text-xl mb-16">The baseline is active. The curriculum is mapped. Upgrade to Mastery Tier to unlock Phases 02, 03, and 04 immediately.</p>
          <Button 
            onClick={() => navigate({ to: '/settings' })}
            className="h-24 px-16 rounded-[3rem] bg-blue-600 text-white font-black italic uppercase text-2xl shadow-2xl shadow-blue-500/20 hover:bg-slate-900 transition-all transform hover:scale-105"
          >
            Upgrade Membership Now <ArrowRight size={32} className="ml-4" />
          </Button>
        </div>
      </section>

    </main>
  );
}

// --- SUB COMPONENTS (CLEAN & MINIMAL) ---

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic mb-1">{label}</p>
      <p className="text-4xl font-black italic uppercase text-slate-900 leading-none">{value}</p>
    </div>
  );
}

function DashboardMetric({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">{label}</p>
        <p className="text-sm font-black italic uppercase text-white">{value}</p>
      </div>
    </div>
  );
}

function Feature({ icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
      <span className="text-[11px] font-black uppercase italic tracking-widest text-slate-900">{label}</span>
    </div>
  );
}

function ResourceCard({ title, icon }: { title: string, icon: any }) {
  return (
    <div className="p-10 rounded-[3rem] border border-slate-100 hover:border-slate-900 hover:shadow-2xl transition-all group cursor-pointer bg-white">
      <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-xl font-black italic uppercase text-slate-900 mb-6">{title}</h4>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 italic tracking-widest group-hover:gap-4 transition-all">
        Access Node <ArrowRight size={14} />
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="text-blue-600 font-black italic text-sm pt-1">Query_</div>
      <div>
        <h4 className="text-xl font-black italic uppercase text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{q}</h4>
        <p className="text-slate-500 font-medium italic leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function Clock(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}
