import { useCallback, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Calendar, Send } from 'lucide-react';
import Toast from './Toast';
import { companyInfo, timeSlots, bookingTypeOptions } from '../data/mockData';
import type { BookingFormData, BookingFormErrors } from '../types';

const initialForm: BookingFormData = {
    name: '',
    contact: '',
    date: '',
    time: '',
    partySize: 2,
    bookingType: 'table',
    specialRequests: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s-]{7,16}$/;

const validate = (data: BookingFormData): BookingFormErrors => {
    const errors: BookingFormErrors = {};
    if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
    const contact = data.contact.trim();
    if (!contact) errors.contact = 'Add a phone number or email so we can confirm.';
    else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact))
        errors.contact = 'Enter a valid phone number or email address.';
    if (!data.date) errors.date = 'Please select a date.';
    else {
        const selectedDate = new Date(data.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) errors.date = 'Date must be today or in the future.';
    }
    if (!data.time) errors.time = 'Please select a time.';
    if (data.partySize < 1) errors.partySize = 'Party size must be at least 1.';
    else if (data.partySize > 50) errors.partySize = 'For parties over 50, please contact us directly.';
    return errors;
};

const fieldClass = (hasError: boolean) =>
    `mt-1.5 w-full rounded-xl border bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 ${hasError
        ? 'border-red-500 focus:ring-red-200'
        : 'border-roast/20 focus:border-crema-dark focus:ring-crema/50'
    }`;

