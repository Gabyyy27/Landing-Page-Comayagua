import { useState } from 'react';
import { X } from 'lucide-react';
import { gallery } from '../data/gallery.js';
import SafeImage from './SafeImage.jsx';

export default function GallerySection() {
  const [active, setActive] = useState(null);

  return (
    <section className="section gallery-section" id="galeria">
      <div className="section__intro reveal">
        <p className="section-kicker">Galería</p>
        <h2>Postales de una ciudad inolvidable</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <button
            className={`gallery-item ${item.tall ? 'is-tall' : ''} ${item.wide ? 'is-wide' : ''} reveal`}
            key={item.caption}
            onClick={() => setActive(item)}
          >
            <SafeImage src={item.image} alt={item.caption} />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.caption}>
          <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Cerrar galería">
            <X size={22} />
          </button>
          <SafeImage src={active.image} alt={active.caption} />
          <p>{active.caption}</p>
        </div>
      )}
    </section>
  );
}
