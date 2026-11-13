/** Line drawings used where no photograph of the business is available. Decorative only. */

export function HomeScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 240" className={className} aria-hidden="true" focusable="false" fill="none">
      <g stroke="#101C2C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* floor */}
        <path d="M16 214h448" />
        {/* window */}
        <rect x="44" y="34" width="132" height="84" rx="4" />
        <path d="M110 34v84M44 76h132" />
        {/* sofa */}
        <rect x="56" y="150" width="196" height="44" rx="10" />
        <path d="M70 150v-18a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v18" />
        <path d="M154 150v-30M72 194v20M236 194v20" />
        {/* side table and plant */}
        <path d="M282 214v-40h44v40M276 174h56" />
        <path d="M304 174v-26" />
        <path d="M304 150c-14-4-20-14-18-28 12 2 18 12 18 28zM304 150c14-4 20-14 18-28-12 2-18 12-18 28z" />
        {/* wall unit */}
        <rect x="318" y="30" width="134" height="40" rx="9" fill="#fff" />
        <path d="M332 58h106" />
      </g>
      <g stroke="#35A8E8" strokeWidth="2" strokeLinecap="round">
        <path d="M350 80c0 26-18 34-24 56" />
        <path d="M385 80c0 30-4 40-4 60" />
        <path d="M420 80c0 26 14 34 18 56" />
      </g>
      <circle cx="78" cy="56" r="10" stroke="#1769AA" strokeWidth="1.75" />
    </svg>
  );
}

export function CommercialScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 240" className={className} aria-hidden="true" focusable="false" fill="none">
      <g stroke="#fff" strokeOpacity="0.8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* ceiling and floor */}
        <path d="M16 34h448M16 214h448" />
        {/* ceiling cassette */}
        <path d="M190 34h100v14a6 6 0 0 1-6 6h-88a6 6 0 0 1-6-6z" />
        {/* duct run above */}
        <path d="M40 18h400M240 18v16" />
        {/* desks */}
        <path d="M44 214v-56h150v56M44 158h150" />
        <rect x="88" y="112" width="62" height="38" rx="3" />
        <path d="M119 150v8" />
        <path d="M286 214v-56h150v56M286 158h150" />
        <rect x="330" y="112" width="62" height="38" rx="3" />
        <path d="M361 150v8" />
        {/* door */}
        <path d="M218 214v-92h44v92" />
        <path d="M254 170v6" />
      </g>
      <g stroke="#35A8E8" strokeWidth="2" strokeLinecap="round">
        <path d="M204 64c-10 14-34 16-52 28" />
        <path d="M228 66c-2 14-6 22-6 36" />
        <path d="M252 66c2 14 6 22 6 36" />
        <path d="M276 64c10 14 34 16 52 28" />
      </g>
    </svg>
  );
}

/** Faint airflow lines for navy bands. */
export function AirLines({ className = "" }: { className?: string }) {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <g stroke="#35A8E8" strokeWidth="1.5" strokeLinecap="round">
        {rows.map((r) => (
          <path
            key={r}
            opacity={0.26 - r * 0.035}
            d={`M-20 ${40 + r * 44}c150-46 300-46 450 0s300 46 450 0 300-46 360 0`}
          />
        ))}
      </g>
    </svg>
  );
}
