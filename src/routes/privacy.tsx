import { createFileRoute } from "@tanstack/react-router";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  UserCheck, 
  FileText, 
  Globe, 
  AlertCircle, 
  CheckCircle2, 
  Scale, 
  Fingerprint,
  Database,
  History,
  Mail,
  HardDrive
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "April 18, 2026";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* --- HERO HEADER --- */}
      <section className="bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={14} /> Trust & Safety Portal
          </div>
          <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-6">
            Privacy <br /><span className="text-blue-500">Infrastructure</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-400 font-bold uppercase text-sm tracking-widest">
            <div className="flex items-center gap-2"><History size={16} /> Last Updated: {lastUpdated}</div>
            <div className="flex items-center gap-2"><Globe size={16} /> Version 4.2.0</div>
            <div className="flex items-center gap-2 text-emerald-500"><CheckCircle2 size={16} /> COPPA Compliant</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 py-24">
        {/* --- LEFT SIDE: STICKY NAVIGATION --- */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 ml-4">Table of Contents</p>
            {[
              { id: "overview", label: "Executive Overview" },
              { id: "coppa", label: "COPPA Compliance" },
              { id: "collection", label: "Data Collection" },
              { id: "usage", label: "How We Use Data" },
              { id: "security", label: "Security Protocols" },
              { id: "rights", label: "Parental Rights" },
              { id: "contact", label: "Legal Contact" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-all border-l-2 border-transparent hover:border-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </aside>

        {/* --- RIGHT SIDE: DETAILED CONTENT --- */}
        <main className="lg:col-span-9 space-y-24 pb-40">
          
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-32 space-y-8">
            <div className="inline-block p-4 bg-slate-50 rounded-3xl mb-4">
              <Scale size={32} className="text-slate-900" />
            </div>
            <h2 className="text-4xl font-black uppercase italic tracking-tight">1. Executive Overview</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Kinetix Learning Systems ("we," "us," or "our") operates with a primary philosophy: 
                <span className="text-slate-900 font-bold italic"> Children are not products.</span> Our infrastructure is designed to provide 
                world-class AI education while maintaining a zero-knowledge stance on sensitive personal identifiers. 
                This document outlines our rigorous protocols for data handling and the legal frameworks that govern our platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-8">
              <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl">
                <h4 className="text-xl font-black uppercase mb-2 italic">The Gold Standard</h4>
                <p className="opacity-80 text-sm leading-relaxed font-medium">
                  We exceed the requirements of COPPA, GDPR-K, and FERPA. Our security team performs weekly audits on all AI interaction logs to ensure no PII (Personally Identifiable Information) is inadvertently stored.
                </p>
              </div>
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl">
                <h4 className="text-xl font-black uppercase mb-2 italic">Zero Ad Policy</h4>
                <p className="opacity-80 text-sm leading-relaxed font-medium">
                  There are no third-party advertisements on Kinetix. We do not use behavioral tracking, nor do we sell or rent data to any third-party entity for any reason.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Account Sovereignty (Zero Friction) */}
<section id="coppa" className="scroll-mt-32 p-12 bg-blue-50 rounded-[4rem] border border-blue-100 space-y-8">
  <div className="flex items-center gap-4">
    <UserCheck size={40} className="text-blue-600" />
    <h2 className="text-4xl font-black uppercase italic tracking-tight">2. Account Sovereignty</h2>
  </div>
  <p className="text-lg text-slate-600 font-medium leading-relaxed">
    Kinetix operates on a **Parent-First** architecture. Access to the learning environment is managed entirely through the primary account holder's dashboard. No invasive ID checks, no government verification—just pure parental oversight.
  </p>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-8 bg-white rounded-3xl shadow-sm border border-blue-100">
      <h4 className="font-black uppercase italic text-slate-900 mb-2">Instant Dashboard Access</h4>
      <p className="text-slate-500 text-sm">Every student account is tethered to a Parent Command Center. You see what they see, in real-time.</p>
    </div>
    <div className="p-8 bg-white rounded-3xl shadow-sm border border-blue-100">
      <h4 className="font-black uppercase italic text-slate-900 mb-2">Zero-Knowledge Enrollment</h4>
      <p className="text-slate-500 text-sm">We don't ask for birthdates or social identifiers. We only require a nickname to get the mission started.</p>
    </div>
  </div>
</section>

{/* Section 6: The "Parental Command" (Simplified) */}
<section id="rights" className="scroll-mt-32 space-y-8">
  <div className="flex items-center gap-4">
    <div className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
      <ShieldCheck size={24} />
    </div>
    <h2 className="text-4xl font-black uppercase italic tracking-tight text-slate-900">6. Total Oversight</h2>
  </div>
  <p className="text-xl text-slate-500 font-medium italic">"You are the administrator of your child's digital growth."</p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      { title: "One-Click Deletion", desc: "Instantly wipe all project history and account data." },
      { title: "Progress Transparency", desc: "View every line of code written by the student." },
      { title: "Session Control", desc: "Remotely manage learning hours and wellness breaks." }
    ].map((feat, i) => (
      <div key={i} className="p-6 border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 transition-colors">
        <h5 className="font-black uppercase italic text-sm mb-2">{feat.title}</h5>
        <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
      </div>
    ))}
  </div>
</section>

          {/* Section 3: Data Collection */}
          <section id="collection" className="scroll-mt-32 space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tight flex items-center gap-4">
              <Database className="text-slate-400" /> 3. Data Collection
            </h2>
            <div className="overflow-hidden border-2 border-slate-100 rounded-[3rem]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-400">Data Category</th>
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-400">Collected For</th>
                    <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-400">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-8">
                      <p className="font-black text-slate-900 uppercase italic">User Alias</p>
                      <p className="text-xs text-slate-500">Non-identifying nickname</p>
                    </td>
                    <td className="p-8 text-sm font-medium text-slate-600 italic">Platform Personalization</td>
                    <td className="p-8 text-sm font-bold text-blue-600">Until Deletion</td>
                  </tr>
                  <tr>
                    <td className="p-8">
                      <p className="font-black text-slate-900 uppercase italic">Parent Email</p>
                      <p className="text-xs text-slate-500">Legal account holder</p>
                    </td>
                    <td className="p-8 text-sm font-medium text-slate-600 italic">Billing & Safety Alerts</td>
                    <td className="p-8 text-sm font-bold text-blue-600">Until Deletion</td>
                  </tr>
                  <tr>
                    <td className="p-8">
                      <p className="font-black text-slate-900 uppercase italic">Coding History</p>
                      <p className="text-xs text-slate-500">Code snippets & logs</p>
                    </td>
                    <td className="p-8 text-sm font-medium text-slate-600 italic">AI Tutor Context</td>
                    <td className="p-8 text-sm font-bold text-blue-600">30 Day Rolling</td>
                  </tr>
                  <tr>
                    <td className="p-8">
                      <p className="font-black text-slate-900 uppercase italic">Device Meta</p>
                      <p className="text-xs text-slate-500">Browser/OS type</p>
                    </td>
                    <td className="p-8 text-sm font-medium text-slate-600 italic">Performance Optimization</td>
                    <td className="p-8 text-sm font-bold text-blue-600">Session Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: AI Logic */}
          <section id="usage" className="scroll-mt-32 space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tight">4. AI Intelligence Logic</h2>
            <div className="p-12 bg-slate-950 text-white rounded-[4rem] relative overflow-hidden">
               <Fingerprint className="absolute top-10 right-10 text-blue-600 opacity-20" size={150} />
               <div className="relative z-10 space-y-6">
                 <p className="text-xl text-slate-300 font-medium leading-relaxed italic">
                   "Our AI does not 'learn' from your child. It is a pre-trained model that uses a secure API tunnel to process code logic. We do not use student code to train future versions of our AI."
                 </p>
                 <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <AlertCircle className="text-yellow-400 shrink-0" />
                    <p className="text-sm text-slate-400">
                      We use <span className="text-white font-bold">Anonymized Prompt Processing</span>. When a student asks the AI for help, their identity is replaced with a unique session ID before it reaches the AI server.
                    </p>
                 </div>
               </div>
            </div>
          </section>

          {/* Section 5: Security */}
          <section id="security" className="scroll-mt-32 space-y-12">
            <h2 className="text-4xl font-black uppercase italic tracking-tight">5. Security Protocols</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><HardDrive /></div>
                  <h4 className="text-xl font-black uppercase italic">Encryption at Rest</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">All database entries are encrypted using AES-256 standards. Our database is hosted on dedicated, SOC2-compliant hardware in geographically isolated zones.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><Lock /></div>
                  <h4 className="text-xl font-black uppercase italic">SSL in Transit</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">Every packet of data sent between your child's browser and our servers is protected by TLS 1.3 encryption, preventing Man-in-the-Middle (MITM) attacks.</p>
               </div>
            </div>
          </section>

          {/* Section 6: Parental Rights */}
          <section id="rights" className="scroll-mt-32 p-12 border-2 border-slate-900 rounded-[4rem] space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-slate-900">6. Parental Rights & Controls</h2>
            <p className="text-lg font-medium text-slate-600 italic">Under our Global Privacy Policy, parents maintain absolute control over their child's digital footprint.</p>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 "Access and Review Data",
                 "Request Data Portability",
                 "Update Identification Info",
                 "Revoke AI Processing Consent",
                 "Permanent Account Erasure",
                 "Download Progress History"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="font-bold text-sm text-slate-700 uppercase">{item}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* Section 7: Legal Contact */}
          <section id="contact" className="scroll-mt-32 space-y-8 bg-blue-600 text-white p-16 rounded-[4rem] text-center">
            <Mail size={48} className="mx-auto mb-4" />
            <h2 className="text-4xl font-black uppercase italic tracking-tight">Data Protection Officer</h2>
            <p className="text-xl opacity-90 font-medium max-w-xl mx-auto italic">
              Questions regarding our privacy framework or requests for data deletion should be sent to our legal department.
            </p>
            <div className="pt-8">
               <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Legal Correspondence</p>
               <p className="text-3xl font-black italic">privacy@kinetix.com</p>
               <p className="text-sm font-bold opacity-70 mt-4 uppercase">Kinetix Learning Systems, Attn: Legal, Winnipeg, Manitoba, CA</p>
            </div>
          </section>

        </main>
      </div>

      {/* --- BOTTOM FOOTER CTA --- */}
      <footer className="bg-slate-50 py-24 border-t border-slate-200 text-center">
        <h3 className="text-2xl font-black uppercase italic mb-4">Your Trust is Our Infrastructure.</h3>
        <p className="text-slate-500 max-w-xl mx-auto mb-8 font-medium italic">We update this policy as new regulations emerge. By using Kinetix, you agree to these security standards.</p>
        <div className="flex justify-center gap-4">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase italic tracking-widest text-xs hover:bg-blue-600 transition-colors">Accept Terms</button>
          <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black uppercase italic tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">Download PDF</button>
        </div>
      </footer>
    </div>
  );
}
