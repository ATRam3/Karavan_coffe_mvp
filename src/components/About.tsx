import { Award, Coffee, Sprout, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { valuePillars } from '../data/mockData';
import type { ValuePillar } from '../types';

const pillarIcons: Record<ValuePillar['icon'], ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  sprout: Sprout,
  users: Users,
  award: Award,
};

interface AboutProps {
  /** Optional story photo. A styled placeholder is shown when omitted. */
  imageUrl?: string;
}

export default function About({ imageUrl }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-roast-brown via-roast to-roast-deep shadow-card">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Baristas preparing coffee at Karavan Coffee"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-3 text-crema/60"
                  aria-hidden
                >
                  <Coffee size={56} strokeWidth={1.1} />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Story photo
                  </span>
                </div>
              )}
            </div>
            <div
              className="absolute -bottom-6 -right-2 flex h-32 w-32 rotate-6 items-center justify-center rounded-full border-2 border-dashed border-roast/40 bg-crema p-4 text-center font-mono text-[11px] font-medium uppercase leading-snug tracking-wider text-roast shadow-card sm:-right-6 sm:h-36 sm:w-36"
              aria-hidden
            >
              Since
              <br />
              day one
              <br />
              in Addis
            </div>
          </div>

          {/* Story */}
          <div>
            <p className="eyebrow text-crema-dark">
              <span aria-hidden>04</span> About us
            </p>
            <h2 id="about-heading" className="section-title mt-5 text-roast">
              Our journey <span className="text-crema-dark">&amp; sourcing.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
              <p>
                Ethiopia gave the world coffee, and Karavan began with one idea: serve it the way
                it deserves. Our name comes from the caravans that once carried beans across the
                highlands — slow, deliberate and always shared.
              </p>
              <p>
                We source from small cooperatives, roast in small batches and bake our pastries
                before the doors open. What you taste is the whole journey, from the farm to the
                cup in your hands.
              </p>
            </div>
          </div>
        </div>

        {/* Value pillars */}
        <ul className="mt-20 grid gap-6 md:grid-cols-3">
          {valuePillars.map((p) => {
            const Icon = pillarIcons[p.icon];
            return (
              <li
                key={p.id}
                className="rounded-2xl border border-roast/10 bg-cream-warm/50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roast text-crema">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-roast">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
