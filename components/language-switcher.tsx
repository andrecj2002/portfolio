"use client";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { useLocale } from "@/hooks/use-locale";
import type { Locale } from "@/lib/i18n";

const LOCALE_LABELS: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="border border-divider bg-content1/80 text-foreground"
          endContent={<Icon icon="lucide:chevron-down" />}
          size="sm"
          startContent={<Icon icon="lucide:globe" />}
          variant="light"
        >
          {locale.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Selecionar idioma"
        disallowEmptySelection
        selectedKeys={[locale]}
        selectionMode="single"
        onAction={(key) => setLocale(key as Locale)}
      >
        <DropdownItem key="pt">{LOCALE_LABELS.pt}</DropdownItem>
        <DropdownItem key="en">{LOCALE_LABELS.en}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
