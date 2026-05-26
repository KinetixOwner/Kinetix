import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { a as useAuth, u as useNavigate, b as Logo, I as Input, B as Button, s as supabase, t as toast } from "./router-BMdv6_PJ.js";
import { C as CircleCheck } from "./circle-check-D7Mv44sH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const STEPS = 6;
function Onboarding() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(0);
  const [generating, setGenerating] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [answers, setAnswers] = reactExports.useState({
    age: 10,
    experience: "",
    interests: [],
    goal: "",
    daily_minutes: 20
  });
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/signup"
    });
  }, [user, loading, navigate]);
  const next = () => setStep((s) => Math.min(s + 1, STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  async function generatePlan() {
    if (!user) return;
    setGenerating(true);
    try {
      await supabase.from("profiles").update({
        display_name: name || void 0,
        age: answers.age
      }).eq("id", user.id);
      const {
        data,
        error
      } = await supabase.functions.invoke("generate-plan", {
        body: answers
      });
      if (error || !data?.plan) {
        toast.error("AI is busy — please try once more!");
        setGenerating(false);
        return;
      }
      await supabase.from("learning_plans").update({
        is_active: false
      }).eq("user_id", user.id);
      await supabase.from("learning_plans").insert({
        user_id: user.id,
        title: data.plan.title,
        summary: data.plan.summary,
        days: data.plan.days,
        is_active: true
      });
      toast.success("30-Day Plan Ready! 🚀");
      navigate({
        to: "/dashboard"
      });
    } catch (e) {
      console.error(e);
      toast.error("Generation failed. Try again.");
      setGenerating(false);
    }
  }
  const progress = (step + 1) / STEPS * 100;
  if (generating) return /* @__PURE__ */ jsxRuntimeExports.jsx(GeneratingView, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 30 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black uppercase tracking-widest text-slate-400", children: [
        "Step ",
        step + 1,
        " of ",
        STEPS
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-3xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full overflow-hidden rounded-full bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-blue-600 transition-all duration-700", style: {
      width: `${progress}%`
    } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-2xl", children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "What's your name?", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "Alex", className: "h-16 rounded-2xl text-xl font-bold", autoFocus: true }) }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "How old are you?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [8, 9, 10, 11, 12, 13].map((age) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChoiceChip, { active: answers.age === age, onClick: () => setAnswers({
        ...answers,
        age
      }), children: age }, age)) }) }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "Coded before?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: ["never", "a little", "some", "lots"].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChoiceRow, { active: answers.experience === val, onClick: () => setAnswers({
        ...answers,
        experience: val
      }), children: val.toUpperCase() }, val)) }) }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "Your interests?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: ["games", "websites", "art", "music", "apps", "robots"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChoiceChip, { active: answers.interests.includes(i), onClick: () => setAnswers({
        ...answers,
        interests: answers.interests.includes(i) ? answers.interests.filter((x) => x !== i) : [...answers.interests, i]
      }), children: i }, i)) }) }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "Your main goal?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: ["fun", "build", "school", "future"].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChoiceRow, { active: answers.goal === val, onClick: () => setAnswers({
        ...answers,
        goal: val
      }), children: val.toUpperCase() }, val)) }) }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWrap, { title: "Daily habit?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: [10, 15, 20, 30].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ChoiceChip, { active: answers.daily_minutes === m, onClick: () => setAnswers({
        ...answers,
        daily_minutes: m
      }), children: [
        m,
        "m"
      ] }, m)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: back, disabled: step === 0, children: "Back" }),
        step < STEPS - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-14 px-10 rounded-2xl bg-slate-900 text-white", onClick: next, children: "Next Step" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-14 px-10 rounded-2xl bg-blue-600 text-white", onClick: generatePlan, children: "Build 30-Day Plan ✨" })
      ] })
    ] }) })
  ] });
}
function StepWrap({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-black text-slate-900", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
  ] });
}
function ChoiceChip({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick, className: `rounded-2xl border-2 px-4 py-4 font-bold transition-all ${active ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-100 bg-white"}`, children });
}
function ChoiceRow({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, className: `flex items-center justify-between rounded-2xl border-2 px-6 py-5 font-bold transition-all ${active ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 bg-white"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-blue-600 w-6 h-6" })
  ] });
}
function GeneratingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen text-center px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 text-6xl animate-bounce", children: "🤖" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black text-slate-900", children: "Building your 30-Day Path..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-500", children: "Creating custom lessons for your interests." })
  ] });
}
export {
  Onboarding as component
};
