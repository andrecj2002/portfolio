"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_LOCALE,
  type Locale,
  getLocale,
  setLocale,
  UI_TEXT,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  t: (typeof UI_TEXT)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(getLocale());
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setLocaleState(newLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale: changeLocale,
      t: UI_TEXT[locale],
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en-US";
  }, [locale]);

  return createElement(LocaleContext.Provider, { value }, children);
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
};
