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

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";
import { LogoBranco } from "@/components/logo-branco";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = DATA.navigation;

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
            <ThemeSwitcher />
          </NavbarItem>
        </div>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/80 backdrop-blur-lg pt-6 sm:hidden">
        <div className="mx-auto max-w-lg space-y-4">
          {menuItems.map((item, index) => (
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
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
