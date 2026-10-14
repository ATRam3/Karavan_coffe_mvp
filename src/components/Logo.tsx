interface LogoProps {
  className?: string;
}

/** Minimal coffee cup with animated steam — the Karavan badge. */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Karavan Coffee logo"
      fill="none"
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      {/* steam */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path className="animate-steam" d="M18 15c-1.6-2 1.6-3.2 0-5.2" />
        <path
          className="animate-steam"
          style={{ animationDelay: '0.6s' }}
          d="M24 15c-1.6-2 1.6-3.2 0-5.2"
        />
        <path
          className="animate-steam"
          style={{ animationDelay: '1.2s' }}
          d="M30 15c-1.6-2 1.6-3.2 0-5.2"
        />
      </g>
      {/* cup */}
      <path
        d="M13 20h20v7a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-7Z"
        fill="currentColor"
      />
      <path
        d="M33 22h2.5a3.5 3.5 0 0 1 0 7H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 39h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
