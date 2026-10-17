import { Coffee } from 'lucide-react';
import type { DietaryTag, MenuItem } from '../types';

const tagStyles: Record<DietaryTag, string> = {
  'House Special': 'bg-crema text-roast',
  Vegan: 'bg-emerald-100 text-emerald-900',
  Vegetarian: 'bg-lime-100 text-lime-900',
  'Gluten-Free': 'bg-amber-100 text-amber-900',
  'Dairy-Free': 'bg-sky-100 text-sky-900',
};

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-roast/10 bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image container — swap `image` in mockData.ts for real photography */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cream-warm to-crema/40">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            width={640}
            height={480}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-crema-dark/60"
            aria-hidden
          >
            <Coffee size={38} strokeWidth={1.25} />
            <span className="rounded-full bg-cream-warm/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-roast/60">
              Sample · Image coming soon
            </span>
          </div>
        )}
        <span
          className="absolute left-4 top-4 font-mono text-[11px] font-medium tracking-widest text-roast/60"
          aria-hidden
        >
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-bold leading-snug text-roast">{item.name}</h3>
          <p
            className="shrink-0 whitespace-nowrap font-display text-lg font-extrabold text-crema-dark"
            aria-label={`${item.price} Ethiopian birr`}
          >
            {item.price} <span className="font-mono text-[10px] font-medium tracking-wider">ETB</span>
          </p>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{item.description}</p>

        {item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Dietary information">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagStyles[tag]}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
