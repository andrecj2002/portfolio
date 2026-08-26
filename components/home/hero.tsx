"use client";

import type { PressEvent } from "@react-aria/interactions";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import { getData } from "@/data";
import { LogoBranco } from "@/components/logo-branco";
import { useLocale } from "@/hooks/use-locale";

export const HeroSection = ({
  name,
  title,
  subtitle,
}: {
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const { t, locale } = useLocale();
  const hero = getData(locale).home.hero;
  const resolvedSubtitle = subtitle ?? hero.subtitle;
  const subtitleText = resolvedSubtitle.includes(":")
    ? resolvedSubtitle.split(":").slice(1).join(":").trim()
    : resolvedSubtitle;

  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      <Image
        fill
        priority
        alt=""
        className="pointer-events-none object-cover opacity-0 dark:opacity-100"
        src="/images/55e8af23ff4e1055efd3605624dceb66.gif"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/65 opacity-0 dark:opacity-100" />
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <LogoBranco
            className="mx-auto mb-2 max-w-full"
            height={116}
            size={240}
          />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Icon className="w-7 h-7" icon="logos:react" />
            <Icon className="w-7 h-7" icon="skill-icons:nextjs-dark" />
            <Icon className="w-7 h-7" icon="simple-icons:expo" />
            <Icon className="w-7 h-7" icon="logos:typescript-icon" />
            <Icon className="w-7 h-7" icon="logos:tailwindcss-icon" />
          </div>
          <h1
            className="mb-6 break-words font-bold text-foreground text-xl sm:text-2xl md:text-4xl"
          >
            {t.home.greeting.replace("{name}", name ?? hero.name)}
          </h1>
          <p className="text-foreground-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed break-words">
            {t.home.summary.replace("{subtitle}", subtitleText)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              fullWidth
              aria-label={t.home.viewWork}
              className="w-full border border-foreground bg-transparent text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white sm:w-auto"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="bordered"
              onPress={scrollToWork}
            >
              {t.home.viewWork}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
