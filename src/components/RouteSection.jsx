import { Leaf } from 'lucide-react';
import { route } from '../data/route.js';

export default function RouteSection() {
  return (
    <section className="section route-section" id="ruta">
      <div className="section__intro reveal">
        <p className="section-kicker">Itinerario</p>
        <h2>Un día perfecto en Comayagua</h2>
      </div>
      <div className="route-layout">
        <div className="timeline">
          {route.map(([time, text]) => (
            <article className="timeline-item reveal" key={time}>
              <span>{time}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <aside className="nature-escape reveal">
          <Leaf size={30} />
          <p className="section-kicker">Escapada natural</p>
          <h3>Laberinto de Cipreses</h3>
          <p>
            ¡El reto más grande de Centroamérica está aquí! Atrévete a descifrar el impresionante Laberinto de Cipreses, un recorrido natural único rodeado de túneles de flores y el místico restaurante El Arca de Noé.
          </p>
        </aside>
      </div>
    </section>
  );
}
