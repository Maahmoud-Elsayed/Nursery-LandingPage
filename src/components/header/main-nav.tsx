"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";
import Container from "../ui/container";
import { Logo } from "../ui/Logo";
import { buttonVariants } from "../ui/button";
import { Email } from "../ui/icons";
import { cn } from "@/lib/utils";
import { Link } from "@/routing";
import LocaleSwitcher from "./locae-switcher";

const MainNav = () => {
  const t = useTranslations("navigation");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b-2 border-border/80 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center justify-between py-1 gap-2 z-50">
        <Logo className="h-[60px] w-[60px] shrink-0" />
        <ul className="flex flex-wrap justify-center ltr:tracking-widest text-primary-text uppercase font-semibold ltr:text-sm items-center">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70 }}
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center px-4 py-3 hover:text-primary transition text-nowrap ",
                  {
                    "text-primary": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(link.name)}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#f0fabf] rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex flex-col py-2 lg:py-0 lg:flex-row shrink-0 gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-2 items-center">
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
          <LocaleSwitcher />
        </div>
      </Container>
    </nav>
  );
};

export default MainNav;
