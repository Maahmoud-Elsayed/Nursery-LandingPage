import Contact from "@/components/sections/contact/contact";
import Curriculum from "@/components/sections/curriculum/curriculum";
import Features from "@/components/sections/features/features";
import HeroSection from "@/components/sections/hero/hero";
import Services from "@/components/sections/services/services";
import Values from "@/components/sections/values/values";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <div className="my-20">
      {/* <HeroSection /> */}
      <Values href="/1.jpg" />
      <Values href="/2.jpg" />
      <Values href="/3.jpg" />
      {/* <Curriculum />
      <Services />
      <Features />
      <Contact /> */}
    </div>
  );
}
