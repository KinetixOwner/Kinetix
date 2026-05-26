import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  Code2, 
  Rocket, 
  Terminal, 
  Star, 
  Laptop, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap,
  BarChart,
  Award,
  ArrowRight
} from 'lucide-react'

export const Route = createFileRoute('/curriculum')({
  component: CurriculumPage,
})

function CurriculumPage() {
  const roadmap = [
    {
      level: "Level 1",
      title: "Web Architecture & Digital Design",
      tech: "HTML5, CSS3, Flexbox",
      description: "Students master the skeletal structure of the modern web. We focus on semantic HTML and responsive design principles. By day 7, they transition from digital consumers to digital creators with a live deployment.",
      projects: ["Personal Biography Site", "Interactive Photo Gallery", "Custom CSS Art", "Landing Page Layout"],
      color: "border-orange-200",
      bg: "hover:bg-orange-50/30",
      icon: <Code2 size={32} className="text-orange-500" />
    },
    {
      level: "Level 2",
      title: "Engine Logic & Systems Thinking",
      tech: "JavaScript, ES6+, Logic Gates",
      description: "The engine room. Here, students learn the 'brain' of the computer. We cover variables, conditional logic, and loops by building real-world interactive systems that react to user input in real-time.",
      projects: ["Virtual Pet Simulator", "Score-Tracking Game", "Logic-Based Quiz Engine", "DOM Manipulation Lab"],
      color: "border-yellow-200",
      bg: "hover:bg-yellow-50/30",
      icon: <Terminal size={32} className="text-yellow-500" />
    },
    {
      level: "Level 3",
      title: "Advanced Automation & AI Scripting",
      tech: "Python, Data Structures, AI Basics",
      description: "The future is algorithmic. We introduce Python—the world's most popular AI language. Students learn to handle data, automate repetitive tasks, and interface with basic Machine Learning models.",
      projects: ["AI Chatbot Assistant", "Automated Task Runner", "Data Visualization Tool", "Weather API Integration"],
      color: "border-blue-200",
      bg: "hover:bg-blue-50/30",
      icon: <Rocket size={32} className="text-blue-500" />
    },
    {
      level: "Level 4",
      title: "Full-Stack Deployment & Elite Ops",
      tech: "React, Supabase, Cloud Hosting",
      description: "Our graduate level. Students move beyond simple scripts into full-scale application architecture. They learn how databases work and how to deploy 'production-ready' software to the global cloud.",
      projects: ["Collaborative To-Do App", "Secure Login System", "Real-time Chat Portal", "Portfolio Deployment"],
      color: "border-purple-200",
      bg: "hover:bg-purple-50/30",
      icon: <Cpu size={32} className="text-purple-500" />
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO HEADER --- */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 uppercase tracking-widest">
            <Star size={16} /> 2026 Academic Syllabus
          </div>
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter italic uppercase">
            The <span className="text-blue-500">Kinetix</span> Path
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            A high-velocity, project-first roadmap designed to take students from 
            zero to production-ready in record time.
          </p>
        </div>
      </section>

      {/* --- METHODOLOGY BLOCKS --- */}
      <section className="py-16 border-b bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="flex gap-6 items-start">
              <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg flex-shrink-0"><Zap size={24}/></div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900">15-Min Sprints</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Micro-learning sessions optimized for maximum cognitive retention.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-slate-900 p-3 rounded-2xl text-white shadow-lg flex-shrink-0"><ShieldCheck size={24}/></div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900">Safe Environment</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Private sandboxes. No public chat. Total focus on code and creation.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg flex-shrink-0"><BarChart size={24}/></div>
              <div>
                <h4 className="font-black uppercase italic text-slate-900">Live Analytics</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Parents get real-time transparency into every concept mastered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN ROADMAP --- */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-20 relative">
          {/* Vertical Line Connector */}
          <div className="absolute left-[4.25rem] top-10 bottom-10 w-1 bg-slate-100 hidden lg:block" />

          {roadmap.map((item, index) => (
            <div key={index} className={`relative flex flex-col lg:flex-row gap-12 p-12 bg-white border-2 ${item.color} ${item.bg} rounded-[4rem] transition-all duration-500 group hover:shadow-2xl text-left`}>
              <div className="relative z-10 flex-shrink-0">
                <div className="h-24 w-24 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-5 py-1.5 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full">
                    {item.level}
                  </span>
                  <div className="flex items-center gap-2 text-blue-600 font-mono font-bold text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                    <Globe size={14} /> {item.tech}
                  </div>
                </div>

                <h3 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-xl leading-relaxed font-medium italic">
                  "{item.description}"
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                    <Laptop size={16} className="text-blue-500" /> Professional Portfolio Milestones
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {item.projects.map((project, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 transition-colors">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        <span className="text-slate-700 font-bold text-sm uppercase italic">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATION FOOTER --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Award size={80} className="mx-auto text-blue-600 mb-4 animate-pulse" />
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter">
            Certified <span className="text-blue-600">Achievement</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Upon completion of each level, students undergo a <span className="text-slate-900 font-bold">Live Deployment Challenge</span>. 
            Success earns them the Kinetix Digital Badge—a verified credential they can 
            showcase as they build their future in tech.
          </p>
          
          <div className="pt-8">
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 text-white font-black uppercase italic tracking-[0.2em] rounded-full hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/40 group"
            >
              Start Your Mission <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
