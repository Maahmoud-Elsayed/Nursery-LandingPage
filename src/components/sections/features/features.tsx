import { Card } from "@/components/sections/services/service-card";
import Container from "@/components/ui/container";
import { Circles } from "@/components/ui/icons";
import Section from "@/components/ui/section";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Features = () => {
  const t = useTranslations("sections.features");
  return (
    <Section
      className="bg-muted-bg pt-20  pb-10 md:pb-16 lg:pb-20"
      id="features"
      name="features"
    >
      <Container className="flex gap-20">
        <div className="space-y-10 lg:space-y-20   flex flex-col">
          <div className="space-y-4">
            <Circles Variant="secondary" />
            <h2 className="text-3xl text-pretty md:text-4xl lg:text-5xl font-semibold text-primary-dark  md:leading-[3.5rem]">
              {t("title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grow">
            <Card
              title={t("cards.card1.title")}
              description={t("cards.card1.description")}
              className="space-y-6 p-8"
            />
            <Card
              title={t("cards.card2.title")}
              description={t("cards.card2.description")}
              className="space-y-6 p-8"
            />
            <Card
              title={t("cards.card3.title")}
              description={t("cards.card3.description")}
              className="space-y-6 p-8"
            />
            <Card
              title={t("cards.card4.title")}
              description={t("cards.card4.description")}
              className="space-y-6 p-8"
            />
          </div>
        </div>
        <div className="relative hidden xl:block w-[400px] h-[560px] shrink-0 rounded-3xl overflow-hidden self-end">
          <Image src="/images/features.jpg" alt="girl" fill />
        </div>
      </Container>
    </Section>
  );
};

export default Features;
