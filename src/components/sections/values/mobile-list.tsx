import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Locale } from "@/routing";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import ValueItem from "./value-item";

const MobileList = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("sections.values.list");
  return (
    <div className="w-full absolute bottom-5 left-1/2 -translate-x-1/2 lg:hidden max-w-[600px]  py-2 rounded-3xl">
      <Carousel
        opts={{
          direction: locale === "ar" ? "rtl" : "ltr",
          loop: true,
          slidesToScroll: 1,
        }}
        autoPlayOpts={{ stopOnFocusIn: false, stopOnInteraction: false }}
        autoPlay
      >
        <CarouselContent>
          <CarouselItem className=" flex basis-full cursor-grab  justify-center">
            <ValueItem
              number={1}
              title={t("collaboration.title")}
              className="bg-primary rounded-3xl"
            >
              {t("collaboration.description")}
            </ValueItem>
          </CarouselItem>
          <CarouselItem className=" flex basis-full cursor-grab  justify-center">
            <ValueItem
              number={2}
              title={t("creativity.title")}
              className="bg-primary rounded-3xl"
            >
              {t("creativity.description")}
            </ValueItem>
          </CarouselItem>
          <CarouselItem className=" flex basis-full cursor-grab  justify-center">
            <ValueItem
              number={3}
              title={t("responsibility.title")}
              className="bg-primary rounded-3xl"
            >
              {t("responsibility.description")}
            </ValueItem>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className="bg-gray-100 bg-opacity-20 text-white md:bg-lime md:bg-opacity-1 "
          variant={"link"}
        />
        <CarouselNext
          className="bg-gray-100 !bg-opacity-20 text-white md:bg-lime md:bg-opacity-1 "
          variant={"link"}
        />
      </Carousel>
    </div>
  );
};

export default MobileList;
