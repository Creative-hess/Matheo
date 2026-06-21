"use client";

import { useState } from "react";

interface MapCircleProps {
  onClick?: () => void;
}

export default function MapCircle({ onClick }: MapCircleProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Ouvrir la carte"
      className="relative flex-shrink-0 cursor-pointer"
      style={{
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      {/* Ring 1 — solid, rotating CW */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `2.5px solid ${hovered ? "rgba(163,255,0,0.85)" : "rgba(163,255,0,0.55)"}`,
          boxShadow: hovered
            ? "0 0 40px rgba(163,255,0,0.5), inset 0 0 40px rgba(163,255,0,0.12)"
            : "0 0 22px rgba(163,255,0,0.3), inset 0 0 22px rgba(163,255,0,0.06)",
          animation: "ring-rotate-cw 12s linear infinite",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      />
      {/* Ring 2 — dashed, rotating CCW */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "108%", height: "108%",
          top: "-4%", left: "-4%",
          border: "1.5px dashed rgba(163,255,0,0.18)",
          animation: "ring-rotate-ccw 20s linear infinite",
        }}
      />
      {/* Ring 3 — faint, rotating CW slow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "116%", height: "116%",
          top: "-8%", left: "-8%",
          border: "1px solid rgba(163,255,0,0.07)",
          animation: "ring-rotate-cw 30s linear infinite",
          animationDirection: "reverse",
        }}
      />

      {/* Scanline sweep overlay */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
        style={{ zIndex: 4 }}
      >
        <div
          className="absolute left-0 w-full"
          style={{
            top: "-100%",
            height: "50%",
            background: "linear-gradient(180deg, transparent 0%, rgba(163,255,0,0.06) 100%)",
            animation: "scanline-sweep 3s linear infinite",
          }}
        />
      </div>

      {/* Inner circle content */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ background: "rgba(8,11,18,1)" }}
      >
        {/* Subtle map grid lines for texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {[40,80,120,160,200,240,280].map((v) => (
            <g key={v}>
              <line x1={v} y1={0} x2={v} y2={320} stroke="#a3ff00" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1={0} y1={v} x2={320} y2={v} stroke="#a3ff00" strokeWidth="0.5" strokeDasharray="4 6" />
            </g>
          ))}
          {/* Road-like shapes */}
          <path d="M0 160 Q80 140 160 165 Q240 185 320 155" stroke="#a3ff00" strokeWidth="3" fill="none" strokeDasharray="12 6" opacity="0.4"/>
          <path d="M160 0 Q150 80 162 160 Q170 240 158 320" stroke="#a3ff00" strokeWidth="3" fill="none" strokeDasharray="12 6" opacity="0.4"/>
          <path d="M0 240 Q100 220 200 235 Q270 245 320 230" stroke="#a3ff00" strokeWidth="2" fill="none" opacity="0.25"/>
          <path d="M0 80  Q120 75 200 85  Q270 90 320 78" stroke="#a3ff00" strokeWidth="2" fill="none" opacity="0.25"/>
          <circle cx="160" cy="160" r="18" stroke="#a3ff00" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <circle cx="160" cy="160" r="6" fill="#a3ff00" opacity="0.7"/>
        </svg>

        {/* Radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(163,255,0,0.06) 0%, rgba(0,0,0,0.6) 70%)",
          }}
        />

        {/* Map icon + label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16"
            style={{
              color: "#a3ff00",
              filter: "drop-shadow(0 0 18px rgba(163,255,0,0.9)) drop-shadow(0 0 40px rgba(163,255,0,0.45))",
              animation: "map-icon-pulse 2.5s ease-in-out infinite",
            }}
            aria-hidden="true"
          >
            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
            <circle cx="12" cy="10" r="2.5" />
            <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5 0 2.63 3.5 6.5 3.5 6.5s3.5-3.87 3.5-6.5C15.5 8.57 13.93 7 12 7z" opacity="0.6"/>
          </svg>
          <span
            className="font-mono font-bold uppercase tracking-[4px] text-base"
            style={{
              color: "#ffffff",
              textShadow: "0 0 14px rgba(163,255,0,0.55)",
            }}
          >
            CARTE
          </span>
        </div>
      </div>
    </div>
  );
}
