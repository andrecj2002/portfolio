"use client";

import { Button } from "@heroui/react";

import { useLocale } from "@/hooks/use-locale";
import type { Locale } from "@/lib/i18n";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  const handleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
  };

  return (
    <div className="flex items-center rounded-full border border-divider bg-content1/80 p-1">
      <Button
        size="sm"
        className={locale === "pt" ? "bg-white text-black" : "text-foreground"}
        variant={locale === "pt" ? "solid" : "light"}
        onPress={() => handleChange("pt")}
      >
        PT
      </Button>
      <Button
        size="sm"
        className={locale === "en" ? "bg-white text-black" : "text-foreground"}
        variant={locale === "en" ? "solid" : "light"}
        onPress={() => handleChange("en")}
      >
        EN
      </Button>
    </div>
  );
};
