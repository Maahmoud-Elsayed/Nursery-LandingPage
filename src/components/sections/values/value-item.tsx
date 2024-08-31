import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ValueItemProps = {
  children: ReactNode;
  title: string;
  number: number;
  className?: string;
};

const ValueItem = ({ children, title, number, className }: ValueItemProps) => {
  return (
    <li className={cn("flex gap-8 p-6 w-full", className)}>
      <span className="text-lime shrink-0 text-3xl font-semibold">
        0{number}
      </span>
      <div className="text-primary-foreground space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300">{children}</p>
      </div>
    </li>
  );
};

export default ValueItem;
