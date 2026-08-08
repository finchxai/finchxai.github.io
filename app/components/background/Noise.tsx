export default function Noise() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.025]
        mix-blend-overlay
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,.25) 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
        backgroundSize: "18px 18px",
      }}
    />
  );
}
