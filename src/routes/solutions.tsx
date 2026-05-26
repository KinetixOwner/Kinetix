import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Trophy, HeartPulse, BrainCircuit, Rocket } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* For Students Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-black text-xs uppercase italic">For Students</span>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter">Become a <br />Digital Architect.</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Stop playing games and start building them. Kinetix gives you the same tools used by pros at Apple and Tesla. 
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <Trophy className="text-blue-600 mb-2" />
                <h4 className="font-black uppercase text-sm italic">Elite Ranking</h4>
                <p className="text-slate-500 text-xs">Climb the global leaderboard as you master syntax.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <BrainCircuit className="text-blue-600 mb-2" />
                <h4 className="font-black uppercase text-sm italic">AI Sidekick</h4>
                <p className="text-slate-500 text-xs">A 24/7 tutor that knows your coding style.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-slate-900 aspect-square rounded-[4rem] flex items-center justify-center p-12 overflow-hidden relative shadow-2xl">
             <Rocket size={300} className="text-blue-600 opacity-20 absolute -bottom-10 -right-10 rotate-12" />
             <div className="relative z-10 text-white space-y-4">
                <div className="h-4 w-48 bg-blue-600 rounded" />
                <div className="h-4 w-32 bg-slate-700 rounded" />
                <div className="h-32 w-64 bg-slate-800 rounded-2xl border border-slate-700 mt-8" />
             </div>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50 rounded-[5rem] my-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-blue-600 aspect-square rounded-[4rem] flex items-center justify-center p-20 shadow-2xl shadow-blue-500/20">
             <ShieldCheck size={200} className="text-white opacity-20 absolute" />
             <div className="bg-white p-8 rounded-3xl shadow-xl w-full">
                <div className="flex justify-between items-center mb-6">
                   <h5 className="font-black uppercase text-xs text-slate-400 tracking-widest">Parent Dashboard</h5>
                   <div className="h-2 w-10 bg-emerald-500 rounded" />
                </div>
                <div className="space-y-3">
                   <div className="h-2 w-full bg-slate-100 rounded" />
                   <div className="h-2 w-3/4 bg-slate-100 rounded" />
                   <div className="h-10 w-full bg-blue-50 rounded-lg mt-4 border border-blue-100" />
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <span className="bg-slate-900 text-white px-4 py-1 rounded-full font-black text-xs uppercase italic">For Parents</span>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter text-slate-900">Peace of mind. <br />Future-proofed.</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We handle the safety and the education. You get the results. Track your child's cognitive growth through our specialized parent portal.
            </p>
            <ul className="space-y-4">
              {["COPPA Compliant Safety", "Weekly Skill Assessments", "Focus & Wellness Timers", "No Public Social Interactions"].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 font-black text-slate-400 uppercase text-sm italic">
                  <CheckCircle2 size={18} className="text-blue-600" /> {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
