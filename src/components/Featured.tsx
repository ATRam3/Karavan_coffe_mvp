import { ArrowUpRight } from 'lucide-react';
import { menuItems } from '../data/mockData';

const cardStyles = [
  { bg: 'bg-crema text-roast', eyebrow: 'Most ordered', rotate: '' },
  { bg: 'bg-roast-brown text-cream', eyebrow: 'Staff pick', rotate: 'md:-rotate-1 md:-translate-y-2' },
  { bg: 'bg-cream-warm text-roast', eyebrow: 'House pastry', rotate: '' },
];

export default function Featured() {
  const featured = menuItems.filter((i) => i.featured).slice(0, 3);

  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="bg-roast-deep py-20 text-cream sm:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-crema">
              <span aria-hidden>02</span> Signature picks
            </p>
            <h2 id="featured-heading" className="section-title mt-5">
              Our house <span className="text-crema">favourites.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/65">
            Start with what our regulars keep coming back for. Every cup is brewed to order,
            every pastry baked this morning.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((item, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <li
                key={item.id}
                className={`group flex min-h-[18rem] flex-col justify-between rounded-2xl p-7 shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${style.bg} ${style.rotate}`}
              >
                <div className="flex items-start justify-between font-mono text-[11px] font-medium uppercase tracking-[0.2em] opacity-70">
                  <span>{style.eyebrow}</span>
                  <span aria-hidden>0{i + 1}</span>
                </div>

                {item.image && (
                  <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{item.description}</p>
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <p className="font-display text-3xl font-extrabold">
                    {item.price}
                    <span className="ml-1.5 font-mono text-[11px] font-medium tracking-wider opacity-70">
                      ETB
                    </span>
                  </p>
                  <a
                    href="#menu"
                    aria-label={`See ${item.name} on the full menu`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-roast-deep text-cream transition duration-300 group-hover:rotate-45 group-hover:bg-crema group-hover:text-roast"
                  >
                    <ArrowUpRight size={18} aria-hidden />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
