"use client";
import { useTranslations } from "next-intl";
import Container from "../ui/container";
import { Email } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import LocaleSwitcher from "./locae-switcher";
import { Link } from "@/routing";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const t = useTranslations("navigation");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "md:hidden bg-lime sticky top-0 z-50 border-b-2 border-border/80 transition-colors duration-500 ",
        {
          "backdrop-blur-sm supports-[backdrop-filter]:bg-background/40":
            isScrolled,
        }
      )}
    >
      <Container className="flex justify-between py-1 items-center">
        <Image src="/images/logo.png" width={60} height={60} alt="logo" />
        <Link
          className={buttonVariants({
            variant: "default",
            size: "default",
            className:
              " uppercase !px-6  gap-2.5 items-center  !rounded-full shrink-0",
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
