"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getData } from "@/data";
import { useLocale } from "@/hooks/use-locale";

const normalizeCategory = (cat: string) => cat.trim().toLowerCase();

const ProjectsPage = () => {
  const { t, locale } = useLocale();
  const allProjects = getData(locale).projects.work;

  const categories = useMemo(
    () => [
      t.projects.all,
      ...Array.from(
        new Set(
          allProjects.map((project) => normalizeCategory(project.category)),
        ),
      ).map(
        (cat) =>
          allProjects.find((p) => normalizeCategory(p.category) === cat)
            ?.category || cat,
      ),
    ],
    [allProjects],
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(t.projects.all);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === t.projects.all
        ? allProjects
        : allProjects.filter(
            (project) =>
              normalizeCategory(project.category) ===
              normalizeCategory(selectedCategory),
          ),
    [selectedCategory, allProjects, t.projects.all],
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
