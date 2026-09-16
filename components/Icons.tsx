import React from "react";

type IconProps = { className?: string };

const base = "h-5 w-5";

export function GithubIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.470-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function TelegramIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.95.46l.34-4.8 8.73-7.89c.38-.34-.08-.53-.59-.19l-10.8 6.8-4.65-1.46c-1.01-.32-1.03-1.01.21-1.5l18.2-7.02c.84-.31 1.58.2 1.22 1.29Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.66c0-1.35-.03-3.09-1.96-3.09-1.97 0-2.27 1.47-2.27 2.99V21h-4V9Z" />
    </svg>
  );
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.4 5.6a1.5 1.5 0 0 0 1.7 0L21.5 7" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CopyIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a1 1 0 0 1 1-1h9" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className} aria-hidden="true">
      <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function AsteriskEmblem({ className = "h-10 w-10 text-accent" }: IconProps) {
  return (
    <div className={`relative flex items-center justify-center rounded-2xl bg-accent/15 p-3.5 border border-accent/30 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent animate-spin-slow">
        <path d="M10.5 2.5a1.5 1.5 0 0 1 3 0v5.4l3.8-3.8a1.5 1.5 0 0 1 2.1 2.1l-3.8 3.8h5.4a1.5 1.5 0 0 1 0 3h-5.4l3.8 3.8a1.5 1.5 0 0 1-2.1 2.1l-3.8-3.8v5.4a1.5 1.5 0 0 1-3 0v-5.4l-3.8 3.8a1.5 1.5 0 0 1-2.1-2.1l3.8-3.8H2.5a1.5 1.5 0 0 1 0-3h5.4L4.1 6.2a1.5 1.5 0 0 1 2.1-2.1l3.8 3.8V2.5z" />
      </svg>
    </div>
  );
}

/* Tech Brands Icons */
export function ReactIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" className="text-cyan-400" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" className="text-cyan-400" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" className="text-cyan-400" />
      <circle cx="12" cy="12" r="2" fill="currentColor" className="text-cyan-400" />
    </svg>
  );
}

export function TypeScriptIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M12.5 13.5v7h-2.5v-7h-2.5V11.2h7.5v2.3h-2.5zm4.8 5.4c.6.4 1.4.7 2.2.7.9 0 1.4-.4 1.4-.9 0-.6-.5-.9-1.6-1.3-1.6-.6-2.6-1.5-2.6-2.9 0-1.8 1.4-3.1 3.6-3.1 1 0 1.9.3 2.5.7l-.7 2c-.6-.4-1.2-.6-1.8-.6-.8 0-1.3.4-1.3.9 0 .5.5.8 1.7 1.3 1.7.6 2.5 1.5 2.5 2.9 0 1.9-1.4 3.1-3.8 3.1-1.2 0-2.3-.4-3-1l.9-1.9z" fill="#fff" />
    </svg>
  );
}

export function NodeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#5FA04E" className={className}>
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.69L12 19.69l6.66-3.85V8.15L12 4.31z" />
    </svg>
  );
}

export function PythonIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fill="#3776AB" d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.03 1.4h3v.4H6.3S3.5 4.8 3.5 8.7s2.5 3.8 2.5 3.8h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4-.1 2.4-2.4c0-2.3-1.9-3.5-4.8-3.5z" />
      <path fill="#FFD438" d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.03-1.4h-3v-.4h5.7s2.8.3 2.8-3.6-2.5-3.8-2.5-3.8h-1.5v2.1s.1 2.5-2.5 2.5h-4.3s-2.4.1-2.4 2.4c0 2.3 1.9 3.5 4.8 3.5z" />
    </svg>
  );
}

export function TailwindIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#38BDF8" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function SupabaseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.2 21.6 21 12.4a1 1 0 0 0-.8-1.6h-7.6l2-8.4a.8.8 0 0 0-1.4-.7L4.4 12.4a1 1 0 0 0 .8 1.6h8.4l-2.4 7.6a.8.8 0 0 0 1.4.8l.6-.8Z" fill="#3ECF8E" />
    </svg>
  );
}

export function FigmaIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
    </svg>
  );
}

export function DockerIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#2496ED" className={className}>
      <path d="M13.98 11.08h1.96v1.94h-1.96zm-2.73 0h1.96v1.94h-1.96zm-2.73 0h1.96v1.94H8.52zm5.46-2.65h1.96v1.94H13.98zm-2.73 0h1.96v1.94h-1.96zm-2.73 0h1.96v1.94H8.52zm-2.73 0h1.96v1.94H5.79zm5.46-2.64h1.96v1.94h-1.96zm-2.73 0h1.96v1.94H8.52zm14.15 6.8c-.46-.35-1.46-.5-2.26-.37-.12-.85-.68-1.57-1.43-1.92l-.5-.22-.33.43c-.45.58-.72 1.34-.73 2.11-.2-.04-.42-.06-.64-.06H2.6c-.34 0-.66.14-.88.38-.23.24-.34.57-.31.9 0 0 .37 2.05 1.77 3.75C4.7 19.98 6.94 21 10.45 21c6.54 0 10.87-3.75 12.33-9.15.53.07 1.07-.05 1.54-.36l.24-.16-.32-.47c-.24-.35-.45-.63-.45-.63z" />
    </svg>
  );
}

export const techIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  nodejs: NodeIcon,
  python: PythonIcon,
  tailwind: TailwindIcon,
  supabase: SupabaseIcon,
  figma: FigmaIcon,
  docker: DockerIcon,
};

export const socialIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  github: GithubIcon,
  telegram: TelegramIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};
