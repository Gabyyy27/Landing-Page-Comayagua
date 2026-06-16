export const imageFallback =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1000">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#062B3D"/>
          <stop offset="0.58" stop-color="#174a50"/>
          <stop offset="1" stop-color="#B86B45"/>
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F1D77B"/>
          <stop offset="1" stop-color="#D8B24A"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="1000" fill="url(#sky)"/>
      <circle cx="1110" cy="170" r="95" fill="#D8B24A" opacity=".55"/>
      <path d="M0 760 C240 650 380 680 560 610 C800 520 1010 585 1400 460 L1400 1000 L0 1000 Z" fill="#021C2A" opacity=".55"/>
      <path d="M265 770 L265 455 L335 455 L335 770 Z M365 770 L365 360 L460 360 L460 770 Z M505 770 L505 430 L620 430 L620 770 Z M675 770 L675 320 L810 320 L810 770 Z M855 770 L855 440 L1015 440 L1015 770 Z" fill="#FAF7EF" opacity=".9"/>
      <path d="M405 360 L412 250 L430 210 L448 250 L455 360 Z M720 320 L732 170 L744 130 L756 170 L768 320 Z" fill="url(#gold)"/>
      <path d="M232 770 L1048 770" stroke="#D8B24A" stroke-width="18" stroke-linecap="round"/>
      <text x="700" y="885" text-anchor="middle" font-family="Georgia, serif" font-size="58" fill="#FAF7EF" letter-spacing="4">COMAYAGUA</text>
    </svg>
  `);

export const images = {
  catedral: '/images/comayagua/catedral.webp',
  alfombras: '/images/comayagua/alfombras.jpg',
  calles: '/images/comayagua/calles-coloniales.jpeg',
  casaCultural: '/images/comayagua/paseo-ronda.jpg',
  letras: '/images/comayagua/Comayagua-letras.jpg',
  laberinto: '/images/comayagua/laberinto%20de%20cipreces.jpg',
  museo: '/images/comayagua/museo.jpg',
  palacio: '/images/comayagua/museo-religioso.jpg',
  paseoNavideno: '/images/comayagua/paseo%20navideno.webp',
  plaza: '/images/comayagua/plaza-leon.jpeg',
  plazaCentro: '/images/comayagua/paseo-ronda.jpg',
  gastronomia: '/images/comayagua/Plaza-Centro.jpg',
  reloj: '/images/comayagua/reloj-de-Comayagua.jpg',
  recorrido: '/images/comayagua/recorrido.jpeg',
  laberinto2: '/images/comayagua/laberinto.jpeg',
  cultura: '/images/comayagua/cultura y tradicion.webp',
  centroHistorico: '/images/comayagua/centro-historico.jpg',
  museoarqueologico: '/images/comayagua/museo arqueologico.jpeg',
};
