import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, j as useParams, u as useNavigate, a as useAuth, s as supabase, h as Award, B as Button, L as Link, C as ChevronRight, k as Check, X, t as toast } from "./router-BMdv6_PJ.js";
import { L as LoaderCircle } from "./loader-circle-Bs3vu2Ol.js";
import { T as Terminal } from "./terminal-tShdgl_p.js";
import { B as BrainCircuit } from "./brain-circuit-Cz7DLbqU.js";
import { S as ShieldCheck } from "./shield-check-DuVKbcnv.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode);
function Lesson() {
  const {
    day
  } = useParams({
    from: "/lesson/$day"
  });
  const dayNum = Number(day);
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  const [planId, setPlanId] = reactExports.useState(null);
  const [planDays, setPlanDays] = reactExports.useState([]);
  const [fetching, setFetching] = reactExports.useState(true);
  const [done, setDone] = reactExports.useState(false);
  const [quizStarted, setQuizStarted] = reactExports.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [quizFinished, setQuizFinished] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setFeedback(null);
    window.scrollTo(0, 0);
  }, [dayNum]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      setFetching(true);
      const {
        data: plan
      } = await supabase.from("learning_plans").select("id, days").eq("user_id", user.id).maybeSingle();
      if (plan) {
        setPlanId(plan.id);
        setPlanDays(plan.days || []);
        const {
          data: prog
        } = await supabase.from("lesson_progress").select("completed").eq("day_number", dayNum).eq("plan_id", plan.id).maybeSingle();
        setDone(!!prog?.completed);
      }
      setFetching(false);
    })();
  }, [user, dayNum]);
  const currentDayData = reactExports.useMemo(() => planDays.find((d) => d.day === dayNum), [planDays, dayNum]);
  const quiz = reactExports.useMemo(() => currentDayData?.quiz, [currentDayData]);
  if (dayNum === 21) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 selection:bg-blue-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "certificate-node", className: "relative p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-[4rem] shadow-[0_0_100px_rgba(59,130,246,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white text-slate-950 p-16 md:p-24 rounded-[3.8rem] text-center max-w-4xl border-[16px] border-slate-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 100, className: "mx-auto text-blue-600 mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black tracking-[0.5em] uppercase text-slate-400 mb-4", children: "Official Certification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter mb-8 leading-none", children: [
          "Kinetix ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Architect" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-24 bg-slate-200 mx-auto mb-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-slate-600 mb-2 italic", children: "This document confirms that the operative" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black uppercase italic mb-12 tracking-tight text-slate-900", children: user?.email?.split("@")[0] || "NEURAL_ARCHITECT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-slate-500 max-w-xl mx-auto leading-relaxed", children: [
          "Has successfully bypassed all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900", children: "20 Logic Phases" }),
          " and mastered Full-Stack Architecture, AI Orchestration, and System Integrity."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 pt-12 border-t border-slate-100 grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-black uppercase text-slate-400", children: "Issue_Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold", children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-black uppercase text-slate-400", children: "System_ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-blue-600", children: "KX-2026-AUTH" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => window.print(), className: "h-20 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase italic text-lg shadow-2xl group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "mr-3 group-hover:rotate-12 transition-transform" }),
          " Save_As_PDF"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-20 px-12 rounded-full bg-white/10 hover:bg-white/20 text-white font-black uppercase italic text-lg", children: "Return_To_Base" }) })
      ] })
    ] });
  }
  const handleAnswer = (optionIndex) => {
    if (!quiz || feedback) return;
    const correctIndex = quiz.questions[currentQuestionIndex].correct;
    const isCorrect = optionIndex === correctIndex;
    setFeedback({
      isCorrect,
      index: optionIndex
    });
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
    const finalPercentage = Math.round(score / quiz.questions.length * 100);
    const {
      error
    } = await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      plan_id: planId,
      day_number: dayNum,
      completed: true,
      score: finalPercentage
    }, {
      onConflict: "user_id,plan_id,day_number"
    });
    if (!error) {
      setDone(true);
      toast.success("PHASE VERIFIED", {
        description: "Progress synced to core."
      });
    }
  }
  if (loading || fetching) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen items-center justify-center bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-10 w-10 animate-spin text-blue-600" }) });
  if (!currentDayData) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center font-black uppercase italic tracking-[0.5em]", children: "Module_Data_Missing" });
  const percentage = quiz ? Math.round(score / quiz.questions.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-slate-900 selection:bg-blue-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl px-8 py-5 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 hover:text-blue-600 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
        " System_Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase italic tracking-widest text-slate-400", children: [
        "Node_Status: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: "Active" }),
        " // Phase_0",
        dayNum
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-5xl mx-auto px-8 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl md:text-9xl font-[1000] italic uppercase tracking-[ -0.05em] text-slate-950 leading-[0.8] mb-8", children: currentDayData.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed", children: currentDayData.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-60 mb-60", children: currentDayData.lessons?.filter((l) => l.type === "lesson").map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-2 gap-20 items-start group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-12 bg-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-blue-600", children: [
              "Module_Segment_0",
              idx + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-950 transition-transform group-hover:translate-x-2", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-600 leading-relaxed font-medium", children: item.explanation }),
          item.technical_details && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group/note bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "list-none p-6 cursor-pointer flex justify-between items-center font-black uppercase text-[10px] text-slate-500 hover:bg-slate-100 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16, className: "text-blue-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Technical_Deep_Dive" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "group-open/note:rotate-90 transition-transform text-slate-300" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white italic", children: item.technical_details })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 grid gap-3", children: item.key_points?.map((kp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, className: "text-blue-500" }),
            " ",
            kp
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[3rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] sticky top-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-white/5 flex justify-between items-center bg-slate-900/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-amber-500/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500/50" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 12 }),
              " ",
              item.code_language || "script",
              ".sys"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-base text-blue-100/90 whitespace-pre-wrap leading-relaxed", children: item.code_example }) })
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "quiz", className: "scroll-mt-32 pb-40", children: !quizStarted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-32 rounded-[5rem] bg-slate-950 text-white text-center border border-white/10 shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "mx-auto mb-12 text-blue-500 animate-pulse", size: 80 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-7xl font-[1000] italic uppercase tracking-tighter mb-6", children: "Neural_Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mb-12 font-black uppercase tracking-[0.5em] text-xs", children: "Verify your knowledge to sync progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setQuizStarted(true), className: "h-24 px-20 rounded-full bg-blue-600 text-white font-black uppercase text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)]", children: "Execute_Test_Sequence" })
      ] }) : !quizFinished && quiz ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mb-16 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block", children: "Current_Sequence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-black italic text-slate-950", children: [
              currentQuestionIndex + 1,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200", children: "/" }),
              quiz.questions.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-48 bg-slate-100 rounded-full overflow-hidden mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-blue-600 transition-all duration-500", style: {
            width: `${(currentQuestionIndex + 1) / quiz.questions.length * 100}%`
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-100 rounded-[4rem] p-16 md:p-20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 leading-[1.1] text-slate-950", children: quiz.questions[currentQuestionIndex].question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: quiz.questions[currentQuestionIndex].options.map((opt, i) => {
            const isSelected = feedback?.index === i;
            const isCorrect = feedback?.isCorrect;
            const showCorrect = feedback && i === quiz.questions[currentQuestionIndex].correct;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: !!feedback, onClick: () => handleAnswer(i), className: `group w-full text-left p-10 rounded-[2.5rem] border-2 transition-all flex justify-between items-center
                          ${isSelected && isCorrect ? "bg-emerald-500 border-emerald-400 text-white translate-x-2" : ""}
                          ${isSelected && !isCorrect ? "bg-red-500 border-red-400 text-white" : ""}
                          ${!isSelected && showCorrect ? "bg-emerald-100 border-emerald-200 text-emerald-700" : ""}
                          ${!feedback ? "bg-white border-white hover:border-slate-950 hover:bg-slate-950 hover:text-white" : ""}
                          ${feedback && !isSelected && !showCorrect ? "opacity-20 scale-[0.98]" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black italic uppercase tracking-tight", children: opt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                isSelected && isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32, strokeWidth: 3 }),
                isSelected && !isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 32, strokeWidth: 3 }),
                !feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "opacity-0 group-hover:opacity-100 transition-opacity" })
              ] })
            ] }, i);
          }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-32 rounded-[5rem] text-white text-center shadow-[0_50px_100px_rgba(0,0,0,0.2)] transition-all animate-in zoom-in-95 duration-500 ${percentage >= 70 ? "bg-emerald-600" : "bg-red-600"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mx-auto mb-8", size: 80 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-9xl font-[1000] italic uppercase tracking-tighter mb-4 leading-none", children: [
          percentage,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.4em] opacity-50", children: "%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 font-black uppercase tracking-[0.4em] text-xs mb-16", children: percentage >= 70 ? "Neural_Match: Verified" : "Integrity_Failure: Insufficient Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row justify-center gap-6", children: percentage >= 70 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: async () => {
          await markComplete();
          if (dayNum >= 20) {
            navigate({
              to: "/lesson/21"
            });
          } else {
            navigate({
              to: `/lesson/${dayNum + 1}`
            });
          }
        }, className: "h-20 px-16 rounded-3xl bg-white text-slate-900 font-black uppercase text-sm hover:scale-105 transition-all shadow-xl group", children: [
          dayNum >= 20 ? "INITIATE_GRADUATION" : `EXECUTE_PHASE_0${dayNum + 1}`,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-3 group-hover:translate-x-2 transition-transform", size: 18 })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => window.location.reload(), className: "h-20 px-16 rounded-3xl bg-transparent border-2 border-white/20 text-white font-black uppercase text-sm hover:bg-white/10", children: "Retry_Audit" }) })
      ] }) })
    ] })
  ] });
}
export {
  Lesson as component
};
