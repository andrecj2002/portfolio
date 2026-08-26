"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getData } from "@/data";
import { useLocale } from "@/hooks/use-locale";

const normalizeCategory = (cat: string) => cat.trim().toLowerCase();
const ALL_KEY = "all";

const ProjectsPage = () => {
  const { t, locale } = useLocale();
  const allProjects = getData(locale).projects.work;

  const categories = useMemo(
    () => [
      { key: ALL_KEY, label: t.projects.all },
      ...Array.from(
        new Set(
          allProjects.map((project) => normalizeCategory(project.category)),
        ),
      ).map((key) => ({
        key,
        label:
          allProjects.find((p) => normalizeCategory(p.category) === key)
            ?.category || key,
      })),
    ],
    [allProjects, t.projects.all],
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_KEY);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === ALL_KEY
        ? allProjects
        : allProjects.filter(
            (project) =>
              normalizeCategory(project.category) === selectedCategory,
          ),
    [selectedCategory, allProjects],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={t.projects.texts} />

      <ProjectsTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

export default ProjectsPage;
