import Container from "@/components/ui/container";
import ServiceCard from "./service-card";
import { useTranslations } from "next-intl";
import { Circles } from "@/components/ui/icons";
import Section from "@/components/ui/section";
import RegisterButton from "@/components/register-button";

const Services = () => {
  const t = useTranslations("sections.services");
  return (
    <Section
      className="bg-muted-bg pt-10 mt-10 md:pt-16 md:mt-16 lg:pt-20 lg:mt-20"
      id="services"
      name="services"
    >
      <Container className="space-y-10 md:space-y-20">
        <div className="space-y-4 text-center ">
          <div className="flex gap-4 items-center justify-center">
            <Circles Variant="secondary" />
            <h2 className="text-lime font-semibold text-xl md:text-2xl w-2/3 uppercase">
              {t("title")}
            </h2>
            <Circles />
          </div>
          <p className="text-3xl text-pretty md:text-4xl lg:text-5xl font-semibold text-primary-dark w-2/3 mx-auto  md:leading-[3.5rem]">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/images/service1.jpg"
            title={t("cards.card1.title")}
            description={t("cards.card1.description")}
          />
          <ServiceCard
            href="/images/service2.jpg"
            title={t("cards.card2.title")}
            description={t("cards.card2.description")}
          />
          <ServiceCard
            href="/images/service3.jpg"
            title={t("cards.card3.title")}
            description={t("cards.card3.description")}
          />
          <div className="hidden md:flex lg:hidden w-full h-full justify-center items-center  space-y-2">
            <div>
              <Circles className="ms-20" />
              <Circles Variant="secondary" />
              <Circles className="ms-20" />
            </div>
          </div>
        </div>
        <ServiceCard
          href="/images/service4.jpg"
          title={t("cards.card4.title")}
          description={t("cards.card4.description")}
          cardClassName="md:-mt-24 md:h-[200px] flex flex-col  justify-center"
          className="md:h-[400px] "
        />
        <div className="flex justify-center">
          <RegisterButton />
        </div>
      </Container>
    </Section>
  );
};

export default Services;
