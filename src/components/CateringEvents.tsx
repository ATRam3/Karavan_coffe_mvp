import { useMemo, useState } from 'react';
import { Cake, Sparkles, UtensilsCrossed, Store, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/mockData';
import type { GalleryCategory } from '../types';

const categories: { id: GalleryCategory; label: string; icon: typeof Sparkles }[] = [
  { id: 'all', label: 'All Showcase', icon: Sparkles },
  { id: 'cakes', label: 'Wedding & Custom Cakes', icon: Cake },
  { id: 'catering', label: 'Ethiopian Cultural Catering', icon: UtensilsCrossed },
  { id: 'ambiance', label: 'Cafe Ambiance', icon: Store },
];

export default function CateringEvents() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="catering"
      aria-labelledby="catering-heading"
      className="bg-roast-deep py-20 text-cream sm:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-crema">
              <span aria-hidden>04</span> Special Moments &amp; Catering
            </p>
            <h2 id="catering-heading" className="section-title mt-5">
              Catering, custom cakes <span className="text-crema">&amp; gatherings.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/70">
            From handcrafted wedding &amp; anniversary cakes to full Ethiopian cultural banquets for
            graduations and private events — experience the warmth of Karavan at your special occasion.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          role="tablist"
          aria-label="Catering and gallery categories"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const selected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  selected
                    ? 'border-crema bg-crema text-roast shadow-md'
                    : 'border-cream/20 bg-roast/60 text-cream/80 hover:border-crema hover:text-crema'
                }`}
              >
                <Icon size={16} aria-hidden />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-roast/80 shadow-card transition duration-300 hover:-translate-y-1 hover:border-crema/40 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-roast-brown">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-roast/85 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-crema backdrop-blur-sm">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold leading-snug text-cream transition group-hover:text-crema">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Catering banner CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-crema/30 bg-gradient-to-r from-roast via-roast-brown to-roast-deep p-8 shadow-2xl sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow text-crema">Host with Karavan</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">
                Planning a wedding, graduation, or private event?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80 sm:text-base">
                We prepare personalized cakes, traditional Ethiopian cultural buffets, and specialty
                coffee service for gatherings of any size in Addis Ababa.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary shrink-0 px-7 py-4 text-base shadow-lg"
            >
              Inquire for Catering or Cakes <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
