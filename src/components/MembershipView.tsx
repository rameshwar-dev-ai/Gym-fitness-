import { useState } from 'react';
import { PRICING_PLANS, FAQs } from '../data';
import { PageType } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, HelpCircle, ChevronDown, ChevronUp, Sparkles, Trophy, ShieldCheck, Mail } from 'lucide-react';

interface MembershipViewProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedProgram: (programTitle: string) => void;
}

export default function MembershipView({ setCurrentPage, setSelectedProgram }: MembershipViewProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const handleSelectPlan = (planName: string, calculatedPrice: number) => {
    setSelectedProgram(`Membership Intake: ${planName} Plan (${isAnnual ? 'Annually' : 'Monthly'} @ $${calculatedPrice}/mo)`);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Structured comparison features
  const COMPARISON_FEATURES = [
    { name: "Gym Floor Access", desc: "Unlimited entry into main strength chambers", basic: "5 AM - 11 PM", pro: "24/7 VIP Access", elite: "24/7 VIP Access" },
    { name: "Plate Loaded Machinery", desc: "Access to Hammer Strength and Eleiko platforms", basic: true, pro: true, elite: true },
    { name: "Locker & Shower Suite", desc: "Access to changing lockers and keyless locking systems", basic: "Locker Access Only", pro: "Full Amenities + Towels", elite: "Private Dedicated Locker + Laundry Service" },
    { name: "Group Fitness Classes", desc: "Access to standard and HIIT cardio/HIIT cycles", basic: false, pro: "Unlimited Booking", elite: "Unlimited Booking" },
    { name: "Biometric Scans", desc: "Dynamic 3D body composition scanning and macro audits", basic: "First-Session Only", pro: "Monthly Assessment", elite: "Bi-Weekly Assessment" },
    { name: "1-on-1 Certified Coach", desc: "Assigned personal trainer for workout planning", basic: false, pro: false, elite: "2 Sessions / Week included" },
    { name: "Steam Room & Recovery Lounge", desc: "Unlimited entry into thermal chambers", basic: false, pro: false, elite: true },
    { name: "IronBar Cafe Discount", desc: "Discount on dynamic preworkout and smoothies", basic: false, pro: "10% Discount", elite: "20% Discount" },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Pricing & Intake</h1>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Transparent Pricing Systems
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            No dynamic club fees, maintenance surprise-charges, or hard-sell pressure tactics. Simply choose an access tier that suits your goals.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <span className={`text-xs font-mono tracking-wider transition-colors ${!isAnnual ? 'text-cyan-400 font-extrabold' : 'text-zinc-500'}`}>
              Pay Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-zinc-900 border border-zinc-800 rounded-full p-1 transition-colors duration-300 relative focus:outline-none flex items-center"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-transform duration-300 transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-mono tracking-wider transition-colors inline-flex items-center gap-1.5 ${isAnnual ? 'text-cyan-400 font-extrabold' : 'text-zinc-500'}`}>
              <span>Pay Annually</span>
              <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-[9px] font-black uppercase rounded-full">
                Save 25%
              </span>
            </span>
          </div>

        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRICING_PLANS.map((plan) => {
            const calculatedPrice = isAnnual ? plan.priceAnnually : plan.priceMonthly;
            
            return (
              <div 
                key={plan.id}
                className={`border rounded-xl p-8 bg-zinc-950 flex flex-col justify-between h-full relative transition-all duration-300 ${
                  plan.isPopular 
                    ? 'border-cyan-500 shadow-[0_4px_30px_rgba(6,182,212,0.15)] scale-[1.01] md:scale-[1.03]' 
                    : 'border-zinc-900 hover:border-zinc-800'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] uppercase font-mono font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Selected Gold Standard</span>
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight block">
                    {plan.name}
                  </h3>
                  
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-black text-white tracking-tight">${calculatedPrice}</span>
                    <span className="text-xs font-mono text-zinc-500 ml-1.5">/ Month</span>
                  </div>
                  
                  {isAnnual && (
                    <p className="text-[10px] font-mono text-cyan-400 font-semibold uppercase mt-1">
                      Billed Annually (Save ${(plan.priceMonthly - plan.priceAnnually) * 12}/year)
                    </p>
                  )}

                  <p className="text-xs text-zinc-400 leading-relaxed mt-4 font-sans border-b border-zinc-900 pb-5">
                    {plan.description}
                  </p>

                  <ul className="space-y-3.5 py-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-zinc-300">
                        <Check className="w-4.5 h-4.5 text-cyan-400 mr-2.5 mt-0.5 flex-none" />
                        <span className="leading-tight font-sans text-zinc-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-900/60 mt-4">
                  <button
                    onClick={() => handleSelectPlan(plan.name, calculatedPrice)}
                    className={`w-full py-3.5 rounded-lg text-xs font-mono font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-md shadow-cyan-800/10'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        {/* PRICING COMPARISON TABLE */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Detailed matrix</h2>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Plan Comparison Guide
            </p>
            <p className="text-xs text-zinc-500 font-sans mt-2">
              Review every physical access feature across our basic, pro and elite membership templates.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-900 bg-zinc-950/40">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-900 bg-zinc-950 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  <th className="p-4 sm:p-5 w-1/3">Included Feature</th>
                  <th className="p-4 sm:p-5 text-center">Basic Check</th>
                  <th className="p-4 sm:p-5 text-center bg-cyan-950/20 text-cyan-400">Pro Access</th>
                  <th className="p-4 sm:p-5 text-center">Elite Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-350">
                {COMPARISON_FEATURES.map((feat, index) => (
                  <tr key={index} className="hover:bg-zinc-950/60 transition-colors">
                    <td className="p-4 sm:p-5">
                      <p className="font-bold text-white tracking-wide">{feat.name}</p>
                      <p className="text-[10px] text-zinc-500 font-sans mt-0.5 leading-normal max-w-sm">{feat.desc}</p>
                    </td>
                    
                    {/* Basic Column */}
                    <td className="p-4 sm:p-5 text-center whitespace-nowrap">
                      {typeof feat.basic === 'boolean' ? (
                        feat.basic ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      ) : (
                        <span className="text-xs font-mono font-medium text-zinc-400">{feat.basic}</span>
                      )}
                    </td>
                    
                    {/* Pro Column */}
                    <td className="p-4 sm:p-5 text-center whitespace-nowrap bg-cyan-950/10 font-bold border-x border-cyan-500/10">
                      {typeof feat.pro === 'boolean' ? (
                        feat.pro ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      ) : (
                        <span className="text-xs font-mono font-bold text-cyan-300">{feat.pro}</span>
                      )}
                    </td>
                    
                    {/* Elite Column */}
                    <td className="p-4 sm:p-5 text-center whitespace-nowrap">
                      {typeof feat.elite === 'boolean' ? (
                        feat.elite ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      ) : (
                        <span className="text-xs font-mono text-white font-bold">{feat.elite}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* FAQ ACCORDION SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Got questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Frequently Queried Specs
            </p>
          </div>

          <div className="space-y-4">
            {FAQs.map((faq) => {
              const isFaqOpen = openFaqId === faq.id;
              
              return (
                <div 
                  key={faq.id}
                  className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-zinc-900/60 transition-colors focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <span className="flex-none text-[9px] font-mono px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded uppercase">
                        {faq.category}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    {isFaqOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 flex-none" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500 flex-none" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isFaqOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-5 pt-0 border-t border-zinc-900 bg-black/40 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-10 bg-zinc-950/40 p-6 rounded-lg border border-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 font-sans text-center sm:text-left">
              Have a physical question that isn&rsquo;t referenced in our list? Reach out to our team.
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white font-mono uppercase rounded flex items-center space-x-1.5 transition-all hover:bg-zinc-850 cursor-pointer text-center"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Connect Concierge</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
