import { Church, Compass, Landmark, Utensils } from 'lucide-react';

const reasons = [
  ['Ubicación estratégica', 'Conectada con las principales ciudades del país y próxima a Palmerola.', Compass],
  ['Patrimonio colonial', 'Calles, plazas e iglesias que conservan la identidad histórica de Honduras.', Landmark],
  ['Tradición religiosa', 'Semana Santa, alfombras y expresiones de fe que atraen visitantes cada año.', Church],
  ['Gastronomía local', 'Sabores típicos, cafés, restaurantes y experiencias cercanas al centro histórico.', Utensils],
];

export default function WhySection() {
  return (
    <section className="section why">
      <div className="split">
        <div className="section__intro section__intro--left reveal">
          <p className="section-kicker">Por qué Comayagua</p>
          <h2>Una ciudad que conecta con la historia de Honduras</h2>
          <p>
            Ubicada en la zona central del país, Comayagua cuenta con una localización estratégica que facilita
            el acceso desde Tegucigalpa, San Pedro Sula y el Aeropuerto Internacional Palmerola.
          </p>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, text, Icon]) => (
            <article className="reason-card reveal" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
