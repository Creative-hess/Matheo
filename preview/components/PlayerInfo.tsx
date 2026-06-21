"use client";

interface PlayerInfoProps {
  name: string;
  id: string;
  job1: string;
  job2: string | null;
}

export default function PlayerInfo({ name, id, job1, job2 }: PlayerInfoProps) {
  return (
    <div
      className="w-full flex flex-row items-center gap-4 px-5 py-3 relative overflow-hidden"
      style={{
        height: "82px",
        background: "linear-gradient(135deg, rgba(20,24,38,0.97) 0%, rgba(12,15,24,0.99) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        backdropFilter: "blur(30px)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 60px rgba(0,0,0,0.65), 0 0 30px rgba(180,77,255,0.1)",
      }}
    >
      {/* Purple top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(180,77,255,0.55), transparent)" }}
      />

      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-2xl select-none"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "2px solid #b44dff",
          animation: "avatar-glow 3s ease-in-out infinite",
          fontSize: "28px",
        }}
        aria-label="Avatar joueur"
      >
        👤
      </div>

      {/* Chips */}
      <div className="flex flex-row gap-2 flex-1 items-center flex-nowrap overflow-hidden">
        <InfoChip icon="👤" label="NOM · PRÉNOM" value={name} />
        <InfoChip icon="🪪" label="ID" value={`ID: ${id}`} />
        <InfoChip icon="💼" label="JOB 1" value={job1} />
        {job2 && <InfoChip icon="🎭" label="JOB 2" value={job2} />}
      </div>

      {/* Server logo placeholder */}
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-xl font-mono font-bold"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(180,77,255,0.35), rgba(9,11,16,0.9))",
          border: "1.5px solid rgba(180,77,255,0.4)",
          color: "#b44dff",
          filter: "drop-shadow(0 0 10px rgba(180,77,255,0.4))",
          boxShadow: "0 0 20px rgba(180,77,255,0.2)",
          fontSize: "11px",
          letterSpacing: "1px",
        }}
        aria-label="Logo serveur"
      >
        KF
      </div>
    </div>
  );
}

function InfoChip({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-0.5 px-3 py-1.5 rounded-[10px] min-w-[105px] transition-all duration-200 cursor-default"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
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
        className="text-[7px] font-bold uppercase tracking-wider"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        <span style={{ color: "#b44dff" }}>{icon} </span>
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
