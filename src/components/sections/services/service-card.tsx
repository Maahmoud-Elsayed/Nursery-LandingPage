import MotionDiv from "@/components/ui/motion-div";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  cardClassName?: string;
  className?: string;
};

const ServiceCard = ({
  href,
  title,
  description,
  cardClassName,
  className,
}: ServiceCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={cn(
          "relative w-full h-[250px] rounded-3xl overflow-hidden",
          className
        )}
      >
        <Image src={href} alt={title} fill className="object-cover" />
      </div>
      <Card
        title={title}
        description={description}
        className={cardClassName}
        type="service"
      />
    </div>
  );
};

export default ServiceCard;

type CardProps = {
  title: string;
  description: string;
  className?: string;
  type?: "normal" | "service";
};

export const Card = ({
  title,
  description,
  className,
  type = "normal",
}: CardProps) => {
  return (
    <MotionDiv
      initial={{ scale: 0.5, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className={cn(
        "bg-white p-6 rounded-3xl shadow-2xl w-full  space-y-3",
        type === "service" ? "md:w-[80%] -mt-20 z-10 grow" : "",
        className
      )}
    >
      <h2 className="text-xl font-semibold text-primary-dark">{title}</h2>
      <p className="text-primary-text">{description}</p>
    </MotionDiv>
  );
};
