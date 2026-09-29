
function WaveCluster({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 260"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 18} C 120 ${i * 14}, 260 ${
            100 + i * 16
          }, 420 ${20 + i * 12}`}
          stroke="#e5e7eb"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function Dot({ className = "" }) {
  return (
    <span
      className={`absolute h-3 w-3 rounded-full border-2 border-violet-300 ${className}`}
      aria-hidden="true"
    />
  );
}

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Top-right wave pattern */}
      <WaveCluster
        className="pointer-events-none absolute -top-6 right-0 h-64 w-[420px] opacity-70"
      />

      {/* Bottom-left wave pattern */}
      <WaveCluster
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-[420px] rotate-180 opacity-70"
      />

      {/* Decorative dots */}
      <Dot className="left-[60px] top-[122px]" />
      <Dot className="left-[196px] top-[349px]" />
      <Dot className="left-[82px] top-[488px]" />
      <Dot className="left-[60px] top-[625px]" />
      <Dot className="right-[32px] top-[124px]" />
      {/* Bottom-right arrow icons */}
{/* Bottom-right chevron shapes */}
<div className="absolute bottom-0 right-0 z-10 flex h-28 w-48 items-end justify-end">
  {/* Outline chevron */}
  <svg
    viewBox="0 0 100 100"
    className="absolute bottom-0 right-20 h-24 w-28 text-violet-600"
  >
    <polygon
      points="30,8 72,8 52,50 72,92 30,92 2,50"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>

  {/* Solid chevron */}
  <svg
    viewBox="0 0 100 100"
    className="absolute bottom-0 right-0 h-24 w-28 text-violet-600"
  >
    <polygon
      points="30,8 72,8 52,50 72,92 30,92 2,50"
      fill="currentColor"
    />
  </svg>
</div>

      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}