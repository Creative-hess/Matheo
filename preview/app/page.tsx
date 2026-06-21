import PlayerInfo from "@/components/PlayerInfo";
import MapCircle from "@/components/MapCircle";
import OrbitButton from "@/components/OrbitButton";
import FooterBar from "@/components/FooterBar";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}
function ExitIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
      <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 8h8v2H8z" opacity="0.5" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96a7.06 7.06 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.04.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  );
}

const SAMPLE = {
  name: "Giuseppe Del Papa",
  id: "KF12345",
  job1: "Polizia - Agente",
  job2: "Criminale - Boss",
};

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center overflow-auto py-6"
      style={{ background: "transparent" }}
    >

      {/* Menu container */}
      <div
        className="relative flex flex-col items-center gap-3.5 z-10"
        style={{ width: "980px", minHeight: "620px", padding: "0 4px" }}
      >
        {/* Top bar */}
        <PlayerInfo
          name={SAMPLE.name}
          id={SAMPLE.id}
          job1={SAMPLE.job1}
          job2={SAMPLE.job2}
        />

        {/* Main orbital zone */}
        <div
          className="w-full flex-1 flex flex-row items-center justify-center"
          style={{ minHeight: "380px" }}
        >
          {/* Left column */}
          <div
            className="flex flex-col gap-7 items-center justify-center"
            style={{ width: "190px" }}
          >
            <OrbitButton
              icon={<HouseIcon />}
              label="MENU"
              color="#00d4ff"
              rgbColor="0,212,255"
              animationName="orbit-pulse-home"
            />
            <OrbitButton
              icon={<ExitIcon />}
              label="QUITTER"
              color="#ff3d3d"
              rgbColor="255,61,61"
              animationName="orbit-pulse-exit"
            />
          </div>

          {/* Center map */}
          <div className="flex-1 flex items-center justify-center">
            <MapCircle />
          </div>

          {/* Right column */}
          <div
            className="flex flex-col gap-7 items-center justify-center"
            style={{ width: "190px" }}
          >
            <OrbitButton
              icon={<ScaleIcon />}
              label="JUSTICE"
              color="#3d8eff"
              rgbColor="61,142,255"
              animationName="orbit-pulse-justice"
            />
            <OrbitButton
              icon={<GearIcon />}
              label="RÉGLAGES"
              color="#ffb400"
              rgbColor="255,180,0"
              animationName="orbit-pulse-settings"
            />
          </div>
        </div>

        {/* Footer */}
        <FooterBar />

        {/* Corner sparkle */}
        <span
          className="absolute bottom-1 right-1 select-none pointer-events-none text-lg"
          style={{
            color: "rgba(180,77,255,0.35)",
            animation: "sparkle 3s ease-in-out infinite",
          }}
          aria-hidden="true"
        >
          ✦
        </span>
      </div>
    </main>
  );
}
