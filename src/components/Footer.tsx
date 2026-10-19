import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/mockData';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About Us' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-roast-deep text-cream">
      {/* Closing CTA band */}
      <div className="relative overflow-hidden bg-crema-dark">
        <div
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-crema/60"
          aria-hidden
        />
        <div className="container-page relative flex flex-col justify-between gap-8 py-16 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-roast/70">
              Last thing before you go
            </p>
            <h2 className="mt-3 font-display text-5xl font-extrabold leading-none text-roast sm:text-7xl">
              Come <span className="text-cream">thirsty.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-roast/80">
              Find us in {companyInfo.neighborhood} every day. Your table is waiting.
            </p>
            <a
              href="#menu"
              className="mt-4 inline-flex rounded-full bg-cream px-6 py-3 text-sm font-semibold text-roast transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse the menu
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-crema">
            <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
            <span className="font-display text-xl font-bold text-cream">{companyInfo.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/60">{companyInfo.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-crema">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/75 transition hover:text-crema">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-crema">Visit</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/75">
            <p>{companyInfo.address}</p>
            <p>
              <a href={companyInfo.phoneHref} className="transition hover:text-crema">
                {companyInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${companyInfo.email}`} className="transition hover:text-crema">
                {companyInfo.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-cream/70 transition hover:text-crema"
          >
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
