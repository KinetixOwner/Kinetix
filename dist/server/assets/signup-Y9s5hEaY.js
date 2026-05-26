import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, u as useNavigate, L as Link, s as supabase } from "./router-BMdv6_PJ.js";
import { C as CircleCheck } from "./circle-check-D7Mv44sH.js";
import { S as Shield } from "./shield-BmAcp9IG.js";
import { L as LoaderCircle } from "./loader-circle-Bs3vu2Ol.js";
import { A as ArrowRight } from "./arrow-right-DgLAmxjJ.js";
import { M as Mail } from "./mail-D4hfM70y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [isPendingVerification, setIsPendingVerification] = reactExports.useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const {
        data,
        error: signupError
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: email.split("@")[0]
          }
        }
      });
      if (signupError) {
        setError(signupError.message);
        setLoading(false);
      } else if (data.user) {
        if (data.session) {
          navigate({
            to: "/onboarding"
          });
        } else {
          setIsPendingVerification(true);
          setLoading(false);
        }
      }
    } catch (err) {
      setError("Critical System Error: Connection to KINETIX.OS failed.");
      setLoading(false);
    }
  };
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-6xl font-black text-white italic uppercase leading-[0.9] mb-8", children: [
          "Join the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Top 1%." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 max-w-md", children: ["Neural AI Mentor 1.0 Access", "30-Day Custom Mission Roadmap", "Verified Proof-of-Work Certificates"].map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-slate-300 font-medium italic", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-blue-500" }),
          " ",
          text
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 18, className: "text-blue-500 fill-blue-500/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] ml-1", children: "System Architect Verified" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg font-medium italic leading-relaxed mb-6", children: `"We didn't just build a curriculum; we engineered a high-performance sandbox where the next generation of developers can master advanced logical infrastructure."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white shadow-lg border border-white/20", children: "ME" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black uppercase italic text-sm tracking-tight", children: "Henos Goitom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-400 text-xs font-bold uppercase tracking-widest", children: "Lead Developer & Founder" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center p-8 lg:p-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-10", children: [
      !isPendingVerification ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-2", children: "Create Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 font-medium italic text-sm", children: [
            "Already a member? ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-blue-600 font-bold hover:underline", children: "Log in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSignup, children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold uppercase italic border border-red-100", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@email.com", className: "w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, type: "submit", className: "w-full py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-50", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Start Your Mission ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
          ] }) })
        ] })
      ] }) : (
        /* SECURE DEEP GMAIL SEARCH VERIFICATION OVERLAY */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-center lg:text-left animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto lg:mx-0 shadow-lg shadow-blue-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 28 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black text-slate-900 italic uppercase tracking-tighter", children: "Handshake Dispatched" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 font-medium italic text-sm leading-relaxed", children: [
              "A verification link was generated and pushed to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 font-bold", children: email }),
              ". To protect network deliverability in this sandbox environment, the system may route your handshake into your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 font-bold underline", children: "Spam" }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 font-bold underline", children: "Promotions" }),
              " folder."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://mail.google.com/mail/u/0/#search/from%3Aonboarding%40resend.dev+OR+KINETIX.OS", target: "_blank", rel: "noopener noreferrer", className: "w-full py-5 bg-slate-950 text-white font-mono text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-slate-950/25", children: [
            "Bypass Protocol: Open Gmail Search ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-relaxed text-center lg:text-left", children: "Keep this tab active. Once the secure email link handshake executes, you will be initialized smoothly into your layout." })
        ] })
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest leading-relaxed", children: [
        "By clicking continue, you agree to our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 cursor-pointer hover:underline", children: "Terms" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-900 cursor-pointer hover:underline", children: "Privacy" }),
        "."
      ] })
    ] }) })
  ] });
}
export {
  SignupPage as component
};
