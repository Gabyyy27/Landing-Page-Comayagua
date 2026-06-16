import { useState } from 'react';
import { imageFallback } from '../data/images.js';

export default function SafeImage({ src, alt, className = '', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src || imageFallback);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setCurrentSrc(imageFallback)}
      {...props}
    />
  );
}
