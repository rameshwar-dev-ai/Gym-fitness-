import { useState } from 'react';
import { FITNESS_PROGRAMS } from '../data';
import { FitnessProgram, PageType } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Flame, ChevronDown, CheckCircle2, User, HelpCircle, ArrowRight } from 'lucide-react';

interface ProgramsViewProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedProgram: (programTitle: string) => void;
}

export default function ProgramsView({ setCurrentPage, setSelectedProgram }: ProgramsViewProps) {
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const intensities = ['all', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const filteredPrograms = FITNESS_PROGRAMS.filter((program) => {
    if (selectedIntensity === 'all') return true;
    return program.intensity === selectedIntensity;
  });

  const handleApplyNow = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Our Core Programs</h1>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Precision Training Frameworks
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Every workout is part of a calculated roadmap. Select from our core periodized programs or design a personal training strategy under an elite coach.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {intensities.map((intensity) => (
            <button
              key={intensity}
              onClick={() => {
                setSelectedIntensity(intensity);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                selectedIntensity === intensity
                  ? 'bg-cyan-500 border-cyan-500 text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {intensity === 'all' ? 'Show All Tracks' : intensity}
            </button>
          ))}
        </div>

        {/* Grid display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => {
              const isExpanded = expandedId === program.id;
              
              return (
                <motion.div
                  key={program.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className={`bg-zinc-950 border rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-950/15 group transition-all duration-300 ${
                    isExpanded ? 'border-cyan-500/60 bg-zinc-950' : 'border-zinc-900/80 hover:border-zinc-800'
                  }`}
                >
                  <div className="sm:flex h-full">
                    
                    {/* Thumbnail Image */}
                    <div className="relative sm:w-1/3 h-52 sm:h-auto min-h-[180px] bg-zinc-900">
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
                      
                      {/* Intensity Badge */}
                      <span className="absolute top-3 left-3 bg-black/85 border border-zinc-800 text-[9px] font-mono tracking-wider font-bold uppercase py-0.5 px-2 text-cyan-400 rounded">
                        {program.intensity}
                      </span>
                    </div>

                    {/* Basic details */}
                    <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                      <div>
                        
                        {/* Duration banner */}
                        <div className="flex items-center space-x-1.5 text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{program.duration}</span>
                        </div>

                        <h3 className="text-xl font-bold uppercase text-white tracking-tight leading-normal group-hover:text-cyan-400 transition-colors mb-2">
                          {program.title}
                        </h3>
                        
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                          {program.shortDescription}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-zinc-900/50">
                        {/* Expand actions */}
                        <button
                          onClick={() => toggleExpand(program.id)}
                          className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer py-1"
                        >
                          <span>{isExpanded ? 'Hide Specs' : 'Expand Program Specs'}</span>
                          <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        <button
                          onClick={() => handleApplyNow(program.title)}
                          className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-extrabold text-[10px] uppercase rounded tracking-wider transition-transform hover:scale-103 cursor-pointer flex items-center space-x-1"
                        >
                          <span>Select Track</span>
                          <ArrowRight className="w-3 h-3 block" />
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* Expanded Body details holding benefits list */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-zinc-900 bg-black/60 p-6 space-y-4"
                      >
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">Deep Course Overview</p>
                          <p className="text-xs text-zinc-350 leading-relaxed font-sans">
                            {program.detailedDescription}
                          </p>
                        </div>

                        <div className="h-px bg-zinc-900/80" />

                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">Target Athletic Benefits</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {program.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start text-xs text-zinc-300">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-none" />
                                <span className="leading-tight text-zinc-400 font-sans">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between border-t border-zinc-900/40 text-[10px] font-mono">
                          <span className="text-zinc-500">Duration: {program.duration}</span>
                          <span className="text-zinc-500">Tier: Elite Gym Services</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic FAQ prompt */}
        <div className="mt-20 text-center bg-zinc-950 p-6 rounded-xl border border-zinc-900 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded text-cyan-400">
              <HelpCircle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase">Unsure which track fits your body type?</p>
              <p className="text-[10px] text-zinc-500 font-sans">Our elite support staff offers standard free posture and biometric audits.</p>
            </div>
          </div>
          <button
            onClick={() => handleApplyNow('General Dynamic Consult')}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 hover:text-white font-mono uppercase rounded transition-all cursor-pointer whitespace-nowrap"
          >
            Request Free Audit
          </button>
        </div>

      </div>
    </div>
  );
}
