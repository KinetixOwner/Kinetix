import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Terminal, CheckCircle, XCircle, ArrowLeft, Loader2, Timer, Zap } from "lucide-react";
import { toast } from "sonner";
import { puzzles } from "@/data/puzzles";

export const Route = createFileRoute("/daily-puzzle")({
  component: DailyPuzzleComponent,
});

function DailyPuzzleComponent() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  const [todayPuzzle, setTodayPuzzle] = useState<any>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [savingProgress, setSavingProgress] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = tomorrow.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
    
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const puzzleIndex = dayOfYear % puzzles.length;
    setTodayPuzzle(puzzles[puzzleIndex]);

    if (user) {
      (async () => {
        const todayStr = now.toISOString().split('T')[0];
        const { data } = await supabase
          .from("lesson_progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("completed_at", todayStr) 
          .maybeSingle();
          
        if (data) {
          setIsSubmitted(true);
          setIsCorrect(data.quiz_passed);
          setSelectedChoice(data.quiz_passed ? "ALREADY_SOLVED" : "FAILED_ATTEMPT");
        }
      })();
    }
  }, [user, loading, navigate]);

  const handleValidation = async () => {
    if (!selectedChoice || isSubmitted || !user) return;
    setSavingProgress(true);

    const userPassed = selectedChoice === todayPuzzle.correctCode;
    setIsCorrect(userPassed);
    setIsSubmitted(true);

    try {
      const now = new Date();
      const todayStr = now.toISOString().split('T')[0];

      await supabase.from("lesson_progress").insert({
        user_id: user.id,
        completed_at: todayStr,
        quiz_passed: userPassed
      });

      if (userPassed) {
        toast.success("Correct Matrix Injected!");
        const { data: profile } = await supabase.from("profiles").select("xp, streak_count").eq("id", user.id).single();
        
        await supabase.from("profiles").update({
          xp: (profile?.xp || 0) + 50,
          streak_count: (profile?.streak_count || 0) + 1,
          last_active_date: now.toISOString()
        }).eq("id", user.id);
      } else {
        toast.error("Compilation Fault. Access Locked.");
      }
    } catch (err) {
      console.error("Database connection fault", err);
    } finally {
      setSavingProgress(false);
    }
  };

  if (loading || !todayPuzzle) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-emerald-400 font-mono">
        <Loader2 className="animate-spin mr-2" size={20} /> SYNCING_TIME_STREAM...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-mono antialiased flex flex-col justify-between p-6 selection:bg-emerald-500/20">
      
      <header className="max-w-xl w-full mx-auto flex justify-between items-center border-b border-slate-800 pb-4">
        <button 
          onClick={() => navigate({ to: '/dashboard' })} 
          className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer flex items-center gap-1 text-xs uppercase"
        >
          <ArrowLeft size={14} /> Dash
        </button>
        <h1 className="text-xl font-black tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          KINETIX_BREAKER
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-1 rounded-md font-bold">
          <Timer size={14} className="animate-pulse" />
          <span>{timeLeft}</span>
        </div>
      </header>

      <main className="max-w-xl w-full mx-auto my-auto py-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-[10px] tracking-widest text-slate-500 font-bold uppercase flex items-center justify-center gap-1">
            <Zap size={10} className="text-amber-400" /> DAILY TARGET IDENTIFIED
          </div>
          <h2 className="text-lg font-bold text-slate-200 uppercase">{todayPuzzle.title}</h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            {todayPuzzle.anomalyDescription}
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-950/80 rounded-xl p-5 relative shadow-2xl backdrop-blur-md">
          <Terminal size={14} className="absolute top-4 right-4 text-slate-600" />
          <pre className="text-xs font-mono text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed max-h-48">
            <code>{todayPuzzle.buggyCode}</code>
          </pre>
        </div>

        <div className="space-y-2 pt-2">
          {todayPuzzle.choices.map((choice: string, idx: number) => {
            const isSelected = selectedChoice === choice;
            return (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => setSelectedChoice(choice)}
                className={`w-full text-left p-4 border text-xs font-mono transition-all flex items-center justify-between rounded-xl bg-transparent transition-all duration-200
                  ${isSelected 
                    ? 'border-emerald-500 bg-emerald-950/30 text-emerald-300 shadow-lg shadow-emerald-500/5' 
                    : 'border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/30'}
                  ${isSubmitted ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}
                `}
              >
                <span className="truncate pr-4">{choice}</span>
                <span className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-700'}`}>
                  {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="max-w-xl w-full mx-auto pt-4 border-t border-slate-900">
        {!isSubmitted ? (
          <Button
            onClick={handleValidation}
            disabled={!selectedChoice || savingProgress}
            className="w-full h-12 bg-emerald-500 text-slate-950 hover:bg-emerald-400 disabled:bg-slate-900 disabled:text-slate-600 font-bold uppercase text-xs tracking-widest rounded-xl shadow-lg shadow-emerald-500/10 transition-all duration-200"
          >
            {savingProgress ? <Loader2 className="animate-spin text-slate-950" /> : "SUBMIT_PATCH"}
          </Button>
        ) : (
          <div className={`p-5 border rounded-xl backdrop-blur-sm text-center space-y-3 ${isCorrect ? 'border-emerald-500/20 bg-emerald-950/10 text-emerald-400' : 'border-red-500/20 bg-red-950/10 text-red-400'}`}>
            <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider">
              {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
              <span>{isCorrect ? "ACCESS_GRANTED" : "SEQUENCE_LOCKED"}</span>
            </div>
            <p className="text-[11px] text-slate-400 max-w-xs mx-auto leading-relaxed">
              {isCorrect 
                ? "Core anomaly bypassed. Node score recorded to system logs safely." 
                : "Compilation crashed out completely. Target rotation window closed."}
            </p>
            <div className="text-[10px] text-cyan-400 font-bold bg-cyan-950/20 border border-cyan-900/30 inline-block px-3 py-1 rounded-md">
              NEXT DEPLOYMENT IN: {timeLeft}
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
