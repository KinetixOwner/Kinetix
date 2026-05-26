import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Users, 
  MapPin, 
  Target, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  Activity,
  Coffee
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-white selection:bg-blue-100">
      {/* --- GIANT HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden px-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-12 animate-fade-in">
            <Sparkles size={14} /> Founded March 2026
          </div>
          <h1 className="text-8xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none mb-8">
            Coding is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              The New Play.
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed italic">
            "We believe every child has the potential to become a creator. We just built the bridge to get them there."
          </p>
        </div>
      </section>

      {/* --- THE MANIFESTO (MISSION) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-tight">
              Why Kinetix <br />Started.
            </h2>
            <div className="h-2 w-32 bg-blue-600" />
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Traditional coding classes often fail because they are either too boring, too difficult, or too expensive. We saw kids losing interest in technology before they even had a chance to build something.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Founded in <span className="text-slate-900 font-bold underline decoration-blue-500 underline-offset-4">Winnipeg, Canada</span>, Kinetix was built differently. We combine AI-driven mentorship with a curriculum that feels like a game, ensuring every child aged 8–12+ discovers the joy of digital creation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col justify-between aspect-square group hover:bg-blue-600 transition-all duration-500">
              <Users size={40} className="text-blue-600 group-hover:text-white transition-colors" />
              <h4 className="text-2xl font-black uppercase italic group-hover:text-white transition-colors">Parents & Pros: Built for Kids.</h4>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] flex flex-col justify-between aspect-square mt-12">
              <Target size={40} className="text-blue-400" />
              <h4 className="text-2xl font-black uppercase italic text-white">Global Creative Impact</h4>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] flex flex-col justify-between aspect-square">
              <MapPin size={40} className="text-blue-400" />
              <h4 className="text-2xl font-black uppercase italic text-white">Winnipeg HQ</h4>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col justify-between aspect-square mt-12 group hover:bg-indigo-600 transition-all duration-500">
              <Sparkles size={40} className="text-indigo-600 group-hover:text-white transition-colors" />
              <h4 className="text-2xl font-black uppercase italic group-hover:text-white transition-colors">Spring 2026 Launch</h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS SECTION --- */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">The Kinetix Difference</h2>
            <p className="text-slate-500 text-xl font-medium">What makes us special isn't just our code—it's our philosophy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Zap className="text-yellow-500" />, 
                title: "15-Minute Sprints", 
                desc: "Lessons crafted to match children’s attention spans. High impact, zero fluff." 
              },
              { 
                icon: <Activity className="text-blue-500" />, 
                title: "High-Velocity Focus", 
                desc: "Engineered for 'Deep Work.' Our interface eliminates digital noise to keep students in a state of cognitive flow." 
              },
              { 
                icon: <CheckCircle2 className="text-emerald-500" />, 
                title: "Technical Mastery", 
                desc: "Beyond completion bars. We track syntax proficiency and logic architecture across HTML5, JS, and Python." 
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group text-left">
                <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-16 text-center">Company Milestones</h2>
        <div className="space-y-12">
          {[
            { date: "March 2026", event: "Foundation", details: "Kinetix founded in Winnipeg by a team of educators and developers." },
            { date: "April 2026", event: "Beta Access", details: "Early access granted to first 500 families for stress-testing AI mentors." },
            { date: "Spring 2026", event: "Official Launch", details: "Platform opens globally with the full curriculum and Pro tiers." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-slate-100 pl-8 relative">
              <div className="absolute left-[-10px] top-0 h-4 w-4 bg-blue-600 rounded-full" />
              <div className="md:w-1/4">
                <span className="font-black text-blue-600 uppercase tracking-widest text-sm">{item.date}</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-2xl font-black uppercase italic mb-2 text-slate-900">{item.event}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOUNDER'S NOTE --- */}
      <section className="py-32 bg-slate-950 text-white rounded-[5rem] mx-6 mb-24 overflow-hidden relative">
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter">A Note to Parents.</h2>
            <div className="h-1 w-24 bg-blue-500" />
            <p className="text-2xl text-slate-300 italic font-medium leading-relaxed">
              "We understand the challenges of raising curious kids in a digital world.We aren't just teaching coding; we're helping kids discover the joy of creating with technology."
            </p>
            <div className="flex items-center gap-6 pt-12">
               <div className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center font-black text-3xl">K</div>
               <div>
                  <h5 className="text-xl font-black uppercase tracking-widest italic">The Kinetix Team</h5>
                  <p className="text-blue-400 font-bold uppercase text-xs">Winnipeg, MB</p>
               </div>
            </div>
          </div>
        </div>
        <Coffee className="absolute bottom-[-20px] right-[-20px] text-white/5" size={400} />
      </section>

      {/* --- JOIN US CTA --- */}
      <section className="py-32 text-center px-6">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-slate-900">Ready to Start?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          <Link 
            to="/pricing" 
            className="px-12 py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group shadow-xl"
          >
            Request Early Access <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link 
            to="/curriculum" 
            className="px-12 py-6 border-4 border-slate-900 text-slate-900 font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 hover:text-white transition-all text-center"
          >
            Explore Curriculum
          </Link>

        </div>
      </section>
    </div>
  );
}

const Zap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.71 12 3l1 7h7l-8 11.29-1-7H4z"/></svg>
);
