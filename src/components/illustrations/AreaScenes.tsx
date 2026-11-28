import type { ReactNode } from "react";
import type { AreaScene } from "@/content/areas";

/**
 * Drawn landmark scenes for the area pages and their thumbnails. Original artwork, not photographs.
 * Each scene fills an 800 x 500 box; thumbnails crop it from the centre, so keep the subject central.
 */

function Windows({
  x,
  y,
  w,
  h,
  cols,
  rows,
  seed = 0,
  lit = "#FFE9A8",
  dim = "rgba(255,255,255,0.14)",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  cols: number;
  rows: number;
  seed?: number;
  lit?: string;
  dim?: string;
}) {
  const cw = w / cols;
  const rh = h / rows;
  const cells: ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const on = (r * 7 + c * 3 + seed) % 5 === 0;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * cw + cw * 0.25}
          y={y + r * rh + rh * 0.25}
          width={cw * 0.5}
          height={rh * 0.5}
          fill={on ? lit : dim}
        />,
      );
    }
  }
  return <g>{cells}</g>;
}

function Sky({ id, top, bottom }: { id: string; top: string; bottom: string }) {
  return (
    <>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#${id})`} />
    </>
  );
}

function Palm({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M0 0 Q6 -40 2 -80"
        stroke="#6B4A2B"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <g stroke="#2F7D4F" strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M2 -80 Q-26 -92 -44 -70" />
        <path d="M2 -80 Q-18 -104 -34 -96" />
        <path d="M2 -80 Q26 -96 46 -72" />
        <path d="M2 -80 Q20 -108 38 -98" />
        <path d="M2 -80 Q2 -108 6 -112" />
      </g>
    </g>
  );
}

function Souq() {
  const arches = Array.from({ length: 7 }, (_, i) => 92 + i * 88);
  return (
    <>
      <Sky id="souq-sky" top="#F9D9A8" bottom="#FCEFD9" />
      <circle cx="650" cy="110" r="46" fill="#F6B25C" opacity="0.85" />
      <rect y="408" width="800" height="92" fill="#D9B98C" />
      <rect y="408" width="800" height="6" fill="#C79F6E" />
      <rect x="40" y="206" width="720" height="204" fill="#E9CDA0" />
      <rect x="40" y="190" width="720" height="20" fill="#D5B07C" />
      {Array.from({ length: 30 }, (_, i) => (
        <rect key={i} x={46 + i * 24} y="174" width="14" height="18" fill="#D5B07C" />
      ))}
      {[52, 694].map((x) => (
        <g key={x}>
          <rect x={x} y="110" width="54" height="84" fill="#D5B07C" />
          <path d={`M${x - 6} 112 L${x + 27} 74 L${x + 60} 112 Z`} fill="#B98B55" />
          <path d={`M${x + 15} 168 v-26 a12 12 0 0 1 24 0 v26 Z`} fill="#6B4A2B" />
        </g>
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <rect
          key={i}
          x={40 + i * 51.5}
          y="218"
          width="26"
          height="14"
          fill={i % 2 ? "#FFFFFF" : "#1769AA"}
        />
      ))}
      {arches.map((x, i) => (
        <g key={x}>
          <path d={`M${x} 408 V318 a28 28 0 0 1 56 0 V408 Z`} fill="#5B3E26" />
          <path d={`M${x + 6} 408 V320 a22 22 0 0 1 44 0 V408 Z`} fill="#F4C45A" />
          <rect x={x + 8} y="352" width="40" height="4" fill="#B8862B" />
          <rect x={x + 8} y="378" width="40" height="4" fill="#B8862B" />
          <circle cx={x + 28} cy="252" r="5" fill="#FFE9A8" />
          <path d={`M${x + 28} 232 V247`} stroke="#6B4A2B" strokeWidth="2" />
          {i % 2 === 0 && (
            <rect x={x + 12} y="388" width="14" height="16" fill="#C0392B" opacity="0.8" />
          )}
        </g>
      ))}
      <path d="M0 450 H800" stroke="#C79F6E" strokeWidth="3" />
    </>
  );
}

function Dhow({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M-10 -14 Q0 0 8 0 H150 Q156 -6 162 -16 Q168 4 150 26 Q80 42 14 26 Q0 16 -10 -14 Z"
        fill="#6B3F22"
      />
      <rect x="40" y="-22" width="44" height="22" fill="#8C5A33" />
      <path d="M80 0 V-122" stroke="#3A2615" strokeWidth="4" />
      <path d="M80 -118 L6 -8 H122 Z" fill="#F4EBD8" />
      <path d="M-10 6 H160" stroke="#E7C27D" strokeWidth="3" />
    </g>
  );
}

