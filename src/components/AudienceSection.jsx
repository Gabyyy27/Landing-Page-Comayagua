import { Camera, Church, Clock, Globe2, Mountain, Users } from 'lucide-react';

const audiences = [
  ['Familias', 'Planes tranquilos, cultura, comida y espacios para compartir.', Users],
  ['Jóvenes', 'Fotografías, rutas cortas, experiencias accesibles y lugares visualmente atractivos.', Camera],
  ['Turistas religiosos', 'Semana Santa, Catedral, alfombras y tradición viva.', Church],
  ['Turistas internacionales', 'Entrada estratégica por Palmerola y recorrido cultural cercano.', Globe2],
  ['Amantes de la historia', 'Catedral, reloj, museos y arquitectura colonial.', Clock],
  ['Exploradores de naturaleza', 'Laberinto de Cipreses y experiencias al aire libre.', Mountain],
];

export default function AudienceSection() {
  return (
    <section className="section audience">
      <div className="section__intro reveal">
        <p className="section-kicker">Visitantes</p>
        <h2>Un destino para diferentes formas de viajar</h2>
        <p>Cada visitante encuentra una razón distinta para amar Comayagua.</p>
      </div>
      <div className="audience-grid">
        {audiences.map(([title, text, Icon]) => (
          <article className="audience-card reveal" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
