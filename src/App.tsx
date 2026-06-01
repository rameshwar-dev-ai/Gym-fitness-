import { useState } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaseStudySection from './components/CaseStudySection';
import HomeView from './components/HomeView';
import ProgramsView from './components/ProgramsView';
import TrainersView from './components/TrainersView';
import MembershipView from './components/MembershipView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProgram, setSelectedProgram] = useState<string>('General Elite Admission');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  // Selector for current view component
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'programs':
        return (
          <ProgramsView 
            setCurrentPage={setCurrentPage} 
            setSelectedProgram={setSelectedProgram} 
          />
        );
      case 'trainers':
        return (
          <TrainersView 
            setCurrentPage={setCurrentPage} 
            setSelectedProgram={setSelectedProgram} 
          />
        );
      case 'membership':
        return (
          <MembershipView 
            setCurrentPage={setCurrentPage} 
            setSelectedProgram={setSelectedProgram} 
          />
        );
      case 'contact':
        return <ContactView selectedProgram={selectedProgram} />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black antialiased">
      
      {/* 1. Interactive Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
      />

      {/* 2. Portfolio Case Study specs toggle banner (Floating alert on Home page to catch recruiter attention) */}
      {currentPage === 'home' && (
        <div className="bg-gradient-to-r from-cyan-950 via-blue-950 to-cyan-950 border-b border-cyan-800/40 py-2.5 px-4 text-center">
          <p className="text-xs text-zinc-300 font-mono tracking-wide flex items-center justify-center flex-wrap gap-2">
            <span className="p-0.5 px-2 bg-cyan-400 text-black text-[9px] font-bold uppercase rounded">
              Recruiter Mode
            </span>
            <span>Evaluating this gym portfolio build? Inspect the background UX strategy and deliverables.</span>
            <button
              onClick={() => setIsCaseStudyOpen(true)}
              className="px-3 py-1 bg-cyan-500 text-black rounded font-mono font-black text-[10px] uppercase hover:bg-cyan-400 transition-colors cursor-pointer shadow-md"
            >
              Examine Specs Guide
            </button>
          </p>
        </div>
      )}

      {/* 3. Main Dynamic Content Area */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* 4. Global Collapsible Case Study Specs Panel */}
      <CaseStudySection 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)} 
      />

      {/* 5. Professional Footer Sitemap */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
      />

    </div>
  );
}
