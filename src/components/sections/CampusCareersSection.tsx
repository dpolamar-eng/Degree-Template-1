import { useRef } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/content';

const CAMPUS_ALBUM = [
  { num: '01', title: 'THE PLACE', desc: 'Campus architecture', img: '1541339907198-e08756dedf3f' },
  { num: '02', title: 'THE CLASSROOM', desc: 'Learning spaces', img: '1523050854058-8df90110c9f1' },
  { num: '03', title: 'THE LAB', desc: 'Experiments', img: '1581091226825-a6a2a5aee158' },
  { num: '04', title: 'THE CROWD', desc: 'Student communities', img: '1511629091441-ee46146481b6' },
  { num: '05', title: 'THE STAGE', desc: 'Events and culture', img: '1492684223066-81342ee5ff30' },
  { num: '06', title: 'THE FIELD', desc: 'Sports and activities', img: '1526676537331-7921a629ebbc' }
];

const TICKER_ITEMS = [
  'SPORTS', 'MUSIC', 'TECH', 'ART', 'DEBATE', 'DANCE', 'ENTREPRENEURSHIP', 'CULTURE', 'VOLUNTEERING'
];

export const CampusCareersSection = () => {
  const tickerRef = useRef(null);
  
  return (
    <section id="campus" className="relative">
      {/* Dark Campus Section */}
      <div className="bg-lumora-dark text-lumora-white min-h-screen py-32 overflow-hidden relative">
        <div className="absolute top-20 right-10 md:top-32 md:-right-10 chapter-number-bg">05</div>
        
        <div className="container mx-auto px-6 mb-32">


          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-[48px] leading-[1.05]"
          >
            YOUR YEARS.<br />
            <span className="text-lumora-purple">YOUR PEOPLE.</span><br />
            YOUR STORY.
          </motion.h2>
        </div>

        {/* Campus Yearbook Grid */}
        <div className="container mx-auto px-6 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAMPUS_ALBUM.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden mb-6 relative border border-lumora-white/5">
                  <img 
                    src={`https://images.unsplash.com/photo-${item.img}?q=80&w=800&auto=format&fit=crop`}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 mix-blend-overlay group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-lumora-purple/10 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6 font-mono text-lumora-white/50 text-xl">{item.num}</div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-2xl mb-1">{item.title}</h4>
                  <p className="font-body text-lumora-white/50 tracking-wide uppercase text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Ticker */}
        <div className="w-full overflow-hidden py-10 bg-lumora-white/5 border-y border-lumora-white/10 flex whitespace-nowrap" ref={tickerRef}>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex items-center gap-12 text-4xl md:text-6xl font-heading font-bold text-lumora-white/20"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="hover:text-lumora-yellow transition-colors cursor-default">{item}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Careers Section (Soft White) */}
      <div className="bg-lumora-bg text-lumora-dark py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-20 text-center"
          >
            WHERE DOES THE STORY GO?
          </motion.h2>

          {/* Placement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
            {[
              { num: '145+', label: 'Industry Partners' },
              { num: '700+', label: 'Internships' },
              { num: '92%', label: 'Placement Assistance' },
              { num: '29 LPA', label: 'Highest Package' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-lumora-dark/5">
                <div className="font-heading font-bold text-4xl lg:text-5xl text-lumora-purple mb-2">{stat.num}</div>
                <div className="font-body text-xs tracking-widest uppercase text-lumora-dark/60 mb-2">{stat.label}</div>
                {(idx === 3 || idx === 2) && <div className="text-[9px] text-lumora-dark/40 uppercase tracking-widest">— DEMO DATA —</div>}
              </div>
            ))}
          </div>

          {/* Alumni Story */}
          <div className="mb-32">
            <h3 className="font-heading font-bold text-3xl mb-12 text-center">ALUMNI STORIES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.alumni.map((alum, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl p-8 border ${idx === 0 ? 'bg-lumora-dark text-lumora-white md:col-span-3 lg:col-span-2' : 'bg-white text-lumora-dark'}`}
                >
                  <p className={`font-body text-xs tracking-[0.2em] uppercase mb-8 ${idx === 0 ? 'text-lumora-yellow' : 'text-lumora-purple'}`}>
                    {alum.batch}
                  </p>
                  <h4 className="font-accent text-4xl mb-4">"{alum.name}"</h4>
                  <div className={`w-12 h-1 mb-8 ${idx === 0 ? 'bg-lumora-white/20' : 'bg-lumora-dark/10'}`} />
                  <p className={`font-heading font-bold text-2xl mb-1`}>{alum.role}</p>
                  <p className={`font-body ${idx === 0 ? 'text-lumora-white/60' : 'text-lumora-dark/60'}`}>{alum.company} — {alum.degree}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Editorial Moment */}
      <div className="bg-lumora-dark text-lumora-white min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lumora-purple/20 to-lumora-dark opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-heading font-bold text-[10vw] leading-[0.9] mb-16 text-lumora-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            YOUR STORY<br />STARTS HERE.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#academics" className="font-body text-sm tracking-widest uppercase border border-lumora-white/20 px-10 py-5 hover:bg-lumora-white hover:text-lumora-dark transition-colors rounded-full">
              Explore Programmes
            </a>
            <a href="#admissions" className="font-body text-sm font-bold tracking-widest uppercase bg-lumora-pink text-lumora-white px-10 py-5 hover:bg-lumora-white hover:text-lumora-dark transition-colors rounded-full shadow-[0_0_30px_rgba(244,63,122,0.4)]">
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
