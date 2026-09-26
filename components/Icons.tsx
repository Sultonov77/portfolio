import React from "react";

type IconProps = { className?: string };

const base = "h-5 w-5";

function Stroke({ className, children, width = 1.8 }: IconProps & { children: React.ReactNode; width?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* Brand icons */
export function GithubIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
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

/* UI icons */
export function MailIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.4 5.6a1.5 1.5 0 0 0 1.7 0L21.5 7" />
    </Stroke>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </Stroke>
  );
}

export function MapPinIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Stroke>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function ArrowDownIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Stroke>
  );
}

export function ArrowUpIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Stroke>
  );
}

export function ExternalIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Stroke>
  );
}

export function DownloadIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
    </Stroke>
  );
}

export function CopyIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a1 1 0 0 1 1-1h9" />
    </Stroke>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <Stroke className={className} width={2.4}>
      <path d="m5 13 4.5 4.5L19 7" />
    </Stroke>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <Stroke className={className} width={2}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Stroke>
  );
}

/* Skill icons */
export function SparklesIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Stroke>
  );
}

export function PromptIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7 10 3 2-3 2M12 15h5" />
    </Stroke>
  );
}

export function CodeIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </Stroke>
  );
}

export function GraduationIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M2 9l10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6" />
    </Stroke>
  );
}

export function RocketIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2Z" />
      <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
    </Stroke>
  );
}

export function AutomationIcon({ className = base }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Stroke>
  );
}

export const skillIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  sparkles: SparklesIcon,
  prompt: PromptIcon,
  code: CodeIcon,
  automation: AutomationIcon,
  graduation: GraduationIcon,
  rocket: RocketIcon,
};

export const socialIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  github: GithubIcon,
  telegram: TelegramIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};
