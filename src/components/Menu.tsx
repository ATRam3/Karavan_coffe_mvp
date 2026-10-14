import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import MenuItemCard from './MenuItemCard';
import { categories, menuItems } from '../data/mockData';
import type { CategoryFilter } from '../types';

const tabs: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...categories.map((c) => ({ id: c.id as CategoryFilter, label: c.label })),
];

export default function Menu() {
  const [active, setActive] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const inCategory = active === 'all' || item.category === active;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [active, query]);

  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-cream-warm/60 py-20 sm:py-28">
      <div className="container-page">
        <p className="eyebrow text-crema-dark">
          <span aria-hidden>03</span> The menu
        </p>
        <h2 id="menu-heading" className="section-title mt-5 text-roast">
          Brewed, baked <span className="text-crema-dark">&amp; served.</span>
        </h2>

        {/* Search */}
        <div className="relative mt-10 max-w-md">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <Search
            size={18}
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-roast/50"
          />
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search drinks, pastries, vegan…"
            autoComplete="off"
            className="w-full rounded-full border border-roast/15 bg-cream py-3 pl-11 pr-11 text-sm text-ink shadow-sm placeholder:text-ink/40 focus:border-crema-dark focus:outline-none focus:ring-2 focus:ring-crema/50"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-roast/60 transition hover:bg-roast/10"
            >
              <X size={16} aria-hidden />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="menu-panel"
                onClick={() => setActive(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  selected
                    ? 'border-roast bg-roast text-cream shadow-sm'
                    : 'border-roast/20 bg-cream text-roast hover:border-crema-dark hover:text-crema-dark'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {results.length} {results.length === 1 ? 'item' : 'items'} shown
        </p>

        <div id="menu-panel" role="tabpanel" className="mt-10">
          {results.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((item, i) => (
                <li key={item.id}>
                  <MenuItemCard item={item} index={i} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-roast/25 bg-cream px-6 py-14 text-center">
              <p className="font-display text-2xl font-bold text-roast">Nothing matches “{query}”.</p>
              <p className="mt-2 text-sm text-ink/60">
                Try a different word or switch category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActive('all');
                }}
                className="btn-primary mt-6"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
