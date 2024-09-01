"use client";

import { type Locale, locales, useRouter } from "@/routing";
import { useTransition } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { ArFlagIcon, EnFlagIcon } from "../ui/icons";
import { ChevronDownIcon } from "lucide-react";

export default function LocaleSwitcher({ color }: { color?: string }) {
  const t = useTranslations("navigation.buttons");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const activeLocale = useLocale() as Locale;

  function onSelectChange(locale: "en" | "ar") {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale }
      );
    });

    startTransition(() => {
      router.replace("/", { locale });
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex h-fit w-fit items-center gap-1 justify-center p-0 outline-none ">
          {activeLocale === "en" ? (
            <EnFlagIcon className="h-5 w-5" />
          ) : (
            <ArFlagIcon className="h-5 w-5" />
          )}
          <span
            className={cn("font-medium ", color ? color : "text-primary-text")}
          >
            {activeLocale === "en" ? "EN" : "AR"}
          </span>
          <ChevronDownIcon
            className={cn("-ms-1 h-4 w-4", color ? color : "text-primary-text")}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <DropdownMenuLabel className="rtl:text-right">
          {t("language")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            className="ltr:flex-row-reverse rtl:flex-row"
            key={locale}
            checked={locale === activeLocale}
            disabled={isPending || locale === activeLocale}
            onCheckedChange={(checked) => {
              if (checked) {
                onSelectChange(locale as "en" | "ar");
              }
            }}
          >
            <div
              className={cn(
                "flex w-full text-primary-text  gap-2 rtl:flex-row-reverse rtl:text-right",
                locale === "en" && "items-center"
              )}
            >
              {t(`languages.${locale}`)}
              {locale === "en" ? (
                <EnFlagIcon className="h-4 w-4" />
              ) : (
                <ArFlagIcon className="h-4 w-4" />
              )}
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
