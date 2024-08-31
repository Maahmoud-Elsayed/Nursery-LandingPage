import { useTranslations } from "next-intl";
import ValueItem from "./value-item";
import MotionDiv from "@/components/ui/motion-div";

const ValuesList = () => {
  const t = useTranslations("sections.values.list");
  return (
    <MotionDiv
      initial={{ height: 0, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ height: "auto", opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="rounded-3xl w-full xl:w-[85%] hidden lg:block  absolute bottom-5 py-4 ltr:right-0 rtl:left-0 bg-primary"
    >
      <ul className="flex">
        <MotionDiv
          initial={{ height: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ValueItem number={1} title={t("collaboration.title")}>
            {t("collaboration.description")}
          </ValueItem>
        </MotionDiv>
        <MotionDiv
          initial={{ height: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ValueItem number={2} title={t("creativity.title")}>
            {t("creativity.description")}
          </ValueItem>
        </MotionDiv>
        <MotionDiv
          initial={{ height: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ValueItem number={3} title={t("responsibility.title")}>
            {t("responsibility.description")}
          </ValueItem>
        </MotionDiv>
      </ul>
    </MotionDiv>
  );
};

export default ValuesList;