function Creek() {
  return (
    <>
      <Sky id="creek-sky" top="#1F3B5C" bottom="#F2A65A" />
      <circle cx="560" cy="300" r="40" fill="#FFD9A0" />
      <rect y="300" width="800" height="200" fill="#1F4466" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={540 - i * 6 + (i % 2) * 6}
          y={310 + i * 14}
          width={40 + i * 12}
          height="4"
          fill="#FFD9A0"
          opacity={0.55 - i * 0.07}
        />
      ))}
      {[
        [0, 250, 80],
        [80, 270, 70],
        [150, 240, 90],
        [240, 262, 60],
        [300, 276, 70],
        [620, 258, 80],
        [700, 244, 100],
      ].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={300 - y} fill="#22364F" />
          <Windows
            x={x}
            y={y + 6}
            w={w}
            h={300 - y - 8}
            cols={Math.floor(w / 14)}
            rows={3}
            seed={i}
          />
        </g>
      ))}
      <rect x="352" y="214" width="10" height="86" fill="#22364F" />
      <path d="M350 216 L357 190 L364 216 Z" fill="#22364F" />
      <Dhow x={90} y={400} s={1.5} />
      <Dhow x={470} y={380} s={1.1} />
      <Dhow x={660} y={350} s={0.6} />
    </>
  );
}

function BurjShape({ fill }: { fill: string }) {
  return (
    <path
      d="M356 420 V330 H364 V270 H372 V210 H380 V160 H387 V110 H392 V80 H398 L400 30 L402 80 H408 V110 H413 V160 H420 V210 H428 V270 H436 V330 H444 V420 Z"
      fill={fill}
    />
  );
}

function Burj() {
  return (
    <>
      <Sky id="burj-sky" top="#0B1A33" bottom="#26507F" />
      {[
        [60, 40],
        [140, 90],
        [230, 30],
        [560, 60],
        [650, 110],
        [730, 40],
        [480, 120],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#fff" opacity="0.8" />
      ))}
      <circle cx="680" cy="80" r="22" fill="#F5F0DC" opacity="0.9" />
      {[
        [40, 300, 70],
        [110, 260, 60],
        [170, 320, 70],
        [250, 280, 60],
        [500, 290, 70],
        [570, 250, 60],
        [630, 310, 70],
        [700, 270, 80],
      ].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={420 - y} fill="#14284A" />
          <Windows
            x={x}
            y={y + 6}
            w={w}
            h={420 - y - 8}
            cols={Math.floor(w / 12)}
            rows={Math.floor((420 - y) / 16)}
            seed={i}
          />
        </g>
      ))}
      <rect y="420" width="800" height="80" fill="#0F2748" />
      <g opacity="0.25" transform="translate(0 840) scale(1 -1)">
        <BurjShape fill="#C9D6E8" />
      </g>
      <BurjShape fill="#C9D6E8" />
      <path d="M400 30 V420" stroke="#8FA6C4" strokeWidth="2" />
      <path d="M356 420 V330 H364 V270 H372 V420 Z" fill="#8FA6C4" opacity="0.45" />
      <g stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M290 446 Q330 380 372 446" />
        <path d="M310 446 Q345 400 380 446" />
        <path d="M428 446 Q470 380 510 446" />
        <path d="M420 446 Q455 400 490 446" />
        <path d="M385 450 Q400 410 415 450" />
      </g>
      <g fill="#FFE9A8">
        {Array.from({ length: 16 }, (_, i) => (
          <circle key={i} cx={270 + i * 17} cy="455" r="2" />
        ))}
      </g>
    </>
  );
}

function Canal() {
  return (
    <>
      <Sky id="canal-sky" top="#3B2A66" bottom="#F5A07A" />
      <g transform="translate(0 -48) scale(1)">
        <g transform="translate(400 380) scale(0.34) translate(-400 -420)" opacity="0.8">
          <BurjShape fill="#3C3F6E" />
        </g>
      </g>
      {[
        [0, 190, 70],
        [70, 150, 60],
        [130, 220, 60],
        [190, 170, 66],
        [256, 250, 60],
        [484, 250, 60],
        [544, 170, 66],
        [610, 220, 60],
        [670, 150, 60],
        [730, 190, 70],
      ].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={340 - y} fill="#2A2554" />
          <Windows
            x={x}
            y={y + 8}
            w={w}
            h={340 - y - 10}
            cols={Math.floor(w / 12)}
            rows={Math.floor((340 - y) / 18)}
            seed={i + 2}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="canal-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7A6FA8" />
          <stop offset="1" stopColor="#2E4C7A" />
        </linearGradient>
      </defs>
      <path d="M0 340 H800 V500 H0 Z" fill="#3A3366" />
      <path d="M340 340 H460 L720 500 H80 Z" fill="url(#canal-water)" />
      {[380, 420, 460, 520].map((y, i) => (
        <rect
          key={y}
          x={380 - i * 26}
          y={y}
          width={40 + i * 52}
          height="3"
          fill="#FFD9C2"
          opacity="0.4"
        />
      ))}
      <path
        d="M130 480 Q400 250 670 480"
        stroke="#9C6BE8"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M150 484 Q400 290 650 484"
        stroke="#C9A6FF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M130 480 Q400 250 670 480"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 10"
        opacity="0.7"
      />
    </>
  );
}

function BurjAlArab() {
  return (
    <>
      <Sky id="ba-sky" top="#7CC4F0" bottom="#EAF6FF" />
      <circle cx="150" cy="90" r="40" fill="#FFF3C4" />
      <rect y="330" width="800" height="100" fill="#2A8FD0" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={60 + i * 150}
          y={350 + (i % 3) * 22}
          width="70"
          height="3"
          fill="#fff"
          opacity="0.6"
        />
      ))}
      <rect y="420" width="800" height="80" fill="#F0DDB4" />
      <path
        d="M0 420 Q200 408 400 420 T800 420"
        stroke="#fff"
        strokeWidth="5"
        fill="none"
        opacity="0.7"
      />
      {[40, 110, 180].map((x, i) => (
        <g key={x}>
          <rect x={x} y={392 - (i % 2) * 6} width="56" height={30 + (i % 2) * 6} fill="#F5EFE3" />
          <path d={`M${x + 18} ${422} v-14 a10 10 0 0 1 20 0 v14 Z`} fill="#B8A57E" />
        </g>
      ))}
      <ellipse cx="470" cy="340" rx="140" ry="12" fill="#D9C79B" />
      <path
        d="M432 70 C560 110 600 250 530 338 L432 338 Z"
        fill="#FFFFFF"
        stroke="#BFD6E8"
        strokeWidth="2"
      />
      {[100, 150, 200, 250].map((y) => (
        <path
          key={y}
          d={`M432 ${y} Q500 ${y + 24} ${540 - (y - 100) * 0.12} ${y + 60}`}
          stroke="#BFD6E8"
          strokeWidth="2"
          fill="none"
        />
      ))}
      <rect x="410" y="52" width="24" height="288" fill="#DCE8F2" />
      {[80, 120, 160, 200, 240, 280].map((y) => (
        <path key={y} d={`M410 ${y} L434 ${y + 20}`} stroke="#9FB8CC" strokeWidth="2" />
      ))}
      <path d="M422 52 V16" stroke="#9FB8CC" strokeWidth="3" />
      <ellipse cx="452" cy="118" rx="22" ry="5" fill="#C9D9E6" />
      <Palm x={650} y={440} s={1.2} />
      <Palm x={730} y={450} />
    </>
  );
}

