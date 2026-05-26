import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { 
  Trophy, Lock, Check, Flame, Code, Sparkles, Terminal, Gamepad2, Rocket, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/certificates")({
  component: Certificates,
  head: () => ({ meta: [{ title: "My Achievements — Kinetix" }] }),
});

function Certificates() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [fetching, setFetching] = useState(true);
  const [selectedBadge, setSelectedBadge] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
    if (user) {
      supabase.from("profiles").select("*").eq("id", user.id).single().then(({ data }) => {
        setProfile(data);
        setFetching(false);
      });
    }
  }, [user, loading, navigate]);

  if (loading || fetching) return null;

  const currentXP = profile?.xp || 0;
  const currentStreak = profile?.streak_count || 0;

  // Kid-Friendly Milestones (Ages 8-13) matching Duolingo map paths & Chess trophy rooms
  const achievements = [
    {
      id: "ach_01",
      title: "Code Spark",
      subtitle: "First Code Ever!",
      description: "You typed your very first line of real code and made it run! Welcome to the matrix.",
      reward: "? Unlocked on Registration",
      isUnlocked: true,
      percentage: 100,
      icon: Terminal,
      color: "from-blue-400 to-indigo-500",
      ringColor: "border-blue-400"
    },
    {
      id: "ach_02",
      title: "Puzzle Popper",
      subtitle: "Daily Brain Trainer",
      description: "Beat your first daily mini-game puzzle without breaking a sweat. Smart move!",
      reward: "?? Requires 50 XP to crack",
      isUnlocked: currentXP >= 50,
      percentage: Math.min(Math.round((currentXP / 50) * 100), 100),
      icon: Gamepad2,
      color: "from-emerald-400 to-teal-500",
      ringColor: "border-emerald-400"
    },
    {
      id: "ach_03",
      title: "Streak Monster",
      subtitle: "3 Days in a Row!",
      description: "You practiced code 3 days in a row without breaking your fire shield. Keep it burning!",
      reward: "?? Requires a 3-Day Streak",
      isUnlocked: currentStreak >= 3,
      percentage: Math.min(Math.round((currentStreak / 3) * 100), 100),
      icon: Flame,
      color: "from-orange-400 to-amber-500",
      ringColor: "border-orange-500"
    },
    {
      id: "ach_04",
      title: "Bug Squasher",
      subtitle: "Fix a Broken App",
      description: "Found a sneaky hidden typo inside the code challenge box and saved the system engine.",
      reward: "?? Requires 200 XP",
      isUnlocked: currentXP >= 200,
      percentage: Math.min(Math.round((currentXP / 200) * 100), 100),
      icon: Code,
      color: "from-rose-400 to-pink-500",
      ringColor: "border-rose-400"
    },
    {
      id: "ach_05",
      title: "AI Explorer",
      subtitle: "Tutor Buddy's Help",
      description: "Asked your helpful AI buddy a direct question inside the learning terminal sidebar.",
      reward: "?? Requires 500 XP",
      isUnlocked: currentXP >= 500,
      percentage: Math.min(Math.round((currentXP / 500) * 100), 100),
      icon: Sparkles,
      color: "from-purple-400 to-indigo-600",
      ringColor: "border-purple-400"
    },
    {
      id: "ach_06",
      title: "Space Pilot",
      subtitle: "Level Completion!",
      description: "Finished your entire introduction planet path! Ready for advanced star system missions.",
      reward: "?? Requires 1,000 XP total",
      isUnlocked: currentXP >= 1000,
      percentage: Math.min(Math.round((currentXP / 1000) * 100), 100),
      icon: Rocket,
      color: "from-cyan-400 to-blue-500",
      ringColor: "border-cyan-400"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-100">
      <main className="max-w-6xl mx-auto p-6 md:p-12 space-y-10">
        
        {/* Top Profile Card - Duolingo Header Style */}
        <div className="bg-white border-2 border-slate-200/80 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
            {/* Massive Duolingo Ring Medallion */}
            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 p-1 shadow-md transform hover:rotate-12 transition-transform duration-300">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-orange-500 font-black">
                <Trophy size={32} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <h1 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tight italic">Trophy Cabin</h1>
                <span className="text-[11px] font-black bg-amber-100 border-2 border-amber-300 text-amber-700 px-3 py-0.5 rounded-full uppercase tracking-wider animate-bounce">
                  ?? Gold League
                </span>
              </div>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Tap your unlocked badges to inspect your milestones, track game tasks, and review powerups!
              </p>
            </div>
          </div>

          {/* User Score Metrics */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-white border-2 border-slate-200/80 rounded-2xl p-3 px-5 flex items-center gap-3 flex-1 md:flex-initial justify-center min-w-[130px] shadow-sm transform hover:scale-105 transition-all">
              <span className="text-2xl">?</span>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Total XP</p>
                <p className="font-extrabold text-slate-900 text-lg leading-none">{currentXP}</p>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200/80 rounded-2xl p-3 px-5 flex items-center gap-3 flex-1 md:flex-initial justify-center min-w-[130px] shadow-sm transform hover:scale-105 transition-all">
              <span className="text-2xl">??</span>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Streak</p>
                <p className="font-extrabold text-slate-900 text-lg leading-none">{currentStreak} Days</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Map Track Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left/Middle Badges List */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {achievements.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <button
                  key={badge.id}
                  onClick={() => setSelectedBadge(badge)}
                  className={`group relative bg-white border-2 border-b-4 rounded-[2.5rem] p-6 flex flex-col items-center justify-between text-center transition-all duration-200 
                    active:translate-y-0.5 active:border-b-2
                    ${badge.isUnlocked 
                      ? 'border-slate-200 border-b-slate-300 hover:border-blue-400 hover:border-b-blue-500 cursor-pointer' 
                      : 'border-slate-200/60 opacity-60 cursor-not-allowed'}`}
                >
                  {/* Duolingo Progress Ring Wrapper */}
                  <div className="relative mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className={`h-24 w-24 rounded-full border-4 flex items-center justify-center bg-white shadow-inner relative
                      ${badge.isUnlocked ? `ring-4 ring-slate-100 ${badge.ringColor}` : 'border-slate-100 bg-slate-50'}`}
                    >
                      {/* Colorful Icon background circle inside */}
                      <div className={`h-16 w-16 rounded-full flex items-center justify-center text-white shadow-md
                        ${badge.isUnlocked ? `bg-gradient-to-br ${badge.color}` : 'bg-slate-200 text-slate-400'}`}
                      >
                        <IconComponent size={28} className={badge.isUnlocked ? "animate-pulse" : ""} />
                      </div>
                    </div>

                    {/* Checkmark Badge Jewel */}
                    <div className={`absolute bottom-0 right-0 h-7 w-7 rounded-full border-2 border-white flex items-center justify-center shadow-md font-bold
                      ${badge.isUnlocked ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-500'}`}
                    >
                      {badge.isUnlocked ? <Check size={14} className="stroke-[3]" /> : <Lock size={12} />}
                    </div>
                  </div>

                  {/* Badge Text Info Labels */}
                  <div className="space-y-1">
                    <h3 className={`text-base font-black uppercase tracking-tight ${badge.isUnlocked ? 'text-slate-900' : 'text-slate-400'}`}>
                      {badge.title}
                    </h3>
                    <p className="text-[11px] font-bold text-blue-500 uppercase tracking-wide">
                      {badge.subtitle}
                    </p>
                  </div>

                  {/* Bottom Percent Track Indicator */}
                  <div className="w-full mt-4 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/40">
                    <div 
                      className={`h-full transition-all duration-500 bg-gradient-to-r ${badge.isUnlocked ? 'from-blue-500 to-cyan-400' : 'from-slate-300 to-slate-400'}`}
                      style={{ width: `${badge.percentage}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column Side Panel Inspect Widget Box */}
          <div className="bg-white border-2 border-b-4 border-slate-200 border-b-slate-300 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm min-h-[400px]">
            {selectedBadge ? (
              <div className="space-y-6 flex flex-col h-full justify-between animate-fade-in">
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-black bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                    Inspecting Milestone
                  </span>
                  
                  {/* Big Medallion Graphic Box */}
                  <div className="flex justify-center pt-2">
                    <div className={`h-28 w-28 rounded-full bg-gradient-to-br ${selectedBadge.color} p-1 shadow-lg flex items-center justify-center text-white`}>
                      <div className="h-full w-full rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center">
                        {(() => {
                          const CustomIcon = selectedBadge.icon;
                          return <CustomIcon size={44} />;
                        })()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tight italic">
                      {selectedBadge.title}
                    </h2>
                    <p className="text-xs text-blue-500 font-extrabold uppercase tracking-widest">
                      {selectedBadge.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 font-medium px-4 leading-relaxed pt-2">
                      {selectedBadge.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-center">
                    <p className="text-[11px] font-bold text-slate-600 tracking-wide uppercase">
                      {selectedBadge.reward}
                    </p>
                  </div>
                  <Button 
                    onClick={() => setSelectedBadge(null)}
                    className="w-full h-12 bg-slate-900 hover:bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-xl transition-colors shadow-md active:translate-y-0.5 active:shadow-none"
                  >
                    Close Log View
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center my-auto space-y-4 py-8">
                <div className="h-16 w-16 bg-slate-50 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 animate-pulse">
                  <HelpCircle size={32} />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-800 uppercase tracking-wide">No Badge Selected</h4>
                  <p className="text-xs text-slate-400 font-medium max-w-[200px] mx-auto mt-2 leading-relaxed">
                    Tap on any active card to view your reward details and level descriptions!
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Global Level Progress Footer Row */}
        <section className="bg-white border-2 border-slate-200/80 rounded-[2.5rem] p-6 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {[
              { val: achievements.filter(a => a.isUnlocked).length + " / " + achievements.length, label: "Trophies Won" },
              { val: currentStreak + "d", label: "Streak Multiplier" },
              { val: "Rank #4", label: "League Leader" },
              { val: currentXP >= 300 ? "Elite Cadet" : "Beginner", label: "Player Status" },
            ].map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i > 0 ? 'lg:pl-6' : ''}`}>
                <p className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter italic leading-none">
                  {stat.val}
                </p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
