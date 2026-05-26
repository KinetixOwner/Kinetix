import { createFileRoute } from "@tanstack/react-router";
import { Flame, Star, Quote, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/elite")({
  component: ElitePage,
});

function ElitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Elite Cohort Hero */}
      <section className="py-24 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4">
          <Flame className="text-orange-500 mx-auto mb-6 animate-pulse" size={48} />
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-6">The Elite Cohort</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            A selective, high-intensity program for students who have completed Levels 1-3 and are ready for professional deployment.
          </p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Leo, 12", project: "Crypto Tracker", quote: "I used to just play Minecraft. Now I'm building tools that use real-time data APIs." },
            { name: "Sarah, 14", project: "AI Health Bot", quote: "Kinetix taught me that coding is about solving real world problems, not just puzzles." },
            { name: "Arjun, 11", project: "Solar System Sim", quote: "The AI coach helped me understand physics through JavaScript. It was amazing." }
          ].map((story, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-500 transition-all group">
              <Quote className="text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
              <p className="text-lg font-medium text-slate-700 italic mb-8">"{story.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-300 rounded-full flex items-center justify-center font-black text-white">
                   {story.name[0]}
                </div>
                <div>
                   <h4 className="font-black uppercase text-sm">{story.name}</h4>
                   <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">{story.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
