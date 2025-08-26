
export default function SoftGlow({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
}