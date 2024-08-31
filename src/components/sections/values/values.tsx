import Image from "next/image";
import Container from "../../ui/container";
import ValuesList from "./values-list";
import { useTranslations } from "next-intl";

import { Circles } from "@/components/ui/icons";
import Section from "@/components/ui/section";
import MobileList from "./mobile-list";

const Values = () => {
  const t = useTranslations("sections.values");
  return (
    <Section className="pt-20 md:pt-32 lg:pt-40" id="about" name="aboutUs">
      <Container>
        <div className="flex gap-10 md:gap-14 flex-col-reverse 2xl:flex-row relative">
          <div className="relative w-full max-w-[500px] h-[400px] lg:max-w-[600px] lg:h-[600px] shrink-0 self-center lg:self-start">
            <div className="hidden lg:block 2xl:hidden absolute top-1/3 -end-80 -translate-y-1/2 space-y-2">
              <Circles className="ms-20" />
              <Circles Variant="secondary" />
              <Circles className="ms-20" />
            </div>
            <Image
              src="/images/values.jpg"
              alt="values"
              className="rounded-3xl"
              fill
            />
          </div>
          <div className="space-y-4 md:space-y-8 lg:space-y-8 relative">
            <Circles className="absolute top-0 end-20" Variant="secondary" />
            <h2 className="text-primary font-semibold text-xl">{t("title")}</h2>
            <p className="text-2xl text-pretty md:text-5xl font-semibold text-primary-dark   md:leading-[3.5rem]">
              {t("description")}
            </p>
            <h3 className="text-lime font-semibold text-2xl uppercase">
              {t("subtitle")}
            </h3>
          </div>
        </div>
        <div className="relative">
          <MobileList />
          <ValuesList />
        </div>
      </Container>
    </Section>
  );
};

export default Values;
