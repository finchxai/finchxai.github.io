import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">{children}</div>
    </section>
  );
}
