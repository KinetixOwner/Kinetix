import { createFileRoute } from '@tanstack/react-router'
import { Search, ChevronDown, HelpCircle, Shield, CreditCard, Cpu, BookOpen, Users, Zap, ArrowRight, MessageCircle, Mail, Star } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

type FaqItem = {
  q: string;
  a: string;
};

type FaqCategory = {
  id: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  faqs: FaqItem[];
};

function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories: FaqCategory[] = [
    {
      id: "getting-started",
      icon: <Zap size={16} />,
      label: "Getting Started",
      color: "blue",
      faqs: [
        {
          q: "Is Kinetix for total beginners?",
          a: "Absolutely. Tier 01 begins with pure logic exercises that don't involve a computer at all. We teach thinking patterns before we touch syntax. Students with zero experience — including 8-year-olds who have never written a line of code — routinely ship their first project within 8–12 weeks."
        },
        {
          q: "What age group is Kinetix designed for?",
          a: "Our core curriculum is engineered for ages 8–15, with three distinct sub-paths: Explorer (8–10), Builder (11–13), and Engineer (14–15). Each path adapts the same core content to age-appropriate mental models, vocabulary, and project complexity. We do not water down the concepts — we adjust the framing."
        },
        {
          q: "How long before my child writes their first real program?",
          a: "Most students write their first functional program within the first two sessions. 'Functional' means it actually runs and does something — not a worksheet, not a drag-and-drop exercise. Real code, running in a real environment, producing a real output."
        },
        {
          q: "Do I need to buy any equipment or software?",
          a: "No. Kinetix runs entirely in a web browser. Any device with a modern browser works — Chromebook, iPad, Mac, Windows laptop. We recommend a physical keyboard for students 10 and up, but even that's optional for the first two tiers."
        },
        {
          q: "Is there a placement assessment?",
          a: "Yes. Students who already have some coding experience can complete our Neural Assessment — a 20-minute adaptive challenge that identifies exactly where they belong in the curriculum. We skip them past what they already know and put them where they'll actually be challenged."
        },
      ]
    },
    {
      id: "curriculum",
      icon: <BookOpen size={16} />,
      label: "Curriculum",
      color: "purple",
      faqs: [
        {
          q: "What programming languages do students learn?",
          a: "Tiers 01–04 use Python — the dominant language in AI, data science, and backend development. Tier 05 introduces JavaScript and React for front-end web development. By graduation, students are proficient in both and understand why and when each is appropriate."
        },
        {
          q: "How is the curriculum different from Scratch or Code.org?",
          a: "Scratch and Code.org teach children to complete coding tasks. Kinetix teaches them to think like software engineers. Our curriculum builds the same cognitive architecture used by professional developers — systems thinking, error decomposition, pattern recognition — not just the ability to execute predefined exercises."
        },
        {
          q: "What does a typical lesson look like?",
          a: "Each lesson has three phases: Concept (5–10 min), Build (15–30 min), and Challenge (10–15 min). In Concept, the AI introduces the idea. In Build, the student implements it in the Neural IDE. In Challenge, they apply it independently in a slightly harder context. There are no videos to watch, no multiple choice questions, and no passive learning."
        },
        {
          q: "How long is the full curriculum?",
          a: "The full five-tier curriculum is approximately 29 weeks for students who complete 3–4 sessions per week. Students who go faster can complete it in as few as 18 weeks. There's no fixed pace — the system adapts to your child's velocity."
        },
        {
          q: "What happens when a student finishes all five tiers?",
          a: "Graduates receive a verified digital certificate for each tier plus a comprehensive portfolio of five deployed projects."
        },
        {
          q: "Are there projects my child gets to keep and show off?",
          a: "Yes — every project is hosted on a live URL at [username].kinetix.app. Students can share these URLs with anyone. College admissions officers, teachers, and family members can see real, functioning software that your child built from scratch."
        },
      ]
    },
    {
      id: "ai-tutor",
      icon: <Cpu size={16} />,
      label: "AI Tutor",
      color: "green",
      faqs: [
        {
          q: "How does the AI Tutor work?",
          a: "Our Neural Co-Pilot uses a Socratic method — it asks questions rather than giving answers. When a student is stuck, the AI diagnoses the specific point of confusion and asks a targeted question designed to guide them to the answer themselves. This is intentional: we want students to build problem-solving confidence, not dependency."
        },
        {
          q: "Can students use the AI to cheat or skip learning?",
          a: "No. The AI is explicitly designed to resist this. If a student asks 'just tell me the answer,' the AI redirects: 'I'm not going to do that — but here's a question that'll help you find it.' The system also flags repetitive help-seeking patterns and notifies parents if a student is consistently bypassing the struggle phase."
        },
        {
          q: "Is the AI connected to the internet?",
          a: "No. Our Neural Co-Pilot is an encapsulated model — it has zero access to the open web. It only knows curriculum content, coding concepts, and your child's session history. It cannot be asked about current events, social topics, or anything outside its educational scope."
        },
        {
          q: "What happens if the AI says something wrong?",
          a: "All AI responses are run through a validation layer before delivery. Incorrect technical information is filtered automatically. In the rare case something slips through, our curriculum team reviews flagged responses daily. Parents can also report any response directly from the session log."
        },
        {
          q: "Does the AI remember my child from session to session?",
          a: "Yes. The Co-Pilot maintains a persistent memory of each student's learning history — which concepts they mastered easily, which ones they struggled with, and how they prefer to learn. This context makes every session more relevant than the last."
        },
        {
          q: "Can students name or customize the AI?",
          a: "Yes — students can rename the Co-Pilot and select from a range of personality modes: Professional, Hype, Minimal, and Socratic. The actual pedagogical approach doesn't change, but the conversational style adapts to what motivates each individual student."
        },
      ]
    },
    {
      id: "safety",
      icon: <Shield size={16} />,
      label: "Safety",
      color: "amber",
      faqs: [
        {
          q: "Is Kinetix COPPA compliant?",
          a: "Yes. We are fully compliant with the Children's Online Privacy Protection Act. We collect only the data required to operate the educational platform, we never sell or share student data with third parties, and all data is encrypted at rest and in transit."
        },
        {
          q: "Are there any social features where my child could talk to strangers?",
          a: "No. Kinetix has zero social features. There are no DMs, no friend requests, no public profiles, no leaderboards showing real names, and no community chat rooms. The platform is designed to be a focused, distraction-free learning environment."
        },
        {
          q: "Can I see everything my child's AI Tutor said?",
          a: "Yes — every message, timestamped, is available in the Parent Dashboard under Session Logs. You can filter by date, search for specific content, and export the full log as a PDF. Full transparency is not optional — it's a core architectural decision."
        },
        {
          q: "Can I set screen time limits for the platform?",
          a: "Yes. The Parent Dashboard includes a Time Controls panel where you can set daily session maximums, block out specific hours or days, and configure automatic logout timers. These controls are enforced server-side — your child cannot bypass them from the student interface."
        },
        {
          q: "How is my child's payment and personal data protected?",
          a: "Payment data is processed exclusively through Stripe — we never store credit card information. Student personal data (name, age, progress records) is stored in an encrypted database with access controls that limit even internal Kinetix staff from reading it without a documented reason."
        },
      ]
    },
    {
      id: "billing",
      icon: <CreditCard size={16} />,
      label: "Billing",
      color: "rose",
      faqs: [
        {
          q: "Can I cancel at any time?",
          a: "Yes. Cancel from the Parent Dashboard in under 30 seconds. No cancellation fee, no required phone call, no retention team trying to talk you out of it. Your child's data and progress are exported automatically and stored for 12 months post-cancellation."
        },
        {
          q: "Do you offer family plans or sibling discounts?",
          a: "Yes — our Family Plan supports up to 4 students under one billing account at a reduced per-student rate. Each student gets their own independent profile, progress track, and AI Co-Pilot. The discount scales with the number of seats."
        },
        {
          q: "Is there a discount for paying annually?",
          a: "Yes. Annual billing saves you 20% compared to monthly. You're charged once per year and can still cancel at any time — we'll issue a prorated refund for unused months."
        },
        {
          q: "Do you offer financial aid or scholarships?",
          a: "Yes. We reserve 5% of our subscription capacity for need-based scholarships that bring the cost to zero. Applications are reviewed on a rolling basis. We also partner with select schools and libraries to offer subsidized group licenses."
        },
      ]
    },
    {
      id: "parents",
      icon: <Users size={16} />,
      label: "For Parents",
      color: "cyan",
      faqs: [
        {
          q: "How much time do I need to invest as a parent?",
          a: "None — the platform is fully self-directed. Your child navigates all lessons, challenges, and projects independently. We recommend reviewing the weekly neural map together (5–10 minutes on Fridays), but even that is optional. The platform works without any parent involvement."
        },
        {
          q: "My child isn't interested in coding. Will they like Kinetix?",
          a: "Possibly. Kinetix is deliberately designed to be engaging for kids who aren't 'into coding' — because most of our students aren't, initially. We frame everything through building, games, and agency. Students who start skeptical frequently become our most active users within the first month."
        },
        {
          q: "How do I know if my child is actually learning?",
          a: "The Parent Dashboard translates all technical progress into plain language. Instead of 'completed module 4.2,' you'll see 'Emma can now write reusable functions and explain what they do.' Every concept has a real-world explanation attached to it."
        },
        {
          q: "What if my child is struggling and falling behind?",
          a: "The AI detects struggle patterns within a single session and automatically adapts — introducing alternative explanations, easier sub-challenges, or a different approach to the same concept. If a student consistently struggles with a topic, we flag it in the Parent Dashboard and recommend a conversation."
        },
      ]
    },
  ];

  const allFaqs = useMemo(() => categories.flatMap(c => c.faqs.map(f => ({ ...f, categoryId: c.id }))), []);

  const filteredFaqs = useMemo(() => {
    if (!search) return null;
    return allFaqs.filter(f =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allFaqs]);

  const displayCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  const colorMap: Record<string, string> = {
    blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    green: "text-green-400 border-green-500/30 bg-green-500/10",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    rose: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-10">
            <HelpCircle size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Base</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-[1000] tracking-tighter italic leading-none mb-10">
            GOT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">QUESTIONS?</span>
          </h1>

          <p className="text-xl text-slate-400 font-medium max-w-xl mx-auto mb-10">
            Everything you need to know about Kinetix, the curriculum, the AI, and what your child will actually learn.
          </p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search every question and answer..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-900 border border-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none text-white placeholder-slate-500 font-medium transition-all text-lg"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white font-black text-sm">✕</button>
            )}
          </div>
        </div>
      </section>

      {/* ── SEARCH RESULTS ── */}
      {filteredFaqs && (
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-widest">
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{search}"
            </p>
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <div className="p-12 rounded-[2rem] border border-slate-800 text-center">
                  <p className="text-slate-500 font-bold">No results found. Try a different search term or browse the categories below.</p>
                </div>
              ) : filteredFaqs.map((faq, i) => {
                const key = `search-${i}`;
                return (
                  <div key={key} className="border border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === key ? null : key)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-all"
                    >
                      <span className="font-black text-lg pr-4">{faq.q}</span>
                      <ChevronDown size={20} className={`text-blue-400 shrink-0 transition-transform duration-300 ${openFaq === key ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === key && (
                      <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800 pt-4">{faq.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER ── */}
      {!search && (
        <section className="px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeCategory === "all" ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
              >
                All Questions
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${activeCategory === cat.id ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ CATEGORIES ── */}
      {!search && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {displayCategories.map(cat => (
              <div key={cat.id}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${colorMap[cat.color]}`}>
                  {cat.icon}
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">{cat.label}</span>
                </div>

                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => {
                    const key = `${cat.id}-${i}`;
                    return (
                      <div key={key} className="border border-slate-800 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === key ? null : key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-all"
                        >
                          <span className="font-black text-lg pr-4">{faq.q}</span>
                          <ChevronDown size={20} className={`shrink-0 transition-transform duration-300 ${colorMap[cat.color].split(' ')[0]} ${openFaq === key ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === key && (
                          <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800 pt-4">{faq.a}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── STILL STUCK ── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-[3rem]">
            <div className="bg-slate-950 rounded-[2.8rem] p-16 text-center">
              <h2 className="text-5xl font-[1000] italic tracking-tighter mb-4">STILL HAVE<br />QUESTIONS?</h2>
              <p className="text-slate-400 font-medium text-lg mb-10 max-w-lg mx-auto">
                Our support team is staffed by real humans who have all been through the Kinetix curriculum themselves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-black uppercase text-sm tracking-widest transition-all group">
                  <MessageCircle size={16} />
                  Chat with Support
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:support@kinetix.app" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-black uppercase text-sm tracking-widest transition-all">
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
              <p className="text-slate-600 text-xs font-bold mt-8 uppercase tracking-widest">Average response time: under 4 hours</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
