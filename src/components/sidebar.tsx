import { Link, useLocation } from "@tanstack/react-router";
import { 
  Terminal, Map, Gamepad2, ShieldAlert, Award, 
  Sparkles, Code2, Globe2, FolderGit2, Settings, LogOut, Swords
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Sidebar link helper to match active states with our crisp white & blue look
  const linkClass = (path: string) => `
    flex items-center gap-3 px-4 py-3.5 rounded-2xl font-black uppercase text-xs tracking-wider border-2 border-transparent transition-all duration-200 group relative
    active:translate-y-0.5
    ${currentPath === path 
      ? "bg-blue-50 border-blue-200 text-blue-600 shadow-sm" 
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-200/60"}
  `;

  return (
    <aside className="w-72 border-r-2 border-slate-200/80 bg-white min-h-screen flex flex-col justify-between p-6 select-none shrink-0">
      <div className="space-y-8">
        
        {/* KINETIX LOGO NODE */}
        <div className="flex items-center gap-3 px-2">
          <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-md shadow-blue-200 transform -rotate-6 group hover:rotate-0 transition-transform">
            K
          </div>
          <div>
            <span className="text-xl font-[1000] tracking-tighter text-slate-900 italic uppercase">KINETIX</span>
            <p className="text-[9px] font-black tracking-[0.25em] text-blue-500 uppercase leading-none mt-0.5">Core_OS v3.0</p>
          </div>
        </div>

        {/* SECTION: MAIN CAMPAIGN */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pl-4 mb-2">Main Campaign</p>
          
          <Link to="/map" className={linkClass("/map")}>
            <Map size={18} className="group-hover:scale-110 transition-transform" />
            <span>Mission Map</span>
            <span className="absolute right-3 top-3.5 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          </Link>

          <Link to="/terminal" className={linkClass("/terminal")}>
            <Terminal size={18} className="group-hover:scale-110 transition-transform" />
            <span>Sandbox Console</span>
          </Link>
        </div>

        {/* SECTION: GAME ZONES */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pl-4 mb-2">Game Operations</p>
          
          <Link to="/defusal" className={linkClass("/defusal")}>
            <ShieldAlert size={18} className="text-rose-500 group-hover:animate-bounce" />
            <span>Syntax Defusal</span>
            <span className="ml-auto text-[8px] font-black bg-rose-100 text-rose-600 px-2 py-0.5 rounded-md border border-rose-200">LIVE</span>
          </Link>

          <Link to="/hack" className={linkClass("/hack")}>
            <Gamepad2 size={18} className="text-emerald-500 group-hover:rotate-12 transition-transform" />
            <span>Daily Hack</span>
            <span className="ml-auto text-[8px] font-black bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md border border-emerald-200">100XP</span>
          </Link>

          <Link to="/arena" className={linkClass("/arena")}>
            <Swords size={18} className="text-purple-500" />
            <span>Match Arena</span>
            <span className="ml-auto text-[8px] font-black bg-purple-50 text-purple-400 px-2 py-0.5 rounded-md border border-dashed border-purple-200">ARCHITECT</span>
          </Link>
        </div>

        {/* SECTION: AI ENGINE & DATA */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pl-4 mb-2">Neural Tools</p>
          
          <Link to="/audits" className={linkClass("/audits")}>
            <Code2 size={18} className="text-indigo-500" />
            <span>Engine Audits</span>
          </Link>

          <Link to="/portfolio" className={linkClass("/portfolio")}>
            <FolderGit2 size={18} className="text-amber-500" />
            <span>Blueprint Site</span>
          </Link>

          <Link to="/certificates" className={linkClass("/certificates")}>
            <Award size={18} className="text-cyan-500" />
            <span>Trophy Cabin</span>
          </Link>
        </div>

      </div>

      {/* FOOTER USER MANAGEMENT CONTROLS */}
      <div className="space-y-1.5 pt-6 border-t-2 border-slate-100">
        <Link to="/settings" className={linkClass("/settings")}>
          <Settings size={18} />
          <span>System Settings</span>
        </Link>
        
        <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-black uppercase text-xs tracking-wider text-slate-400 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 border-2 border-transparent transition-all duration-200 active:translate-y-0.5 text-left">
          <LogOut size={18} />
          <span>Disconnect Session</span>
        </button>
      </div>
    </aside>
  );
}
