import React, { useState } from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { supabase } from "@/integrations/supabase/client"
import { ArrowRight, CheckCircle2, Shield, Loader2, Mail, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/signup')({
  component: SignupPage,
})

function SignupPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPendingVerification, setIsPendingVerification] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
  
    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: email.split('@')[0], 
          }
        }
      })
  
      if (signupError) {
        setError(signupError.message)
        setLoading(false)
      } else if (data.user) {
        if (data.session) {
          navigate({ to: '/onboarding' })
        } else {
          // Strictly catch verification state when data.session is null
          setIsPendingVerification(true)
          setLoading(false)
        }
      }
    } catch (err: any) {
      setError("Critical System Error: Connection to KINETIX.OS failed.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- LEFT SIDE: THE BRAND MISSION --- */}
      <section className="hidden lg:flex lg:w-1/2 bg-slate-950 p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <Link to="/" className="relative z-10 text-2xl font-black italic tracking-tighter text-white">
          KINETIX<span className="text-blue-500">.</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white italic uppercase leading-[0.9] mb-8">
            Join the <br /> <span className="text-blue-500">Top 1%.</span>
          </h2>
          
          <div className="space-y-6 max-w-md">
            {[
              "Neural AI Mentor 1.0 Access",
              "30-Day Custom Mission Roadmap",
              "Verified Proof-of-Work Certificates"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300 font-medium italic">
                <CheckCircle2 size={20} className="text-blue-500" /> {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] mt-12">
          <div className="flex gap-1 mb-4">
            <Shield size={18} className="text-blue-500 fill-blue-500/20" />
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] ml-1">System Architect Verified</span>
          </div>
          
          <p className="text-white text-lg font-medium italic leading-relaxed mb-6">
            "We didn't just build a curriculum; we engineered a high-performance sandbox where the next generation of developers can master advanced logical infrastructure."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white shadow-lg border border-white/20">
              ME
            </div>
            <div>
              <p className="text-white font-black uppercase italic text-sm tracking-tight">Henos Goitom</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Lead Developer & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RIGHT SIDE: THE AUTH FORM --- */}
      <main className="flex-1 flex items-center justify-center p-8 lg:p-24 bg-white">
        <div className="w-full max-w-md space-y-10">
          
          {!isPendingVerification ? (
            <>
              {/* DEFAULT REGISTRATION INTERFACE */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-2">Create Account</h1>
                <p className="text-slate-500 font-medium italic text-sm">
                  Already a member? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSignup}>
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold uppercase italic border border-red-100">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic ml-1">Password</label>
                  <input 
                    required
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-14 px-4 rounded-xl bg-white text-slate-900 border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <>Start Your Mission <ArrowRight size={20} /></>}
                </button>
              </form>
            </>
          ) : (
            /* SECURE DEEP GMAIL SEARCH VERIFICATION OVERLAY */
            <div className="space-y-6 text-center lg:text-left animate-fade-in">
              <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto lg:mx-0 shadow-lg shadow-blue-500/10">
                <Mail size={28} />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">Handshake Dispatched</h1>
                <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
                  A verification link was generated and pushed to <span className="text-slate-900 font-bold">{email}</span>. 
                  To protect network deliverability in this sandbox environment, the system may route your handshake into your <span className="text-amber-600 font-bold underline">Spam</span> or <span className="text-amber-600 font-bold underline">Promotions</span> folder.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://mail.google.com/mail/u/0/#search/from%3Aonboarding%40resend.dev+OR+KINETIX.OS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-slate-950 text-white font-mono text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-slate-950/25"
                >
                  Bypass Protocol: Open Gmail Search <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-relaxed text-center lg:text-left">
                Keep this tab active. Once the secure email link handshake executes, you will be initialized smoothly into your layout.
              </p>
            </div>
          )}

          <p className="text-[10px] text-slate-400 text-center uppercase font-bold tracking-widest leading-relaxed">
            By clicking continue, you agree to our <span className="text-slate-900 cursor-pointer hover:underline">Terms</span> and <span className="text-slate-900 cursor-pointer hover:underline">Privacy</span>.
          </p>
        </div>
      </main>
    </div>
  )
}
