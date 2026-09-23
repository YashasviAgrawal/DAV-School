// Jaipur blue-pottery rosette, drawn in SVG so it stays crisp and weighs nothing.
type Props = { className?: string; petal?: string; accent?: string; line?: string };

export function Rosette({ className, petal = "#2F5DD0", accent = "#F4B63F", line = "#E3EAFB" }: Props) {
  const outer = Array.from({ length: 12 }, (_, i) => i * 30);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  const dots = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <circle r="97" fill="none" stroke={line} strokeOpacity=".35" strokeWidth="1.2" />
      <circle r="90" fill="none" stroke={line} strokeOpacity=".2" strokeWidth="6" strokeDasharray="2 6" />
      {dots.map((a) => (
        <circle key={a} cx="0" cy="-82" r="2.4" fill={accent} transform={`rotate(${a})`} />
      ))}
      {outer.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M0,-18 C16,-38 14,-62 0,-74 C-14,-62 -16,-38 0,-18Z" fill={petal} />
          <path d="M0,-28 C7,-40 6,-54 0,-62 C-6,-54 -7,-40 0,-28Z" fill={line} fillOpacity=".55" />
        </g>
      ))}
      {inner.map((a) => (
        <path key={a} transform={`rotate(${a})`} d="M0,-10 C9,-20 8,-34 0,-40 C-8,-34 -9,-20 0,-10Z" fill={accent} />
      ))}
      <circle r="14" fill={petal} />
      <circle r="7" fill={accent} />
    </svg>
  );
}

// Small repeating quatrefoil used as a quiet texture on dark sections.
export function TilePattern({ id = "tile", color = "#ffffff", opacity = 0.06 }: { id?: string; color?: string; opacity?: number }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
          <g fill={color} fillOpacity={opacity} transform="translate(28 28)">
            <circle r="4" />
            <path d="M0,-6 C6,-12 6,-20 0,-24 C-6,-20 -6,-12 0,-6Z" />
            <path d="M0,6 C6,12 6,20 0,24 C-6,20 -6,12 0,6Z" />
            <path d="M-6,0 C-12,6 -20,6 -24,0 C-20,-6 -12,-6 -6,0Z" />
            <path d="M6,0 C12,6 20,6 24,0 C20,-6 12,-6 6,0Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
