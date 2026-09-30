import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { siteData } from '../../data/content';

type Programme = typeof siteData.programmes[0];

const INTERESTS = ['All', 'Technology', 'Science', 'Business', 'People', 'Creativity', 'Media'];

export const AcademicsSection = () => {
  const [activeTab, setActiveTab] = useState<'UG' | 'PG'>('UG');
  const [activeInterest, setActiveInterest] = useState('All');
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);

  const filterFn = (p: Programme) => {
    if (activeInterest === 'All') return true;
    if (activeInterest === 'Technology' && (p.title.includes('Computer') || p.title.includes('Data') || p.title.includes('BCA') || p.title.includes('M.Sc.'))) return true;
    if (activeInterest === 'Science' && p.title.includes('Sc.')) return true;
    if (activeInterest === 'Business' && (p.title.includes('Com.') || p.title.includes('BBA') || p.title.includes('MBA'))) return true;
    if (activeInterest === 'People' && p.title.includes('Psychology')) return true;
    if (activeInterest === 'Creativity' || activeInterest === 'Media') return p.title.includes('Visual') || p.title.includes('Media');
    return false;
  };

  const sourceProgrammes = activeTab === 'UG' ? siteData.programmes : siteData.pgProgrammes;
  const filteredProgrammes = sourceProgrammes.filter(filterFn);

  return (
    <section id="academics" className="relative bg-lumora-dark text-lumora-white min-h-screen py-32 overflow-hidden">
      <div className="absolute top-20 right-10 md:top-32 md:-right-10 chapter-number-bg">03</div>
      
      <div className="container mx-auto px-6">

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-[48px] leading-[1.05] mb-12"
        >
          WHAT'S YOUR THING?
        </motion.h2>

        {/* UG / PG Tab Toggle */}
        <div className="flex items-center gap-2 mb-10 bg-lumora-white/5 border border-lumora-white/10 rounded-full p-1 w-fit">
          {(['UG', 'PG'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveInterest('All'); }}
              className={`px-8 py-2.5 rounded-full font-heading font-bold text-sm tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-lumora-purple text-lumora-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                  : 'text-lumora-white/50 hover:text-lumora-white'
              }`}
            >
              {tab === 'UG' ? 'UNDERGRADUATE' : 'POSTGRADUATE'}
            </button>
          ))}
        </div>

        {/* Interest Filter */}
        <div className="mb-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-lumora-white/50 mb-4">I'M INTO:</p>
          <div className="flex flex-wrap gap-4">
            {INTERESTS.map((interest) => (
              <button
                key={interest}
                onClick={() => setActiveInterest(interest)}
                className={`font-heading text-lg md:text-xl transition-all duration-300 ${
                  activeInterest === interest 
                    ? 'text-lumora-pink border-b-2 border-lumora-pink pb-1' 
                    : 'text-lumora-white/40 hover:text-lumora-white'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Grid */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + activeInterest}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredProgrammes.length === 0 ? (
                <div className="py-16 text-center text-lumora-white/40 font-body">
                  No programmes found for this interest. Try another filter.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProgrammes.map((prog) => (
                    <div
                      key={prog.id}
                      onClick={() => setSelectedProgramme(prog)}
                      className="group cursor-pointer bg-lumora-white/5 border border-lumora-white/10 hover:border-lumora-purple/50 hover:bg-lumora-white/10 rounded-xl p-5 flex flex-col gap-4 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                          activeTab === 'PG'
                            ? 'text-lumora-yellow border-lumora-yellow/30 bg-lumora-yellow/10'
                            : 'text-lumora-purple border-lumora-purple/30 bg-lumora-purple/10'
                        }`}>{prog.id}</span>
                        <span className="font-body text-[10px] tracking-widest uppercase text-lumora-white/30">{prog.duration}</span>
                      </div>
                      <h3 className="font-heading font-bold text-base md:text-lg leading-snug group-hover:text-lumora-yellow transition-colors">
                        {prog.title}
                      </h3>
                      <p className="font-body text-xs text-lumora-white/40 uppercase tracking-wide mt-auto group-hover:text-lumora-pink transition-colors">
                        Explore →
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>


      </div>

      {/* Side Panel / Modal */}
      <AnimatePresence>
        {selectedProgramme && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgramme(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-lumora-bg text-lumora-dark z-[70] p-8 md:p-12 overflow-y-auto shadow-2xl border-l border-lumora-white/10"
            >
              <div className="flex justify-between items-center mb-12">
                <span className={`font-mono text-sm px-4 py-1.5 rounded-full border ${
                  selectedProgramme.id.startsWith('PG')
                    ? 'text-lumora-yellow border-lumora-yellow/50 bg-lumora-yellow/10'
                    : 'text-lumora-purple border-lumora-purple/50 bg-lumora-purple/10'
                }`}>{selectedProgramme.id}</span>
                <button onClick={() => setSelectedProgramme(null)} className="p-2 hover:bg-lumora-dark/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <h3 className="font-heading font-bold text-3xl mb-3">{selectedProgramme.title}</h3>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-lumora-dark/60 mb-12">Duration: {selectedProgramme.duration}</p>
              
              <div className="mb-12">
                <h4 className="font-heading font-bold text-xl mb-4 text-lumora-purple">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgramme.skills.map((skill, i) => (
                    <span key={i} className="font-body text-sm bg-lumora-dark/5 px-4 py-2 rounded-full border border-lumora-dark/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h4 className="font-heading font-bold text-xl mb-4 text-lumora-purple">Career Paths</h4>
                <ul className="space-y-3">
                  {selectedProgramme.careers.map((career, i) => (
                    <li key={i} className="font-body flex items-center gap-3">
                      <ArrowRight size={16} className="text-lumora-pink" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#admissions" onClick={() => setSelectedProgramme(null)} className="block w-full text-center font-body text-sm font-medium tracking-wide uppercase px-8 py-4 bg-lumora-dark text-lumora-white hover:bg-lumora-pink transition-colors rounded-full">
                Apply for Programme
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
