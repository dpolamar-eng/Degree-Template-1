import { Navigation } from './components/Navigation';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { AcademicsSection } from './components/sections/AcademicsSection';
import { AdmissionsSection } from './components/sections/AdmissionsSection';
import { CampusCareersSection } from './components/sections/CampusCareersSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-lumora-bg text-lumora-text min-h-screen">
      <Navigation />
      
      <main>
        <HomeSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionsSection />
        <CampusCareersSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
