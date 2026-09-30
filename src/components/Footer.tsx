export const Footer = () => {
  return (
    <footer className="bg-lumora-dark border-t border-lumora-white/10 text-lumora-white/50 py-12 text-center relative z-20">
      <div className="container mx-auto px-6">
        <h3 className="font-heading font-bold text-3xl text-lumora-white mb-2 tracking-tighter">LUMORA</h3>
        <p className="font-body text-xs tracking-widest uppercase mb-8">College of Higher Education</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-lumora-yellow transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-lumora-white/20">|</span>
          <a href="#" className="hover:text-lumora-yellow transition-colors">Terms of Service</a>
          <span className="hidden md:inline text-lumora-white/20">|</span>
          <a href="#" className="hover:text-lumora-yellow transition-colors">Contact</a>
        </div>
        
        <p className="font-body text-xs opacity-50">&copy; {new Date().getFullYear()} Lumora College. This is a demonstration template.</p>
      </div>
    </footer>
  );
};
