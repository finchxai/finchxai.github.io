import type { RefObject } from "react";

interface HamburgerProps {
  isDrawerOpen: boolean;
  onOpen: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export default function Hamburger({
  isDrawerOpen,
  onOpen,
  triggerRef,
}: HamburgerProps) {
  return (
    <button
      ref={triggerRef}
      type="button"
      aria-label="Open navigation drawer"
      aria-expanded={isDrawerOpen}
      aria-controls="navigation-drawer"
      onClick={onOpen}
      className="
        inline-flex
        shrink-0
        items-center
        justify-center
        text-[#263137]
        transition-colors
        duration-200
        ease-in-out
        hover:text-[#3FC8D5]
        focus-visible:outline-none
        focus-visible:text-[#3FC8D5]
      "
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M2 7h24" />
        <path d="M2 14h24" />
        <path d="M2 21h24" />
      </svg>
    </button>
  );
}
