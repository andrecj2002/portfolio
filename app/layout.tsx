import "@/app/globals.css";

import { clsx } from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { getData } from "@/data";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { Providers } from "@/app/providers";
import { LocaleProvider } from "@/hooks/use-locale";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const DATA = getData("pt");

export const metadata: Metadata = {
  metadataBase: new URL("https://heroui.net"),
  title: {
    default: DATA.home.hero.name,
    template: `%s | ${DATA.home.hero.name}`,
  },
  description: DATA.home.hero.subtitle,
  openGraph: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    description: DATA.home.hero.subtitle,
    siteName: DATA.home.hero.name,
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: {
      default: DATA.home.hero.name,
      template: `%s | ${DATA.home.hero.name}`,
    },
    card: "summary_large_image",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const content = (
    <main className="bg-background min-h-screen">
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </main>
  );

  return (
    <html suppressHydrationWarning lang="pt-PT">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
        >
          <LocaleProvider>{content}</LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
