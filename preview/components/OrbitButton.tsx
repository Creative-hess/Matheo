"use client";

import { useState } from "react";

interface OrbitButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;         // hex or rgba
  rgbColor: string;      // e.g. "0,212,255" for rgba usage
  animationName: string; // e.g. "orbit-pulse-home"
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

  const scale = active ? 0.93 : hovered ? 1.12 : 1;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        transform: `scale(${scale})`,
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
        animation: hovered ? "none" : `${animationName} 3.8s ease-in-out infinite`,
        boxShadow: hovered ? `0 0 38px rgba(${rgbColor},0.55)` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `1.5px solid ${color}`,
          opacity: hovered ? 0.75 : 0.35,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      />
      {/* Inner ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "85%", height: "85%",
          top: "7.5%", left: "7.5%",
          border: `1px solid ${color}`,
          opacity: hovered ? 0.5 : 0.2,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      />

      {/* Filled inner circle */}
      <div
        className="relative z-10 rounded-full flex items-center justify-center"
        style={{
          width: "72%",
          height: "72%",
          background: `rgba(${rgbColor},0.15)`,
          boxShadow: `0 0 20px rgba(${rgbColor},0.3), inset 0 0 20px rgba(${rgbColor},0.08)`,
        }}
      >
        <div
          style={{
            color,
            filter: `drop-shadow(0 0 10px rgba(${rgbColor},0.85))`,
            fontSize: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s",
          }}
        >
          {icon}
        </div>
      </div>

      {/* Label below */}
      <span
        className="absolute font-mono font-bold uppercase tracking-widest whitespace-nowrap"
        style={{
          bottom: "-22px",
          fontSize: "9px",
          letterSpacing: "1.5px",
          color,
          opacity: hovered ? 0.95 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.25s, transform 0.25s",
        }}
      >
        {label}
      </span>
    </div>
  );
}
