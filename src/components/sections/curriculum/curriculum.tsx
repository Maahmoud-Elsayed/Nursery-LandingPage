import Container from "@/components/ui/container";
import { CircleCheck, Circles } from "@/components/ui/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Curriculum = () => {
  const t = useTranslations("sections.curriculum");
  return (
    <section className="pt-20 md:pt-32 lg:pt-40" id="curriculum">
      <Container className="flex gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex grow ">
            <h2 className="text-3xl text-pretty md:text-4xl lg:text-5xl font-semibold text-primary-dark md:leading-[3.5rem]">
              {t("title")}
            </h2>
            <Circles className="shrink-0 self-center me-2 md:me-10" />
          </div>
          <div className="flex gap-8 justify-between ">
            <div className="text-primary-text space-y-4  md:space-y-10">
              <p className=" text-primary-text text-lg leading-relaxed max-w-prose">
                {t("description")}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4  items-center">
                  <CircleCheck className="w-5 h-5" />
                  <p>{t("opt1")}</p>
                </div>
                <div className="flex gap-4  items-center">
                  <CircleCheck className="w-5 h-5" />
                  <p>{t("opt2")}</p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block w-[250px] h-[260px] shrink-0 self-end rounded-3xl overflow-hidden">
              <Image src="/images/girl.jpg" alt="girl" fill />
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block w-[260px] h-[425px] shrink-0 mt-auto rounded-3xl overflow-hidden">
          <Image src="/images/girl2.jpg" alt="girl" fill />
        </div>
      </Container>
    </section>
  );
};

export default Curriculum;
