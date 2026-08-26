import React from "react";
import { Tabs, Tab } from "@heroui/react";

import { ProjectsTabsProps } from "@/components/projects/types";
import { useLocale } from "@/hooks/use-locale";

export const ProjectsTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectsTabsProps) => {
  const { t } = useLocale();

  return (
    <div className="overflow-x-auto w-full mb-8">
      <Tabs
        aria-label={t.projects.categoriesAria}
        className="flex w-max min-w-full justify-start md:justify-center mb-4 "
        selectedKey={selectedCategory}
        variant="underlined"
        onSelectionChange={(key) => onSelectCategory(String(key))}
      >
        {categories.map(({ key, label }) => (
          <Tab key={key} className="sm:text-base" title={label} />
        ))}
      </Tabs>
    </div>
  );
};
