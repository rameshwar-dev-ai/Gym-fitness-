import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ContactFormInput, SubmissionRecord } from '../types';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Trash2, CalendarRange, CheckCircle } from 'lucide-react';

interface ContactViewProps {
  selectedProgram: string;
}

export default function ContactView({ selectedProgram }: ContactViewProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    programOfInterest: selectedProgram || 'General Elite Admission',
    message: ''
  });

  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gymOpenStatus, setGymOpenStatus] = useState({ label: 'Open', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' });

  // Load any existing demo messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ironforge_inquiries');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error("Could not parse saved inquiries", e);
      }
    }
  }, []);

  // Update form if selectedProgram changes from other page
  useEffect(() => {
    if (selectedProgram) {
      setFormData(prev => ({
        ...prev,
        programOfInterest: selectedProgram
      }));
    }
  }, [selectedProgram]);

  // Real-time gym indicator based on current local computer time
  useEffect(() => {
    const hours = new Date().getHours();
    // Gym is open 5 AM (5) to 11 PM (23)
    if (hours >= 5 && hours < 23) {
      setGymOpenStatus({ label: 'Open • Lifting Floor Fully Active', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' });
    } else {
      setGymOpenStatus({ label: 'Closed • (24/7 VIP Card Key Access Only)', color: 'text-amber-400 border-amber-500/20 bg-amber-500/5' });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newSubmission: SubmissionRecord = {
      ...formData,
      id: `inq-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newSubmission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('ironforge_inquiries', JSON.stringify(updated));
    
    // Reset form except for name
    setFormData(prev => ({
      name: prev.name,
      email: prev.email,
      phone: '',
      programOfInterest: 'General Elite Admission',
      message: ''
    }));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(item => item.id !== id);
    setSubmissions(updated);
    localStorage.setItem('ironforge_inquiries', JSON.stringify(updated));
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">Concierge Desk</h1>
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            Start Your Transformation
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Schedule a tour, request a private kinetic lift assessment, or secure your custom pre-sale rate package directly with our concierge team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* L: CONTACT INFO COLUMN (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status indicator */}
            <div className={`p-4 rounded-lg border text-xs font-mono flex items-center justify-between ${gymOpenStatus.color}`}>
              <div className="flex items-center space-x-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>Current Status: <span className="font-bold">{gymOpenStatus.label}</span></span>
              </div>
            </div>

            {/* Standard contact info block */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 space-y-6">
              <h3 className="text-base font-bold uppercase tracking-wide text-white border-b border-zinc-900 pb-3">
                IronForge HQ Information
              </h3>

              <div className="space-y-4">
                
                {/* Map pin */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 border border-zinc-850 rounded text-cyan-400 bg-zinc-900 flex-none">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">HQ Location</p>
                    <p className="text-xs text-white tracking-wide mt-0.5">859 Steelworks Blvd, Suite 100</p>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Downtown Core, DC 20005</p>
                  </div>
                </div>

                {/* Hours pin */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 border border-zinc-850 rounded text-cyan-400 bg-zinc-900 flex-none">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Operation Hours</p>
                    <p className="text-xs text-white tracking-wide mt-0.5">Mon - Fri: 5:00 AM - 11:00 PM</p>
                    <p className="text-xs text-white tracking-wide mt-0.5">Sat - Sun: 7:00 AM - 9:00 PM</p>
                    <p className="text-[10px] text-cyan-400 font-mono mt-1">✓ RFID Keycard VIP access: 24/7/365</p>
                  </div>
                </div>

                {/* Phone pin */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 border border-zinc-850 rounded text-cyan-400 bg-zinc-900 flex-none">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Direct Concierge</p>
                    <p className="text-xs text-white tracking-wide mt-0.5 font-mono">+1 (555) 783-3567</p>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Concierge desk hours: 6 AM - 8 PM</p>
                  </div>
                </div>

                {/* Email pin */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 border border-zinc-850 rounded text-cyan-400 bg-zinc-900 flex-none">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Online Support</p>
                    <p className="text-xs text-white tracking-wide mt-0.5 font-mono">concierge@ironforge.com</p>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Average response delay: 9 minutes</p>
                  </div>
                </div>

              </div>
            </div>

            {/* MAP LAYOUT (Vector Mockup) */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-5 overflow-hidden">
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3 block">Tactical Facility Location Map</p>
              
              <div className="h-44 bg-zinc-90 w-full bg-zinc-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-zinc-850">
                {/* SVG Mock dynamic grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
                
                {/* Mock Roads */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-800 transform -rotate-6" />
                <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-zinc-800" />
                
                {/* Map Location pinpoint */}
                <div className="absolute left-[33%] top-[45%] translate-x-1 translate-y-1 z-10">
                  <span className="flex h-4 w-4 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border border-black flex items-center justify-center font-mono text-[7px] font-bold text-black">IF</span>
                  </span>
                </div>

                {/* Coordinates stamp */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                  Lat 38.9072° N • Lon 77.0369° W
                </span>

                <span className="text-zinc-644 text-xs font-mono tracking-tight font-bold text-zinc-400 bg-black/60 p-2.5 rounded border border-zinc-850 max-w-[200px] text-center leading-normal">
                  859 Steelworks Blvd <br />
                  <span className="text-[10px] text-cyan-400 font-normal">Next to Ironworks District</span>
                </span>
              </div>
            </div>

          </div>

          {/* R: CONTACT INPUT FORM (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-8">
              
              <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-6 border-b border-zinc-905 pb-3 block">
                Inquiry Application Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-bold">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Liam Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-850 hover:border-zinc-700 focus:border-cyan-400 p-3 rounded font-sans text-xs sm:text-sm text-white placeholder:text-zinc-700 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-bold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. liam@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-850 hover:border-zinc-700 focus:border-cyan-400 p-3 rounded font-sans text-xs sm:text-sm text-white placeholder:text-zinc-700 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-850 hover:border-zinc-700 focus:border-cyan-400 p-3 rounded font-mono text-xs text-white placeholder:text-zinc-700 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-bold">Program track / Inquiry Focus</label>
                    <select
                      name="programOfInterest"
                      value={formData.programOfInterest}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-850 hover:border-zinc-700 focus:border-cyan-400 p-3 rounded font-sans text-xs sm:text-sm text-white outline-none transition-all h-[46px] select-accent-fix"
                    >
                      <option value="General Elite Admission">General Elite Admission</option>
                      <option value="Basic Access Plan">Basic Access Plan</option>
                      <option value="Pro Experience Plan">Pro Experience Plan</option>
                      <option value="Elite Performance Plan">Elite Performance Plan</option>
                      <option value="Weight Loss & Conditioning">Weight Loss & Conditioning</option>
                      <option value="Muscle Building Track">Muscle Building Track</option>
                      <option value="Strength Training Session">Strength Training Session</option>
                      <option value="Functional Training Track">Functional Training Track</option>
                      <option value="1-on-1 Coaching with Marcus Vance">1-on-1 Coaching with Marcus</option>
                      <option value="1-on-1 Coaching with Sarah Jenkins">1-on-1 Coaching with Sarah</option>
                      <option value="1-on-1 Coaching with Alex Rodriguez">1-on-1 Coaching with Alex</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-bold">Goals & Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what you want to achieve (e.g., gain 10 lbs of muscle, optimize compound posture, etc.)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-850 hover:border-zinc-700 focus:border-cyan-400 p-3 rounded font-sans text-xs sm:text-sm text-white placeholder:text-zinc-700 outline-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-extrabold uppercase text-xs tracking-wider rounded transition-all transform hover:scale-[1.01] shadow-lg shadow-cyan-800/10 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 fill-black text-black" />
                    <span>Submit Intake Application</span>
                  </button>
                </div>

              </form>

              {/* Status banner indicator */}
              {showSuccess && (
                <div className="mt-4 p-4 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-sans flex items-start space-x-2.5 rounded-lg animate-fadeIn">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-none" />
                  <div>
                    <p className="font-extrabold uppercase">Application Received Successfully!</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Your inquiry is saved inside local memory storage. One of our performance concierges will reach out within 15 minutes.</p>
                  </div>
                </div>
              )}

            </div>

            {/* IN-MEMORY SUBMISSIONS LOG FOR PORTFOLIO REVIEWS */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="p-1 px-2.5 bg-cyan-950 border border-cyan-850 text-cyan-400 text-[9px] font-mono uppercase tracking-wider rounded">
                    Simulator
                  </span>
                  <p className="text-xs font-bold uppercase text-white tracking-wide">Demo Inbox Logger</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  {submissions.length} Logged Inquiries
                </span>
              </div>

              {submissions.length === 0 ? (
                <div className="text-center py-8 text-zinc-650 border border-dashed border-zinc-900 rounded-lg">
                  <CalendarRange className="w-8 h-8 text-zinc-700 mx-auto mb-2.5" />
                  <p className="text-xs font-mono text-zinc-600 uppercase">Inbox Simulator empty</p>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5 max-w-sm mx-auto">Fill out the intake form above and submit to verify that inquiries populate in-memory database storage instantly.</p>
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[290px] overflow-y-auto pr-1">
                  {submissions.map((sub) => (
                    <div 
                      key={sub.id} 
                      className="p-4 bg-black border border-zinc-900/80 rounded-lg text-xs space-y-2.5 hover:border-zinc-800 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-white tracking-wide">{sub.name}</p>
                          <p className="text-[10px] text-zinc-500 font-mono">{sub.email} • {sub.phone || 'no phone'}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[8px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded uppercase font-semibold">
                            {sub.timestamp}
                          </span>
                          <button
                            onClick={() => deleteSubmission(sub.id)}
                            className="text-zinc-600 hover:text-red-400 p-1 rounded-md transition-colors"
                            title="Delete query record"
                            aria-label="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="bg-zinc-950 p-2.5 rounded border border-zinc-900 text-[11px]">
                        <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">Focus Program:</span>
                        <p className="text-white tracking-wide font-sans">{sub.programOfInterest}</p>
                        {sub.message && (
                          <>
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold mt-2.5 mb-1">Objective Message:</span>
                            <p className="text-zinc-400 leading-normal font-sans italic">&ldquo;{sub.message}&rdquo;</p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
