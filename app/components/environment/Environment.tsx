"use client";

import { ReactNode } from "react";
import Background from "./Background";

interface Props {
  children: ReactNode;
}

export default function Environment({ children }: Props) {
  return (
    <>
      <Background />

      <div className="relative z-10">{children}</div>
    </>
  );
}
