"use client";

interface PlayerInfoProps {
  name: string;
  id: string;
  job1: string;
  job2: string | null;
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10" aria-hidden="true">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}
function IdIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-4-4h6v2h-6z"/>
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10" aria-hidden="true">
      <path d="M20 6h-2.18c.07-.27.18-.52.18-.8V4c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v1.2c0 .28.11.53.18.8H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v1.2H10V4zm10 15H6V8h14v11z"/>
    </svg>
  );
}

export default function PlayerInfo({ name, id, job1, job2 }: PlayerInfoProps) {
  return (
    <div
      className="w-full flex flex-row items-center gap-4 px-5 py-3 relative overflow-hidden"
      style={{
        height: "82px",
        background: "linear-gradient(135deg, rgba(20,24,38,0.97) 0%, rgba(12,15,24,0.99) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "60px",
        backdropFilter: "blur(30px)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.65), 0 0 30px rgba(180,77,255,0.1)",
      }}
    >
      {/* Purple top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(180,77,255,0.55), transparent)" }}
      />

      {/* Neon diagonal laser streaks — right side behind logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: "60px" }} aria-hidden="true">
        {/* streak 1 — brightest, center */}
        <div style={{
          position: "absolute",
          width: "2px",
          height: "260px",
          top: "-90px",
          right: "62px",
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(220,130,255,1) 45%, rgba(180,77,255,1) 70%, rgba(130,0,255,0) 100%)",
          boxShadow: "0 0 8px 2px rgba(180,77,255,0.9), 0 0 22px 6px rgba(140,0,255,0.55)",
          transform: "rotate(-42deg)",
          transformOrigin: "center center",
          borderRadius: "1px",
          opacity: 0.95,
        }} />
        {/* streak 2 — slightly offset left */}
        <div style={{
          position: "absolute",
          width: "1.5px",
          height: "260px",
          top: "-90px",
          right: "45px",
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(180,77,255,0.85) 50%, rgba(120,0,220,0.7) 75%, rgba(90,0,180,0) 100%)",
          boxShadow: "0 0 6px 2px rgba(160,50,255,0.7), 0 0 16px 5px rgba(120,0,240,0.35)",
          transform: "rotate(-42deg)",
          transformOrigin: "center center",
          borderRadius: "1px",
          opacity: 0.8,
        }} />
        {/* streak 3 — outer, wider glow */}
        <div style={{
          position: "absolute",
          width: "1px",
          height: "260px",
          top: "-90px",
          right: "76px",
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(180,77,255,0.7) 50%, rgba(100,0,200,0.5) 75%, transparent 100%)",
          boxShadow: "0 0 10px 4px rgba(140,0,255,0.5), 0 0 28px 10px rgba(100,0,200,0.25)",
          transform: "rotate(-42deg)",
          transformOrigin: "center center",
          borderRadius: "1px",
          opacity: 0.65,
        }} />
        {/* wide ambient purple glow blob behind logo */}
        <div style={{
          position: "absolute",
          right: "-10px",
          top: "-20px",
          width: "130px",
          height: "130px",
          background: "radial-gradient(ellipse at 70% 30%, rgba(160,50,255,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "2px solid #b44dff",
          animation: "avatar-glow 3s ease-in-out infinite",
        }}
        aria-label="Avatar joueur"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"
          style={{ color: "rgba(255,255,255,0.55)" }} aria-hidden="true">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>

      {/* Chips */}
      <div className="flex flex-row gap-2 flex-1 items-center flex-nowrap overflow-hidden">
        <InfoChip icon={<UserIcon />} label="NOM · PRÉNOM" value={name} />
        <InfoChip icon={<IdIcon />} label="ID" value={`ID: ${id}`} />
        <InfoChip icon={<BriefcaseIcon />} label="JOB 1" value={job1} />
        {job2 && <InfoChip icon={<BriefcaseIcon />} label="JOB 2" value={job2} />}
      </div>

      {/* Server logo */}
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(0,0,0,0)",
          filter: "drop-shadow(0 0 14px rgba(180,77,255,0.65))",
        }}
        aria-label="Logo FC Roleplay"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="FC Roleplay"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function InfoChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex flex-col gap-0.5 px-3 py-1.5 min-w-[105px] transition-all duration-200 cursor-default"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "50px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(180,77,255,0.12)";
        el.style.borderColor = "rgba(180,77,255,0.35)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.06)";
        el.style.borderColor = "rgba(255,255,255,0.12)";
        el.style.transform = "translateY(0)";
      }}
    >
      <span
        className="flex items-center gap-1 text-[7px] font-bold uppercase tracking-wider"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        <span style={{ color: "#b44dff" }}>{icon}</span>
        {label}
      </span>
      <span
        className="text-[11px] font-semibold truncate"
        style={{ color: "#ffffff" }}
      >
        {value}
      </span>
    </div>
  );
}
