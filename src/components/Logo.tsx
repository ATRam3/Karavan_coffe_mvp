import logoImg from '../asset/logo-removebg-preview.png';

interface LogoProps {
  className?: string;
  alt?: string;
}

/** Karavan brand logo */
export default function Logo({
  className = 'h-10 w-auto sm:h-12',
  alt = 'Karavan Coffee — Layers of Happiness',
}: LogoProps) {
  return (
    <img
      src={logoImg}
      alt={alt}
      className={`object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
