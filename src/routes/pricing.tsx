
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, ChevronRight, Fingerprint,
  Activity, Lock, Layers, Network, Boxes, ShieldCheck,
  Terminal, X, Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({ meta: [{ title: "Pricing — Kinetix" }] }),
});

const tiers = [
  {
    name: "Explorer",
    price: "24",
    id: "price_1TNbdg7z117f9uiLk3CfvJmO",
    desc: "Your first step into real coding.",
    protocol: "P-01_RECRUIT",
    features: [
      "Week 1 Full Core Access (HTML/CSS)",
      "Standard JS & Python Mission Tracks",
      "Daily Mini-Puzzles (Syntax Defusal)",
      "Daily Streak Tracker Node",
      "Standard AI Hints",
    ],
    accent: "slate",
  },
  {
    name: "Mastery",
    price: "49",
    id: "price_1TNyoj8YkXydDChvFLKoKVX3",
    desc: "The standard for serious young builders.",
    protocol: "P-02_OPERATOR",
    features: [
      "Month 1 + 2 Complete Access Matrix",
      "Full AI Tutor Inside Every Sandbox Unit",
      "The Daily KINETIX Hack (Wordle-Style Game)",
      "Interactive XP & Level-Up Protocols",
      "Shareable Proof-of-Work Certificates",
      "Priority AI Response Pipeline",
    ],
    recommended: true,
    accent: "blue",
  },
  {
    name: "Elite",
    price: "99",
    id: "price_1TNgMe7z117f9uiLZcZ8IL5N",
    desc: "Maximum velocity for future founders.",
    protocol: "P-03_ARCHITECT",
    features: [
      "Unlimited Terminal Curriculum Modules",
      "Early Deployment Access Alpha Nodes",
      "Weekly AI-Driven Structural Engine Audits",
      "Automated Portfolio Blueprint Generator",
      "Priority Global Matchmaking Nodes",
    ],
    accent: "indigo",
  },
];

// COMPARISON DATA
// KINETIX.OS CORE PROTOCOL ARCHITECTURE MATRIX
// KINETIX.OS CORE PROTOCOL ARCHITECTURE MATRIX
const competitors = ["Scratch", "Code.org", "Tynker"];

const comparisonFeatures = [
  {
    category: "Neural Core Logic",
    features: [
      {
        name: "Native Code Frameworks (HTML, CSS, JS, Python)",
        kinetix: true,
        scratch: false,
        codeorg: "partial",
        tynker: "partial",
      },
      {
        name: "Low-Latency Execution Sandbox Terminal",
        kinetix: true,
        scratch: false,
        codeorg: "partial",
        tynker: true,
      },
      {
        name: "Daily Syntax Defusal Protocols & Logic Overrides",
        kinetix: true,
        scratch: false,
        codeorg: "partial",
        tynker: false,
      },
      {
        name: "Synchronized Global Daily Hacks (Worldle-Style)",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      },
      {
        name: "On-Demand Curriculum Deep Dives",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      }
    ],
  },
  {
    category: "AI Integration",
    features: [
      {
        name: "Inline Neural AI Tutor Guidance",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      },
      {
        name: "Real-Time Structural Engine Audits",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      },
      {
        name: "Automated AI Syntax Refactoring Vectors",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      },
      {
        name: "Telemetry-Driven Progression Roadmaps",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      }
    ],
  },
  {
    category: "Engagement Protocols",
    features: [
      {
        name: "Mission Streak Tracks & Sync Multipliers",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: true,
      },
      {
        name: "Gamified XP Metrics & Competitive Hubs",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: true,
      },
      {
        name: "Verified 'Proof-of-Work' Achievement Certificates",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      },
      {
        name: "Interactive Milestone Security Clearance Levels",
        kinetix: true,
        scratch: false,
        codeorg: false,
        tynker: false,
      }
    ],
  }
];

const DecorativeGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" />
  </div>
);

const FeatureRow = ({ text }: { text: string }) => (
  <div className="group flex items-center gap-4 py-4 border-b border-slate-50 transition-colors hover:bg-slate-50/50 px-2">
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
      <CheckCircle2 size={12} />
    </div>
    <span className="text-[10px] font-black uppercase italic tracking-wider text-slate-500 group-hover:text-slate-900 transition-colors">
      {text}
    </span>
  </div>
);

const CompetitorLogo = ({ name }: { name: string }) => {
  const logos: Record<string, string> = {
    Scratch: "S",
    "Code.org": "C",
    Tynker: "T",
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-10 w-10 rounded-xl bg-slate-200 flex items-center justify-center">
        <span className="text-slate-400 font-black text-lg grayscale">{logos[name]}</span>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{name}</span>
    </div>
  );
};

const CellValue = ({ value }: { value: boolean | string }) => {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center">
          <CheckCircle2 size={14} className="text-white" />
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center">
          <X size={14} className="text-slate-300" />
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="h-7 w-7 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center">
        <Minus size={14} className="text-yellow-500" />
      </div>
    </div>
  );
};

