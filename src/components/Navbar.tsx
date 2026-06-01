import { useState } from 'react';
import { PageType } from '../types';
import { Dumbbell, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenCaseStudy: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenCaseStudy }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Programs', page: 'programs' },
    { label: 'Trainers', page: 'trainers' },
    { label: 'Membership', page: 'membership' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 border-b border-zinc-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-black font-extrabold shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-transform duration-300 group-hover:scale-110">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                IRON<span className="text-cyan-400 font-black">FORGE</span>
              </span>
              <span className="block text-[9px] font-mono tracking-[4px] text-zinc-400 -mt-1 uppercase">
                FITNESS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                  currentPage === item.page
                    ? 'text-cyan-400 font-semibold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Callouts */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Case Study Trigger Badge */}
            <button
              onClick={onOpenCaseStudy}
              id="nav-case-study"
              className="flex items-center space-x-1 px-3 py-1.5 bg-zinc-900 border border-zinc-700/80 hover:border-cyan-500/80 rounded-full text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Study</span>
            </button>

            <button
              onClick={() => handleNavClick('membership')}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold text-sm tracking-wide rounded-md transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_14px_rgba(6,182,212,0.25)] active:scale-95"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenCaseStudy}
              className="p-1 px-2.5 bg-zinc-900 border border-zinc-850 rounded-full text-[10px] font-mono text-cyan-400 flex items-center space-x-1"
            >
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>Case Study</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden border-t border-zinc-850 bg-black"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.page
                      ? 'bg-zinc-900 text-cyan-400 font-bold border-l-4 border-cyan-400'
                      : 'text-zinc-300 hover:bg-zinc-90 w-full hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900 px-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCaseStudy();
                  }}
                  className="w-full py-2.5 bg-zinc-90 w-full bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 font-mono text-xs flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Case Study Specs</span>
                </button>
                <button
                  onClick={() => handleNavClick('membership')}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold text-center rounded-md text-sm cursor-pointer shadow-md"
                >
                  Join IronForge
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
