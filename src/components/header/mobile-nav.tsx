import { useTranslations } from "next-intl";
import Container from "../ui/container";
import { Email } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import LocaleSwitcher from "./locae-switcher";
import { Link } from "@/routing";

const MobileNav = () => {
  const t = useTranslations("navigation");
  return (
    <nav className="md:hidden bg-lime">
      <Container className="flex justify-between py-2 items-center">
        <Image src="/images/logo.png" width={60} height={60} alt="logo" />
        <Link
          className={buttonVariants({
            variant: "default",
            size: "default",
            className:
              " uppercase  gap-2.5 items-center  !rounded-full shrink-0",
          })}
          href="#contact"
        >
          <Email className="h-4 w-4" />
          <span className=" tracking-widest text-sm uppercase">
            {t("admission")}
          </span>
        </Link>
        <div
          className={buttonVariants({
            variant: "secondary",

            className: "!rounded-full",
          })}
        >
          <LocaleSwitcher />
        </div>
      </Container>
    </nav>
  );
};

export default MobileNav;