function SkiMall() {
  return (
    <>
      <Sky id="ski-sky" top="#6FB8F0" bottom="#E8F4FC" />
      <circle cx="680" cy="80" r="34" fill="#FFF3C4" />
      <rect x="60" y="310" width="680" height="96" fill="#DDE5EE" />
      <rect x="60" y="326" width="680" height="30" fill="#7FB6DE" opacity="0.7" />
      <defs>
        <linearGradient id="ski-slope" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#F4F9FD" />
          <stop offset="1" stopColor="#BFE0F5" />
        </linearGradient>
      </defs>
      <path
        d="M120 310 L590 96 L690 134 L200 336 Z"
        fill="url(#ski-slope)"
        stroke="#8FBFE0"
        strokeWidth="3"
      />
      {Array.from({ length: 11 }, (_, i) => (
        <path
          key={i}
          d={`M${160 + i * 46} ${322 - i * 20.4} L${200 + i * 46 + 6} ${340 - i * 20.4 - 4}`}
          stroke="#8FBFE0"
          strokeWidth="2"
        />
      ))}
      <g stroke="#101C2C" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M400 214 L408 196 L416 206" />
        <path d="M392 222 L424 214" />
        <circle cx="408" cy="190" r="3" fill="#101C2C" />
      </g>
      <rect x="330" y="360" width="140" height="46" fill="#9FB6CC" />
      <path d="M320 360 H480 L470 346 H330 Z" fill="#6E8BA8" />
      <rect y="406" width="800" height="94" fill="#59657A" />
      <path d="M0 450 H800" stroke="#fff" strokeWidth="3" strokeDasharray="30 22" />
      <Palm x={110} y={420} s={1.1} />
      <Palm x={700} y={420} s={1.1} />
    </>
  );
}

