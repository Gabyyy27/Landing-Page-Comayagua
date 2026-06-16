import { ArrowDown, MapPin } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { images } from '../data/images.js';

const scrollToPlaces = () => {
  document.getElementById('lugares')?.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  return (
    <header className="hero" id="inicio">
      <SafeImage src={images.catedral} alt="Catedral de Comayagua al atardecer" className="hero__image" />
      <div className="hero__veil" />
      <nav className="topbar" aria-label="Navegación principal">
        <div className="desktop-nav">
          <a href="#experiencias">Experiencias</a>
          <a href="#lugares">Lugares</a>
          <a href="#galeria">Galería</a>
          <a href="#ruta">Ruta</a>
        </div>
      </nav>

      <div className="hero__content reveal">
        <p className="eyebrow"><MapPin size={15} /> Destino cultural y religioso de Honduras</p>
        <h1>COMAYAGUA</h1>
        <p className="hero__slogan">Historia, cultura, fe y tradición</p>
        <p className="hero__text">
          Descubre una ciudad colonial donde la fe, la arquitectura, la gastronomía y la naturaleza se unen
          para crear una experiencia auténticamente hondureña.
        </p>
        <div className="button-row">
          <button className="btn btn--gold" onClick={scrollToPlaces}>Explorar destino</button>
        </div>
        <div className="chips" aria-label="Atractivos destacados">
          <span>Centro histórico</span>
          <span>Semana Santa</span>
          <span>Laberinto de Cipreses</span>
        </div>
      </div>
    </header>
  );
}
