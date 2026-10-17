import { useCallback, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Instagram, Mail, Music2, Phone, Send } from 'lucide-react';
import Toast from './Toast';
import { companyInfo, messageTypeOptions } from '../data/mockData';
import type { ContactFormData, ContactFormErrors, SocialLink } from '../types';

const initialForm: ContactFormData = {
  name: '',
  contact: '',
  messageType: 'general',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s-]{7,16}$/;

const validate = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
  const contact = data.contact.trim();
  if (!contact) errors.contact = 'Add a phone number or email so we can reply.';
  else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact))
    errors.contact = 'Enter a valid phone number or email address.';
  if (data.message.trim().length < 5) errors.message = 'Tell us a little more (5+ characters).';
  return errors;
};

const SocialIcon = ({ id }: { id: SocialLink['id'] }) => {
  if (id === 'instagram') return <Instagram size={18} aria-hidden />;
  if (id === 'tiktok') return <Music2 size={18} aria-hidden />;
  return <Send size={18} aria-hidden />; // Telegram
};

const fieldClass = (hasError: boolean) =>
  `mt-1.5 w-full rounded-xl border bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 ${
    hasError
      ? 'border-red-500 focus:ring-red-200'
      : 'border-roast/20 focus:border-crema-dark focus:ring-crema/50'
  }`;

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // Simulated network call — replace with a real fetch() to your API later.
    window.setTimeout(() => {
      setSubmitting(false);
      setForm(initialForm);
      setToast(`Thank you, ${form.name.trim().split(' ')[0]}! We got your message and will reply soon.`);
    }, 700);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <p className="eyebrow text-crema-dark">
          <span aria-hidden>07</span> Say hello
        </p>
        <h2 id="contact-heading" className="section-title mt-5 text-roast">
          Get in <span className="text-crema-dark">touch.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Contact form"
            className="space-y-5 rounded-2xl border border-roast/10 bg-cream-warm/40 p-7 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-roast">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                  className={fieldClass(!!errors.name)}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact" className="text-sm font-semibold text-roast">
                  Phone or email
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="email"
                  value={form.contact}
                  onChange={onChange}
                  aria-invalid={!!errors.contact}
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                  placeholder="+251… or you@example.com"
                  className={fieldClass(!!errors.contact)}
                />
                {errors.contact && (
                  <p id="contact-error" className="mt-1 text-xs text-red-700">
                    {errors.contact}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="messageType" className="text-sm font-semibold text-roast">
                Message type
              </label>
              <select
                id="messageType"
                name="messageType"
                value={form.messageType}
                onChange={onChange}
                className={fieldClass(false)}
              >
                {messageTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-roast">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="How can we help?"
                className={fieldClass(!!errors.message)}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-700">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full bg-roast text-cream hover:bg-roast-brown disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? 'Sending…' : 'Send message'} <Send size={16} aria-hidden />
            </button>
          </form>

          {/* Quick contact */}
          <aside
            aria-label="Quick contact details"
            className="rounded-2xl bg-roast-deep p-7 text-cream shadow-card lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-bold">Prefer to talk?</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={companyInfo.phoneHref}
                  className="flex items-center gap-3 transition hover:text-crema"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/15 text-crema">
                    <Phone size={18} aria-hidden />
                  </span>
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 transition hover:text-crema"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/15 text-crema">
                    <Mail size={18} aria-hidden />
                  </span>
                  {companyInfo.email}
                </a>
              </li>
            </ul>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-crema">
              Follow along
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {companyInfo.socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.label} ${s.handle}`}
                    className="flex items-center gap-3 transition hover:text-crema"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25">
                      <SocialIcon id={s.id} />
                    </span>
                    <span>
                      {s.label}
                      <span className="block text-xs text-cream/55">{s.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={closeToast} />}
    </section>
  );
}
