import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { 
  Save, User, ShieldCheck, Zap, CreditCard, Sparkles, 
  ChevronRight, ArrowUpRight, Globe, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "System Config — Kinetix" }] }),
});

function Settings() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tier, setTier] = useState("free");
  const [updating, setUpdating] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
    if (user) fetchProfile();
  }, [user, loading]);

  const fetchProfile = async () => {
    const { data } = await supabase.from("profiles").select("display_name, subscription_tier").eq("id", user?.id).single();
    if (data) {
      setName(data.display_name || "");
      setTier(data.subscription_tier || "free");
    }
  };

  const updateProfile = async () => {
    setUpdating(true);
    const { error } = await supabase.from("profiles").update({ display_name: name }).eq("id", user?.id);
    if (!error) toast.success("Neural ID Synchronized");
    else toast.error("Sync Failed");
    setUpdating(false);
  };

  const handleUpgrade = async (priceId: string) => {
    setLoadingCheckout(priceId);
    const { data: { session } } = await supabase.auth.getSession();
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${session?.access_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ price_id: priceId, user_id: user?.id, user_email: user?.email }),
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      toast.error("Stripe Protocol Offline");
    } finally {
      setLoadingCheckout(null);
    }
  };

  return (
    <main className="flex-1 bg-white overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* HEADER */}
        <header className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-blue-600"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic">System_Config_v1.0</p>
          </div>
          <h1 className="text-7xl font-[1000] text-slate-900 italic uppercase tracking-tighter leading-[0.8]">Settings.</h1>
        </header>

        <div className="space-y-24">
          {/* PROFILE SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <User size={18} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 italic">Identity Protocol</h2>
            </div>
            
            <div className="grid gap-8 max-w-2xl">
              <div className="group">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block ml-1 italic">Display Alias</label>
                <div className="relative">
                  <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-2xl font-black italic uppercase text-slate-900 focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-100"
                    placeholder="ENTER_ALIAS..."
                  />
                  <div className="absolute right-0 bottom-4">
                    <Button 
                      onClick={updateProfile} 
                      disabled={updating}
                      variant="ghost"
                      className="h-8 px-4 text-[10px] font-black uppercase italic text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full"
                    >
                      {updating ? "Syncing..." : "Sync Changes"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block ml-1 italic">Neural Email</label>
                <p className="text-lg font-black italic text-slate-400 uppercase px-1">{user?.email}</p>
              </div>
            </div>
          </section>

          {/* SUBSCRIPTION SECTION */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <Zap size={18} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 italic">Subscription Tier</h2>
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black text-white uppercase italic tracking-widest mb-4">Current Plan</span>
                    <h3 className="text-4xl font-[1000] italic uppercase text-slate-900 leading-none">{tier} Plan</h3>
                    <p className="text-slate-400 text-sm font-medium italic mt-2">Status: Active // Renews via Stripe</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      onClick={() => handleUpgrade("price_MASTERY_CAD")}
                      disabled={!!loadingCheckout}
                      className="h-14 px-8 rounded-2xl bg-slate-900 text-white font-black italic uppercase text-xs tracking-widest hover:bg-blue-600 transition-all"
                    >
                      Upgrade To Mastery <ArrowUpRight className="ml-2" size={16} />
                    </Button>
                    <button className="text-[10px] font-black text-slate-400 uppercase italic hover:text-red-600 transition-colors">Cancel Subscription</button>
                  </div>
               </div>
            </div>
          </section>

          {/* SECURITY & MISC */}
          <section className="border-t border-slate-100 pt-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start gap-6 cursor-not-allowed group">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 transition-all">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest italic text-slate-900">Security Keys</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase italic mt-1">Manage 2FA and Access Tokens</p>
                </div>
              </div>

              <div className="flex items-start gap-6 cursor-pointer group">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest italic text-slate-900">Data & Privacy</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase italic mt-1">Export or Terminate Neural Data</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-40 text-center">
           <p className="text-[9px] font-black text-slate-200 uppercase tracking-[0.5em] italic">Kinetix OS // Version 2026.04 // Build 0992</p>
        </footer>
      </div>
    </main>
  );
}
