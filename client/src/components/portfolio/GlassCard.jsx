export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-purple-500/30 ${className}`}
    >
      {children}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/20 blur-2xl transition-all duration-500 group-hover:bg-purple-500/30 group-hover:blur-3xl" />
    </div>
  );
}