export default function Booking() {
    const [form, setForm] = useState<BookingFormData>(initialForm);
    const [errors, setErrors] = useState<BookingFormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState<string | null>(null);
    const closeToast = useCallback(() => setToast(null), []);

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        const finalValue = name === 'partySize' ? parseInt(value) || 0 : value;
        setForm((prev) => ({ ...prev, [name]: finalValue }));
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
            setToast(
                `Thank you, ${form.name.trim().split(' ')[0]}! Your booking request for ${form.date} at ${form.time} has been received. We'll confirm shortly.`
            );
        }, 700);
    };

    return (
        <section id="booking" aria-labelledby="booking-heading" className="bg-gradient-to-br from-cream to-cream-warm py-20 sm:py-28">
            <div className="container-page">
                <p className="eyebrow text-crema-dark">
                    <span aria-hidden>06</span> Reserve your spot
                </p>
                <h2 id="booking-heading" className="section-title mt-5 text-roast">
                    Book a <span className="text-crema-dark">table.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-ink/70">
                    Reserve a table for coffee and pastries, or plan your next celebration with our catering services.
                </p>

                <div className="mt-12 grid gap-8 lg:grid-cols-5">
                    {/* Booking Form */}
                    <form
                        onSubmit={onSubmit}
                        noValidate
                        aria-label="Booking form"
                        className="space-y-5 rounded-2xl border border-roast/10 bg-white/60 p-7 shadow-sm lg:col-span-3"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="booking-name" className="text-sm font-semibold text-roast">
                                    Name
                                </label>
                                <input
                                    id="booking-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={onChange}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'booking-name-error' : undefined}
                                    placeholder="Your name"
                                    className={fieldClass(!!errors.name)}
                                />
                                {errors.name && (
                                    <p id="booking-name-error" className="mt-1 text-xs text-red-700">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="booking-contact" className="text-sm font-semibold text-roast">
                                    Phone or email
                                </label>
                                <input
                                    id="booking-contact"
                                    name="contact"
                                    type="text"
                                    autoComplete="email"
                                    value={form.contact}
                                    onChange={onChange}
                                    aria-invalid={!!errors.contact}
                                    aria-describedby={errors.contact ? 'booking-contact-error' : undefined}
                                    placeholder="+251… or you@example.com"
                                    className={fieldClass(!!errors.contact)}
                                />
                                {errors.contact && (
                                    <p id="booking-contact-error" className="mt-1 text-xs text-red-700">
                                        {errors.contact}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-3">
                            <div>
                                <label htmlFor="booking-date" className="text-sm font-semibold text-roast">
                                    Date
                                </label>
                                <input
                                    id="booking-date"
                                    name="date"
                                    type="date"
                                    value={form.date}
                                    onChange={onChange}
                                    aria-invalid={!!errors.date}
                                    aria-describedby={errors.date ? 'booking-date-error' : undefined}
                                    className={fieldClass(!!errors.date)}
                                />
                                {errors.date && (
                                    <p id="booking-date-error" className="mt-1 text-xs text-red-700">
                                        {errors.date}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="booking-time" className="text-sm font-semibold text-roast">
                                    Time
                                </label>
                                <select
                                    id="booking-time"
                                    name="time"
                                    value={form.time}
                                    onChange={onChange}
                                    aria-invalid={!!errors.time}
                                    aria-describedby={errors.time ? 'booking-time-error' : undefined}
                                    className={fieldClass(!!errors.time)}
                                >
                                    <option value="">Select time</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                                {errors.time && (
                                    <p id="booking-time-error" className="mt-1 text-xs text-red-700">
                                        {errors.time}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="booking-partySize" className="text-sm font-semibold text-roast">
                                    Party size
                                </label>
                                <input
                                    id="booking-partySize"
                                    name="partySize"
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={form.partySize}
                                    onChange={onChange}
                                    aria-invalid={!!errors.partySize}
                                    aria-describedby={errors.partySize ? 'booking-partySize-error' : undefined}
                                    className={fieldClass(!!errors.partySize)}
                                />
                                {errors.partySize && (
                                    <p id="booking-partySize-error" className="mt-1 text-xs text-red-700">
                                        {errors.partySize}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="booking-bookingType" className="text-sm font-semibold text-roast">
                                Booking type
                            </label>
                            <select
                                id="booking-bookingType"
                                name="bookingType"
                                value={form.bookingType}
                                onChange={onChange}
                                className={fieldClass(false)}
                            >
                                {bookingTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="booking-specialRequests" className="text-sm font-semibold text-roast">
                                Special requests <span className="font-normal text-ink/50">(optional)</span>
                            </label>
                            <textarea
                                id="booking-specialRequests"
                                name="specialRequests"
                                rows={4}
                                value={form.specialRequests}
                                onChange={onChange}
                                aria-invalid={!!errors.specialRequests}
                                aria-describedby={errors.specialRequests ? 'booking-specialRequests-error' : undefined}
                                placeholder="Dietary restrictions, seating preferences, celebration details..."
                                className={fieldClass(!!errors.specialRequests)}
                            />
                            {errors.specialRequests && (
                                <p id="booking-specialRequests-error" className="mt-1 text-xs text-red-700">
                                    {errors.specialRequests}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="btn-primary w-full bg-roast text-cream hover:bg-roast-brown disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >
                            {submitting ? 'Submitting…' : 'Submit booking'} <Send size={16} aria-hidden />
                        </button>
                    </form>

                    {/* Quick info */}
                    <aside
                        aria-label="Booking information"
                        className="rounded-2xl bg-roast-deep p-7 text-cream shadow-card lg:col-span-2"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crema/15 text-crema">
                                <Calendar size={22} aria-hidden />
                            </span>
                            <h3 className="font-display text-2xl font-bold">Booking Info</h3>
                        </div>

                        <div className="mt-6 space-y-4 text-sm">
                            <div>
                                <h4 className="font-semibold text-crema">Table Reservations</h4>
                                <p className="mt-1 leading-relaxed text-cream/75">
                                    Reserve a cozy spot for 1-10 guests. Walk-ins welcome based on availability.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-crema">Catering & Events</h4>
                                <p className="mt-1 leading-relaxed text-cream/75">
                                    Planning a wedding, graduation or corporate event? We offer full catering with traditional Ethiopian dishes and custom cakes.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-crema">Coffee Ceremony</h4>
                                <p className="mt-1 leading-relaxed text-cream/75">
                                    Book our traditional Ethiopian coffee ceremony for your private event (Saturday afternoons).
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl border border-cream/20 bg-roast-brown/30 p-4">
                            <p className="text-xs font-medium uppercase tracking-wider text-crema">Need help?</p>
                            <p className="mt-2 text-sm text-cream/85">
                                For large parties (10+) or same-day bookings, call us directly at{' '}
                                <a href={companyInfo.phoneHref} className="font-semibold text-crema hover:underline">
                                    {companyInfo.phone}
                                </a>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            {toast && <Toast message={toast} onClose={closeToast} />}
        </section>
    );
}
