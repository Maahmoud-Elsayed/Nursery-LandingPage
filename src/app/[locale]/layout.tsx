import { Toaster } from "@/components/ui/sonner";
import { locales } from "@/routing";
import { NextIntlClientProvider } from "next-intl";
import { Rubik } from "next/font/google";
import "../globals.css";

import Footer from "@/components/footer/footer";
import MainNav from "@/components/header/main-nav";
import MobileNav from "@/components/header/mobile-nav";
import TopNav from "@/components/header/top-nav";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { getBaseUrl } from "@/lib/utils";
import {
  getMessages,
  unstable_setRequestLocale as setRequestLocale,
} from "next-intl/server";

const rubik = Rubik({ subsets: ["latin"] });

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: "en" | "ar" };
}) {
  const data = {
    en: {
      title: "Al Dana Nursery",
      description:
        "Al Dana Nursery offers a nurturing and personalized learning environment, fostering children's growth with innovative educational programs and outstanding care. Give your child the best possible start with our comprehensive approach to early childhood development.",
      icons: [{ rel: "icon", url: "/favicon.ico" }],
      openGraph: {
        title: "Al Dana Nursery",
        description:
          "Al Dana Nursery offers a nurturing and personalized learning environment, fostering children's growth with innovative educational programs and outstanding care. Give your child the best possible start with our comprehensive approach to early childhood development.",
        url: getBaseUrl(),
        siteName: "Al Dana Nursery",
        images: [
          {
            url: `${getBaseUrl()}/icon.jpg`,
            width: 800,
            height: 600,
            alt: "Al Dana Nursery Logo",
          },
          {
            url: `${getBaseUrl()}/icon1.jpg`,
            width: 1800,
            height: 1600,
            alt: "Al Dana Nursery Logo",
          },
        ],
        locale: "en_US",
        localeAlternate: ["ar_AE"],
        canonical: `${getBaseUrl()}`,
        keywords:
          "nursery, early childhood education, daycare, حضانة, التعليم المبكر, رعاية الأطفال",

        type: "website",
      },
    },
    ar: {
      title: "حضانات الدانة",
      description:
        "توفر حضانات الدانة بيئة تعليمية داعمة وتعزز شخصية الاطفال و نموهم من خلال برامج تعليمية مبتكرة ورعاية متميزة. امنح طفلك أفضل بداية ممكنة من خلال نهجنا الشامل لتنمية الطفولة المبكرة.",
      icons: [{ rel: "icon", url: "/favicon.ico" }],
      openGraph: {
        title: "حضانات الدانة",
        description:
          "توفر حضانات الدانة بيئة تعليمية داعمة وتعزز شخصية الاطفال و نموهم من خلال برامج تعليمية مبتكرة ورعاية متميزة. امنح طفلك أفضل بداية ممكنة من خلال نهجنا الشامل لتنمية الطفولة المبكرة.",
        url: getBaseUrl(),
        siteName: "حضانات الدانة",
        images: [
          {
            url: `${getBaseUrl()}/icon.jpg`,
            width: 800,
            height: 600,
            alt: "Al Dana Nursery Logo",
          },
          {
            url: `${getBaseUrl()}/icon1.jpg`,
            width: 1800,
            height: 1600,
            alt: "Al Dana Nursery Logo",
          },
        ],
        locale: "ar_AE",
        localeAlternate: ["en_US"],
        canonical: `${getBaseUrl()}`,
        keywords:
          "nursery, early childhood education, daycare, حضانة, التعليم المبكر, رعاية الأطفال",
        type: "website",
      },
    },
  };

  return data[locale] ?? data.en;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={rubik.className}>
        <NextIntlClientProvider messages={messages}>
          <ActiveSectionContextProvider>
            <div className="relative min-h-screen w-full flex-1 flex-grow">
              <TopNav />
              <MainNav />
              <MobileNav />

              <main className="overflow-x-hidden">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
            <Toaster
              // position="top-center"
              richColors
              theme="light"
              closeButton
              position="bottom-right"
            />
          </ActiveSectionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
