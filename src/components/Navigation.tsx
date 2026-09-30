import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'academics', num: '03', label: 'Academics' },
  { id: 'admissions', num: '04', label: 'Admissions' },
  { id: 'campus', num: '05', label: 'Campus & Careers' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-lumora-dark/80 backdrop-blur-md border-b border-lumora-white/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="font-heading font-bold text-2xl tracking-tighter text-lumora-white hover:text-lumora-pink transition-colors">
            LUMORA
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="group relative flex items-center gap-2 font-body text-[14px] uppercase tracking-wide text-lumora-white/80 hover:text-lumora-white transition-colors"
              >
                {item.label}
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-lumora-purple"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#admissions" 
              className="hidden md:inline-flex items-center justify-center font-body text-sm font-medium tracking-wide bg-lumora-pink text-lumora-white px-6 py-2.5 rounded-full hover:bg-lumora-white hover:text-lumora-dark transition-colors"
            >
              Apply Now
            </a>
            
            <button 
              className="lg:hidden text-lumora-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-lumora-dark/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-lumora-white/10">
              <span className="font-heading font-bold text-2xl text-lumora-white">LUMORA</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lumora-white p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-3xl text-lumora-white hover:text-lumora-purple transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="p-8 pb-12">
              <a 
                href="#admissions" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full font-body text-lg font-medium bg-lumora-pink text-lumora-white py-4 rounded-full"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
