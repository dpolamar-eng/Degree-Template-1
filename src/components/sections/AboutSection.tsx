import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/content';

const TimelineCarousel = () => {
  const [active, setActive] = useState(0);
  const total = siteData.timeline.length;

  // Auto-advance every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(timer);
  }, [total]);

  const item = siteData.timeline[active];

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      {/* Year Selector — vertical list of years */}
      <div className="flex lg:flex-col gap-4 lg:gap-6 overflow-x-auto hide-scrollbar lg:overflow-visible">
        {siteData.timeline.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`relative font-heading font-bold text-2xl lg:text-3xl transition-all duration-300 shrink-0 text-left ${
              active === idx ? 'text-lumora-purple' : 'text-lumora-white/25 hover:text-lumora-white/60'
            }`}
          >
            {t.year}
            {active === idx && (
              <motion.div
                layoutId="yearUnderline"
                className="absolute -bottom-1 left-0 h-[2px] bg-lumora-purple"
                style={{ width: '100%' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="flex-1 min-h-[180px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-lumora-yellow mb-4">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <h4 className="font-heading font-bold text-2xl lg:text-3xl mb-6">{item.title}</h4>
            <p className="font-body text-lumora-white/70 leading-relaxed text-lg max-w-xl">{item.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="hidden lg:flex flex-col gap-3 justify-center pt-2">
        {siteData.timeline.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === idx ? 'bg-lumora-purple scale-125' : 'bg-lumora-white/20 hover:bg-lumora-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export const AboutSection = () => {
  const scrollRef = useRef(null);

  return (
    <section id="about" className="relative bg-lumora-bg text-lumora-dark min-h-screen overflow-hidden py-32" ref={scrollRef}>
      <div className="absolute top-20 right-10 md:top-32 md:-right-10 chapter-number-bg-light">02</div>
      
      <div className="container mx-auto px-6">


        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-[48px] leading-[1.05] mb-20 text-balance max-w-4xl"
        >
          EVERY INSTITUTION HAS A STORY.
        </motion.h2>

        {/* Large Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40 h-[60vh]">
          <div className="md:col-span-7 rounded-2xl overflow-hidden bg-zinc-200">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6 h-full">
            <div className="rounded-2xl overflow-hidden bg-zinc-200">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-lumora-purple p-8 flex items-end">
              <p className="font-accent text-lumora-white text-3xl">"Building the foundation of tomorrow."</p>
            </div>
          </div>
        </div>

      </div>

      {/* Auto-cycling Timeline */}
      <div className="py-20 bg-lumora-dark text-lumora-white mb-40">
        <div className="container mx-auto px-6">
          <h3 className="font-heading font-bold text-3xl mb-16">OUR STORY</h3>

          <TimelineCarousel />
        </div>
      </div>

      {/* Leadership Board */}
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl mb-2">LEADERSHIP</h3>
          <p className="font-body text-lumora-dark/60">The minds guiding our chapters.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.leadership.map((person, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-200 mb-6">
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1573496359142-b8d87734a5a2',
                    '1560250097-0b93528c311a',
                    '1573497019940-1c28c88b4f3e',
                    '1519085360753-af0119f7cbe7'
                  ][idx]}?q=80&w=800&auto=format&fit=crop`}
                  alt={person.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="overflow-hidden">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-heading font-bold text-xl mb-1">{person.name}</h4>
                  <p className="font-body text-sm tracking-wide text-lumora-purple">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
