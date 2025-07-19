"use client";

import { useState, useMemo, useEffect } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { DATA } from "@/data";

const normalizeCategory = (cat: string) => cat.trim().toLowerCase();

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  // Debug: Log project titles and order
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Projects:", allProjects.map((p) => p.title));
  }, [allProjects]);

  // Normalize categories for tab display and filtering
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(allProjects.map((project) => normalizeCategory(project.category))),
      ).map(
        (cat) =>
          allProjects.find(
            (p) => normalizeCategory(p.category) === cat,
          )?.category || cat,
      ),
    ],
    [allProjects],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter(
            (project) =>
              normalizeCategory(project.category) ===
              normalizeCategory(selectedCategory),
          ),
    [selectedCategory, allProjects],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={DATA.morphingTexts.projects} />

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
