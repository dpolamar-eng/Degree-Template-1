import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../../data/content';

export const HomeSection = () => {
  return (
    <section id="home" className="relative bg-lumora-dark text-lumora-white min-h-screen overflow-hidden">
      {/* Chapter Number Background */}
      <div className="absolute top-20 right-10 md:top-32 md:-right-10 chapter-number-bg">01</div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center pt-24 pb-16">
        


        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">
          {/* Left: Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-lumora-yellow mb-8">
                {siteData.college.shortName} <span className="mx-2">·</span> {siteData.college.location}
              </p>
              <h1 className="font-heading text-4xl md:text-[48px] leading-[1.05] mb-8 text-balance font-bold">
                MAKE<br />
                <span className="text-lumora-purple">YOUR YEARS</span><br />
                COUNT.
              </h1>
              <p className="font-body text-lg md:text-[18px] font-light leading-relaxed max-w-lg mb-10 text-lumora-white/70">
                Three years can change the way you think, the skills you build and the future you imagine.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center mb-12 lg:mb-16">
                <a href="#academics" className="group flex items-center gap-3 font-body text-sm tracking-wide uppercase border border-lumora-white/20 px-8 py-4 hover:border-lumora-purple hover:text-lumora-purple transition-all duration-300 rounded-full">
                  Explore Programmes
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#admissions" className="flex items-center justify-center font-body text-sm font-medium tracking-wide uppercase px-8 py-4 bg-lumora-pink text-lumora-white hover:bg-lumora-white hover:text-lumora-dark transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(244,63,122,0.3)]">
                  Apply Now
                </a>
              </div>

              {/* Small Yearbook Snapshot Grid */}
              <div className="pr-0 lg:pr-4">
                <div className="border border-lumora-white/10 rounded-2xl p-4 lg:p-6 bg-lumora-white/5 backdrop-blur-sm">
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
                    {siteData.statistics.map((stat, idx) => {
                      const treatments = [
                        "text-lumora-yellow",
                        "text-lumora-purple",
                        "text-lumora-pink",
                        "text-lumora-blue",
                        "text-lumora-white",
                        "text-lumora-pink"
                      ];
                      return (
                        <div key={idx} className={`flex flex-col justify-center items-center text-center ${treatments[idx % treatments.length]}`}>
                          <div className="font-heading font-bold text-xl lg:text-[22px] mb-1">{stat.num}</div>
                          <div className="font-body text-[8px] tracking-[0.1em] uppercase opacity-80 text-lumora-white">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Vertical Image */}
          <div className="lg:w-1/2 relative w-full h-[50vh] lg:h-auto flex justify-end py-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full md:w-[85%] h-full rounded-2xl overflow-hidden bg-zinc-900 border border-lumora-white/10"
            >
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lumora-purple to-lumora-dark" />
              
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />

              {/* Admission Badge */}
              <div className="absolute top-8 -left-2 bg-lumora-pink text-lumora-white px-6 py-3 rounded-r-full shadow-xl">
                <div className="font-heading font-bold text-lg">2027</div>
                <div className="font-body text-[10px] tracking-widest uppercase">Admissions Open</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Academic Discovery */}
      <div className="bg-lumora-bg">
        <div className="container mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl lg:text-[36px] text-lumora-dark">FIND YOUR CHAPTER.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteData.academicAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative h-44 lg:h-48 bg-white rounded-2xl p-6 flex flex-col justify-end overflow-hidden cursor-pointer border border-lumora-dark/10 hover:border-lumora-purple/50 transition-colors duration-500 shadow-sm hover:shadow-md ${
                  idx === 0 || idx === 4 ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Hover Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-lumora-dark/10 via-transparent to-transparent opacity-80" />
                
                <h3 className="font-heading font-bold text-2xl text-lumora-dark group-hover:text-lumora-purple group-hover:-translate-y-2 transition-all duration-500 z-10 relative">
                  {area}
                </h3>
                
                <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10 text-lumora-pink">
                  <ArrowRight size={22} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
