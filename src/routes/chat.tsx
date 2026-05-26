import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { AiBadge } from "@/components/AiBadge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  Send, Bot, User, Sparkles, Loader2, ChevronRight, Cpu, 
  Terminal, Zap, Target, Hexagon 
} from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/chat")({
  component: Chat,
  head: () => ({ meta: [{ title: "Neural Chat — Kinetix" }] }),
});

function Chat() {
  const { user, loading, session } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auth Guard
  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  // Load History
  useEffect(() => {
    if (!user) return;
    supabase
      .from("chat_messages")
      .select("role,content")
      .eq("user_id", user.id)
      .order("created_at", { ascending: true })
      .limit(50)
      .then(({ data }) => {
        if (data) setMessages(data as Msg[]);
      });
  }, [user]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, sending]);

  const runPreset = (text: string) => {
    setInput(text);
  };

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending || !session) return;

    // 1. Update UI locally
    const userMsg: Msg = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      // 2. Call the Supabase Edge Function
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${session.access_token}` 
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || "Neural link failure");
      }

      const data = await resp.json();
      
      // 3. Add AI response to the UI
      if (data.text) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
        
        // Optional: Save to Supabase DB for history
        await supabase.from("chat_messages").insert([
          { user_id: user?.id, role: "user", content: text },
          { user_id: user?.id, role: "assistant", content: data.text }
        ]);
      }
      
    } catch (err: any) { 
      console.error("Chat Error:", err);
      toast.error(err.message || "Neural link interrupted."); 
    } finally { 
      setSending(false); 
    }
  }

  return (
    <div className="flex h-full bg-white overflow-hidden">
      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col bg-slate-50 relative border-r border-slate-100">
        <header className="p-6 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                <Cpu size={24} className="animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">Neural_Link_v3</h1>
                <p className="text-[9px] font-black text-green-500 uppercase tracking-widest mt-1 italic">● Logic Engine Online</p>
              </div>
            </div>
            <AiBadge label="Groq Llama-3 Powered" />
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          {messages.length === 0 && (
            <div className="max-w-xl mx-auto py-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} /> System Initialized
              </div>
              <h2 className="text-5xl font-[1000] italic uppercase tracking-tighter text-slate-900 mb-4 leading-[0.9]">What shall we <br /><span className="text-blue-600">Architect?</span></h2>
              <p className="text-slate-400 font-medium italic text-sm">Select a directive from the library or input a custom query.</p>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-4 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center shadow-md ${m.role === "user" ? "bg-slate-900 text-white" : "bg-blue-600 text-white"}`}>
                  {m.role === "user" ? <User size={18} /> : <Bot size={18} />}
                </div>
                <div className={`rounded-3xl px-6 py-4 border ${m.role === "user" ? "bg-blue-600 text-white border-blue-500 rounded-tr-none" : "bg-white text-slate-900 border-slate-100 rounded-tl-none shadow-sm"}`}>
                  <div className="prose prose-sm max-w-none italic font-medium leading-relaxed">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {sending && (
            <div className="flex justify-start animate-in fade-in slide-in-from-left-2">
              <div className="flex gap-4 items-center text-slate-400">
                <div className="h-10 w-10 rounded-xl bg-slate-200 flex items-center justify-center">
                  <Loader2 size={18} className="animate-spin" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest italic">Calculating...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white border-t border-slate-100">
          <form onSubmit={send} className="max-w-4xl mx-auto flex items-center bg-slate-50 border-2 border-slate-200 rounded-2xl p-2 focus-within:border-blue-600 focus-within:bg-white transition-all">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Submit directive..." 
              className="flex-1 bg-transparent px-4 py-3 text-sm font-bold focus:outline-none italic uppercase" 
              disabled={sending} 
            />
            <Button type="submit" className="h-12 w-12 rounded-xl bg-slate-900 hover:bg-blue-600 transition-all shadow-lg" disabled={sending || !input.trim()}>
              {sending ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            </Button>
          </form>
        </div>
      </div>

      {/* INTELLIGENCE SIDEBAR (RIGHT) */}
      <aside className="w-80 hidden xl:flex flex-col p-8 bg-white space-y-10">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 italic">Quick Directives</h3>
          <div className="space-y-3">
            {[
              { label: "Refactor Logic", icon: Zap, prompt: "Can you refactor my current code block for better performance?" },
              { label: "Debug Terminal", icon: Terminal, prompt: "I am seeing a syntax error in my useEffect hook. Help me debug." },
              { label: "UI Architecture", icon: Hexagon, prompt: "How should I structure a dashboard layout using Tailwind?" },
              { label: "Optimization", icon: Target, prompt: "Identify potential memory leaks in this React component." }
            ].map((preset) => (
              <button 
                key={preset.label}
                onClick={() => runPreset(preset.prompt)}
                className="w-full flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-600 hover:bg-white transition-all group text-left"
              >
                <preset.icon size={16} className="text-slate-400 group-hover:text-blue-600" />
                <span className="text-[10px] font-black uppercase italic text-slate-600 group-hover:text-slate-900 tracking-tight">{preset.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10 rotate-12"><Cpu size={80} /></div>
          <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-2 italic">Neural Load</p>
          <div className="text-2xl font-black italic uppercase leading-none mb-4">Core 01: Active</div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[65%] animate-pulse" />
          </div>
          <p className="text-[8px] font-medium text-slate-400 mt-3 italic uppercase tracking-tighter">Latency: 24ms // Tokens: 1.2k/s</p>
        </div>
      </aside>
    </div>
  );
}
