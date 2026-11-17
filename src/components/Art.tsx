import type { ArtKind } from "@/lib/data";

const NAVY = "#071F36";
const GOLD = "#C6A15B";

/** Abstract editorial artwork in the three brand colours, used where photos would go. */
export default function Art({
  kind,
  dark = true,
  className = "",
}: {
  kind: ArtKind;
  dark?: boolean;
  className?: string;
}) {
  const bg = dark ? NAVY : "#F3F5F8";
  const fg = dark ? "rgba(255,255,255,0.14)" : "rgba(7,31,54,0.12)";
  const strong = dark ? "#FFFFFF" : NAVY;
  const id = `g-${kind}-${dark ? "d" : "l"}`;

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} aria-hidden>
      <defs>
        <radialGradient id={id} cx="70%" cy="20%" r="90%">
          <stop offset="0%" stopColor={dark ? "#123456" : "#FFFFFF"} />
          <stop offset="100%" stopColor={bg} />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />

      {kind === "pulse" && (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" x2="400" y1={60 + i * 45} y2={60 + i * 45} stroke={fg} />
          ))}
          <path d="M0 165 H120 L140 130 L160 205 L182 70 L204 230 L222 150 L236 165 H400" stroke={GOLD} strokeWidth="3" />
          <circle cx="182" cy="70" r="5" fill={GOLD} />
        </g>
      )}

      {kind === "rings" && (
        <g fill="none">
          {[30, 60, 90, 120, 150, 180, 210].map((r) => (
            <circle key={r} cx="200" cy="150" r={r} stroke={fg} />
          ))}
          <circle cx="200" cy="150" r="60" stroke={GOLD} strokeWidth="2" strokeDasharray="4 8" />
          <circle cx="200" cy="150" r="12" fill={GOLD} />
          <circle cx="290" cy="90" r="5" fill={strong} />
        </g>
      )}

      {kind === "helix" && (
        <g fill="none" strokeWidth="2">
          {Array.from({ length: 16 }).map((_, i) => {
            const x = 30 + i * 22.5;
            const a = Math.sin(i * 0.7) * 70;
            return (
              <g key={i}>
                <line x1={x} x2={x} y1={150 - a} y2={150 + a} stroke={fg} />
                <circle cx={x} cy={150 - a} r="5" fill={i % 3 === 0 ? GOLD : strong} stroke="none" />
                <circle cx={x} cy={150 + a} r="5" fill={dark ? "rgba(255,255,255,0.35)" : "rgba(7,31,54,0.3)"} stroke="none" />
              </g>
            );
          })}
        </g>
      )}

      {kind === "bars" && (
        <g>
          {[90, 140, 110, 180, 150, 210, 170, 230].map((h, i) => (
            <rect key={i} x={40 + i * 42} y={260 - h} width="24" height={h} rx="12" fill={i === 5 ? GOLD : fg} />
          ))}
          <path d="M52 190 C 120 160, 180 150, 230 100 S 330 60, 360 40" fill="none" stroke={strong} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        </g>
      )}

      {kind === "sun" && (
        <g>
          <circle cx="200" cy="190" r="80" fill={GOLD} />
          <rect y="190" width="400" height="110" fill={bg} />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={60 + i * 10} x2={340 - i * 10} y1={205 + i * 18} y2={205 + i * 18} stroke={dark ? "rgba(198,161,91,0.5)" : "rgba(198,161,91,0.7)"} strokeWidth="2" strokeLinecap="round" />
          ))}
        </g>
      )}

      {kind === "grid" && (
        <g>
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 9 }).map((__, c) => (
              <circle key={`${r}-${c}`} cx={40 + c * 40} cy={30 + r * 40} r={(r + c) % 7 === 3 ? 7 : 3} fill={(r + c) % 7 === 3 ? GOLD : fg} />
            )),
          )}
        </g>
      )}

      {kind === "wave" && (
        <g fill="none" strokeWidth="2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M0 ${120 + i * 22} C 80 ${80 + i * 22}, 160 ${170 + i * 22}, 240 ${120 + i * 22} S 360 ${90 + i * 22}, 400 ${120 + i * 22}`} stroke={i === 2 ? GOLD : fg} />
          ))}
        </g>
      )}

      {kind === "heart" && (
        <g fill="none">
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={170 + i * 30} cy="150" r={70} stroke={i === 1 ? GOLD : fg} strokeWidth={i === 1 ? 2 : 1.5} />
          ))}
          <circle cx="200" cy="150" r="6" fill={strong} />
        </g>
      )}

      {kind === "orbit" && (
        <g fill="none">
          <ellipse cx="200" cy="150" rx="160" ry="55" stroke={fg} transform="rotate(-18 200 150)" />
          <ellipse cx="200" cy="150" rx="160" ry="55" stroke={fg} transform="rotate(30 200 150)" />
          <ellipse cx="200" cy="150" rx="120" ry="40" stroke={GOLD} strokeWidth="1.5" transform="rotate(-60 200 150)" />
          <circle cx="200" cy="150" r="28" fill={strong} />
          <circle cx="303" cy="112" r="6" fill={GOLD} />
        </g>
      )}
    </svg>
  );
}
