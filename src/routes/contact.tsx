import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, MessageSquare, Instagram, HelpCircle, FileText, Globe, Search } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Area */}
      <div className="bg-slate-950 py-24 text-white text-center px-4">
        <h1 className="text-6xl font-[1000] uppercase italic tracking-tighter mb-6">Mission Control</h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">Need a hand with your mission? Our team is standing by to help you and your young builder succeed.</p>
        
        <div className="max-w-xl mx-auto mt-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            className="w-full bg-slate-900 border border-slate-800 p-5 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
            placeholder="Search our knowledge base..."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Contact Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl rounded-[3rem] p-8 md:p-12">
            <h2 className="text-3xl font-[1000] uppercase italic mb-8">Send a Message</h2>
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Name</label>
                <input className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                <input className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold" placeholder="john@kinetix.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-bold appearance-none">
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Curriculum Feedback</option>
                  <option>School Partnerships</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={6} className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 font-medium" placeholder="Tell us how we can help..." />
              </div>
              <button className="md:col-span-2 py-5 bg-blue-600 text-white font-[1000] uppercase italic tracking-widest rounded-2xl hover:bg-slate-900 transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-600/20">
                Initiate Contact
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/10">
              <h3 className="text-2xl font-[1000] uppercase italic mb-6">Direct Lines</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center"><Mail size={24}/></div>
                  <div>
                    <p className="text-[10px] opacity-60 font-black uppercase tracking-widest">Email</p>
                    <p className="font-bold text-lg">hello@kinetixcode.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center"><Instagram size={24}/></div>
                  <div>
                    <p className="text-[10px] opacity-60 font-black uppercase tracking-widest">Instagram</p>
                    <p className="font-bold text-lg">@kinetixcode</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center"><Globe size={24}/></div>
                  <div>
                    <p className="text-[10px] opacity-60 font-black uppercase tracking-widest">HQ</p>
                    <p className="font-bold text-lg">Winnipeg Manitoba</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xl font-[1000] uppercase italic mb-4 text-slate-900">Resources</h3>
              <ul className="space-y-4">
                {[
                  { icon: <HelpCircle size={18}/>, label: "Community FAQ" },
                  { icon: <FileText size={18}/>, label: "Safety Guide" },
                  { icon: <MessageSquare size={18}/>, label: "AI Tutor Guide" }
                ].map((link, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold hover:text-blue-600 cursor-pointer transition-colors group">
                    <span className="text-slate-300 group-hover:text-blue-500 transition-colors">{link.icon}</span> 
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