function Circle() {
  const blocks = Array.from({ length: 16 }, (_, i) => (i / 16) * Math.PI * 2);
  const roofs = ["#E8765B", "#1769AA", "#F2B84B", "#7A8CA5"];
  return (
    <>
      <rect width="800" height="500" fill="#D6EBD8" />
      <circle cx="400" cy="250" r="196" fill="none" stroke="#AAB6C4" strokeWidth="36" />
      <circle
        cx="400"
        cy="250"
        r="196"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeDasharray="14 12"
      />
      <circle cx="400" cy="250" r="168" fill="#9FD1A6" />
      <path d="M400 82 V418 M232 250 H568" stroke="#fff" strokeWidth="6" />
      <circle cx="400" cy="250" r="62" fill="#C9E7CF" stroke="#fff" strokeWidth="4" />
      <ellipse cx="400" cy="250" rx="34" ry="24" fill="#7CC4F0" />
      {[
        [300, 150],
        [510, 160],
        [320, 340],
        [500, 330],
        [270, 250],
        [540, 250],
        [400, 150],
        [400, 350],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="13" fill="#2F7D4F" opacity="0.85" />
      ))}
      {blocks.map((a, i) => {
        const x = 400 + Math.cos(a) * 246;
        const y = 250 + Math.sin(a) * 214;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${(a * 180) / Math.PI + 90})`}>
            <rect x="-24" y="-15" width="48" height="30" rx="3" fill="#fff" stroke="#CBD5E1" />
            <rect x="-24" y="-15" width="48" height="9" rx="3" fill={roofs[i % 4]} />
          </g>
        );
      })}
    </>
  );
}

function Lakes() {
  const left: [number, number, number][] = [
    [30, 190, 62],
    [92, 150, 58],
    [150, 210, 60],
    [210, 170, 60],
    [270, 230, 56],
  ];
  const right: [number, number, number][] = [
    [490, 230, 56],
    [546, 170, 60],
    [606, 210, 60],
    [666, 150, 58],
    [724, 190, 62],
  ];
  const skyline = (
    <g>
      {[...left, ...right].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={330 - y} fill="#2D5E8C" />
          <Windows
            x={x}
            y={y + 8}
            w={w}
            h={330 - y - 10}
            cols={Math.floor(w / 11)}
            rows={Math.floor((330 - y) / 15)}
            seed={i}
            lit="#BFE6FF"
            dim="rgba(255,255,255,0.18)"
          />
        </g>
      ))}
      <path d="M360 330 V130 L400 56 L440 130 V330 Z" fill="#1F4A74" />
      <path d="M400 56 L440 130 V330 H400 Z" fill="#3F7FB5" />
      <path d="M400 56 V30" stroke="#1F4A74" strokeWidth="3" />
    </g>
  );
  return (
    <>
      <Sky id="lakes-sky" top="#4AA3E0" bottom="#D9EFFB" />
      <circle cx="120" cy="70" r="30" fill="#FFF3C4" />
      <rect y="330" width="800" height="170" fill="#3C8EC9" />
      {skyline}
      <g opacity="0.3" transform="translate(0 660) scale(1 -1)">
        {skyline}
      </g>
      <rect y="330" width="800" height="14" fill="#D9C79B" />
      <Palm x={330} y={340} />
      <Palm x={470} y={340} />
      <Palm x={60} y={342} s={0.8} />
      <Palm x={750} y={342} s={0.8} />
    </>
  );
}

function Marina() {
  const slices = Array.from({ length: 22 }, (_, i) => i);
  const towers: [number, number, number][] = [
    [30, 170, 70],
    [110, 120, 64],
    [380, 150, 70],
    [460, 90, 66],
    [540, 160, 70],
    [620, 110, 64],
    [695, 180, 75],
  ];
  return (
    <>
      <Sky id="marina-sky" top="#2B3F6B" bottom="#F4B58A" />
      <circle cx="660" cy="70" r="20" fill="#F5F0DC" opacity="0.9" />
      {towers.map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={360 - y} fill="#34507E" />
          <Windows
            x={x}
            y={y + 6}
            w={w}
            h={360 - y - 8}
            cols={Math.floor(w / 11)}
            rows={Math.floor((360 - y) / 14)}
            seed={i + 1}
          />
        </g>
      ))}
      {slices.map((i) => (
        <rect
          key={i}
          x={238 + Math.sin(i * 0.5) * 16}
          y={90 + i * 12.3}
          width="58"
          height="13"
          fill={i % 2 ? "#5B7FB0" : "#6D92C4"}
        />
      ))}
      <rect y="360" width="800" height="140" fill="#1E3A63" />
      <path d="M0 372 H800" stroke="#FFE9A8" strokeWidth="3" strokeDasharray="3 14" />
      {[120, 330, 520, 690].map((x, i) => (
        <g key={x} transform={`translate(${x} ${420 + (i % 2) * 24})`}>
          <path d="M0 0 H92 L80 18 H12 Z" fill="#F5F7FA" />
          <rect x="24" y="-14" width="40" height="14" fill="#9FB6CC" />
          <path d="M46 -14 V-52" stroke="#F5F7FA" strokeWidth="3" />
        </g>
      ))}
    </>
  );
}

function Atlantis() {
  return (
    <>
      <Sky id="atl-sky" top="#2B3A67" bottom="#FBD79A" />
      <circle cx="400" cy="330" r="46" fill="#FFE3A8" />
      <rect y="340" width="800" height="160" fill="#2C5C86" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={340 - i * 12}
          y={352 + i * 18}
          width={120 + i * 24}
          height="4"
          fill="#FFE3A8"
          opacity={0.6 - i * 0.12}
        />
      ))}
      {[
        [40, 300, 150],
        [610, 300, 150],
      ].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height="60" fill="#D8A27A" />
          <Windows
            x={x}
            y={y + 4}
            w={w}
            h={52}
            cols={12}
            rows={3}
            seed={i}
            lit="#FFF3C4"
            dim="rgba(120,70,40,0.35)"
          />
        </g>
      ))}
      {[250, 460].map((x) => (
        <g key={x}>
          <rect x={x} y="170" width="90" height="190" fill="#E7B58F" />
          <rect x={x + 8} y="130" width="74" height="44" fill="#E7B58F" />
          <rect x={x + 18} y="100" width="54" height="32" fill="#E7B58F" />
          <Windows
            x={x + 4}
            y={178}
            w={82}
            h={176}
            cols={7}
            rows={14}
            seed={x}
            lit="#FFF3C4"
            dim="rgba(120,70,40,0.3)"
          />
        </g>
      ))}
      <path d="M270 150 Q400 20 530 150" stroke="#E7B58F" strokeWidth="30" fill="none" />
      <rect x="338" y="120" width="124" height="14" fill="#C98E66" opacity="0.5" />
      <rect y="420" width="800" height="10" fill="#8C9BB0" />
      {[60, 220, 380, 540, 700].map((x) => (
        <rect key={x} x={x} y="430" width="12" height="70" fill="#6F7F95" />
      ))}
      <rect x="470" y="396" width="190" height="24" rx="10" fill="#F5F7FA" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={482 + i * 22} y="401" width="14" height="9" fill="#2C5C86" />
      ))}
    </>
  );
}

function RoofUnit({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="26" height="14" fill="#DDE3EA" />
      <circle cx={x + 8} cy={y + 7} r="5" fill="#8C99AA" />
      <circle cx={x + 19} cy={y + 7} r="5" fill="#8C99AA" />
    </g>
  );
}

function Warehouses() {
  return (
    <>
      <Sky id="wh-sky" top="#7FBBE6" bottom="#FDF1D8" />
      <circle cx="660" cy="96" r="42" fill="#FFE3A3" />
      <rect y="396" width="800" height="104" fill="#CFC3B0" />
      <rect y="396" width="800" height="5" fill="#B8AB95" />
      {[
        { x: 30, w: 250, h: 150, c: "#E8E1D2", d: "#8C99AA" },
        { x: 300, w: 240, h: 190, c: "#C97B5A", d: "#7B3E2A" },
        { x: 560, w: 220, h: 140, c: "#6FA8A0", d: "#2F6660" },
      ].map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={396 - b.h} width={b.w} height={b.h} fill={b.c} />
          <path
            d={`M${b.x - 8} ${396 - b.h} L${b.x + b.w / 2} ${396 - b.h - 34} L${b.x + b.w + 8} ${396 - b.h} Z`}
            fill="#55627A"
            opacity="0.9"
          />
          <rect x={b.x + 24} y={396 - 96} width={b.w / 2 - 12} height="96" fill={b.d} />
          {Array.from({ length: 5 }, (_, k) => (
            <rect
              key={k}
              x={b.x + 24}
              y={396 - 96 + k * 19}
              width={b.w / 2 - 12}
              height="3"
              fill="rgba(0,0,0,0.25)"
            />
          ))}
          <rect
            x={b.x + b.w / 2 + 28}
            y={396 - 86}
            width={b.w / 2 - 56}
            height="38"
            fill="#2C4A6A"
            opacity="0.8"
          />
          <RoofUnit x={b.x + 28 + i * 6} y={396 - b.h - 18} />
          <RoofUnit x={b.x + b.w - 60} y={396 - b.h - 18} />
        </g>
      ))}
      <rect x="120" y="430" width="120" height="44" rx="4" fill="#F4F6F8" />
      <rect x="240" y="440" width="52" height="34" rx="4" fill="#1769AA" />
      <circle cx="150" cy="478" r="10" fill="#3A4556" />
      <circle cx="270" cy="478" r="10" fill="#3A4556" />
      <path d="M400 452 H700" stroke="#B8AB95" strokeWidth="4" strokeDasharray="22 16" />
    </>
  );
}

function Villas() {
  return (
    <>
      <Sky id="vil-sky" top="#9AD0EE" bottom="#FCEFD8" />
      <circle cx="140" cy="100" r="40" fill="#FFE9A8" opacity="0.9" />
      <rect y="380" width="800" height="120" fill="#B9C79A" />
      <rect y="440" width="800" height="60" fill="#6F7F95" />
      <path d="M0 470 H800" stroke="#E9EEF3" strokeWidth="3" strokeDasharray="28 20" />
      {[60, 300, 540].map((x, i) => (
        <g key={x}>
          <rect x={x} y="250" width="200" height="132" fill={i === 1 ? "#F6E7CF" : "#F4EEE4"} />
          <rect x={x - 6} y="244" width="212" height="12" fill="#D9C7A6" />
          <rect x={x + 120} y="200" width="80" height="50" fill={i === 1 ? "#F6E7CF" : "#F4EEE4"} />
          <rect x={x + 114} y="194" width="92" height="10" fill="#D9C7A6" />
          {[x + 16, x + 76].map((wx) => (
            <path
              key={wx}
              d={`M${wx} 330 v-34 a16 16 0 0 1 32 0 v34 Z`}
              fill="#2C4A6A"
              opacity="0.85"
            />
          ))}
          <path d={`M${x + 140} 382 v-44 a20 20 0 0 1 40 0 v44 Z`} fill="#8C5A33" />
          <rect x={x + 130} y="216" width="28" height="24" fill="#2C4A6A" opacity="0.8" />
          <rect x={x + 164} y="216" width="28" height="24" fill="#2C4A6A" opacity="0.8" />
          <RoofUnit x={x + 20} y={230} />
          <rect x={x - 10} y="360" width="220" height="22" fill="#9DB27A" />
        </g>
      ))}
      <Palm x={270} y={384} s={0.9} />
      <Palm x={510} y={384} s={1} />
      <Palm x={760} y={384} s={0.9} />
    </>
  );
}

function Heights() {
  return (
    <>
      <Sky id="hts-sky" top="#5AA6E0" bottom="#E8F3FB" />
      <circle cx="680" cy="90" r="40" fill="#FFF0BF" />
      <rect y="410" width="800" height="90" fill="#5B687C" />
      <path d="M0 460 H800" stroke="#E9EEF3" strokeWidth="3" strokeDasharray="30 20" />
      {[
        { x: 250, w: 100, h: 270, c: "#2C6FA3" },
        { x: 372, w: 96, h: 330, c: "#1F4F7A" },
        { x: 490, w: 100, h: 250, c: "#4A8BC0" },
        { x: 612, w: 90, h: 200, c: "#2C6FA3" },
      ].map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={410 - b.h} width={b.w} height={b.h} fill={b.c} />
          <Windows
            x={b.x + 4}
            y={410 - b.h + 8}
            w={b.w - 8}
            h={b.h - 12}
            cols={6}
            rows={Math.floor(b.h / 22)}
            seed={i}
            lit="#E8F6FF"
            dim="rgba(255,255,255,0.22)"
          />
        </g>
      ))}
      <path d="M420 80 V50" stroke="#1F4F7A" strokeWidth="4" />
      <rect x="30" y="330" width="190" height="80" fill="#DDE3EA" />
      <rect x="30" y="322" width="190" height="10" fill="#B8C2CE" />
      {[56, 108, 160].map((x) => (
        <g key={x}>
          <rect x={x} y="296" width="40" height="28" fill="#C7D0DB" />
          <circle cx={x + 20} cy="310" r="11" fill="#8C99AA" />
          <circle cx={x + 20} cy="310" r="4" fill="#DDE3EA" />
        </g>
      ))}
      <path d="M220 368 H252" stroke="#35A8E8" strokeWidth="8" />
      <path d="M220 392 H252" stroke="#E36A5D" strokeWidth="8" />
      <path
        d="M76 288 q-8 -18 6 -30 M128 288 q-8 -18 6 -30 M180 288 q-8 -18 6 -30"
        stroke="#FFFFFF"
        strokeWidth="6"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
    </>
  );
}

function Market() {
  return (
    <>
      <Sky id="mkt-sky" top="#F7C58F" bottom="#FDEFD9" />
      <circle cx="400" cy="110" r="44" fill="#FFD9A0" opacity="0.8" />
      <rect y="420" width="800" height="80" fill="#8C8F98" />
      {[20, 290, 560].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="150"
            width="220"
            height="270"
            fill={["#E9D2B0", "#D8B08C", "#EADBC3"][i]}
          />
          <rect x={x - 6} y="144" width="232" height="10" fill="#B9926A" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2].map((c) => (
              <g key={`${r}-${c}`}>
                <rect
                  x={x + 18 + c * 68}
                  y={170 + r * 60}
                  width="46"
                  height="40"
                  fill="#2C4A6A"
                  opacity="0.75"
                />
                {(r + c + i) % 3 === 0 && (
                  <rect
                    x={x + 22 + c * 68}
                    y={200 + r * 60}
                    width="26"
                    height="14"
                    fill="#F4F6F8"
                  />
                )}
              </g>
            )),
          )}
        </g>
      ))}
      <path d="M250 420 V330 Q400 250 550 330 V420" fill="none" stroke="#B9926A" strokeWidth="10" />
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M${262 + i * 34} ${324 - Math.sin((i / 8) * Math.PI) * 52 + 34} l12 0 l-6 16 Z`}
          fill={["#C0392B", "#F4C45A", "#1769AA"][i % 3]}
        />
      ))}
      <rect x="300" y="380" width="200" height="40" fill="#C9A77A" />
      {[320, 380, 440].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="360"
          width="44"
          height="24"
          fill={["#E36A5D", "#7FB069", "#F4C45A"][i]}
        />
      ))}
    </>
  );
}

