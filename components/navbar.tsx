"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { LogoBranco } from "@/components/logo-branco";
import { useLocale } from "@/hooks/use-locale";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLocale();

  const menuItems = [
    { name: t.nav.home, href: "/", icon: "lucide:home" },
    { name: t.nav.about, href: "/about", icon: "lucide:user" },
    { name: t.nav.projects, href: "/projects", icon: "lucide:folder-code" },
  ];

  return (
    <Navbar
      isBordered
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <NavbarBrand>
          <Link
            className="flex items-center gap-2"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <LogoBranco className="w-14 h-14" size={56} />
          </Link>
        </NavbarBrand>

        <div className="hidden sm:flex items-center justify-end gap-4 ml-auto">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <Link
                className={`flex items-center gap-2 transition-colors ${
                  pathname === item.href
                    ? "font-bold text-white"
                    : "text-foreground hover:text-white"
                }`}
                href={item.href}
                onFocus={() => router.prefetch(item.href)}
                onMouseEnter={() => router.prefetch(item.href)}
              >
                <Icon className="w-5 h-5 text-white" icon={item.icon} />
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <LanguageSwitcher />
          </NavbarItem>
        </div>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                className={`w-full flex items-center gap-3 py-3 px-4 rounded-medium hover:bg-content1 transition-colors ${
                  pathname === item.href
                    ? "font-bold text-white"
                    : "text-foreground hover:text-white"
                }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                onFocus={() => router.prefetch(item.href)}
                onMouseEnter={() => router.prefetch(item.href)}
              >
                <Icon className="w-5 h-5 text-white" icon={item.icon} />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
