import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const id = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(id);
  }, [message, duration, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-4 bottom-6 z-[60] mx-auto flex max-w-md animate-toast items-start gap-3 rounded-2xl bg-roast-deep p-4 text-cream shadow-2xl ring-1 ring-crema/30"
    >
      <CheckCircle2 size={22} aria-hidden className="mt-0.5 shrink-0 text-crema" />
      <p className="flex-1 text-sm leading-relaxed">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="rounded-full p-1 text-cream/60 transition hover:bg-cream/10 hover:text-cream"
      >
        <X size={16} aria-hidden />
      </button>
    </div>
  );
}
