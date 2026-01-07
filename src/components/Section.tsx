import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  );
}
