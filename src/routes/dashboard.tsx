import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { 
  Zap, Activity, Trophy, ShieldCheck, ArrowRight, 
  Loader2, Sparkles, Terminal, Lock, Shield 
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [plan, setPlan] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [fetching, setFetching] = useState(true);

  // 1. STRIPE SUCCESS CHECK
  useEffect(() => {
    if (!user) return;
    
    const params = new URLSearchParams(window.location.search);
    if (params.get('checkout') === 'success') {
      toast.success("System Access Confirmed.");
      
      const checkStatus = async () => {
        const { data } = await supabase.from("profiles").select("subscription_status, subscription_tier").eq("id", user.id).single();
        if (data?.subscription_status === 'active') {
          setProfile((prev: any) => ({ 
            ...prev, 
            subscription_status: 'active',
            subscription_tier: data.subscription_tier 
          }));
          clearInterval(interval);
        }
      };
      
      const interval = setInterval(checkStatus, 2000);
      setTimeout(() => clearInterval(interval), 15000);
    }
  }, [user]);

  // 2. DATA FETCHING
  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
    if (user) {
      (async () => {
        const { data: planData } = await supabase.from("learning_plans").select("*").eq("user_id", user.id).eq("is_active", true).maybeSingle();
        const { data: profileData } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
        
        if (planData) {
          setPlan(planData);
          const { data: progress } = await supabase.from("lesson_progress").select("day_number").eq("user_id", user.id).eq("plan_id", planData.id).eq("completed", true);
          setCompleted(new Set(progress?.map(p => p.day_number) || []));
        }
        setProfile(profileData);
        setFetching(false);
      })();
    }
  }, [user, loading, navigate]);

  const isSubscribed = profile?.subscription_status === 'active';
  const tier = profile?.subscription_tier || 'recruit'; 
  const progressPercent = plan ? Math.round((completed.size / plan.days.length) * 100) : 0;
  const nextLesson = plan?.days.find((d: any) => !completed.has(d.day)) || plan?.days[0];

  if (loading || fetching) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-950 font-mono tracking-widest text-white">
        <Loader2 className="animate-spin text-blue-500 w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        <span className="text-xs uppercase font-black text-slate-500 mt-4 animate-pulse">Synchronizing Terminal Matrix...</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-blue-500/30">
      
      {/* MAIN DASHBOARD CONTAINER */}
      <main className={`p-8 max-w-7xl mx-auto space-y-8 transition-all duration-700 ease-in-out ${!isSubscribed ? 'blur-[2px] pointer-events-none select-none' : ''}`}>
        
        {/* REFINED MINIMALIST HEADER */}
        <div className="pb-6 border-b border-slate-800/60">
          <p className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
            SYS_MODE // {tier.toUpperCase()}
          </p>
          <h1 className="text-4xl md:text-5xl font-[1000] italic tracking-tighter uppercase text-white mt-1">
            KINETIX.OS // <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{profile?.display_name || "USER"}</span>
          </h1>
        </div>

        {/* STARK FLAT STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Streak" value={`${profile?.streak_count || 0}d`} icon={Zap} />
          <StatCard label="Progress" value={`${progressPercent}%`} icon={Activity} />
          <StatCard label="Rank" value={tier === 'architect' ? "Architect" : tier === 'operator' ? "Operator" : "Recruit"} icon={Trophy} />
          <StatCard label="Status" value={isSubscribed ? "Verified" : "Pending"} icon={ShieldCheck} />
        </div>

        {/* WORKSPACE LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* CURRICULUM CONTROLS (Left side) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] space-y-5 relative overflow-hidden">
              <p className="text-blue-500 font-black uppercase tracking-[0.25em] text-[10px]">Active Training Node</p>
              <h2 className="text-3xl font-black italic tracking-tight text-white uppercase">{nextLesson?.title || "Welcome to Kinetix"}</h2>
              
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-black h-14 px-8 rounded-full uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                <Link to="/lesson/$day" params={{ day: String(nextLesson?.day || 1) }}>Launch Terminal</Link>
              </Button>
            </div>

            {/* FLAT ROADMAP LIST */}
            <section className="border border-slate-800 bg-slate-900/40 rounded-[2rem] p-8 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white flex items-center gap-2 italic">
                <Terminal size={14} className="text-blue-400" /> Roadmap Protocol
              </h3>
              <div className="divide-y divide-slate-800/60 border-t border-b border-slate-800/60">
                {(plan?.days || [1,2,3]).map((d: any, i: number) => {
                  const isDayLockedForRecruit = tier === 'recruit' && (d.day || i + 1) > 7;

                  return (
                    <div key={i} className="flex items-center justify-between py-5 relative bg-transparent">
                      {isDayLockedForRecruit && (
                        <div className="absolute inset-0 bg-slate-950/95 rounded-xl z-10 flex items-center justify-between px-4 border border-slate-800/50">
                          <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase flex items-center gap-2">
                            <Lock size={12} className="text-purple-400 animate-pulse" /> RESTRICTED PROFILE CLEARANCE // UPGRADE REQUIRED
                          </span>
                          <Button onClick={() => navigate({ to: '/pricing' })} size="sm" className="h-8 px-4 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase rounded-full border border-white/10 tracking-wider">
                            Upgrade
                          </Button>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4">
                        <span className="font-black italic text-xs text-slate-600 w-6">
                          {String(d.day || i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">{d.title || "Module Target"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* FLAT SIDEBAR FEATURES (Right side) */}
          <div className="space-y-4">
            
            {/* HUB CARD 1: SYNTAX MINI-PUZZLES (All Paid Tiers) */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  ⚡ SYNTAX DEFUSAL
                </span>
                <span className="text-[9px] text-blue-400 font-black border border-blue-500/30 px-2 py-0.5 rounded-md bg-blue-500/5">READY</span>
              </div>
              <h4 className="text-white text-base font-black italic tracking-tight uppercase">Daily Micro-Puzzle</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">Isolate and resolve the syntax anomaly to sustain your account multiplier loop.</p>
              <Button asChild className="w-full py-3 h-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all">
                <Link to="/daily-puzzle">Initialize System Test</Link>
              </Button>
            </div>

            {/* HUB CARD 2: THE HACK MATRIX (Operator & Architect Only) */}
            {(tier === 'operator' || tier === 'architect') ? (
              <div className="p-6 bg-slate-900 border border-blue-900/60 rounded-[2rem] space-y-3 shadow-[0_0_20px_rgba(37,99,235,0.05)]">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase flex items-center gap-1">
                    <Sparkles size={12} /> DOCK_HACK
                  </span>
                  <span className="text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded-md font-black shadow-[0_0_8px_rgba(37,99,235,0.4)]">ONLINE</span>
                </div>
                <h4 className="text-white text-base font-black italic tracking-tight uppercase">The Daily KINETIX Hack</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Universal synchronized cryptographic puzzle environment. Match parameters against global logic.</p>
                <Button asChild className="w-full py-3 h-auto bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-md shadow-blue-600/10">
                  <Link to="/daily-puzzle">Open Array Terminal</Link>
                </Button>
              </div>
            ) : (
              /* UPSELL BLOCK FOR BASIC USERS */
              <div className="p-6 bg-slate-950 border border-slate-800 border-dashed rounded-[2rem] text-center py-6 space-y-2">
                <h5 className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Daily Global Hack Locked</h5>
                <p className="text-xs text-slate-500 max-w-[220px] mx-auto leading-relaxed font-medium">Upgrade your profile account to Operator to bypass daily cryptographic sequences.</p>
              </div>
            )}

            {/* HUB CARD 3: STRUCTURAL AUDITS (Architect Only) */}
            {tier === 'architect' ? (
              <div className="p-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-900/40 rounded-[2rem] space-y-3">
                <span className="text-[10px] text-purple-400 font-black tracking-widest uppercase flex items-center gap-1.5">
                  <Shield size={12} /> ARCHITECT CONSOLE
                </span>
                <h4 className="text-white text-base font-black italic tracking-tight uppercase">Telemetry Audit</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Deploy fully automated structural logic compilation reviews across active sandbox assets.</p>
                <Button asChild className="w-full py-3 h-auto bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all">
                  <Link to="/daily-puzzle">Run Structural Analysis</Link>
                </Button>
              </div>
            ) : tier === 'operator' && (
              /* SYSTEM BANNER UPSELL FOR OPERATORS */
              <div className="p-4 bg-slate-950 border border-slate-800 border-dashed rounded-[2rem] text-center">
                <h5 className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Unlock Architect Auditing</h5>
                <p className="text-xs text-slate-500 mt-1 font-medium">Acquire fully automated AI structural diagnostic tracking nodes weekly.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- REFINED KINETIX ACCESS GATE LOCK SCREEN (UNPAID) --- */}
      {!isSubscribed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px] p-6 animate-fade-in">
          {/* Radiant Gradient Border Container Box */}
          <div className="p-1 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-[2.5rem] w-full max-w-md shadow-[0_0_50px_rgba(37,99,235,0.25)]">
            <div className="bg-slate-950 rounded-[2.3rem] p-10 text-center space-y-6 relative overflow-hidden">
              
              {/* Tech Grid Background Accent */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  {/* Flash Badge */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 border border-blue-500/30 text-2xl shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    ⚡
                  </div>
                  
                  <h2 className="text-3xl font-[1000] italic tracking-tighter text-white uppercase leading-none">
                    Authorization Deficit
                  </h2>
                  
                  <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xs mx-auto">
                    Your sandbox execution channel is currently offline. Commit to an operational workspace profile model to sync your terminal nodes.
                  </p>
                </div>

                {/* Premium Blue Glowing Interactive Button Route */}
                <Button 
                  onClick={() => navigate({ to: '/pricing' })} 
                  className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-xs tracking-widest rounded-full shadow-lg shadow-blue-600/30 border-none transition-all group active:scale-[0.98] flex items-center justify-center"
                >
                  Initialize Plan Selection 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// PREMIUM KINETIX STYLE GLOWING STAT CARD COMPONENT
function StatCard({ label, value, icon: Icon }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between transition-all hover:border-slate-700">
      <div>
        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{label}</p>
        <p className="text-xl font-[1000] italic text-white tracking-tight mt-1">{value}</p>
      </div>
      <div className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
        <Icon size={16} />
      </div>
    </div>
  );
}