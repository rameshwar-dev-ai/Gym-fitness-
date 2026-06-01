import { PageType } from '../types';
import { Dumbbell, ShieldCheck, Mail, Sparkles, Heart, Scale } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onOpenCaseStudy: () => void;
}

export default function Footer({ setCurrentPage, onOpenCaseStudy }: FooterProps) {
  
  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 font-sans text-xs">
      
      {/* Top Banner section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand section (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="p-1.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded text-black font-extrabold shadow-[0_0_10px_rgba(6,182,212,0.25)]">
              <Dumbbell className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white uppercase">
                IRON<span className="text-cyan-400">FORGE</span>
              </span>
              <span className="block text-[8px] font-mono tracking-[3px] text-zinc-500 uppercase -mt-1">
                FITNESS
              </span>
            </div>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
            IronForge is a specialized athletic strength temple designed for target performance biomechanics, compound heavy lifting progression, and elite-tier accountability tracking.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center space-x-1 px-3 py-1 bg-zinc-90 w-auto bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Inspect High-Value Case Study</span>
            </button>
          </div>
        </div>

        {/* Sitemap navigation panel (4 col total: 2 x 2 split) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono text-white uppercase tracking-widest mb-3.5 font-bold">Facility Site</p>
            <ul className="space-y-2.5 font-medium transition-all">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer">
                  1. Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('programs')} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer">
                  2. Core Tracks
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('trainers')} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer">
                  3. Peak Mentors
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-mono text-white uppercase tracking-widest mb-3.5 font-bold font-bold">Client Portals</p>
            <ul className="space-y-2.5 font-medium transition-all">
              <li>
                <button onClick={() => handleNavClick('membership')} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer">
                  4. Pricing Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer">
                  5. Contact Inquiry
                </button>
              </li>
              <li>
                <button onClick={onOpenCaseStudy} className="hover:text-cyan-400 transition-colors uppercase text-[11px] font-mono tracking-wider cursor-pointer text-cyan-400 font-bold">
                  ★ Case Specs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical audit & disclaimer section (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <p className="text-[10px] font-mono text-white uppercase tracking-widest mb-3.5 font-bold">Location & Contact</p>
          <div className="space-y-2 text-zinc-500 text-xs">
            <p>HQ: 859 Steelworks Blvd, Suite 100, DC 20005</p>
            <p>Tel: +1 (555) 783-3567</p>
            <p>Hours: Mon - Fri: 5 AM - 11 PM • Sat - Sun: 7 AM - 9 PM</p>
            <p className="text-[10px] text-zinc-650 italic">
              * Note: RFID chip access active 24/7/365 for Pro and Elite holders.
            </p>
          </div>
        </div>

      </div>

      {/* Sub-bottom legal section */}
      <div className="bg-zinc-950 border-t border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          
          <div>
            <p>© {new Date().getFullYear()} IronForge Fitness. All rights reserved.</p>
            <p className="text-[10px] text-zinc-600 mt-1 font-sans">
              Designed as a professional dynamic portfolio showcase. All brand names, coaches, achievements, and statistics are fictional.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 text-zinc-600 bg-black/60 px-3 py-1.5 rounded border border-zinc-900 font-mono text-[9px] uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-cyan-500" />
            <span>Freelance Developer Portfolio Project</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