function Street() {
  return (
    <>
      <Sky id="st-sky" top="#F5A878" bottom="#FCE6C6" />
      <circle cx="170" cy="150" r="48" fill="#FFD27A" opacity="0.9" />
      <rect y="420" width="800" height="80" fill="#7E7A78" />
      <rect y="414" width="800" height="8" fill="#B5AEA4" />
      <rect x="20" y="210" width="230" height="206" fill="#E9D7BB" />
      <rect x="14" y="204" width="242" height="10" fill="#B9926A" />
      <Windows
        x={30}
        y={226}
        w={210}
        h={150}
        cols={5}
        rows={3}
        seed={3}
        lit="#FFE9A8"
        dim="rgba(40,60,90,0.55)"
      />
      <rect x="270" y="170" width="260" height="246" fill="#F2F0EA" />
      <rect x="270" y="166" width="260" height="8" fill="#C9C2B4" />
      <g>
        <rect x="286" y="190" width="228" height="200" fill="#1769AA" />
        <circle cx="350" cy="260" r="40" fill="#F4C45A" />
        <path d="M400 390 V300 L450 240 L500 300 V390 Z" fill="#E36A5D" />
        <path d="M286 390 L340 310 L395 390 Z" fill="#35A8E8" />
        <circle cx="460" cy="214" r="14" fill="#FFFFFF" opacity="0.9" />
      </g>
      <rect x="550" y="240" width="230" height="176" fill="#D9A27C" />
      <rect x="544" y="234" width="242" height="10" fill="#B77A55" />
      <Windows
        x={562}
        y={256}
        w={206}
        h={120}
        cols={5}
        rows={3}
        seed={1}
        lit="#FFE9A8"
        dim="rgba(40,60,90,0.55)"
      />
      <Palm x={258} y={416} s={0.95} />
      <rect x="536" y="300" width="4" height="116" fill="#3A4556" />
      <circle cx="538" cy="296" r="9" fill="#FFE9A8" />
    </>
  );
}

