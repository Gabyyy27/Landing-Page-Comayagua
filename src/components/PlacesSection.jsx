import { ArrowUpRight } from 'lucide-react';
import { places } from '../data/places.js';
import SafeImage from './SafeImage.jsx';

export default function PlacesSection() {
  return (
    <section className="section places" id="lugares">
      <div className="section__intro reveal">
        <p className="section-kicker">Descubre su encanto</p>
        <h2>Lugares imperdibles de Comayagua</h2>
        <p>
          Entre calles coloniales, tradición religiosa, museos y naturaleza cercana, Comayagua ofrece
          experiencias para distintos tipos de viajeros.
        </p>
      </div>
      <div className="places-grid">
        {places.map((place) => (
          <article className="place-card reveal" key={place.title}>
            <div className="place-card__media">
              <SafeImage src={place.image} alt={place.title} />
              <span>{place.tag}</span>
            </div>
            <div className="place-card__body">
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
