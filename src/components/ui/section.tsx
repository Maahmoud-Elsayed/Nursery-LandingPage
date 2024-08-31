"use client";

import { useSectionInView } from "@/hooks/hooks";
import { type SectionName } from "@/lib/types";

type SectionProps = {
  name: SectionName;
  children: React.ReactNode;
  className?: string;
  id: string;
};

const Section = ({ name, children, className, id }: SectionProps) => {
  const { ref } = useSectionInView(name, 0.5);
  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default Section;
