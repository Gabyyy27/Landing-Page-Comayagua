import { experiences } from '../data/experiences.js';
import SafeImage from './SafeImage.jsx';

export default function ExperiencesSection() {
  return (
    <section className="section experiences" id="experiencias">
      <div className="section__intro reveal">
        <p className="section-kicker">Momentos memorables</p>
        <h2>Vive Comayagua a través de experiencias</h2>
        <p>
          Cada momento en Comayagua es una oportunidad para conectar con la historia, la fé y la autenticidad
          de Honduras.
        </p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <article className="experience-card reveal" key={experience.title}>
            <SafeImage src={experience.image} alt={experience.title} />
            <div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{experience.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
