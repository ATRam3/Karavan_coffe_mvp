import { ArrowDownRight, ArrowUpRight, Coffee, Croissant, Wifi } from 'lucide-react';
import type { ComponentType } from 'react';
import { companyInfo, highlights } from '../data/mockData';
import type { Highlight } from '../types';

const highlightIcons: Record<Highlight['icon'], ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  coffee: Coffee,
  croissant: Croissant,
  wifi: Wifi,
};

interface HeroProps {
  /** Optional hero photo. A warm gradient is used when omitted. */
  imageUrl?: string;
}

export default function Hero({ imageUrl }: HeroProps) {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-roast-deep">
      {/* Background imagery + warm overlay */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(198,139,89,0.35),transparent_55%),linear-gradient(135deg,#1A1817_0%,#2C1A1D_55%,#3D2314_100%)]"
        aria-hidden
      />
      {/* Big decorative ring echoing the stamp badge */}
      <div
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 hidden h-[28rem] w-[28rem] rounded-full border border-crema/20 md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-[38%] -z-10 hidden h-[22rem] w-[22rem] rounded-full border border-crema/10 md:block"
        aria-hidden
      />

      <div className="container-page flex min-h-[100svh] flex-col justify-center pb-40 pt-32 sm:pb-44">
        <p className="eyebrow animate-fade-up text-crema">{companyInfo.neighborhood}</p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl animate-fade-up font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-cream [animation-delay:100ms] sm:text-7xl lg:text-8xl"
        >
          Artisanal Brews,
          <br />
          <span className="text-crema">Unmatched Atmosphere.</span>
        </h1>

        <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-cream/75 [animation-delay:200ms] sm:text-lg">
          {companyInfo.tagline} Pull up a chair for the slowest, smoothest cup in Addis.
        </p>

        <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:300ms]">
          <a href="#menu" className="btn-primary px-7 py-4 text-base">
            Explore Menu <ArrowDownRight size={18} aria-hidden />
          </a>
          <a
            href="#location"
            className="group inline-flex items-center gap-2 border-b border-cream/50 pb-1 text-base font-semibold text-cream transition hover:border-crema hover:text-crema"
          >
            Find Us{' '}
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Floating stamp badges, like the reference sites */}
        <div
          className="absolute right-8 top-40 hidden h-28 w-28 -rotate-12 items-center justify-center rounded-full bg-crema p-4 text-center font-mono text-[11px] font-medium uppercase leading-tight tracking-wider text-roast shadow-card lg:flex xl:right-24"
          aria-hidden
        >
          Fresh
          <br />
          roasted
          <br />
          weekly
        </div>
        <div
          className="absolute bottom-48 right-12 hidden h-24 w-24 rotate-12 items-center justify-center rounded-full bg-crema-dark p-3 text-center font-mono text-[10px] font-medium uppercase leading-tight tracking-wider text-cream shadow-card lg:flex xl:right-40"
          aria-hidden
        >
          Slow
          <br />
          &amp; steady
        </div>
      </div>

      {/* Quick stats bar overlapping the hero bottom */}
      <div className="absolute inset-x-0 bottom-0 border-t border-cream/10 bg-roast/80 backdrop-blur">
        <ul className="container-page grid gap-4 py-5 sm:grid-cols-3 sm:gap-8">
          {highlights.map((h) => {
            const Icon = highlightIcons[h.icon];
            return (
              <li key={h.id} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crema/15 text-crema">
                  <Icon size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-cream">{h.title}</p>
                  <p className="text-xs text-cream/60">{h.detail}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
