export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent blur-[200px] animate-ambient" />

      <div className="absolute -top-[30%] -left-[15%] h-[800px] w-[800px] animate-wisp-1 rounded-full bg-gradient-to-br from-white/[0.04] via-purple-500/8 to-transparent blur-[160px]" />
      <div className="absolute -top-[30%] -right-[15%] h-[800px] w-[800px] animate-wisp-2 rounded-full bg-gradient-to-bl from-white/[0.04] via-indigo-500/8 to-transparent blur-[160px]" />

      <div className="absolute top-[5%] left-[5%] h-[400px] w-[400px] animate-tendril-1 rounded-full bg-gradient-to-r from-white/[0.03] via-purple-400/6 to-transparent blur-[120px]" />
      <div className="absolute top-[15%] right-[10%] h-[350px] w-[350px] animate-tendril-2 rounded-full bg-gradient-to-l from-white/[0.03] via-indigo-400/6 to-transparent blur-[120px]" />

      <div className="absolute top-1/2 left-1/3 h-[300px] w-[500px] animate-tendril-3 rounded-full bg-gradient-to-r from-transparent via-purple-600/5 to-transparent blur-[100px]" />

      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMCIgLz48L3N2Zz4=')] bg-repeat" />
    </div>
  );
}
