import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { withTimeout } from "@/utils/fetchWithTimeout";
import { FALLBACK_DAYS } from "@/data/fallbackPlan";
import { 
  ArrowLeft, ArrowRight, Loader2, BrainCircuit, 
  ChevronRight, Monitor, Terminal, ShieldCheck, Check, X, Info, Award, Printer
} from "lucide-react";

export const Route = createFileRoute("/lesson/$day")({
  component: Lesson,
});

function Lesson() {
  const { day } = useParams({ from: "/lesson/$day" });
  const dayNum = Number(day);
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  
  const [planId, setPlanId] = useState<string | null>(null);
  const [planDays, setPlanDays] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);
  const [done, setDone] = useState(false);

  // QUIZ STATES
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; index: number } | null>(null);

  useEffect(() => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setFeedback(null);
    window.scrollTo(0, 0);
  }, [dayNum]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setFetching(true);
      const { data: plan } = await supabase
        .from("learning_plans")
        .select("id, days")
        .eq("user_id", user.id)
        .maybeSingle();

      if (plan) {
        setPlanId(plan.id);
        setPlanDays(plan.days || []);
        const { data: prog } = await supabase
          .from("lesson_progress")
          .select("completed")
          .eq("day_number", dayNum)
          .eq("plan_id", plan.id)
          .maybeSingle();
        setDone(!!prog?.completed);
      }
      setFetching(false);
    })();
  }, [user, dayNum]);

  const currentDayData = useMemo(() => planDays.find((d) => d.day === dayNum), [planDays, dayNum]);
  const quiz = useMemo(() => currentDayData?.quiz, [currentDayData]);

  // GRADUATION LOGIC: Day 21 Special Certificate View
  if (dayNum === 21) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 selection:bg-blue-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div id="certificate-node" className="relative p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-[4rem] shadow-[0_0_100px_rgba(59,130,246,0.3)]">
            <div className="bg-white text-slate-950 p-16 md:p-24 rounded-[3.8rem] text-center max-w-4xl border-[16px] border-slate-50">
                <Award size={100} className="mx-auto text-blue-600 mb-8" />
                <h1 className="text-2xl font-black tracking-[0.5em] uppercase text-slate-400 mb-4">Official Certification</h1>
                <h2 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter mb-8 leading-none">
                    Kinetix <span className="text-blue-600">Architect</span>
                </h2>
                <div className="h-1 w-24 bg-slate-200 mx-auto mb-12" />
                <p className="text-xl font-medium text-slate-600 mb-2 italic">This document confirms that the operative</p>
                <p className="text-4xl font-black uppercase italic mb-12 tracking-tight text-slate-900">{user?.email?.split('@')[0] || 'NEURAL_ARCHITECT'}</p>
                <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
                    Has successfully bypassed all <span className="font-bold text-slate-900">20 Logic Phases</span> and mastered Full-Stack Architecture, AI Orchestration, and System Integrity.
                </p>
                <div className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-2 gap-8">
                    <div className="text-left">
                        <span className="block text-[10px] font-black uppercase text-slate-400">Issue_Date</span>
                        <span className="font-mono font-bold">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] font-black uppercase text-slate-400">System_ID</span>
                        <span className="font-mono font-bold text-blue-600">KX-2026-AUTH</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-16 flex gap-6">
            <Button onClick={() => window.print()} className="h-20 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase italic text-lg shadow-2xl group">
                <Printer className="mr-3 group-hover:rotate-12 transition-transform" /> Save_As_PDF
            </Button>
            <Link to="/dashboard">
                <Button className="h-20 px-12 rounded-full bg-white/10 hover:bg-white/20 text-white font-black uppercase italic text-lg">
                    Return_To_Base
                </Button>
            </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (optionIndex: number) => {
    if (!quiz || feedback) return;
    const correctIndex = quiz.questions[currentQuestionIndex].correct;
    const isCorrect = optionIndex === correctIndex;
    setFeedback({ isCorrect, index: optionIndex });
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestionIndex + 1 < quiz.questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizFinished(true);
      }
    }, 1200);
  };

  async function markComplete() {
    if (!user || !planId || !quiz) return;
    const finalPercentage = Math.round((score / quiz.questions.length) * 100);
    const { error } = await supabase.from("lesson_progress").upsert({
      user_id: user.id, plan_id: planId, day_number: dayNum, completed: true, score: finalPercentage
    }, { onConflict: 'user_id,plan_id,day_number' });

    if (!error) {
      setDone(true);
      toast.success("PHASE VERIFIED", { description: "Progress synced to core." });
    }
  }

  if (loading || fetching) return <div className="flex h-screen items-center justify-center bg-white"><Loader2 className="h-10 w-10 animate-spin text-blue-600" /></div>;
  if (!currentDayData) { setPlanDays(FALLBACK_DAYS); return null; }

  const percentage = quiz ? Math.round((score / quiz.questions.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl px-8 py-5 flex justify-between items-center">
        <Link to="/dashboard" className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 hover:text-blue-600 transition-colors">
          <ArrowLeft size={14} /> System_Back
        </Link>
        <span className="text-[10px] font-black uppercase italic tracking-widest text-slate-400">
          Node_Status: <span className="text-blue-600">Active</span> // Phase_0{dayNum}
        </span>
      </nav>

      <main className="max-w-5xl mx-auto px-8 py-20">
        <header className="mb-32">
          <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-[ -0.05em] text-slate-950 leading-[0.8] mb-8">
            {currentDayData.title}
          </h1>
          <p className="text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            {currentDayData.description}
          </p>
        </header>

        <div className="space-y-60 mb-60">
          {currentDayData.lessons?.filter((l: any) => l.type === "lesson").map((item: any, idx: number) => (
            <article key={idx} className="grid md:grid-cols-2 gap-20 items-start group">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Module_Segment_0{idx+1}</span>
                </div>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-950 transition-transform group-hover:translate-x-2">
                  {item.title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">{item.explanation}</p>
                {item.technical_details && (
                  <details className="group/note bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden transition-all">
                    <summary className="list-none p-6 cursor-pointer flex justify-between items-center font-black uppercase text-[10px] text-slate-500 hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <Info size={16} className="text-blue-500" />
                        <span>Technical_Deep_Dive</span>
                      </div>
                      <ChevronRight size={16} className="group-open/note:rotate-90 transition-transform text-slate-300" />
                    </summary>
                    <div className="p-8 text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white italic">
                      {item.technical_details}
                    </div>
                  </details>
                )}
                <div className="pt-4 grid gap-3">
                  {item.key_points?.map((kp: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
                      <Check size={12} className="text-blue-500" /> {kp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[3rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] sticky top-32">
                <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-slate-900/40">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={12} /> {item.code_language || 'script'}.sys
                  </span>
                </div>
                <div className="p-10">
                  <pre className="font-mono text-base text-blue-100/90 whitespace-pre-wrap leading-relaxed">
                    {item.code_example}
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section id="quiz" className="scroll-mt-32 pb-40">
          {!quizStarted ? (
            <div className="p-32 rounded-[5rem] bg-slate-950 text-white text-center border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              <BrainCircuit className="mx-auto mb-12 text-blue-500 animate-pulse" size={80} />
              <h2 className="text-7xl font-[1000] italic uppercase tracking-tighter mb-6">Neural_Audit</h2>
              <p className="text-slate-500 mb-12 font-black uppercase tracking-[0.5em] text-xs">Verify your knowledge to sync progress</p>
              <Button onClick={() => setQuizStarted(true)} className="h-24 px-20 rounded-full bg-blue-600 text-white font-black uppercase text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                Execute_Test_Sequence
              </Button>
            </div>
          ) : !quizFinished && quiz ? (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-end mb-16 px-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block">Current_Sequence</span>
                  <span className="text-5xl font-black italic text-slate-950">{currentQuestionIndex + 1}<span className="text-slate-200">/</span>{quiz.questions.length}</span>
                </div>
                <div className="h-2 w-48 bg-slate-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }} />
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-16 md:p-20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 leading-[1.1] text-slate-950">
                  {quiz.questions[currentQuestionIndex].question}
                </h3>
                <div className="grid gap-6">
                  {quiz.questions[currentQuestionIndex].options.map((opt: string, i: number) => {
                    const isSelected = feedback?.index === i;
                    const isCorrect = feedback?.isCorrect;
                    const showCorrect = feedback && i === quiz.questions[currentQuestionIndex].correct;
                    return (
                      <button key={i} disabled={!!feedback} onClick={() => handleAnswer(i)} 
                        className={`group w-full text-left p-10 rounded-[2.5rem] border-2 transition-all flex justify-between items-center
                          ${isSelected && isCorrect ? 'bg-emerald-500 border-emerald-400 text-white translate-x-2' : ''}
                          ${isSelected && !isCorrect ? 'bg-red-500 border-red-400 text-white' : ''}
                          ${!isSelected && showCorrect ? 'bg-emerald-100 border-emerald-200 text-emerald-700' : ''}
                          ${!feedback ? 'bg-white border-white hover:border-slate-950 hover:bg-slate-950 hover:text-white' : ''}
                          ${feedback && !isSelected && !showCorrect ? 'opacity-20 scale-[0.98]' : ''}`}>
                        <span className="text-2xl font-black italic uppercase tracking-tight">{opt}</span>
                        <div className="flex items-center gap-4">
                           {isSelected && isCorrect && <Check size={32} strokeWidth={3} />}
                           {isSelected && !isCorrect && <X size={32} strokeWidth={3} />}
                           {!feedback && <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className={`p-32 rounded-[5rem] text-white text-center shadow-[0_50px_100px_rgba(0,0,0,0.2)] transition-all animate-in zoom-in-95 duration-500 ${percentage >= 70 ? 'bg-emerald-600' : 'bg-red-600'}`}>
                <ShieldCheck className="mx-auto mb-8" size={80} />
                <h2 className="text-9xl font-[1000] italic uppercase tracking-tighter mb-4 leading-none">
                  {percentage}<span className="text-[0.4em] opacity-50">%</span>
                </h2>
                <p className="text-white/60 font-black uppercase tracking-[0.4em] text-xs mb-16">
                  {percentage >= 70 ? 'Neural_Match: Verified' : 'Integrity_Failure: Insufficient Data'}
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  {percentage >= 70 ? (
                    <Button 
                      onClick={async () => {
                        await markComplete(); 
                        if (dayNum >= 20) {
                          navigate({ to: '/lesson/21' });
                        } else {
                          navigate({ to: `/lesson/${dayNum + 1}` });
                        }
                      }} 
                      className="h-20 px-16 rounded-3xl bg-white text-slate-900 font-black uppercase text-sm hover:scale-105 transition-all shadow-xl group"
                    >
                      {dayNum >= 20 ? 'INITIATE_GRADUATION' : `EXECUTE_PHASE_0${dayNum + 1}`} 
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18}/>
                    </Button>
                  ) : (
                    <Button onClick={() => window.location.reload()} className="h-20 px-16 rounded-3xl bg-transparent border-2 border-white/20 text-white font-black uppercase text-sm hover:bg-white/10">Retry_Audit</Button>
                  )}
                </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

