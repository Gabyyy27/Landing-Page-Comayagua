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

export default function App() {
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
