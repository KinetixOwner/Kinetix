import { useState } from "react";
import { generateKinetixPlan } from "../lib/ai-service"; // Using relative path to avoid red lines
import { supabase } from "@/lib/supabase"; // Using relative path to avoid red lines
import { Button } from "../components/ui/button";
import { Rocket, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export function LaunchpadForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartMission = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Generate the AI Plan via Gemini
      const plan = await generateKinetixPlan(name, interest);

      if (!plan) throw new Error("AI failed to launch");

      // 2. Save to Supabase and get the ID of the new row
      const { data, error } = await supabase
        .from('ai_plans')
        .insert([{ 
          student_name: name, 
          interest: interest, 
          plan_json: plan 
        }])
        .select()
        .single();

      if (error) throw error;

      toast.success("Mission Control: Plan Generated!", {
        description: "Redirecting to your dashboard..."
      });
      
      // 3. Teleport the user to their unique mission page
      navigate({ 
        to: '/missions/$planId', 
        params: { planId: data.id } 
      });

    } catch (error) {
      console.error(error);
      toast.error("Systems Offline", {
        description: "Could not reach the AI brain. Check your connection."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-[3rem] border-4 border-slate-100 dark:border-slate-800 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-4">
          <Rocket size={32} />
        </div>
        <h2 className="text-3xl font-black tracking-tighter italic uppercase text-slate-900 dark:text-white">Initialize Your Path</h2>
      </div>

      <form onSubmit={handleStartMission} className="space-y-6">
        <div>
          <label className="block text-sm font-black uppercase tracking-widest text-slate-500 mb-2 px-1">Student Name</label>
          <input 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Alex"
            className="w-full p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-all font-bold"
          />
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-widest text-slate-500 mb-2 px-1">Primary Interest</label>
          <input 
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g. Roblox, Space, Dinosaurs"
            className="w-full p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-all font-bold"
          />
        </div>

        <Button 
          type="submit"
          disabled={loading}
          className="w-full h-16 rounded-2xl text-xl font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>COMMUNICATING WITH GEMINI...</span>
            </div>
          ) : (
            <>GENERATE MY 7-DAY PLAN <Sparkles className="ml-2" size={20} /></>
          )}
        </Button>
      </form>
    </div>
  );
}