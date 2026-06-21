"use client";

import { useState, useEffect } from "react";

export default function FooterBar() {
  const [time, setTime] = useState("--:--:--");
  const [hoveredTime, setHoveredTime] = useState(false);
  const [hoveredDiscord, setHoveredDiscord] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pillBase: React.CSSProperties = {
    height: "72px",
    background: "linear-gradient(135deg, rgba(20,24,38,0.97) 0%, rgba(12,15,24,0.99) 100%)",
    border: "1px solid rgba(180,77,255,0.2)",
    borderRadius: "60px",
    backdropFilter: "blur(24px)",
    boxShadow: "0 16px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
  };

  const pillHover: React.CSSProperties = {
    transform: "translateY(-3px)",
    boxShadow: "0 20px 60px rgba(180,77,255,0.28), 0 0 0 1px rgba(255,255,255,0.06) inset",
    borderColor: "rgba(180,77,255,0.48)",
  };

  return (
    <div className="w-full flex flex-row gap-3" style={{ height: "72px" }}>

      {/* Time pill */}
      <div
        className="flex-1 flex flex-row items-center gap-5 px-7"
        style={{ ...pillBase, ...(hoveredTime ? pillHover : {}) }}
        onMouseEnter={() => setHoveredTime(true)}
        onMouseLeave={() => setHoveredTime(false)}
        role="status"
        aria-label="Heure du serveur"
      >
        {/* Shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
        />
        {/* Clock icon */}
        <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 flex-shrink-0"
          style={{ color: "#b44dff", filter: "drop-shadow(0 0 12px rgba(180,77,255,0.7))" }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M12 7v5l3 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] font-bold uppercase tracking-[2px]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            HEURE FLASHCITY
          </span>
        </div>
        <span
          className="font-mono font-bold ml-auto tracking-[3px]"
          style={{
            fontSize: "26px",
            color: "#ffffff",
            textShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
        >
          {time}
        </span>
      </div>

      {/* Discord pill */}
      <div
        className="flex-1 flex flex-row items-center justify-center gap-5 px-7"
        style={{ ...pillBase, ...(hoveredDiscord ? pillHover : {}) }}
        onMouseEnter={() => setHoveredDiscord(true)}
        onMouseLeave={() => setHoveredDiscord(false)}
        role="button"
        tabIndex={0}
        aria-label="Rejoindre le Discord"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
        />
        {/* Discord icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 flex-shrink-0"
          style={{ color: "#b44dff", filter: "drop-shadow(0 0 14px rgba(180,77,255,0.85))" }}
          aria-hidden="true"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
        <span
          className="font-mono font-bold uppercase tracking-[4px]"
          style={{ fontSize: "20px", color: "#ffffff" }}
        >
          DISCORD
        </span>
      </div>

    </div>
  );
}
