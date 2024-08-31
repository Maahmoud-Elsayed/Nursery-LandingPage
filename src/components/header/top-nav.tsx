import React from "react";
import Container from "../ui/container";
import { Email, Instagram, Phone, Tiktok, Twitter } from "../ui/icons";
import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="bg-lime hidden md:block">
      <Container className="flex justify-between py-4">
        <div className="flex gap-8 rtl:flex-row-reverse">
          <div className="flex gap-3 items-center rtl:flex-row-reverse">
            <Email className="h-5 w-5" />
            <span className="text-white text-[15px]">
              info@aldananursery.com
            </span>
          </div>
          <div className="flex gap-3 items-center rtl:flex-row-reverse">
            <Phone className="h-5 w-5" />
            <span className="text-white text-[15px]" dir="ltr">
              600575752
            </span>
          </div>
        </div>
        <div className="flex gap-4 rtl:flex-row-reverse">
          <Link
            href="https://x.com/happyjumpnursry"
            target="_blank"
            rel="noopener noreferrer"
            className="h-5 w-5 group"
          >
            <Twitter className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com/aldananurseries"
            target="_blank"
            rel="noopener noreferrer"
            className="h-5 w-5 group"
          >
            <Instagram className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
          </Link>
          <Link
            href="https://www.tiktok.com/@aldananursery"
            target="_blank"
            rel="noopener noreferrer"
            className="h-5 w-5 group"
          >
            <Tiktok className="h-5 w-5 group-hover:scale-125 transition-all duration-300" />
          </Link>
          {/* <Facebook className="h-5 w-5 hover:scale-125 transition-all duration-300" /> */}

          {/* <Linkedin className="h-5 w-5 hover:scale-125 transition-all duration-300" /> */}
        </div>
      </Container>
    </nav>
  );
};

export default TopNav;
