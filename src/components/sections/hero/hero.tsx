import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/container";
import { Circles, LineScratch, Shapes } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Link, type Locale } from "@/routing";
import MotionDiv from "@/components/ui/motion-div";

const HeroSection = () => {
  const t = useTranslations("sections.hero");
  const locale = useLocale() as Locale;
  return (
    <Section className=" bg-muted-bg pt-20" name="home" id="home">
      <Container className="flex flex-col lg:flex-row gap-0 lg:gap-10">
        <div className=" w-full md:basis-1/2">
          <p className="text-lime text-xl mt-2">{t("title")}</p>
          <div className="relative">
            <h1 className="text-2xl md:text-6xl font-bold text-primary-dark md:leading-[4.5rem] leading-[3rem] mt-5">
              {t("subtitle1")}
              <br />
              <span className=" text-nowrap">{t("subtitle2")}</span>
            </h1>
            <div className=" lg:hidden absolute end-10 top-6">
              <Circles />
            </div>
          </div>
          <MotionDiv
            initial={{ x: locale === "ar" ? 100 : -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <LineScratch className="md:mt-2 w-52 h-10 md:w-[428px]" />
          </MotionDiv>
          <p className=" text-primary-text text-lg leading-relaxed md:mt-5 max-w-prose">
            {t("description")}
          </p>
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "uppercase font-semibold text-sm tracking-widest mt-12 hidden !rounded-full lg:flex w-fit",
            })}
            href="#services"
          >
            {t("button")}
          </Link>
        </div>
        <div className="flex-1 flex items-start justify-between lg:hidden ">
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "uppercase font-semibold z-40 text-sm tracking-widest !rounded-full",
            })}
            href="#services"
          >
            {t("button")}
          </Link>
          <div className=" flex relative grow pb-5 flex-col items-end sm:items-center ">
            <MotionDiv
              initial={{ opacity: 0, x: locale === "ar" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute bottom-5 z-20 ltr:right-0 rtl:left-0"
            >
              <div className="text-nowrap flex items-center gap-6 bg-white px-8 py-4 shadow-lg rounded-full">
                <Shapes className="h-8 w-8" />
                <p className="text-primary-dark font-bold lg:text-xl text-base">
                  {t("banner")}
                </p>
              </div>
            </MotionDiv>
            <div className=" relative overflow-hidden  h-60 w-44 sm:w-60 -mt-10">
              <Image
                src="/images/little-boy.png"
                alt="hero"
                className="mx-auto bg-muted-bg scale-125 translate-y-5"
                fill
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:flex flex-col justify-center ">
          <div className="px-20 mb-8 lg:pt-20">
            <Circles />
          </div>
          <div className=" relative w-full">
            <Circles
              Variant="secondary"
              className="absolute top-2 ltr:right-20 rtl:left-20"
            />
            <MotionDiv
              initial={{ opacity: 0, x: locale === "ar" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute top-[53%] -translate-y-0 ltr:right-0 rtl:left-0"
            >
              <div className=" flex items-center gap-8 bg-white px-14 py-5 shadow-lg rounded-full">
                <Shapes className="h-10 w-10" />
                <p className="text-primary-dark text-nowrap font-bold lg:text-xl text-base">
                  {t("banner")}
                </p>
              </div>
            </MotionDiv>
            <Image
              src="/images/little-boy.png"
              width={600}
              height={600}
              alt="hero"
              className="mx-auto bg-muted-bg"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
