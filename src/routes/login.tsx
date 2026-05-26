import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import { ArrowRight, Shield, Loader2, Monitor } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Sign in to Kinetix" }] }),
});

function Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Optional string to drop a dashboard picture path into later (e.g., "/images/dashboard-mockup.png")
  const dashboardImageSrc = ""; 

  useEffect(() => {
    if (!loading && user) navigate({ to: "/dashboard" });
  }, [user, loading, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back!");
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- LEFT SIDE: THE DASHBOARD MOCKUP SCREEN --- */}
      <section className="hidden lg:flex lg:w-1/2 bg-slate-950 p-16 flex-col justify-between relative overflow-hidden">
        {/* Decorative Radial Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <Link to="/" className="relative z-10 text-2xl font-black italic tracking-tighter text-white">
          KINETIX<span className="text-blue-500">.</span>
        </Link>

        {/* INTERACTIVE MOCKUP HOUSING */}
        <div className="relative z-10 w-full max-w-2xl mx-auto my-auto aspect-[16/10] bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-md">
          {/* Mockup Window Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-lg border border-slate-800/50 text-[10px] font-mono tracking-wider text-slate-500 uppercase">
              <Monitor size={10} /> kinetix_core_os
            </div>
            <div className="w-12" />
          </div>

          {/* MOCKUP CONTENT CONTAINER */}
          <div className="relative w-full h-[calc(100%-3rem)] rounded-xl overflow-hidden bg-slate-950/80 border border-slate-900 flex flex-col items-center justify-center p-8 text-center">
            
            {dashboardImageSrc ? (
              // Triggers automatically when dashboardImageSrc is supplied with a real URL path
              <img 
                src={dashboardImageSrc} 
                alt="Dashboard UI Blueprint Preview" 
                className="absolute inset-0 w-full h-full object-cover object-top animate-fade-in"
              />
            ) : (
              // Default High-Tech Stand-In Grid when blank
              <div className="space-y-4 max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-blue-500">
                  <Shield size={20} />
                </div>
                <h3 className="text-white text-sm font-black uppercase tracking-wider italic">System Framework Offline</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Authentication protocol required. Initialize secure signature handshake terminal on the adjacent access block.
                </p>
                {/* Visual Placeholder Blocks simulating dashboard data streams */}
                <div className="pt-4 flex flex-col gap-2 w-48 mx-auto opacity-30">
                  <div className="h-2 w-full bg-slate-800 rounded-full animate-pulse" />
                  <div className="h-2 w-2/3 bg-slate-800 rounded-full animate-pulse [animation-delay:200ms]" />
                  <div className="h-2 w-4/5 bg-slate-800 rounded-full animate-pulse [animation-delay:400ms]" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Brand Verification Meta */}
        <div className="relative z-10 flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase font-mono">
          <span>SYS.VER // 2026.1.0</span>
          <span className="text-slate-800">•</span>
          <span>SECURE ACCESS ENCRYPTED</span>
        </div>
      </section>

      {/* --- RIGHT SIDE: THE AUTHENTICATION TERMINAL FORM --- */}
      <main className="flex-1 flex items-center justify-center p-8 lg:p-24 bg-white">
        <div className="w-full max-w-md space-y-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium italic text-sm">
              New to the platform? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Sign up for an invitation</Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">Email Node Address</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="name@email.com" 
                className="w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <Label htmlFor="password" className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Security Passphrase</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all font-medium"
              />
            </div>

            <button 
              disabled={submitting}
              type="submit"
              className="w-full py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-50"
            >
              {submitting ? <Loader2 className="animate-spin" /> : <>Initialize Sign In <ArrowRight size={20} /></>}
            </button>
          </form>

          <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest leading-relaxed">
            Authorized hardware credentials only. Active session logs tracking is operational.
          </p>
        </div>
      </main>
    </div>
  );
}
