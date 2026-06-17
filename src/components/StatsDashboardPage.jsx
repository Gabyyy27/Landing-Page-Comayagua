const POWER_BI_URL =
  'https://app.powerbi.com/view?r=eyJrIjoiNGEyN2NhZmMtNDMxOC00OTgzLThjY2EtYjM1NDdlZTdlZmRjIiwidCI6ImFmMmZkMTk2LTFkOWYtNDdiNC05MDY5LTM5MWE0NmY4MzYwMSIsImMiOjR9';

export default function StatsDashboardPage() {
  const goBack = () => {
    window.location.hash = '';
  };

  return (
    <main className="stats-page">
      <div className="stats-page__shell">
        <button className="stats-back" type="button" onClick={goBack}>
          ← Volver a la pagina principal
        </button>

        <header className="stats-header reveal">
          <p className="section-kicker">Datos estadísticos</p>
          <h1>Comayagua en cifras</h1>
          <p>Explora los resultados y visualizaciones del estudio turístico de Comayagua.</p>
        </header>

        <section className="powerbi-card reveal" aria-label="Reporte estadístico de Comayagua">
          <iframe
            className="powerbi-frame"
            title="COMAYAGUA"
            src={POWER_BI_URL}
            frameBorder="0"
            allowFullScreen
          />
        </section>

        <p className="stats-help">
          Si el reporte tarda en cargar, espera unos segundos o{' '}
          <a href={POWER_BI_URL} target="_blank" rel="noreferrer">
            ábrelo directamente en Power BI
          </a>
          .
        </p>
      </div>
    </main>
  );
}
