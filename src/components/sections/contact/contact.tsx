import Container from "@/components/ui/container";
import { Circles } from "@/components/ui/icons";
import { useTranslations } from "next-intl";
import ContactForm from "./contact-form";
import Section from "@/components/ui/section";

const Contact = () => {
  const t = useTranslations("sections.contact.info");
  return (
    <Section id="contact" name="contactUs">
      <Container className="flex flex-col lg:flex-row w-full">
        <div className="basis-1/2  space-y-6 md:space-y-8 md:pe-8 pb-10 lg:pb-0 pt-10 md:pt-16 lg:pt-20">
          <Circles className="ms-20 -mt-5 hidden md:block" />
          <p className="text-3xl text-pretty md:text-4xl lg:text-5xl font-semibold text-primary-dark   md:leading-[3.5rem]">
            {t("title")}
          </p>
          <p className="text-primary-text text-pretty text-lg">
            {t("description1")}
          </p>
          <div className="flex justify-between">
            <h2 className="text-lime font-semibold text-xl md:text-2xl w-2/3 uppercase">
              {t("subtitle")}
            </h2>
            <Circles className="me-20  md:hidden" />
          </div>
          <p className="text-primary-text text-lg text-balance">
            {t("description2")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="basis-1/2 space-y-4">
              <h3 className="text-xl text-primary font-semibold">
                {t("phone")}
              </h3>
              <p dir="ltr" className="text-primary-text text-lg rtl:text-right">
                600575752
              </p>
            </div>
            <div className="basis-1/2 space-y-4">
              <h3 className="text-xl text-primary font-semibold">
                {t("email")}
              </h3>
              <p className="text-primary-text text-lg">
                info@aldananursery.com
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center !mt-40 items-center ">
            <div className=" space-y-2">
              <Circles className="ms-20" />
              <Circles Variant="secondary" />
              <Circles className="ms-20" />
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-white grow flex items-center justify-center">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
