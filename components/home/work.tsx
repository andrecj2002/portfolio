"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data";
import { slugify } from "@/lib/utils";

export const WorkSection = () => {
  const { work } = DATA.projects;
  const { sectionTitle, sectionDescription } = DATA.projects;

  return (
    <section className="py-20 bg-background" id="work-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {work.slice(0, 3).map((project) => (
            <div key={project.id} className="w-full md:max-w-none">
              <ProjectCard
                href={`/projects/${slugify(project.title)}`}
                project={project}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button
            as={Link}
            className="border border-white bg-white px-8 py-4 text-lg font-semibold text-black shadow-md transition-colors hover:bg-white hover:!text-black dark:border-white dark:bg-white dark:text-black"
            endContent={<span className="ml-2">→</span>}
            href="/projects"
            size="lg"
            variant="shadow"
          >
            View More Work
          </Button>
        </div>
      </div>
    </section>
  );
};
