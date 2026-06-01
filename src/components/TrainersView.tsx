import { TRAINERS } from '../data';
import { Award, ShieldCheck, Heart, Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PageType, Trainer } from '../types';

interface TrainersViewProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedProgram: (programTitle: string) => void;
}

export default function TrainersView({ setCurrentPage, setSelectedProgram }: TrainersViewProps) {
  
  const handleSelectTrainer = (trainerName: string) => {
    setSelectedProgram(`1-on-1 Coaching with ${trainerName}`);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Our Coaches</h1>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Elite Certified Mentors
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            We do not hire dynamic social media influencers. Our personal coaches hold physical degrees, sports medicine credentials, and verified life-changing progress frameworks.
          </p>
        </div>

        {/* Trainer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div 
              key={trainer.id}
              className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_4px_30px_rgba(6,182,212,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              
              {/* Photo Area */}
              <div className="h-80 relative overflow-hidden bg-zinc-900">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 object-top opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent" />
                
                {/* Year tag */}
                <span className="absolute top-4 left-4 bg-black/85 border border-zinc-800 text-[9px] font-mono tracking-wider font-bold py-1 px-2.5 text-cyan-300 uppercase rounded-md shadow-md">
                  {trainer.experienceYears} Years Certified
                </span>
              </div>

              {/* Personal Info Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Specialty */}
                  <div className="flex items-center space-x-1.5 text-cyan-400 text-[10px] font-mono uppercase tracking-widest mb-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{trainer.specialization}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                    {trainer.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-3">
                    {trainer.bio}
                  </p>

                  {/* Certifications box */}
                  <div className="mt-5 bg-black/60 p-4 rounded-lg border border-zinc-900/60">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-2 flex items-center">
                      <Award className="w-3.5 h-3.5 text-cyan-500 mr-1.5" />
                      Verified Credentials
                    </p>
                    <ul className="space-y-1.5">
                      {trainer.certifications.map((cert, index) => (
                        <li key={index} className="flex items-start text-[11px] text-zinc-455">
                          <span className="text-cyan-400 mr-1.5 font-bold select-none">•</span>
                          <span className="leading-tight font-sans text-zinc-300">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Trainer Key Performance Metrics */}
                <div className="mt-6 pt-4 border-t border-zinc-900">
                  <div className="grid grid-cols-2 gap-4 text-center font-mono py-2 bg-black/40 border border-zinc-900/80 rounded mb-4">
                    <div>
                      <p className="text-[9px] text-zinc-500 uppercase">Success Rate</p>
                      <p className="text-sm font-extrabold text-cyan-400 mt-0.5">{trainer.stats.successRate}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-zinc-500 uppercase">Active Clients</p>
                      <p className="text-sm font-extrabold text-white mt-0.5">{trainer.stats.clientsHelped}+</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectTrainer(trainer.name)}
                    className="w-full py-3 bg-zinc-900 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 font-mono text-[11px] uppercase tracking-wider font-extrabold text-zinc-300 hover:text-black rounded border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>Request 1-on-1 Prep</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Quality Standard Disclaimer banner */}
        <div className="mt-20 border border-zinc-900 bg-zinc-950/40 p-8 rounded-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-cyan-950/20 border border-cyan-900/40 rounded-full text-cyan-400 flex-none">
            <ShieldCheck className="w-10 h-10 stroke-[1.5] animate-pulse" />
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-extrabold uppercase text-sm tracking-wide">
              IronForge Personal Training Sovereignty Policy
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              All active trainers are required to maintain valid CSCS or equivalent tier-1 national registries, undergo bi-annual physiological mobility assessment reviews, and maintain full AED/CPR/Emergency Response certifications. We guarantee structured, safe, science-backed personal loading schemas for all body archetypes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
