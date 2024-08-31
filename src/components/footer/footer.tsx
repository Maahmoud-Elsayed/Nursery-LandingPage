import { useTranslations } from "next-intl";

import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Tiktok,
  Twitter,
} from "@/components/ui/icons";

import Link from "next/link";
import { FooterLogo } from "../ui/Logo";
import Container from "../ui/container";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <Container className="flex justify-between gap-6 ">
        <div className="sm:flex-1 flex justify-center sm:justify-start">
          <div className=" flex w-fit flex-col gap-6 md:gap-0">
            <FooterLogo className="w-auto h-20 md:w-40 md:h-[174px] " />
            <div className="flex gap-4 md:gap-6 rtl:flex-row-reverse self-center sm:self-start">
              <Facebook className="h-5 w-5 hover:scale-125 transition-all duration-300" />
              <Link
                href="https://x.com/happyjumpnursry?t=qIi4qDOvXMdWtrzzcZb6lg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="h-5 w-5 group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/aldananurseries/?igsh=aGNoNWd6c2RkczV3"
                target="_blank"
                rel="noopener noreferrer"
                className="h-5 w-5 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.tiktok.com/@aldananursery?_t=8pITPpbOvsW&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="h-5 w-5 group"
              >
                <Tiktok className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between flex-1">
          <h3 className=" text-lg md:text-2xl font-semibold ">{t("title")}</h3>

          <div className="flex gap-3 items-center text-muted-foreground ">
            <Email className="w-5 h-5 min-h-5 min-w-5 self-start" />
            <span className="text-gray-200 text-[15px]">{t("address")}</span>
          </div>
          <div className="flex gap-3 items-center text-muted-foreground ">
            <Email className="h-5 w-5" />
            <span className="text-gray-200 text-[15px]">Hello@Email.com</span>
          </div>
          <div className="flex gap-3 items-center text-muted-foreground ">
            <Phone className="h-5 w-5" />
            <span className=" text-[15px] text-gray-200" dir="ltr">
              +971 058 588 9985
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;