function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      toast.error("Please sign in first");
      window.location.href = "/login?redirect=/pricing";
      setLoading(null);
      return;
    }

    try {
      const response = await fetch(
        "https://mfhfktddqaqvkoxizqqp.supabase.co/functions/v1/create-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            priceId,
            email: session.user.email,
          }),
        }
      );

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.error || "Checkout failed. Please try again.");
      }
    } catch (err: any) {
      toast.error("Connection error. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <DecorativeGrid />

      <div
        className="fixed pointer-events-none w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px] transition-transform duration-300 ease-out z-0"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* TOP STATUS BAR */}
      <div className="w-full h-12 border-b border-slate-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
            Network_Status: Optimal
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 italic hidden md:block">
            Region: CA_EAST_1
          </span>
          <Link
            to="/dashboard"
            className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 italic hover:underline"
          >
            Exit_Portal
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
          <Fingerprint size={14} className="text-blue-600" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 italic">
            Verification Protocol Required
          </span>
        </div>

        <h1 className="text-[12vw] md:text-[8rem] font-[1000] italic uppercase tracking-tighter leading-[0.75] mb-8 text-slate-900">
          Neural <br />
          <span className="text-blue-600 relative">
            Evolution.
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <Activity className="text-blue-200 animate-pulse" size={80} />
            </div>
          </span>
        </h1>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-slate-400 font-bold uppercase italic text-xs tracking-[0.2em] leading-relaxed">
            The transition from consumer to architect starts here. No annual
            traps. <br />
            Monthly synchronization only. Cancel at any lifecycle point.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"
                />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase italic text-slate-400 tracking-widest">
              +12,400 Nodes Synced
            </span>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="max-w-[1400px] mx-auto py-20 px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group relative p-1 rounded-[4rem] transition-all duration-500 hover:-translate-y-4 ${
                tier.recommended
                  ? "bg-gradient-to-b from-blue-600 to-indigo-900 shadow-[0_60px_100px_-20px_rgba(37,99,235,0.2)]"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              <div className="bg-white rounded-[3.8rem] p-10 md:p-14 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Terminal size={120} />
                </div>

                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest italic">
                      {tier.protocol}
                    </span>
                    {tier.recommended && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter italic">
                        Optimal_Value
                      </span>
                    )}
                  </div>
                  <h3 className="text-5xl font-[1000] italic uppercase tracking-tighter text-slate-900 mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase italic tracking-wider leading-relaxed pr-8">
                    {tier.desc}
                  </p>
                </div>

                <div className="mb-12 flex items-baseline gap-2">
                  <span className="text-7xl font-[1000] tracking-tighter text-slate-900 transition-transform group-hover:scale-110 duration-500 origin-left">
                    ${tier.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-black uppercase italic text-xs">
                      CAD
                    </span>
                    <span className="text-slate-400 font-bold uppercase italic text-[10px]">
                      / Mo
                    </span>
                  </div>
                </div>

                <div className="space-y-1 mb-12 flex-1">
                  {tier.features.map((f) => (
                    <FeatureRow key={f} text={f} />
                  ))}
                </div>

                <Button
                  onClick={() => handleCheckout(tier.id)}
                  disabled={loading === tier.id}
                  className={`h-20 w-full rounded-[2.5rem] font-[1000] text-xl italic uppercase tracking-[0.1em] transition-all ${
                    tier.recommended
                      ? "bg-blue-600 hover:bg-slate-900 text-white"
                      : "bg-slate-900 hover:bg-blue-600 text-white"
                  }`}
                >
                  {loading === tier.id ? "Initializing..." : "Engage Protocol"}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 italic mb-4">
            Why Kinetix
          </p>
          <h2 className="text-7xl font-[1000] italic uppercase tracking-tighter text-slate-900 leading-[0.85]">
            We're Not <br />
            <span className="text-blue-600">Even Close.</span>
          </h2>
          <p className="mt-6 text-slate-400 font-bold italic uppercase text-xs tracking-widest max-w-xl mx-auto">
            While others teach kids to drag blocks around a screen, Kinetix
            builds real engineers with AI-powered precision.
          </p>
        </div>

        {/* LOGO ROW */}
        <div className="overflow-hidden rounded-[3rem] border-2 border-slate-100 bg-white shadow-xl">
          {/* HEADER */}
          <div className="grid grid-cols-5 border-b-2 border-slate-100">
            <div className="p-8 col-span-1" />
            {/* KINETIX */}
            <div className="p-8 bg-blue-600 flex flex-col items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-[1000] text-xl italic">K</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white italic">
                Kinetix
              </span>
              <span className="text-[8px] font-black uppercase tracking-widest text-blue-200 italic">
                The Future
              </span>
            </div>
            {/* COMPETITORS */}
            {competitors.map((c) => (
              <div
                key={c}
                className="p-8 border-l border-slate-100 flex flex-col items-center justify-center gap-3"
              >
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center grayscale opacity-50">
                  <span className="text-slate-400 font-black text-xl">
                    {c[0]}
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">
                  {c}
                </span>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-200 italic">
                  The Past
                </span>
              </div>
            ))}
          </div>

          {/* FEATURE ROWS */}
          {comparisonFeatures.map((category, catIdx) => (
            <div key={catIdx}>
              {/* CATEGORY HEADER */}
              <div className="grid grid-cols-5 bg-slate-50 border-b border-slate-100">
                <div className="px-8 py-4 col-span-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 italic">
                    {category.category}
                  </span>
                </div>
              </div>
              {/* FEATURES */}
              {category.features.map((feature, featIdx) => (
                <div
                  key={featIdx}
                  className="grid grid-cols-5 border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="px-8 py-5 flex items-center">
                    <span className="text-[11px] font-black uppercase italic tracking-wide text-slate-700">
                      {feature.name}
                    </span>
                  </div>
                  {/* KINETIX */}
                  <div className="py-5 bg-blue-50/30 border-l-2 border-blue-100 flex items-center justify-center">
                    <CellValue value={feature.kinetix} />
                  </div>
                  {/* SCRATCH */}
                  <div className="py-5 border-l border-slate-100 flex items-center justify-center">
                    <CellValue value={feature.scratch} />
                  </div>
                  {/* CODE.ORG */}
                  <div className="py-5 border-l border-slate-100 flex items-center justify-center">
                    <CellValue value={feature.codeorg} />
                  </div>
                  {/* TYNKER */}
                  <div className="py-5 border-l border-slate-100 flex items-center justify-center">
                    <CellValue value={feature.tynker} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* BOTTOM CTA ROW */}
          <div className="grid grid-cols-5 border-t-2 border-slate-100">
            <div className="p-8" />
            <div className="p-8 bg-blue-600 flex items-center justify-center">
              <Button
                asChild
                className="h-12 px-6 rounded-2xl bg-white text-blue-600 font-black uppercase italic text-xs hover:bg-slate-50"
              >
                <Link to="/signup">Start Now</Link>
              </Button>
            </div>
            {competitors.map((c) => (
              <div
                key={c}
                className="p-8 border-l border-slate-100 flex items-center justify-center"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-200 italic">
                  Limited
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center">
              <CheckCircle2 size={10} className="text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
              Full Support
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center">
              <Minus size={10} className="text-yellow-500" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
              Partial
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center">
              <X size={10} className="text-slate-300" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
              Not Available
            </span>
          </div>
        </div>
      </section>

      {/* PROTOCOL X */}
      <section className="max-w-7xl mx-auto pb-40 px-8">
        <div className="relative group overflow-hidden rounded-[5rem] bg-slate-900 p-1 md:p-2 transition-all duration-700 hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.4)]">
          <div className="bg-slate-900 rounded-[4.5rem] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 blur-[120px] rounded-full animate-pulse delay-700" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10 italic">
                  <Lock size={14} /> Level_04 Security Access
                </div>

                <h2 className="text-7xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-[0.85] text-white mb-10">
                  Protocol <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                    X-Alpha.
                  </span>
                </h2>

                <p className="text-slate-400 text-xl font-medium italic leading-relaxed mb-12 max-w-lg">
                  Bespoke architecture for engineering leads and startup
                  founders. Direct neural link to senior tech oversight and
                  private deployment pipelines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Network, label: "Private Node Support" },
                    { icon: Layers, label: "Custom OS Architecture" },
                    { icon: Boxes, label: "Whale Tier Assets" },
                    { icon: ShieldCheck, label: "Ironclad Security" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/item">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                        <item.icon size={18} />
                      </div>
                      <span className="text-[11px] font-black uppercase italic tracking-widest text-slate-300">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 backdrop-blur-xl relative group-hover:border-blue-500/30 transition-all duration-700">
                <div className="text-center">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 italic mb-8">
                    Admission Requirement
                  </h4>
                  <p className="text-white text-3xl font-[1000] italic uppercase tracking-tighter mb-12 leading-tight">
                    Requires <br /> Manual <br /> Verification.
                  </p>
                  <Button
                    onClick={() =>
                      (window.location.href =
                        "mailto:admin@kinetix.com?subject=PROTOCOL X INQUIRY")
                    }
                    className="h-24 w-full rounded-[2.5rem] bg-white text-slate-900 font-[1000] text-xl italic uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-4"
                  >
                    Request Entry <ChevronRight size={24} />
                  </Button>
                  <p className="mt-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 italic">
                    Expected Response: 24h - 48h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER METRICS */}
      <footer className="py-20 border-t border-slate-50 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Active Nodes", val: "42,892" },
            { label: "Uptime", val: "99.99%" },
            { label: "Neural Latency", val: "14ms" },
            { label: "Security", val: "AES-256" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic mb-2">
                {stat.label}
              </p>
              <p className="text-2xl font-[1000] italic uppercase tracking-tighter text-slate-900">
                {stat.val}
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
