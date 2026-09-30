import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const JOURNEY = ['EXPLORE', 'CHECK ELIGIBILITY', 'APPLY', 'VERIFY', 'CONFIRM', 'JOIN'];

export const AdmissionsSection = () => {
  const [openPanel, setOpenPanel] = useState<string | null>('dates');
  const journeyRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const togglePanel = (panel: string) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <section id="admissions" className="relative bg-lumora-bg text-lumora-dark min-h-screen py-32 overflow-hidden">
      <div className="absolute top-20 right-10 md:top-32 md:-right-10 chapter-number-bg-light">04</div>
      
      <div className="container mx-auto px-6">


        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-[48px] leading-[1.05] mb-8"
        >
          YOUR NEXT CHAPTER<br />STARTS HERE.
        </motion.h2>
        
        <p className="font-body text-xl max-w-2xl mb-16 text-lumora-dark/70">
          Explore your programme, understand the process and take your first step.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-32">
          <button className="font-body text-sm font-medium tracking-wide uppercase px-8 py-4 bg-lumora-pink text-lumora-white hover:bg-lumora-dark transition-colors rounded-full shadow-[0_0_15px_rgba(244,63,122,0.2)]">
            Apply Now
          </button>
          <button className="font-body text-sm tracking-wide uppercase px-8 py-4 border border-lumora-dark/20 hover:border-lumora-purple hover:text-lumora-purple transition-colors rounded-full">
            Talk to Admissions
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Admission Journey (Left) */}
          <div className="lg:w-1/3" ref={journeyRef}>
            <h3 className="font-heading font-bold text-3xl mb-16">ADMISSION JOURNEY</h3>
            
            <div className="relative pl-8">
              {/* Animated Line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-lumora-dark/10">
                <motion.div 
                  className="absolute top-0 left-0 right-0 bg-lumora-purple origin-top"
                  style={{ scaleY, height: '100%' }}
                />
              </div>

              {JOURNEY.map((step, idx) => (
                <div key={idx} className="relative mb-16 last:mb-0 group">
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-lumora-bg border-2 border-lumora-dark/20 group-hover:border-lumora-purple transition-colors z-10" />
                  <div className="font-mono text-lumora-purple text-sm mb-2">0{idx + 1}</div>
                  <div className="font-heading font-bold text-2xl group-hover:text-lumora-purple transition-colors">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Details & Scholarships (Right) */}
          <div className="lg:w-2/3">
            <h3 className="font-heading font-bold text-3xl mb-12">DETAILS & DATES</h3>
            
            <div className="border-t border-lumora-dark/10">
              {/* Panel: Important Dates */}
              <div className="border-b border-lumora-dark/10">
                <button 
                  onClick={() => togglePanel('dates')}
                  className="w-full py-8 flex justify-between items-center text-left hover:text-lumora-purple transition-colors"
                >
                  <span className="font-heading font-bold text-2xl">Important Dates</span>
                  <ChevronDown className={`transform transition-transform duration-300 ${openPanel === 'dates' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openPanel === 'dates' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <p className="font-body text-xs tracking-[0.2em] uppercase text-lumora-dark/50 mb-2">Applications Open</p>
                          <p className="font-heading text-xl">January 2027</p>
                        </div>
                        <div>
                          <p className="font-body text-xs tracking-[0.2em] uppercase text-lumora-dark/50 mb-2">Priority Deadline</p>
                          <p className="font-heading text-xl text-lumora-pink">April 2027</p>
                        </div>
                        <div>
                          <p className="font-body text-xs tracking-[0.2em] uppercase text-lumora-dark/50 mb-2">Final Deadline</p>
                          <p className="font-heading text-xl">June 2027</p>
                        </div>
                        <div>
                          <p className="font-body text-xs tracking-[0.2em] uppercase text-lumora-dark/50 mb-2">Academic Year</p>
                          <p className="font-heading text-xl">August 2027</p>
                        </div>
                        <div className="sm:col-span-2 p-4 bg-lumora-dark/5 rounded-lg border border-lumora-dark/10">
                          <p className="font-body text-sm text-lumora-dark/60 text-center">Note: This is demonstration information.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Panel: Scholarships */}
              <div className="border-b border-lumora-dark/10">
                <button 
                  onClick={() => togglePanel('scholarships')}
                  className="w-full py-8 flex justify-between items-center text-left hover:text-lumora-purple transition-colors"
                >
                  <span className="font-heading font-bold text-2xl">Scholarships</span>
                  <ChevronDown className={`transform transition-transform duration-300 ${openPanel === 'scholarships' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openPanel === 'scholarships' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 flex flex-col gap-6">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                          <div className="w-3 h-3 rounded-full bg-lumora-yellow" />
                          <div>
                            <p className="font-heading font-bold text-lg">Merit Scholarship</p>
                            <p className="font-body text-sm text-lumora-dark/60">Up to 50% tuition waiver for exceptional academic records.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                          <div className="w-3 h-3 rounded-full bg-lumora-pink" />
                          <div>
                            <p className="font-heading font-bold text-lg">Sports Excellence</p>
                            <p className="font-body text-sm text-lumora-dark/60">For national and state-level athletes.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                          <div className="w-3 h-3 rounded-full bg-lumora-blue" />
                          <div>
                            <p className="font-heading font-bold text-lg">Innovation & Arts</p>
                            <p className="font-body text-sm text-lumora-dark/60">For outstanding portfolios in design, tech, or media.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                          <div className="w-3 h-3 rounded-full bg-lumora-purple" />
                          <div>
                            <p className="font-heading font-bold text-lg">Need-Based Grant</p>
                            <p className="font-body text-sm text-lumora-dark/60">Financial assistance for eligible candidates.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Panel: Eligibility & Documents */}
              <div className="border-b border-lumora-dark/10">
                <button 
                  onClick={() => togglePanel('eligibility')}
                  className="w-full py-8 flex justify-between items-center text-left hover:text-lumora-purple transition-colors"
                >
                  <span className="font-heading font-bold text-2xl">Eligibility & Documents</span>
                  <ChevronDown className={`transform transition-transform duration-300 ${openPanel === 'eligibility' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openPanel === 'eligibility' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
                        <p className="font-body text-lumora-dark/70 mb-4">Minimum 60% aggregate in 12th standard (or equivalent) from a recognized board. Specific subject requirements may apply depending on the programme.</p>
                        <h4 className="font-heading font-bold text-lg mt-6 mb-3">Required Documents:</h4>
                        <ul className="list-disc pl-5 font-body text-lumora-dark/70 space-y-2">
                          <li>10th & 12th Marksheets</li>
                          <li>Transfer Certificate</li>
                          <li>Migration Certificate (if applicable)</li>
                          <li>Passport Size Photographs</li>
                          <li>Government ID Proof</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-32">
        <div className="bg-lumora-dark text-lumora-white py-24 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-12">READY TO MAKE YOUR MOVE?</h2>
            <button className="font-body text-lg font-medium tracking-wide uppercase px-12 py-5 bg-lumora-pink text-lumora-white hover:bg-lumora-white hover:text-lumora-dark transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(244,63,122,0.4)]">
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
