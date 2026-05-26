import { Link } from '@tanstack/react-router'
import { Instagram, ShieldCheck, Zap } from 'lucide-react'

export function AppFooter() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Program',
      links: [
        { name: 'Curriculum', to: '/curriculum' },
        { name: 'For Students', to: '/for-students' },
        { name: 'For Parents', to: '/for-parents' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'AI Tutor Guide', to: '/ai-tutor-guide' },
        { name: 'Community FAQ', to: '/faq' },
        { name: 'Privacy Policy', to: '/privacy' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/about' },
        { name: 'Contact Us', to: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <span className="text-2xl font-[1000] italic tracking-tighter mb-6 block">KINETIX.</span>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Developing the neural pathways of the next generation of software engineers through AI-augmented learning.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-8">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-slate-500 hover:text-blue-600 transition-all text-sm font-bold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-50 pt-16 flex flex-col items-center">
          <a href="https://www.instagram.com/kinetixcode" target="_blank" className="group flex flex-col items-center gap-4">
            <div className="p-5 rounded-[2.5rem] bg-slate-50 text-slate-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-pink-600 transition-all duration-500 shadow-sm">
              <Instagram size={32} />
            </div>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">@kinetixcode</span>
          </a>
          
          <div className="mt-16 flex flex-col items-center gap-4">
             <div className="flex gap-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Security</span>
             </div>
             <p className="text-slate-300 text-[10px] font-medium uppercase tracking-[0.1em]">
               Kinetix Learning Systems © {currentYear}
             </p>
          </div>
        </div>
      </div>
    </footer>
  )
}