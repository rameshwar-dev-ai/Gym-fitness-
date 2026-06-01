import { HERO_DATA, CHOOSE_US_CARDS, FITNESS_PROGRAMS, TRAINERS, TESTIMONIALS, PRICING_PLANS } from '../data';
import { PageType } from '../types';
import { motion } from 'motion/react';
import { Dumbbell, ShieldCheck, Layers, Apple, ChevronRight, Star, Heart, Flame, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: PageType) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  
  // Icon selector based on name
  const renderChooseUsIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-cyan-400" />;
      default:
        return <Dumbbell className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleNav = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white selection:bg-cyan-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4">
        {/* Background dark overlay image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_DATA.bgImage}
            alt="IronForge Gym Interior"
            className="w-full h-full object-cover opacity-35 object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/85" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/20 to-transparent" />
          {/* Subtle Cyber Accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          
          {/* Live indicator / Campaign */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-zinc-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-300 uppercase">
              Now Open in DownTown • Premium Membership Pre-sale Active
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase mb-6 leading-[1.05]"
          >
            Transform Your Body. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              Build Your Strength.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-zinc-350 max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
          >
            {HERO_DATA.subheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => handleNav('membership')}
              id="hero-cta-join"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              Join IronForge Now
            </button>
            
            <button
              onClick={() => handleNav('programs')}
              id="hero-cta-programs"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white font-extrabold text-sm uppercase tracking-wider rounded-md transition-all duration-300 border border-zinc-800 hover:border-zinc-700 cursor-pointer"
            >
              Explore Programs
            </button>
          </motion.div>

          {/* Simple feature stamps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center font-mono"
          >
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">24/7</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Vip Access</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-cyan-400 tracking-tight">15k+</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Sq Ft Facility</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">99.2%</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Success Rate</p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 2. WHY CHOOSE US */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Why Choose Us</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Engineered For Physical Domination
            </p>
            <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
              We skip the fluffy wellness jargon. Our methodology pairs highly intensive, scientifically backed training processes with the raw power of standard old-school bodybuilding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHOOSE_US_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -8, borderColor: 'rgba(34,211,238,0.4)' }}
                className="bg-black/80 border border-zinc-900 rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-cyan-950/40 group-hover:border-cyan-800/60 transition-colors">
                  {renderChooseUsIcon(card.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 3. FEATURED PROGRAMS PREVIEW */}
      <section className="py-24 bg-black relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Programs</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                Bespoke Performance Tracks
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                We custom design all training workloads around compound efficiency to ensure consistent, sustainable metabolic transformations.
              </p>
            </div>
            <button
              onClick={() => handleNav('programs')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-mono text-xs uppercase tracking-wider group cursor-pointer"
            >
              <span>View All Programs</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FITNESS_PROGRAMS.slice(0, 3).map((program) => (
              <div 
                key={program.id}
                className="bg-zinc-950 border border-zinc-900/80 rounded-xl overflow-hidden group flex flex-col h-full"
              >
                <div className="h-56 relative overflow-hidden flex-none">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-black/80 border border-zinc-800 text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 text-cyan-400 rounded-md">
                    {program.intensity}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans line-clamp-3">
                      {program.shortDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNav('programs')}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-850 text-white hover:text-cyan-400 font-mono text-[11px] uppercase tracking-wider rounded-md border border-zinc-800 transition-all cursor-pointer"
                  >
                    Learn Program Metrics
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. TRAINERS PREVIEW */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Specialist Coaches</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Meet Our Peak Mentors
            </p>
            <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
              IronForge trainers aren&rsquo;t influencers; they hold structural degrees, functional health certifications, and thousands of hours of aggregate client coaching experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS.map((trainer) => (
              <div 
                key={trainer.id}
                className="bg-black border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-all group flex flex-col h-full"
              >
                <div className="h-72 relative overflow-hidden bg-zinc-900">
                  <img
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 opacity-90 object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  
                  {/* Performance stats mini panel */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between bg-black/85 border border-zinc-800 p-2.5 rounded-lg backdrop-blur-sm">
                    <div>
                      <p className="text-[10px] font-mono whitespace-nowrap text-zinc-500 uppercase">Success Rate</p>
                      <p className="text-xs font-bold text-cyan-400">{trainer.stats.successRate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase">Clients Managed</p>
                      <p className="text-xs font-bold text-white">{trainer.stats.clientsHelped}+</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-wider font-semibold uppercase block mb-1">
                      {trainer.specialization}
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-normal font-sans mt-3 line-clamp-3">
                      {trainer.bio}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-900">
                    <button
                      onClick={() => handleNav('trainers')}
                      className="w-full py-2 bg-zinc-950 hover:bg-zinc-900 rounded text-xs font-mono text-zinc-300 hover:text-white border border-zinc-850/80 transition-all cursor-pointer"
                    >
                      Inspect Certifications ({trainer.experienceYears}y Exp)
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNav('trainers')}
              id="home-meet-trainers"
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 text-white font-mono text-xs uppercase tracking-wider rounded border border-zinc-800 transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Meet Our Trainers</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>


      {/* 5. MEMBERSHIP PREVIEW */}
      <section className="py-24 bg-black border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Memberships</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              No Gimmicks, Premium Perks
            </p>
            <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
              Select an access bracket tailored for your active timeline. Clear plans, straightforward billing, and maximum high-energy coaching value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`border rounded-xl p-8 flex flex-col justify-between h-full relative ${
                  plan.isPopular 
                    ? 'bg-zinc-950 border-cyan-500 shadow-[0_4px_30px_rgba(6,182,212,0.15)] scale-[1.02] md:scale-[1.03]' 
                    : 'bg-black border-zinc-900'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 pb-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-black fill-black" />
                    <span>Most Popular Tier</span>
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight block">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-black text-white tracking-tight">${plan.priceMonthly}</span>
                    <span className="text-xs font-mono text-zinc-500 ml-1">/ Month</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal mt-3 font-sans">
                    {plan.description}
                  </p>

                  <div className="h-px bg-zinc-900 my-6" />

                  <ul className="space-y-3">
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-zinc-300">
                        <span className="text-cyan-400 mr-2 mt-0.5 select-none font-bold">✓</span>
                        <span className="leading-tight font-sans text-zinc-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleNav('membership')}
                    className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-md'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNav('membership')}
              className="text-xs font-mono text-zinc-400 hover:text-cyan-400 underline transition-colors cursor-pointer"
            >
              Analyze Plan Features Side-by-side
            </button>
          </div>

        </div>
      </section>


      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Real outcomes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Proven Results on the Floor
            </p>
            <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
              We don&rsquo;t trade in promise. See structural real-world reviews from people who turned absolute fatigue into performance and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div 
                key={review.id}
                className="bg-black border border-zinc-900 p-6 rounded-xl flex flex-col justify-between relative relative"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center space-x-1 mb-4 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center space-x-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">{review.name}</h4>
                    <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{review.role}</p>
                    <span className="inline-block mt-2 px-2.5 py-0.5 bg-cyan-950/40 border border-cyan-900 text-cyan-300 text-[9px] font-semibold rounded uppercase tracking-wider">
                      ★ {review.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 7. PRE-FOOTER CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-900 text-center relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            Ready to break physical bottlenecks and construct absolute athletic peak parameters? Claim your limited pre-sale pass or get a direct physical assessment today.
          </p>
          <button
            onClick={() => handleNav('contact')}
            id="home-cta-get-started"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-extrabold text-sm uppercase tracking-widest rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}
