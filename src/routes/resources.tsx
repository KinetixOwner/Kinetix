import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, HelpCircle, MessageSquare, Terminal, FileCode } from "lucide-react";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="py-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-16">Resources & <br />Learning Portal</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-12 bg-blue-600 rounded-[3rem] text-white space-y-6">
          <BookOpen size={48} />
          <h3 className="text-3xl font-black uppercase italic">AI Tutor Guide</h3>
          <p className="opacity-80 font-medium">Learn how to prompt your personal AI coach for better results and faster debugging.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-black uppercase text-xs rounded-xl italic">Read Guide</button>
        </div>

        <div className="p-12 bg-slate-900 rounded-[3rem] text-white space-y-6">
          <HelpCircle size={48} className="text-blue-500" />
          <h3 className="text-3xl font-black uppercase italic">Community FAQ</h3>
          <p className="opacity-80 font-medium">Questions about billing, curriculum, or technical setups? Find the answers here.</p>
          <button className="px-8 py-3 bg-blue-600 text-white font-black uppercase text-xs rounded-xl italic">Visit FAQ</button>
        </div>

        <div className="md:col-span-2 p-12 border-2 border-slate-100 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center">
           <Terminal size={100} className="text-slate-200" />
           <div className="space-y-4">
             <h3 className="text-3xl font-black uppercase italic text-slate-900">Developer Docs</h3>
             <p className="text-slate-500 font-medium max-w-xl">For advanced students who want to explore our open-source API and build their own Kinetix integrations.</p>
             <div className="flex gap-4">
               <span className="text-xs font-black uppercase text-blue-600 italic">API Reference</span>
               <span className="text-xs font-black uppercase text-blue-600 italic">SDK Github</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
