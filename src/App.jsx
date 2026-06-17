import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import KpiSection from './components/KpiSection.jsx';
import WhySection from './components/WhySection.jsx';
import PlacesSection from './components/PlacesSection.jsx';
import ExperiencesSection from './components/ExperiencesSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import BrandSection from './components/BrandSection.jsx';
import RouteSection from './components/RouteSection.jsx';
import SeasonsSection from './components/SeasonsSection.jsx';
import AudienceSection from './components/AudienceSection.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';
import StatsDashboardPage from './components/StatsDashboardPage.jsx';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#/estadisticas') {
    return <StatsDashboardPage />;
  }

  return (
    <>
      <HeroSection />
      <main>
        <KpiSection />
        <WhySection />
        <PlacesSection />
        <ExperiencesSection />
        <GallerySection />
        <BrandSection />
        <RouteSection />
        <SeasonsSection />
        <AudienceSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
