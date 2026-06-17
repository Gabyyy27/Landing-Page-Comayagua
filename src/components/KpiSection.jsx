import { kpis } from '../data/kpis.js';

export default function KpiSection() {
  return (
    <section className="section section--deep" id="oportunidad">
      <div className="section__intro reveal">
        <p className="section-kicker">Oportunidad turística</p>
        <h2>Comayagua tiene el potencial para brillar</h2>
        <p>
          Los datos muestran una oportunidad real para posicionar a Comayagua como un destino cultural,
          accesible y competitivo dentro del turismo nacional.
        </p>
      </div>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <article className="kpi-card reveal" key={kpi.label}>
            <strong>{kpi.value}</strong>
            <span>{kpi.label}</span>
          </article>
        ))}
      </div>
      <div className="kpi-stats-cta reveal">
        <h3>¿Quieres ver el análisis completo?</h3>
        <p>Consulta las gráficas interactivas del estudio turístico de Comayagua.</p>
        <a className="btn btn--gold kpi-stats-cta__button" href="#/estadisticas">
          Ver datos estadísticos
        </a>
      </div>
    </section>
  );
}
