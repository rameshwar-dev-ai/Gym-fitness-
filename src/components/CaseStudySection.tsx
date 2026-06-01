import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Code2, Target, CheckSquare, BarChart, ChevronRight } from 'lucide-react';
import { PORTFOLIO_CASE_STUDY } from '../data';

interface CaseStudySectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudySection({ isOpen, onClose }: CaseStudySectionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-zinc-950 border-l border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-900 bg-zinc-900/40 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
              <div className="flex items-center space-x-2.5">
                <div className="p-1 px-3 bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono text-[10px] uppercase tracking-wider rounded-full">
                  Portfolio Mode
                </div>
                <h3 className="font-extrabold text-lg text-white">Case Study Specs</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-md transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 space-y-6 flex-1 text-sm leading-relaxed text-zinc-300">
              
              {/* Box Info */}
              <div className="bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border border-cyan-900/30 rounded-xl p-5 space-y-3 shadow-inner">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold tracking-tight text-white uppercase sm:text-sm">
                    {PORTFOLIO_CASE_STUDY.projectName}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Type: <span className="text-zinc-200 font-medium">{PORTFOLIO_CASE_STUDY.projectType}</span>
                </p>
                <div className="h-px bg-zinc-850" />
                <p className="text-xs text-zinc-400 leading-normal italic">
                  &ldquo;A pristine showcase constructed to demonstrate high-end business value, smooth navigation speed, and state-of-the-art layout logic for client portfolios.&rdquo;
                </p>
              </div>

              {/* Goal section */}
              <div className="space-y-2">
                <h4 className="flex items-center text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  <Target className="w-4 h-4 mr-2 text-cyan-500" />
                  Business Goal & Objectives
                </h4>
                <p className="bg-zinc-900/50 p-4 border border-zinc-900 rounded-lg text-zinc-200 text-xs">
                  {PORTFOLIO_CASE_STUDY.overallGoal}
                </p>
              </div>

              {/* Engineering Deliverables */}
              <div className="space-y-3">
                <h4 className="flex items-center text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  <Code2 className="w-4 h-4 mr-2 text-cyan-500" />
                  Front-End Engineering Deliverables
                </h4>
                <div className="space-y-3.5">
                  {PORTFOLIO_CASE_STUDY.deliverables.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-5 h-5 mt-0.5 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-400 flex-none select-none">
                        0{idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">{item.name}</p>
                        <p className="text-xs text-zinc-400 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UX Success Outcomes */}
              <div className="space-y-3">
                <h4 className="flex items-center text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  <BarChart className="w-4 h-4 mr-2 text-cyan-500" />
                  UX Strategy Outcomes
                </h4>
                <ul className="space-y-2">
                  {PORTFOLIO_CASE_STUDY.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start bg-zinc-900/30 p-3 rounded-lg border border-zinc-900/60">
                      <CheckSquare className="w-4 h-4 mt-0.5 mr-2 text-cyan-400 flex-none" />
                      <span className="text-xs text-zinc-300 leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Stack Specifications */}
              <div className="pt-4 border-t border-zinc-900 space-y-3">
                <p className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">Tech Stack & Architecture</p>
                <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                  <div className="bg-zinc-900 p-3 rounded border border-zinc-850 text-center">
                    <p className="text-zinc-500">View Layer</p>
                    <p className="text-cyan-400 font-bold mt-1">React 19 + TypeScript</p>
                  </div>
                  <div className="bg-zinc-900 p-3 rounded border border-zinc-850 text-center">
                    <p className="text-zinc-500">Styling System</p>
                    <p className="text-cyan-400 font-bold mt-1">Tailwind CSS v4.0</p>
                  </div>
                  <div className="bg-zinc-900 p-3 rounded border border-zinc-850 text-center col-span-2">
                    <p className="text-zinc-500">Micro-animations</p>
                    <p className="text-cyan-400 font-bold mt-1">Motion (Framer Motion v12)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer action */}
            <div className="p-6 border-t border-zinc-900 bg-zinc-900/20 sticky bottom-0 z-10 backdrop-blur-md">
              <button
                onClick={onClose}
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 hover:text-white text-zinc-300 rounded-lg text-xs font-mono tracking-wide transition-all uppercase flex items-center justify-center space-x-1.5"
              >
                <span>Continue Exploring the Site</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
