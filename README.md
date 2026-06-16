# Landing Page Turística de Comayagua

Landing page premium, visual y mobile-first para presentar Comayagua, Honduras, como destino turístico cultural, religioso, histórico y familiar.

## Cómo ejecutar el proyecto

Instala dependencias y ejecuta Vite:

```bash
npm install
npm run dev
```

Para generar producción:

```bash
npm run build
```

## Estructura

```txt
src/
  components/
    HeroSection.jsx
    KpiSection.jsx
    WhySection.jsx
    PlacesSection.jsx
    ExperiencesSection.jsx
    GallerySection.jsx
    BrandSection.jsx
    RouteSection.jsx
    SeasonsSection.jsx
    AudienceSection.jsx
    FinalCta.jsx
    Footer.jsx
    SafeImage.jsx
  data/
    images.js
    kpis.js
    places.js
    experiences.js
    gallery.js
    route.js
  styles/
    global.css
  App.jsx
  main.jsx

public/
  images/
    comayagua/
```

## Dónde cambiar imágenes

Coloca las fotografías reales en:

```txt
public/images/comayagua/
```

Nombres preparados:

```txt
catedral.webp
alfombras.jpg
calles-coloniales.jpeg
laberinto de cipreces.jpg
plaza-central.jpg
Plaza-Centro.jpg
casa cultural.jpg
Comayagua-letras.jpg
museo.jpg
palacio-episcopal.jpg
paseo navideno.webp
```

Las rutas se administran en `src/data/images.js`. Si una imagen todavía no existe, el componente `SafeImage.jsx` evita que aparezca una imagen rota.

## Dónde cambiar KPIs

Edita `src/data/kpis.js`.

## Dónde cambiar lugares turísticos

Edita `src/data/places.js`.

## Secciones incluidas

- Hero visual con Catedral, slogan y llamadas a la acción.
- KPIs turísticos.
- Razones para visitar Comayagua.
- Lugares imperdibles.
- Experiencias turísticas.
- Galería editorial con lightbox.
- Bloque de marca destino.
- Ruta de un día perfecto.
- Temporadas recomendadas.
- Audiencias objetivo.
- CTA final.
- Footer del proyecto universitario.
