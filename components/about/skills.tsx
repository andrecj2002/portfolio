"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionHeader } from "@/components/about/section-header";
import { TechCategories } from "@/components/about/types";
import { useLocale } from "@/hooks/use-locale";
import { capitalize } from "@/lib/utils";

interface SkillsProps {
  tech: TechCategories;
}

export const Skills = ({ tech }: SkillsProps) => {
  const { t } = useLocale();

  return (
    <motion.div
      id="technologies"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeader icon="mdi:tools" title={t.about.skills} />

      <div className="space-y-10">
        {Object.entries(tech).map(([category, { description, tools }]) => (
          <section key={category}>
            <h3 className="mb-2 text-xl font-semibold">
              {{
                backendAndData: t.about.categories.backendAndData,
                designAndDelivery: t.about.categories.designAndDelivery,
                development: t.about.categories.development,
              }[category] ?? capitalize(category)}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{description}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex min-h-20 items-center gap-3 rounded-lg border border-divider bg-content1 px-4 py-3 transition-colors hover:border-white"
                >
                  <Icon className="h-7 w-7 shrink-0" icon={tool.icon} />
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
};
