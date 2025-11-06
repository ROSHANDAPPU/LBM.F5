
import { useState, useEffect } from 'react';

interface FadeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FadeImage({ src, alt, className }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`img-fade ${loaded ? 'loaded' : ''} ${className || ''}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
