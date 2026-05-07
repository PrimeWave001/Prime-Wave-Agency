export function WaveDivider({ from = "var(--navy)", to = "#ffffff" }: { from?: string; to?: string }) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ background: from }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[80px]">
        <path d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,100 L0,100 Z" fill={to} />
      </svg>
    </div>
  );
}
