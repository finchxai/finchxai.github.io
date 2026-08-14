import type { MouseEvent } from "react";
import type { SectionId } from "./Navbar";

interface DrawerLinkProps {
  label: string;
  sectionId: SectionId;
  onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => void;
}

export default function DrawerLink({ label, sectionId, onNavigate }: DrawerLinkProps) {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(event) => onNavigate(event, sectionId)}
      className="group flex min-h-11 items-center border-b border-[#73858e]/12 text-[17px] font-semibold tracking-[-0.015em] text-[#263137] transition-colors duration-200 hover:text-[#247f91] focus-visible:outline-none focus-visible:text-[#247f91]"
    >
      <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
        {label}
      </span>
    </a>
  );
}
