import { Link } from "@/routing";

import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";

const RegisterButton = () => {
  const t = useTranslations("navigation");
  return (
    <Link
      className={buttonVariants({
        variant: "default",
        size: "lg",
        className:
          "uppercase font-semibold text-sm tracking-widest  !rounded-full  w-fit",
      })}
      href="#services"
    >
      {t("admission")}
    </Link>
  );
};

export default RegisterButton;
