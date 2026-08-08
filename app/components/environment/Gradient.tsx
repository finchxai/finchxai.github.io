"use client";

export default function Gradient() {
  return (
    <>
      <div
        className="
        absolute
        -top-80
        -left-60
        h-[900px]
        w-[900px]
        rounded-full
        bg-sky-200/20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        top-0
        right-[-250px]
        h-[800px]
        w-[800px]
        rounded-full
        bg-amber-100/30
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-[-300px]
        left-1/2
        h-[900px]
        w-[900px]
        -translate-x-1/2
        rounded-full
        bg-white/50
        blur-[220px]
        "
      />
    </>
  );
}
