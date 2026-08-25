import React from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectsGridProps } from "@/components/projects/types";
import { slugify } from "@/lib/utils";

export const ProjectsGrid = ({
  projects,
  className = "",
}: ProjectsGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          href={`/projects/${slugify(project.title)}`}
          project={project}
        />
      ))}
    </div>
  );
};
