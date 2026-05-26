import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, d as createSlot, e as cn, f as cva, a as useAuth, u as useNavigate, L as Link, I as Input, s as supabase, t as toast } from "./router-BMdv6_PJ.js";
import { S as Shield } from "./shield-BmAcp9IG.js";
import { L as LoaderCircle } from "./loader-circle-Bs3vu2Ol.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
function Login() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && user) navigate({
      to: "/dashboard"
    });
  }, [user, loading, navigate]);
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back!");
    navigate({
      to: "/dashboard"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col lg:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hidden lg:flex lg:w-1/2 bg-slate-950 p-16 flex-col justify-between relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", style: {
        backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "relative z-10 text-2xl font-black italic tracking-tighter text-white", children: [
        "KINETIX",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-2xl mx-auto my-auto aspect-[16/10] bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-800" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-slate-800" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-lg border border-slate-800/50 text-[10px] font-mono tracking-wider text-slate-500 uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { size: 10 }),
            " kinetix_core_os"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full h-[calc(100%-3rem)] rounded-xl overflow-hidden bg-slate-950/80 border border-slate-900 flex flex-col items-center justify-center p-8 text-center", children: (
          // Default High-Tech Stand-In Grid when blank
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-black uppercase tracking-wider italic", children: "System Framework Offline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium leading-relaxed", children: "Authentication protocol required. Initialize secure signature handshake terminal on the adjacent access block." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex flex-col gap-2 w-48 mx-auto opacity-30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-slate-800 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2/3 bg-slate-800 rounded-full animate-pulse [animation-delay:200ms]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-4/5 bg-slate-800 rounded-full animate-pulse [animation-delay:400ms]" })
            ] })
          ] })
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SYS.VER // 2026.1.0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-800", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SECURE ACCESS ENCRYPTED" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center p-8 lg:p-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-2", children: "Welcome Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 font-medium italic text-sm", children: [
          "New to the platform? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-blue-600 font-bold hover:underline", children: "Sign up for an invitation" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1", children: "Email Node Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@email.com", className: "w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all font-medium" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "text-xs font-black uppercase tracking-widest text-slate-400 italic", children: "Security Passphrase" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all font-medium" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting, type: "submit", className: "w-full py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-50", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Initialize Sign In ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest leading-relaxed", children: "Authorized hardware credentials only. Active session logs tracking is operational." })
    ] }) })
  ] });
}
export {
  Login as component
};
