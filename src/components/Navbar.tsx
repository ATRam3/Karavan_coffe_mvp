import { useEffect, useState } from 'react';
import { MapPin, Menu as MenuIcon, X } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/mockData';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#catering', label: 'Catering & Events' },
  { href: '#about', label: 'About Us' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'bg-roast-deep/95 shadow-lg backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="flex items-center gap-3 text-crema"
          aria-label="Karavan Coffee — back to top"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="font-display text-xl font-bold tracking-tight text-cream">
            Karavan <span className="text-crema">Coffee</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative py-2 text-sm font-medium text-cream/85 transition hover:text-crema"
                >
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-crema transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#menu" className="btn-primary hidden sm:inline-flex">
            View Menu
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-crema hover:text-crema lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <MenuIcon size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? 'block' : 'hidden'} border-t border-cream/10 bg-roast-deep`}
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-2xl text-cream transition hover:text-crema"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3 pb-3">
            <a href="#menu" onClick={() => setOpen(false)} className="btn-primary flex-1">
              View Menu
            </a>
            <a
              href={companyInfo.mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost flex-1"
            >
              <MapPin size={16} aria-hidden /> Directions
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
