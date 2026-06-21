"use client";

import { useState } from "react";

interface OrbitButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  rgbColor: string;
  animationName: string;
  onClick?: () => void;
}

export default function OrbitButton({
  icon,
  label,
  color,
  rgbColor,
  animationName,
  onClick,
}: OrbitButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ width: "140px", height: "140px" }}
    >
      {/* Hover glow halo — expands outward */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: hovered ? "-18px" : "-4px",
          background: `radial-gradient(circle, rgba(${rgbColor},${hovered ? "0.18" : "0"}) 0%, transparent 70%)`,
          transition: "inset 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.4s",
        }}
      />

      {/* Main button */}
      <div
        role="button"
        tabIndex={0}
        aria-label={label}
        className="relative flex items-center justify-center cursor-pointer select-none"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          transform: active
            ? "scale(0.91) translateY(2px)"
            : hovered
            ? "scale(1.14) translateY(-8px)"
            : "scale(1) translateY(0px)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s",
          animation: hovered ? "none" : `${animationName} 3.8s ease-in-out infinite`,
          boxShadow: hovered
            ? `0 18px 45px rgba(${rgbColor},0.45), 0 0 60px rgba(${rgbColor},0.2)`
            : `0 4px 14px rgba(${rgbColor},0.15)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setActive(false); }}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      >
        {/* Dark base */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "rgba(10,13,20,0.88)" }}
        />

        {/* Outer ring — brightens + grows on hover */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: `1.5px solid ${color}`,
            opacity: hovered ? 0.9 : 0.45,
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "opacity 0.35s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: hovered ? `0 0 18px rgba(${rgbColor},0.5)` : "none",
          }}
        />

        {/* Inner ring — counter-scale for depth */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "84%", height: "84%",
            top: "8%", left: "8%",
            border: `1px solid ${color}`,
            opacity: hovered ? 0.55 : 0.22,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "opacity 0.35s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />

        {/* Spin ring — appears only on hover */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "96%", height: "96%",
            top: "2%", left: "2%",
            border: `1px dashed rgba(${rgbColor},${hovered ? "0.45" : "0"})`,
            animation: hovered ? "ring-rotate-cw 2.5s linear infinite" : "none",
            transition: "border-color 0.25s",
          }}
        />

        {/* Filled inner circle */}
        <div
          className="relative z-10 rounded-full flex items-center justify-center"
          style={{
            width: "70%",
            height: "70%",
            background: `rgba(${rgbColor},${hovered ? "0.22" : "0.12"})`,
            transition: "background 0.35s",
          }}
        >
          <div
            style={{
              color,
              filter: `drop-shadow(0 0 ${hovered ? "16px" : "8px"} rgba(${rgbColor},${hovered ? "1" : "0.7"}))`,
              fontSize: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: hovered ? "scale(1.18)" : "scale(1)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), filter 0.35s",
            }}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Label — slides up from below on hover */}
      <span
        className="absolute font-mono font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none"
        style={{
          bottom: hovered ? "-20px" : "-10px",
          fontSize: "9px",
          letterSpacing: "2px",
          color,
          opacity: hovered ? 1 : 0,
          textShadow: `0 0 10px rgba(${rgbColor},0.8)`,
          transition: "opacity 0.25s, bottom 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
