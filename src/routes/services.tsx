import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Brain, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Clock, 
  Lock, 
  Sparkles, 
  Activity, 
  Layers, 
  Gamepad2, 
  MousePointer2,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(90deg, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9]">
              The <span className="text-blue-500">Kinetix</span> <br />Ecosystem
            </h1>
            <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic">
              "We don't just provide lessons; we provide a high-performance environment where AI mentorship meets physical wellness."
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICE 01: THE AI COACH --- */}
      <section className="py-24 container mx-auto px-4 text-left">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-900 p-12 rounded-[4rem] shadow-2xl border border-slate-800">
              <Brain size={64} className="text-blue-500 mb-8" />
              <div className="space-y-4">
                <div className="h-2 w-20 bg-blue-600" />
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">AI Mentor 1.0</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our proprietary AI doesn't just "fix" code—it teaches. It monitors the student's IDE in real-time, detecting frustration patterns and offering Socratic hints to build genuine problem-solving grit.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                    <p className="text-blue-400 font-black text-xs uppercase mb-1">Response Time</p>
                    <p className="text-white font-bold">&lt; 200ms</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                    <p className="text-blue-400 font-black text-xs uppercase mb-1">Safety Filter</p>
                    <p className="text-white font-bold">COPPA-Level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm">Product 01</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Intelligent Mentorship.</h2>
            <ul className="space-y-6">
              {[
                { t: "Error Contextualization", d: "Explains 'Why' a syntax error happened in plain English." },
                { t: "Challenge Scaling", d: "Adjusts project difficulty based on student speed." },
                { t: "Anti-Frustration Logic", d: "Intervenes with a break or hint before the child gives up." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-blue-600" size={24} /></div>
                  <div>
                    <h4 className="font-black uppercase italic text-slate-900">{item.t}</h4>
                    <p className="text-slate-500">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- SERVICE 02: WELLNESS --- */}
      <section className="py-24 bg-slate-50 text-left">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm">Product 02</span>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 text-slate-900">Integrated <br />Digital Wellness.</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                Long hours of coding leads to burnout and "screen-fatigue." Kinetix is the only platform that hard-codes physical movement into the curriculum.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <Zap className="text-yellow-500 mb-4" />
                  <h4 className="font-black uppercase italic text-sm mb-2 text-slate-900">Neuro-Breaks</h4>
                  <p className="text-slate-500 text-xs font-medium">Guided physical stretches every 15 minutes to reset cognitive load.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <Activity className="text-emerald-500 mb-4" />
                  <h4 className="font-black uppercase italic text-sm mb-2 text-slate-900">Focus Mode</h4>
                  <p className="text-slate-500 text-xs font-medium">Automatic UI dimming and distraction blocking for deep-work sessions.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="aspect-square bg-blue-600 rounded-[5rem] flex items-center justify-center p-12 relative rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-slate-900/10 rounded-[5rem] -rotate-6 -z-10" />
                <Gamepad2 size={200} className="text-white opacity-20 absolute" />
                <div className="text-center text-white relative z-10">
                  <h3 className="text-8xl font-black mb-2 italic uppercase">15:00</h3>
                  <p className="text-xl font-bold uppercase tracking-[0.3em] opacity-80">Sprint Timer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE 03: PARENT HUB --- */}
      <section className="py-24 container mx-auto px-4 text-left">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-16 lg:p-24 space-y-8">
            <span className="text-blue-500 font-black uppercase tracking-widest text-sm">Product 03</span>
            <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">The Mission <br />Command Center.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Parents aren't left in the dark. Our command center provides granular transparency into what your child is actually learning—from logic structures to server-side basics.
            </p>
            <div className="space-y-4">
              {[
                "Weekly Milestone Reports",
                "Project Deployment History",
                "AI-Generated Cognitive Insights",
                "Subscription Control & Safety Logs"
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bold">
                  <BarChart3 size={20} className="text-blue-500" /> {txt}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-blue-600 p-20 flex items-center justify-center relative">
             <div className="bg-white/10 w-full aspect-video rounded-3xl border border-white/20 backdrop-blur-md p-8 shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/20 rounded" />
                  <div className="h-4 w-1/2 bg-white/20 rounded" />
                  <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/10" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 text-center container mx-auto px-4">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-slate-900">Ready for Launch?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* TO SIGNUP */}
          <Link 
            to="/signup"
            className="px-12 py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
          >
            Get Started <ArrowRight size={20} />
          </Link>

          {/* TO PRICING */}
          <Link 
            to="/pricing"
            className="px-12 py-6 bg-slate-100 text-slate-900 font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-200 transition-all text-center"
          >
            Compare Plans
          </Link>

        </div>
      </section>
    </div>
  )
}