function WindTowers() {
  return (
    <>
      <Sky id="wt-sky" top="#F2B27A" bottom="#FDEBD0" />
      <circle cx="610" cy="120" r="46" fill="#FFD9A0" />
      <rect y="372" width="800" height="128" fill="#3F7FAE" />
      <path
        d="M0 400 q40 -8 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0"
        stroke="#7FB8DB"
        strokeWidth="3"
        fill="none"
      />
      <rect y="352" width="800" height="24" fill="#D7B98A" />
      {[40, 250, 470, 640].map((x, i) => (
        <g key={x}>
          <rect x={x} y="250" width={i % 2 ? 150 : 180} height="104" fill="#E5CFA6" />
          <rect x={x - 6} y="244" width={(i % 2 ? 150 : 180) + 12} height="10" fill="#C9A877" />
          <rect x={x + 22} y="150" width="46" height="96" fill="#D9BD90" />
          <rect x={x + 18} y="140" width="54" height="14" fill="#C9A877" />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={x + 30} y={164 + k * 18} width="30" height="9" fill="#6B4A2B" />
          ))}
          <path d={`M${x + 100} 354 v-34 a16 16 0 0 1 32 0 v34 Z`} fill="#6B4A2B" />
        </g>
      ))}
      <g transform="translate(310 410)">
        <path d="M0 0 H150 Q160 0 168 -14 Q150 26 8 22 Q2 10 0 0 Z" fill="#6B3F22" />
        <rect x="26" y="-30" width="110" height="26" fill="#F4EBD8" />
        <rect x="26" y="-34" width="110" height="6" fill="#1769AA" />
      </g>
      <Palm x={216} y={354} s={0.8} />
    </>
  );
}

