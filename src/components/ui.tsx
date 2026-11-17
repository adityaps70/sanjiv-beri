import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1184px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Button({
  href,
  children,
  variant = "dark",
  arrow = false,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "soft";
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const styles = {
    dark: "bg-navy text-white shadow-float hover:shadow-deep",
    light: "bg-white text-navy shadow-float",
    soft: "bg-surface text-navy hover:bg-line",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex h-12 items-center gap-2.5 rounded-[14px] px-6 text-[16px] font-medium tracking-[-0.03em] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />}
    </a>
  );
}

export function Chip({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" | "outline" }) {
  const s = {
    light: "bg-surface text-navy/60",
    dark: "border border-white/40 text-white",
    outline: "border border-line text-navy/60",
  }[tone];
  return <span className={`inline-flex h-9 items-center rounded-[10px] px-3 text-[14px] font-normal tracking-[-0.01em] ${s}`}>{children}</span>;
}

export function Label({ children, line = false, dark = false }: { children: ReactNode; line?: boolean; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`text-[20px] font-medium leading-[1.3] tracking-[-0.03em] ${dark ? "text-white/50" : "text-[#6C7179]"}`}>{children}</span>
      {line && <span className={`h-px flex-1 ${dark ? "bg-white/10" : "bg-line"}`} />}
    </div>
  );
}
