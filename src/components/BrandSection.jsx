const phrases = [
  'Cerca de todo',
  'Llena de historia',
  'Fe que se vive',
  'Calles para fotografiar',
  'Cultura que se comparte',
  'Un destino para volver',
];

export default function BrandSection() {
  return (
    <section className="section brand-section">
      <div className="brand-panel reveal">
        <div>
          <p className="section-kicker">Marca destino</p>
          <h2>Comayagua: el corazón cultural de Honduras</h2>
          <p>
            Comayagua no solo se visita: se camina, se saborea, se fotografía y se recuerda. Su valor está en
            la mezcla de historia colonial, tradición religiosa, acceso estratégico, gastronomía local y
            experiencias naturales cercanas como el Laberinto de Cipreses.
          </p>
        </div>
        <div className="phrase-grid">
          {phrases.map((phrase) => <span key={phrase}>{phrase}</span>)}
        </div>
      </div>
    </section>
  );
}
