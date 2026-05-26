import { Link, useLocation } from "@tanstack/react-router";
import { 
  Map, Gamepad2, ShieldAlert, Award, 
  Sparkles, FolderGit2, Settings, LogOut, ChevronRight
} from "lucide-react";

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Premium interactive push-button helper styling
  const linkClass = (path: string) => `
    w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-[1000] uppercase text-[11px] tracking-wider border-2 transition-all duration-100 relative group select-none
    active:translate-y-0.5 active:border-b-2
    ${currentPath === path 
      ? "bg-blue-50 border-blue-200 border-b-4 border-b-blue-600 text-blue-600 shadow-sm" 
      : "bg-white border-slate-200/80 border-b-4 border-b-slate-300 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:border-b-slate-400"}
  `;

  return (
    <aside className="w-72 border-r-2 border-slate-200/80 bg-slate-50 min-h-screen flex flex-col justify-between p-6 shrink-0 font-sans">
      <div className="space-y-7">
        
        {/* PLATFORM BRAND HEADER */}
        <div className="flex items-center gap-3 bg-white p-4 border-2 border-slate-200/80 border-b-4 border-b-slate-300 rounded-[2rem]">
          <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-[1000] text-xl italic shadow-md shadow-blue-200 shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform">
            K
          </div>
          <div>
            <span className="text-lg font-[1000] tracking-tighter text-slate-900 italic uppercase block leading-none">KINETIX</span>
            <span className="text-[9px] font-black tracking-[0.2em] text-blue-500 uppercase block mt-1.5">Learning_OS</span>
          </div>
        </div>

        {/* SECTION: ADVENTURE MAP */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] pl-2 mb-1">
            My Learning Path
          </p>
          <Link to="/map" className={linkClass("/map")}>
            <Map size={16} className="shrink-0 text-blue-500 group-hover:scale-110 transition-transform" />
            <span>Mission Map</span>
            <ChevronRight size={14} className="ml-auto opacity-30 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* SECTION: DAILY MINI GAMES */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] pl-2 mb-1">
            Daily Game Modes
          </p>
          
          <Link to="/defusal" className={linkClass("/defusal")}>
            <ShieldAlert size={16} className="shrink-0 text-rose-500 group-hover:animate-bounce" />
            <span>Syntax Defusal</span>
            <span className="ml-auto text-[8px] font-black bg-rose-100 border border-rose-200 text-rose-600 px-1.5 py-0.5 rounded-md">
              RECRUIT
            </span>
          </Link>

          <Link to="/hack" className={linkClass("/hack")}>
            <Gamepad2 size={16} className="shrink-0 text-emerald-500 group-hover:rotate-12 transition-transform" />
            <span>Daily Hack</span>
            <span className="ml-auto text-[8px] font-black bg-emerald-100 border border-emerald-200 text-emerald-600 px-1.5 py-0.5 rounded-md">
              OPERATOR
            </span>
          </Link>
        </div>

        {/* SECTION: BUILDER & POWERUPS */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] pl-2 mb-1">
            My Powerups
          </p>
          
          <Link to="/ai-tutor" className={linkClass("/ai-tutor")}>
            <Sparkles size={16} className="shrink-0 text-purple-500 group-hover:animate-pulse" />
            <span>AI Code Companion</span>
          </Link>

          <Link to="/portfolio" className={linkClass("/portfolio")}>
            <FolderGit2 size={16} className="shrink-0 text-amber-500" />
            <span>My Website Creator</span>
          </Link>

          <Link to="/certificates" className={linkClass("/certificates")}>
            <Award size={16} className="shrink-0 text-cyan-500" />
            <span>Trophy Cabin</span>
            <span className="ml-auto text-[8px] font-black bg-cyan-50 border border-dashed border-cyan-200 text-cyan-600 px-1.5 py-0.5 rounded-md">
              PRO
            </span>
          </Link>
        </div>

      </div>

      {/* FOOTER AREA CONTROL SLOTS */}
      <div className="space-y-1.5 pt-4 border-t-2 border-slate-200/60">
        <Link to="/settings" className={linkClass("/settings")}>
          <Settings size={16} className="text-slate-400" />
          <span>Settings</span>
        </Link>
        
        <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-white border-2 border-b-4 border-slate-200 border-b-slate-300 rounded-2xl font-[1000] uppercase text-[11px] tracking-wider text-slate-400 hover:text-rose-500 hover:border-rose-300 hover:border-b-rose-400 transition-all active:translate-y-0.5 text-left select-none">
          <LogOut size={16} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