function Pond() {
  return (
    <>
      <Sky id="pd-sky" top="#80C2EC" bottom="#EAF5FB" />
      <circle cx="120" cy="96" r="38" fill="#FFF0BF" />
      <rect y="410" width="800" height="90" fill="#8FBF86" />
      <ellipse cx="400" cy="450" rx="230" ry="36" fill="#4A9CC9" />
      <path
        d="M400 440 v-52 M392 420 q8 -30 16 0 M384 430 q16 -42 32 0"
        stroke="#E9F6FF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {[
        { x: 30, w: 110, h: 220 },
        { x: 160, w: 120, h: 280 },
        { x: 520, w: 120, h: 260 },
        { x: 660, w: 110, h: 200 },
      ].map((b, i) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={410 - b.h}
            width={b.w}
            height={b.h}
            fill={["#E8D8BD", "#D9C3A0", "#CFE0EC", "#E9DCC8"][i]}
          />
          <Windows
            x={b.x + 6}
            y={410 - b.h + 10}
            w={b.w - 12}
            h={b.h - 16}
            cols={5}
            rows={Math.floor(b.h / 24)}
            seed={i}
            lit="#FFF1B8"
            dim="rgba(44,74,106,0.45)"
          />
        </g>
      ))}
      <rect y="316" width="800" height="8" fill="#8C99AA" />
      {[100, 330, 560, 760].map((x) => (
        <rect key={x} x={x} y="324" width="10" height="86" fill="#8C99AA" />
      ))}
      <g transform="translate(300 270)">
        <rect width="230" height="40" rx="14" fill="#F4F6F8" />
        <rect y="26" width="230" height="8" fill="#2E9E5E" />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} x={12 + i * 31} y="10" width="20" height="12" fill="#2C4A6A" />
        ))}
      </g>
    </>
  );
}

function Hills() {
  return (
    <>
      <Sky id="hl-sky" top="#5CAEE6" bottom="#EAF5FB" />
      <circle cx="680" cy="92" r="40" fill="#FFF0BF" />
      {[
        { x: 120, w: 60, h: 190 },
        { x: 200, w: 70, h: 250 },
        { x: 292, w: 56, h: 170 },
        { x: 560, w: 64, h: 210 },
        { x: 640, w: 70, h: 160 },
      ].map((b, i) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={330 - b.h}
            width={b.w}
            height={b.h}
            fill={["#9CB7CF", "#7FA0BE", "#B3C7D8", "#8FADC8", "#A7BFD3"][i]}
          />
          <Windows
            x={b.x + 4}
            y={330 - b.h + 8}
            w={b.w - 8}
            h={b.h - 12}
            cols={4}
            rows={Math.floor(b.h / 20)}
            seed={i}
            lit="#FFFFFF"
            dim="rgba(255,255,255,0.28)"
          />
        </g>
      ))}
      <rect x="350" y="280" width="200" height="56" fill="#E9EEF3" />
      <path d="M350 280 q100 -30 200 0 Z" fill="#9CC4E4" />
      <path d="M0 360 Q200 310 400 350 T800 330 V500 H0 Z" fill="#6FB36B" />
      <path d="M0 420 Q220 380 440 410 T800 400 V500 H0 Z" fill="#4E9A58" />
      <ellipse cx="260" cy="440" rx="90" ry="14" fill="#E9D9A8" />
      <path d="M560 400 V350" stroke="#F4F6F8" strokeWidth="3" />
      <path d="M560 350 l36 10 l-36 10 Z" fill="#E36A5D" />
      <ellipse cx="560" cy="402" rx="30" ry="6" fill="#8FD18F" />
    </>
  );
}

