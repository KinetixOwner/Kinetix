import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Groq } from "https://esm.sh/groq-sdk";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
    const groq = new Groq({ apiKey: GROQ_API_KEY });

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are Kinetix, a coding coach for kids. Help them with their 30-day coding journey. Keep answers simple, fun, and under 100 words." },
        ...messages
      ],
      model: "llama-3.3-70b-versatile",
    });

    return new Response(JSON.stringify({ text: completion.choices[0]?.message?.content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: corsHeaders });
  }
});