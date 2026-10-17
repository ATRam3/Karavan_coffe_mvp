import logoImg from '../asset/logo.jpg';

interface LogoProps {
  className?: string;
  alt?: string;
}

/** Karavan brand logo from assets */
export default function Logo({
  className = '',
  alt = 'Karavan Coffee — Layers of Happiness',
}: LogoProps) {
  return (
    <img
      src={logoImg}
      alt={alt}
      className={`rounded-full object-contain bg-[#FAF7F2] p-0.5 shadow-sm ring-1 ring-crema/40 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