function Ranches() {
  return (
    <>
      <Sky id="rn-sky" top="#7FBFE9" bottom="#FCEBD2" />
      <circle cx="640" cy="100" r="42" fill="#FFE3A3" />
      <path d="M0 330 Q150 290 320 330 T800 320 V500 H0 Z" fill="#E4C689" />
      <rect y="376" width="800" height="124" fill="#7FB86E" />
      <path d="M0 376 H800" stroke="#5E9C52" strokeWidth="5" />
      {[60, 150].map((x) => (
        <g key={x}>
          <path d={`M${x} 470 V402`} stroke="#F4F6F8" strokeWidth="6" />
          <path d={`M${x + 190} 470 V402`} stroke="#F4F6F8" strokeWidth="6" />
        </g>
      ))}
      <path d="M60 402 H110 M250 402 H300" stroke="#F4F6F8" strokeWidth="4" />
      {[330, 530].map((x, i) => (
        <g key={x}>
          <rect x={x} y="256" width="180" height="120" fill={i ? "#F2D9B5" : "#F6E7CF"} />
          <path d={`M${x - 10} 258 L${x + 90} 206 L${x + 190} 258 Z`} fill="#B5573A" />
          <path d={`M${x + 24} 376 v-44 a22 22 0 0 1 44 0 v44 Z`} fill="#6B4A2B" />
          <path d={`M${x + 112} 376 v-44 a22 22 0 0 1 44 0 v44 Z`} fill="#6B4A2B" />
          <path d={`M${x + 30} 308 v-22 a12 12 0 0 1 24 0 v22 Z`} fill="#2C4A6A" opacity="0.85" />
          <path d={`M${x + 126} 308 v-22 a12 12 0 0 1 24 0 v22 Z`} fill="#2C4A6A" opacity="0.85" />
        </g>
      ))}
      <Palm x={300} y={380} s={1.1} />
      <Palm x={730} y={380} s={1} />
    </>
  );
}

function Clusters() {
  return (
    <>
      <Sky id="cl-sky" top="#86C5EC" bottom="#FDF1DB" />
      <circle cx="90" cy="96" r="38" fill="#FFE9A8" />
      <rect y="410" width="800" height="90" fill="#C9C2B4" />
      <path d="M0 462 H800" stroke="#E9EEF3" strokeWidth="3" strokeDasharray="28 20" />
      {[
        { x: 30, w: 160, h: 150, c: "#F4D9A8", roof: "dome" },
        { x: 210, w: 150, h: 120, c: "#E9A58A", roof: "flat" },
        { x: 440, w: 160, h: 160, c: "#F2E2C4", roof: "dome" },
        { x: 620, w: 150, h: 120, c: "#9FC3D8", roof: "flat" },
      ].map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={410 - b.h} width={b.w} height={b.h} fill={b.c} />
          {b.roof === "dome" ? (
            <path d={`M${b.x + 24} ${410 - b.h} a56 56 0 0 1 ${b.w - 48} 0 Z`} fill="#2F8F8F" />
          ) : (
            <rect x={b.x - 4} y={410 - b.h - 8} width={b.w + 8} height="10" fill="#B88F66" />
          )}
          <Windows
            x={b.x + 10}
            y={410 - b.h + 14}
            w={b.w - 20}
            h={b.h - 40}
            cols={5}
            rows={Math.floor(b.h / 32)}
            seed={i}
            lit="#FFF1B8"
            dim="rgba(44,74,106,0.5)"
          />
          <RoofUnit x={b.x + 16 + (i % 2) * 8} y={410 - b.h - 20} />
        </g>
      ))}
      <g>
        <rect x="372" y="300" width="12" height="110" fill="#C0392B" />
        <rect x="396" y="300" width="12" height="110" fill="#C0392B" />
        <path d="M352 306 L390 262 L428 306 Z" fill="#2C4A6A" />
        <path d="M344 312 H436" stroke="#F4C45A" strokeWidth="6" strokeLinecap="round" />
      </g>
      <Palm x={420} y={412} s={0.7} />
    </>
  );
}

const scenes: Record<AreaScene, () => ReactNode> = {
  souq: Souq,
  creek: Creek,
  burj: Burj,
  canal: Canal,
  "burj-al-arab": BurjAlArab,
  "ski-mall": SkiMall,
  circle: Circle,
  lakes: Lakes,
  marina: Marina,
  atlantis: Atlantis,
  warehouses: Warehouses,
  villas: Villas,
  heights: Heights,
  market: Market,
  street: Street,
  windtowers: WindTowers,
  pond: Pond,
  hills: Hills,
  ranches: Ranches,
  clusters: Clusters,
};

export function AreaSceneArt({
  scene,
  label,
  className = "",
}: {
  scene: AreaScene;
  label: string;
  className?: string;
}) {
  const Scene = scenes[scene];
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      className={className}
    >
      <Scene />
    </svg>
  );
}
