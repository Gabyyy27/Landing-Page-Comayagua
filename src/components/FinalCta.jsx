import { images } from '../data/images.js';
import SafeImage from './SafeImage.jsx';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function FinalCta() {
  return (
    <section className="final-cta">
      <SafeImage src={images.calles} alt="Calles coloniales de Comayagua" className="final-cta__image" />
      <div className="final-cta__overlay" />
      <div className="final-cta__content reveal">
        <h2>Comayagua te espera</h2>
        <p>
          Descubre una ciudad donde la historia, la fé, la cultura y la naturaleza crean una experiencia
          auténtica e inolvidable.
        </p>
        <div className="button-row">
          <button className="btn btn--gold" onClick={() => scrollTo('ruta')}>Planear mi visita</button>
          <button className="btn btn--glass" onClick={() => scrollTo('galeria')}>Ver galería</button>
        </div>
      </div>
    </section>
  );
}
