const NOISE_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMCIgLz48L3N2Zz4=";

export default function Background({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090B]">
      {/* Ambient lighting + texture — fixed so the glow stays consistent while scrolling */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Base deep obsidian */}
        <div className="absolute inset-0 bg-[#09090B]" />

        {/* Top-left silk spotlight: white → indigo */}
        <div className="absolute -top-[28%] -left-[12%] h-[min(150vw,1100px)] w-[min(150vw,1100px)] rounded-full bg-gradient-to-br from-white/10 via-indigo-600/5 to-transparent blur-3xl" />

        {/* Top-right silk spotlight: white → violet */}
        <div className="absolute -top-[28%] -right-[12%] h-[min(150vw,1100px)] w-[min(150vw,1100px)] rounded-full bg-gradient-to-bl from-white/10 via-violet-600/5 to-transparent blur-3xl" />

        {/* Center-top bridge: merges the two spotlights softly over the hero */}
        <div className="absolute -top-[18%] left-1/2 h-[55vh] w-[min(160vw,1200px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.045),rgba(124,58,237,0.03)_45%,transparent_72%)] blur-2xl" />

        {/* Micro-noise: silk grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("${NOISE_DATA_URL}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* Page content sits above the lighting */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
