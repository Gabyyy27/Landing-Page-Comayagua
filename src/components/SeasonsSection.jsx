const seasons = [
  ['Semana Santa', 'Alfombras, procesiones y turismo religioso.'],
  ['Feriados nacionales', 'Escapadas cortas para descubrir historia y cultura.'],
  ['Fines de semana largos', 'Viaje accesible, cercano y perfecto para desconectarse.'],
  ['Todo el año', 'Centro histórico, museos, cafés, gastronomía y naturaleza cercana.'],
];

export default function SeasonsSection() {
  return (
    <section className="section seasons">
      <div className="section__intro reveal">
        <p className="section-kicker">Temporadas</p>
        <h2>Cuándo visitar Comayagua</h2>
      </div>
      <div className="season-grid">
        {seasons.map(([title, text]) => (
          <article className="season-card reveal" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
