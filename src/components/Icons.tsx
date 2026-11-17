type P = { className?: string };

export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Plus = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Check = ({ className = "h-3 w-3" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const Award = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="9" r="6" />
    <circle cx="12" cy="9" r="2.5" />
    <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
  </svg>
);

export const Quote = ({ className = "h-7 w-7" }: P) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    <path d="M4 18c0-6 3-10 9-11v3c-3 1-4.5 3-5 5h5v9H4v-6zm15 0c0-6 3-10 9-11v3c-3 1-4.5 3-5 5h5v9h-9v-6z" />
  </svg>
);

export const ProgramIcon = ({ kind, className = "h-4 w-4" }: P & { kind: "pulse" | "compass" | "heart" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {kind === "pulse" && <path d="M3 12h4l2-5 4 10 2-5h6" />}
    {kind === "compass" && (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5z" />
      </>
    )}
    {kind === "heart" && <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />}
  </svg>
);

export const Help = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.6-1.5 1.1-1.5 2.2M12 17h.01" />
  </svg>
);
