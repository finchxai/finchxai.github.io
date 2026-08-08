"use client";

export default function Lighting() {
  return (
    <>
      <div
        className="
        absolute
        inset-0
        opacity-60
        bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.95),transparent_55%)]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_20%_20%,rgba(170,220,255,.15),transparent_35%)]
        "
      />
    </>
  );
}
