import Image from "next/image";
import { Snowflake } from "lucide-react";
import { media } from "@/content/media";

const flows = [-3, -2, -1, 0, 1, 2, 3].map((i) => {
  const sx = 250 + i * 42;
  const ex = 250 + i * 76;
  return `M${sx} 158 C${sx} 262 ${ex} 300 ${ex} 500`;
});

/**
 * Hero visual. A wall-mounted unit pushes cool air into the room while the thermostat
 * reading falls from 31° to 24°. If a real photo is set in content/media.ts it replaces
 * the drawing and the thermostat card stays on top.
 */
export function CoolingScene() {
  const photo = media.hero;

  return (
    <div className="relative mx-auto aspect-[5/5.4] w-full max-w-[31rem] overflow-hidden rounded-lg border border-white/10 bg-navy-800">
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="(min-width: 1024px) 31rem, 92vw"
          className="object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 500 540"
          className="absolute inset-0 size-full"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="air" gradientUnits="userSpaceOnUse" x1="0" y1="158" x2="0" y2="500">
              <stop offset="0" stopColor="#35A8E8" stopOpacity="0.95" />
              <stop offset="0.7" stopColor="#35A8E8" stopOpacity="0.35" />
              <stop offset="1" stopColor="#35A8E8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Indoor unit */}
          <rect x="62" y="54" width="376" height="104" rx="20" fill="#F5F8FC" />
          <path d="M62 128h376v10a20 20 0 0 1-20 20H82a20 20 0 0 1-20-20z" fill="#DCE4EE" />
          <rect x="92" y="139" width="316" height="9" rx="4.5" fill="#101C2C" />
          <g stroke="#C5D1DE" strokeWidth="2" strokeLinecap="round">
            <path d="M96 84h308M96 98h308" />
          </g>
          <circle cx="402" cy="117" r="4" fill="#25D366" />
          <rect x="96" y="112" width="44" height="10" rx="5" fill="#C5D1DE" />

          {/* Air moving into the room */}
          <g className="airflow" fill="none" stroke="url(#air)" strokeWidth="2.25" strokeLinecap="round">
            {flows.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </svg>
      )}

      {/* Thermostat */}
      <div className="absolute bottom-5 right-5 w-[12.25rem] rounded-lg bg-white p-5 text-navy shadow-[0_18px_40px_-16px_rgb(0_0_0/0.55)] xs:w-[13.25rem]">
        <p className="t-label text-slate">Room temperature</p>
        <p className="mt-2 flex items-start font-bold leading-none tracking-[-0.04em]">
          <span className="temp-readout tabular text-[4.25rem]" aria-hidden="true" />
          <span className="mt-1.5 text-[1.5rem] text-slate" aria-hidden="true">
            °C
          </span>
          <span className="sr-only">24 degrees Celsius</span>
        </p>
        <p className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-[0.875rem] font-semibold text-blue">
          <Snowflake size={16} aria-hidden="true" />
          Cooling
        </p>
      </div>
    </div>
  );
}
