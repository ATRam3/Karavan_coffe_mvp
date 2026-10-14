import { Car, Clock, MapPin, Navigation, Wifi } from 'lucide-react';
import { businessHours, companyInfo } from '../data/mockData';
import { useOpenStatus } from '../hooks/useOpenStatus';

const formatRange = (open: string | null, close: string | null): string =>
  open && close ? `${open} – ${close}` : 'Closed';

export default function Location() {
  const status = useOpenStatus(businessHours);

  return (
    <section id="location" aria-labelledby="location-heading" className="bg-cream-warm/60 py-20 sm:py-28">
      <div className="container-page">
        <p className="eyebrow text-crema-dark">
          <span aria-hidden>05</span> Find us
        </p>
        <h2 id="location-heading" className="section-title mt-5 text-roast">
          Location <span className="text-crema-dark">&amp; hours.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Hours card */}
          <div className="rounded-2xl border border-roast/10 bg-cream p-7 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-roast">
                <Clock size={20} aria-hidden className="text-crema-dark" /> Opening hours
              </h3>
              <span
                role="status"
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  status.isOpen
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'bg-red-100 text-red-900'
                }`}
              >
                <span
                  aria-hidden
                  className={`h-2 w-2 rounded-full ${
                    status.isOpen ? 'animate-pulse bg-emerald-600' : 'bg-red-600'
                  }`}
                />
                {status.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>
            <p className="mt-1 text-xs text-ink/55">{status.note} · Addis Ababa time</p>

            <dl className="mt-5 divide-y divide-roast/10">
              {businessHours.map((h) => {
                const isToday = h.day === status.today;
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-3 text-sm ${
                      isToday ? 'font-semibold text-roast' : 'text-ink/70'
                    }`}
                    aria-current={isToday ? 'date' : undefined}
                  >
                    <dt className="flex items-center gap-2">
                      {h.label}
                      {isToday && (
                        <span className="rounded-full bg-crema px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-roast">
                          Today
                        </span>
                      )}
                    </dt>
                    <dd>{formatRange(h.open, h.close)}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Map + info */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-roast/10 bg-roast/5 shadow-sm">
              <iframe
                title="Karavan Coffee on Google Maps"
                src={companyInfo.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="rounded-2xl border border-roast/10 bg-cream p-7 shadow-sm">
              <ul className="space-y-4 text-sm leading-relaxed text-ink/75">
                <li className="flex gap-3">
                  <MapPin size={18} aria-hidden className="mt-0.5 shrink-0 text-crema-dark" />
                  <span>
                    <strong className="block text-roast">{companyInfo.address}</strong>
                    {companyInfo.landmark}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Car size={18} aria-hidden className="mt-0.5 shrink-0 text-crema-dark" />
                  <span>
                    <strong className="block text-roast">Parking</strong>
                    {companyInfo.parking}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Wifi size={18} aria-hidden className="mt-0.5 shrink-0 text-crema-dark" />
                  <span>
                    <strong className="block text-roast">Wi-Fi</strong>
                    {companyInfo.wifi}
                  </span>
                </li>
              </ul>
              <a
                href={companyInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6"
              >
                <Navigation size={16} aria-hidden /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
