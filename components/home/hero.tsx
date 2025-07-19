"use client";

import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { DATA } from "@/data";

export const HeroSection = ({
  showBackground = true,
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logos row above hero text */}
          <div className="flex justify-center gap-6 mb-6">
            <Icon className="w-10 h-10" icon="logos:react" />
            <Icon className="w-10 h-10" icon="skill-icons:nextjs-dark" />
            <Icon className="w-10 h-10" icon="simple-icons:expo" />
            <Icon className="w-10 h-10" icon="logos:typescript-icon" />
            <Icon className="w-10 h-10" icon="logos:tailwindcss-icon" />
          </div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&apos;m {name} &mdash; I design &amp; code modern web
            experiences.
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-600 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Removed Download CV button */}
            <Button
              fullWidth
              aria-label="View Work"
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="shadow"
              onPress={scrollToWork}
            >
              View Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
