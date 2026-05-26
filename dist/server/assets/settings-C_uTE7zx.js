import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-Y-l2jdWn.js";
import { c as createLucideIcon, a as useAuth, u as useNavigate, s as supabase, B as Button, t as toast } from "./router-BMdv6_PJ.js";
import { U as User } from "./user-ClJZ-FC7.js";
import { Z as Zap } from "./zap-DGhWpSD8.js";
import { L as Lock } from "./lock-DtmTVZaJ.js";
import { G as Globe } from "./globe-13oO7l01.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
function Settings() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [tier, setTier] = reactExports.useState("free");
  const [updating, setUpdating] = reactExports.useState(false);
  const [loadingCheckout, setLoadingCheckout] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
    if (user) fetchProfile();
  }, [user, loading]);
  const fetchProfile = async () => {
    const {
      data
    } = await supabase.from("profiles").select("display_name, subscription_tier").eq("id", user?.id).single();
    if (data) {
      setName(data.display_name || "");
      setTier(data.subscription_tier || "free");
    }
  };
  const updateProfile = async () => {
    setUpdating(true);
    const {
      error
    } = await supabase.from("profiles").update({
      display_name: name
    }).eq("id", user?.id);
    if (!error) toast.success("Neural ID Synchronized");
    else toast.error("Sync Failed");
    setUpdating(false);
  };
  const handleUpgrade = async (priceId) => {
    setLoadingCheckout(priceId);
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    try {
      const response = await fetch(`${"https://mfhfktddqaqvkoxizqqp.supabase.co"}/functions/v1/create-checkout`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session?.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          price_id: priceId,
          user_id: user?.id,
          user_email: user?.email
        })
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      toast.error("Stripe Protocol Offline");
    } finally {
      setLoadingCheckout(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 bg-white overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-8 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic", children: "System_Config_v1.0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-[1000] text-slate-900 italic uppercase tracking-tighter leading-[0.8]", children: "Settings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black uppercase tracking-widest text-slate-900 italic", children: "Identity Protocol" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block ml-1 italic", children: "Display Alias" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: "w-full bg-transparent border-b-2 border-slate-100 py-4 text-2xl font-black italic uppercase text-slate-900 focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-100", placeholder: "ENTER_ALIAS..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 bottom-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: updateProfile, disabled: updating, variant: "ghost", className: "h-8 px-4 text-[10px] font-black uppercase italic text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full", children: updating ? "Syncing..." : "Sync Changes" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block ml-1 italic", children: "Neural Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black italic text-slate-400 uppercase px-1", children: user?.email })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black uppercase tracking-widest text-slate-900 italic", children: "Subscription Tier" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black text-white uppercase italic tracking-widest mb-4", children: "Current Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl font-[1000] italic uppercase text-slate-900 leading-none", children: [
              tier,
              " Plan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm font-medium italic mt-2", children: "Status: Active // Renews via Stripe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleUpgrade("price_MASTERY_CAD"), disabled: !!loadingCheckout, className: "h-14 px-8 rounded-2xl bg-slate-900 text-white font-black italic uppercase text-xs tracking-widest hover:bg-blue-600 transition-all", children: [
              "Upgrade To Mastery ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-2", size: 16 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[10px] font-black text-slate-400 uppercase italic hover:text-red-600 transition-colors", children: "Cancel Subscription" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-slate-100 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6 cursor-not-allowed group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] font-black uppercase tracking-widest italic text-slate-900", children: "Security Keys" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase italic mt-1", children: "Manage 2FA and Access Tokens" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6 cursor-pointer group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] font-black uppercase tracking-widest italic text-slate-900", children: "Data & Privacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-400 uppercase italic mt-1", children: "Export or Terminate Neural Data" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-200 uppercase tracking-[0.5em] italic", children: "Kinetix OS // Version 2026.04 // Build 0992" }) })
  ] }) });
}
export {
  Settings as component
};
