import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

type Answers = {
  age: number;
  experience: string;
  interests: string[];
  goal: string;
  daily_minutes: number;
};

const STEPS = 6;

function Onboarding() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    age: 10,
    experience: "",
    interests: [],
    goal: "",
    daily_minutes: 20,
  });

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/signup" });
  }, [user, loading, navigate]);

  const next = () => setStep((s) => Math.min(s + 1, STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  async function generatePlan() {
    if (!user) return;
    setGenerating(true);
    try {
      await supabase.from("profiles").update({ 
        display_name: name || undefined, 
        age: answers.age,
      }).eq("id", user.id);

      const { data, error } = await supabase.functions.invoke("generate-plan", { body: answers });
      
      if (error || !data?.plan) {
        toast.error("AI is busy — please try once more!");
        setGenerating(false);
        return;
      }

      await supabase.from("learning_plans").update({ is_active: false }).eq("user_id", user.id);
      await supabase.from("learning_plans").insert({
        user_id: user.id,
        title: data.plan.title,
        summary: data.plan.summary,
        days: data.plan.days,
        is_active: true,
      });

    } catch (e) {
      console.error(e);
      toast.error("Generation failed. Try again.");
      setGenerating(false);
    }
  }

  const progress = ((step + 1) / STEPS) * 100;

  if (showPaywall) return <PaywallView name={name} />;
  if (generating) return <GeneratingView onLoaderComplete={() => setShowPaywall(true)} />;

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-blue-500/30">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6">
        <Logo size={30} />
        <span className="text-xs font-black uppercase tracking-widest text-slate-500">Step {step + 1} of {STEPS}</span>
      </header>
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900 border border-slate-800">
          <div className="h-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)] transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-12">
        <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-10 shadow-2xl">
          {step === 0 && (
            <StepWrap title="What's your name?">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex" className="h-16 rounded-2xl text-xl font-bold bg-slate-950 border-slate-800 text-white placeholder:text-slate-700 focus-visible:border-blue-500 transition-colors" autoFocus />
            </StepWrap>
          )}
          {step === 1 && (
            <StepWrap title="How old are you?">
              <div className="grid grid-cols-3 gap-3">
                {[8, 9, 10, 11, 12, 13].map((age) => (
                  <ChoiceChip key={age} active={answers.age === age} onClick={() => setAnswers({ ...answers, age })}>
                    {age}
                  </ChoiceChip>
                ))}
              </div>
            </StepWrap>
          )}
          {step === 2 && (
            <StepWrap title="Coded before?">
              <div className="grid gap-3">
                {["never", "a little", "some", "lots"].map((val) => (
                  <ChoiceChip key={val} active={answers.experience === val} onClick={() => setAnswers({ ...answers, experience: val })}>
                    {val.toUpperCase()}
                  </ChoiceChip>
                ))}
              </div>
            </StepWrap>
          )}
          {step === 3 && (
            <StepWrap title="Your interests?">
              <div className="grid grid-cols-2 gap-3">
                {["games", "websites", "art", "music", "apps", "robots"].map((i) => (
                  <ChoiceChip key={i} active={answers.interests.includes(i)} onClick={() => setAnswers({...answers, interests: answers.interests.includes(i) ? answers.interests.filter(x => x !== i) : [...answers.interests, i]})}>
                    {i.toUpperCase()}
                  </ChoiceChip>
                ))}
              </div>
            </StepWrap>
          )}
          {step === 4 && (
            <StepWrap title="Your main goal?">
              <div className="grid gap-3">
                {["fun", "build", "school", "future"].map((val) => (
                  <ChoiceChip key={val} active={answers.goal === val} onClick={() => setAnswers({ ...answers, goal: val })}>
                    {val.toUpperCase()}
                  </ChoiceChip>
                ))}
              </div>
            </StepWrap>
          )}
          {step === 5 && (
            <StepWrap title="Daily habit?">
              <div className="grid grid-cols-4 gap-3">
                {[10, 15, 20, 30].map((m) => (
                  <ChoiceChip key={m} active={answers.daily_minutes === m} onClick={() => setAnswers({ ...answers, daily_minutes: m })}>
                    {m}M
                  </ChoiceChip>
                ))}
              </div>
            </StepWrap>
          )}
          <div className="mt-12 flex items-center justify-between">
            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl" onClick={back} disabled={step === 0}>Back</Button>
            {step < STEPS - 1 ? (
              <Button className="h-14 px-10 rounded-2xl bg-white hover:bg-slate-200 text-black font-black uppercase tracking-wider text-xs transition-all" onClick={next}>Next Step</Button>
            ) : (
              <Button className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-600/20 transition-all" onClick={generatePlan}>Build 30-Day Plan ✨</Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function StepWrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-4xl font-[1000] italic tracking-tighter text-white uppercase">{title}</h1>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ChoiceChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={`rounded-2xl border-2 px-6 py-4 font-black italic tracking-wide text-sm uppercase transition-all ${
        active 
          ? "border-blue-500 bg-blue-600/10 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]" 
          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function ChoiceRow({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={`flex items-center justify-between rounded-2xl border-2 px-6 py-5 font-black italic tracking-wide uppercase transition-all ${
        active 
          ? "border-blue-500 bg-blue-600/10 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]" 
          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-white"
      }`}
    >
      <span>{children}</span>
      {active && <CheckCircle2 className="text-blue-500 w-5 h-5 drop-shadow-[0_0_4px_rgba(59,130,246,0.5)]" />}
    </button>
  );
}

// 🕹️ GAMIFIED HIGH-GLOW MOUNT INTERFACE LOADER
function GeneratingView({ onLoaderComplete }: { onLoaderComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [terminalText, setTerminalText] = useState("LOADING NEURAL NODE ENGINES...");

  const statusLogs = [
    "BOOTING KINETIX CORE AI...",
    "PARSING REFRESH DATA ENVIRONMENT STRUCTURES...",
    "ISOLATING WORKSPACE MATRIX PATTERNS...",
    "CALCULATING 30-DAY TIMELINE PROGRESSION MODELS...",
    "SYNTHESIZING EXPERIENTIAL MILESTONES...",
    "ENCRYPTING CUSTOM CURRICULUM SHELL...",
    "BLUEPRINT COMPILED SUCCESSFULLY."
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            onLoaderComplete();
          }, 600);
          return 100;
        }
        const stepAdd = Math.floor(Math.random() * 5) + 3; 
        return Math.min(prev + stepAdd, 100);
      });
    }, 600);

    const logTimer = setInterval(() => {
      const logPhrase = statusLogs[Math.floor(Math.random() * statusLogs.length)];
      setTerminalText(logPhrase);
    }, 3500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 font-mono tracking-wider text-white">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
            <span>SYSTEM_MATRIX: ACTIVE</span>
          </div>
          <span>EST_WAIT: &lt; 45S</span>
        </div>

        <div className="my-10 text-center">
          <h2 className="text-6xl font-[1000] italic tracking-tighter text-white tabular-nums mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            {percent}%
          </h2>
          <p className="text-xs font-black uppercase tracking-widest text-blue-400 animate-pulse h-4">
            {terminalText}
          </p>
        </div>

        <div className="w-full h-3 rounded-full bg-slate-950 p-[2px] border border-slate-800 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-6 flex justify-between text-[10px] text-slate-600 font-bold">
          <span>BUILD // KINETIX_CORE_v1.0</span>
          <span>COMPILING_MISSION_DATA</span>
        </div>
      </div>
    </div>
  );
}

// 💎 RADIANT GLOWING PLAN REDIRECT INTERFACE
function PaywallView() {
  const navigate = useNavigate();

  // Instantly skip this view and dump right into the dashboard
  useEffect(() => {
    navigate({ to: "/dashboard" });
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white font-sans overflow-hidden relative">
      {/* Background Radial Glow Effect matching Landing page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 65%)" }} />

      <div className="relative z-10 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-xs uppercase font-black tracking-[0.3em] text-slate-500">Initializing Terminal Matrix...</span>
        </div>
      </div>
    </div>
  );
}