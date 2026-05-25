import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { age, experience, interests, goal, daily_minutes } = await req.json();

    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
    if (!GROQ_API_KEY) throw new Error("GROQ_API_KEY not configured");

    const prompt = `You are a curriculum designer for Kinetix, a coding platform for kids ages 8-13.
Create a comprehensive 30-DAY coding journey. Each day must be unique and progressive.

Kid details:
- Age: ${age ?? 10}
- Experience: ${experience ?? "complete beginner"}
- Interests: ${(interests ?? []).join(", ") || "games, art"}
- Goal: ${goal ?? "have fun and learn"}
- Daily time: ${daily_minutes ?? 20} minutes

Respond ONLY with valid JSON. No markdown.
{
  "title": "catchy 30-day plan title",
  "summary": "1-sentence motivating summary",
  "days": [
    {
      "day": 1,
      "title": "Day Title",
      "language": "JavaScript",
      "description": "Short overview",
      "lessons": [
        {
          "index": 0,
          "title": "Lesson 1",
          "type": "lesson",
          "duration_minutes": 5,
          "explanation": "Kid-friendly explanation (2 sentences).",
          "key_points": ["point 1", "point 2"],
          "code_example": "short code snippet",
          "code_language": "javascript",
          "encouragement": "One short sentence"
        },
        {
          "index": 1,
          "title": "Lesson 2",
          "type": "lesson",
          "duration_minutes": 5,
          "explanation": "Kid-friendly explanation (2 sentences).",
          "key_points": ["point 1", "point 2"],
          "code_example": "short code snippet",
          "code_language": "javascript",
          "encouragement": "One short sentence"
        },
        {
          "index": 2,
          "title": "Daily Quiz",
          "type": "quiz",
          "duration_minutes": 5,
          "questions": [
            {
              "question": "Question text",
              "options": ["A", "B", "C", "D"],
              "correct": 0
            }
          ]
        }
      ]
    }
  ]
}

Rules:
- Exactly 30 days.
- Each day has 2 lessons and 1 quiz to ensure the response fits the token limit.
- Progressive: HTML -> CSS -> JavaScript -> Python.
- Fun and encouraging tone.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
        max_tokens: 8000, 
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;
    if (!text) throw new Error("No response from Groq");

    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}') + 1;
    const cleaned = text.substring(jsonStart, jsonEnd);
    const plan = JSON.parse(cleaned);

    return new Response(JSON.stringify({ plan }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-plan error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});