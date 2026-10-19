import { useId } from "react";

// Monogram mark: a geometric "S" on a cyan→emerald tile, with a spark for AI.
// Keep in sync with app/icon.svg (the favicon).
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Samandar Sultonov logo">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0e7490" />
          <stop offset="0.55" stopColor="#0891b2" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
      <path
        d="M26.5 12.5H17a4.75 4.75 0 0 0 0 9.5h6a4.75 4.75 0 0 1 0 9.5h-9.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30.5 6.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="#a7f3d0" />
    </svg>
  );
}
