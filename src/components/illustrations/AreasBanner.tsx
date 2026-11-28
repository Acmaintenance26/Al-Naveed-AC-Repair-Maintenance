import type { ReactNode } from "react";

/**
 * Decorative banner for the Areas page: a Dubai skyline cooled by a wall AC unit, with map
 * pins over the towers. Drawn for this site; it carries no text and no claims.
 */

const FAR = [
  [0, 120],
  [70, 90],
  [140, 140],
  [210, 100],
  [290, 160],
  [380, 110],
  [460, 150],
  [540, 95],
  [620, 135],
  [700, 105],
  [790, 150],
  [880, 115],
  [960, 145],
  [1050, 100],
  [1140, 140],
  [1230, 110],
  [1320, 150],
  [1410, 105],
  [1490, 135],
  [1560, 100],
] as const;

const NEAR: readonly (readonly [number, number, number])[] = [
  [20, 70, 100],
  [110, 54, 140],
  [196, 80, 90],
  [420, 64, 120],
  [500, 76, 150],
  [590, 60, 100],
  [690, 70, 128],
  [1180, 66, 150],
  [1262, 80, 110],
  [1450, 70, 138],
  [1530, 56, 96],
];

function windows(x: number, w: number, h: number, seed: number): ReactNode[] {
  const out: ReactNode[] = [];
  const cols = Math.floor((w - 12) / 12);
  const rows = Math.floor((h - 16) / 16);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r * 7 + c * 13 + seed * 5) % 5 < 2) continue;
      out.push(
        <rect
          key={`${seed}-${r}-${c}`}
          x={x + 8 + c * 12}
          y={260 - h + 10 + r * 16}
          width="5"
          height="7"
          rx="1"
          fill="#a9d9f5"
          opacity={(r + c + seed) % 3 === 0 ? 0.75 : 0.35}
        />,
      );
    }
  }
  return out;
}

function Pin({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 0 C-11 -14 -14 -20 -14 -27 a14 14 0 1 1 28 0 c0 7 -3 13 -14 27 Z"
        fill="#35a8e8"
      />
      <circle cy="-27" r="5.5" fill="#101c2c" />
    </g>
  );
}

function Snowflake({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${s})`}
      stroke="#a9d9f5"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M0 -9 V9 M-8 -4.5 L8 4.5 M-8 4.5 L8 -4.5" />
    </g>
  );
}

export function AreasBanner() {
  return (
    <div
      aria-hidden="true"
      className="relative h-32 overflow-hidden sm:h-44 lg:h-56"
    >
      <svg
        viewBox="0 0 1600 260"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-full w-full"
        focusable="false"
      >
        <defs>
          <radialGradient id="ab-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#35a8e8" stopOpacity="0.32" />
            <stop offset="1" stopColor="#35a8e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ab-air" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a9d9f5" stopOpacity="0.9" />
            <stop offset="1" stopColor="#a9d9f5" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ellipse cx="1010" cy="120" rx="330" ry="150" fill="url(#ab-glow)" />

        {/* far skyline */}
        <g fill="#172639">
          {FAR.map(([x, h]) => (
            <rect key={x} x={x} y={260 - h} width="64" height={h} />
          ))}
        </g>

        {/* Burj Khalifa-style stepped tower */}
        <g fill="#22344b">
          <path d="M330 260 V150 L338 110 L344 70 L348 22 L352 70 L358 110 L366 150 V260 Z" />
          <rect x="324" y="170" width="48" height="90" />
        </g>

        {/* sail-shaped hotel on the right */}
        <g>
          <path
            d="M1330 260 V90 Q1400 120 1380 260 Z"
            fill="#e8f1fa"
            opacity="0.92"
          />
          <path d="M1330 90 V260" stroke="#a9d9f5" strokeWidth="4" />
        </g>

        {/* twisting marina-style tower */}
        <path d="M850 260 L856 130 Q880 100 900 90 L912 260 Z" fill="#22344b" />

        {/* near skyline with lit windows */}
        {NEAR.map(([x, w, h], i) => (
          <g key={x}>
            <rect x={x} y={260 - h} width={w} height={h} fill="#22344b" />
            {windows(x, w, h, i)}
          </g>
        ))}

        {/* wall AC unit, blowing cool air over the city */}
        <g>
          <rect x="930" y="26" width="220" height="62" rx="12" fill="#f5f8fc" />
          <rect x="930" y="66" width="220" height="22" rx="10" fill="#dce4ee" />
          <rect x="948" y="74" width="184" height="6" rx="3" fill="#101c2c" />
          <rect x="948" y="40" width="64" height="7" rx="3.5" fill="#c9d6e4" />
          <circle cx="1124" cy="42" r="5" fill="#25d366" />
        </g>
        {[958, 1000, 1042, 1084, 1118].map((x, i) => (
          <path
            key={x}
            d={`M${x} 92 C${x - 12} 130 ${x + 12} 160 ${x - 6 + i * 3} 205`}
            stroke="url(#ab-air)"
            strokeWidth="3"
            strokeDasharray="2 9"
            strokeLinecap="round"
            fill="none"
          />
        ))}
        <Snowflake x={968} y={150} s={1.1} />
        <Snowflake x={1070} y={128} />
        <Snowflake x={1150} y={176} s={0.9} />
        <Snowflake x={1020} y={196} s={0.8} />

        {/* area pins */}
        <Pin x={430} y={132} />
        <Pin x={1360} y={72} />
        <Pin x={880} y={92} />
        <Pin x={150} y={118} />
        <Pin x={1500} y={108} />

        {/* ground */}
        <rect x="0" y="252" width="1600" height="8" fill="#101c2c" />
      </svg>
    </div>
  );
}
