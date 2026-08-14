import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  onClick: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="FINCHX AI home"
      onClick={onClick}
      className="
relative
flex
items-center
justify-start
shrink-0
overflow-visible
self-center
h-[86px]
w-auto
"
    >
      <Image
        src="/assets/finchx-logo-transparent.png"
        alt="FINCHX AI"
        width={540}
        height={108}
        priority
        quality={100}
        className="
          h-full
          w-full
          object-contain
          object-left
          pointer-events-none
          select-none
        "
      />
    </Link>
  );
}
