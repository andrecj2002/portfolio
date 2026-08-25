"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import type { Project } from "@/components/projects/types";
import ImageGallery from "@/components/image-gallery";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const galleryImages = project.detailImage
    ? [project.detailImage, ...project.gallery]
    : Array.from(new Set([project.image, ...project.gallery]));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="mb-8">
        <Button
          as={Link}
          className="border border-foreground bg-transparent text-foreground transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
          href="/projects"
          variant="bordered"
        >
          ← Back to Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ImageGallery
          images={galleryImages}
          imageLabels={project.galleryLabels}
        />

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-foreground mb-2">
              {project.category}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 break-words">
              {project.title}
            </h1>
            <p className="text-foreground-600 leading-relaxed break-words">
              {project.details}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tool) => (
                <Chip key={tool.name} variant="flat">
                  {tool.name}
                </Chip>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <Button
                as={Link}
                className="border border-foreground bg-transparent text-foreground transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
                href={project.github}
                variant="bordered"
              >
                GitHub
              </Button>
            )}
            {project.live && (
              <Button
                as={Link}
                className="border border-foreground bg-transparent text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
                href={project.live}
                variant="bordered"
              >
                Live Site
              </Button>
            )}
            {project.promoPage && (
              <Button
                as={Link}
                className="border border-foreground bg-transparent text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
                href={project.promoPage}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
              >
                Promo Page
              </Button>
            )}
            {project.promoVideo && (
              <Button
                as={Link}
                className="border border-foreground bg-transparent text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
                href={project.promoVideo}
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
              >
                Promo Video
              </Button>
            )}
          </div>
        </div>
      </div>

      {project.uiuxCaseStudy && (
        <section className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">UI/UX Case Study</h2>
            {project.uiuxCaseStudy.summary && (
              <p className="mt-2 text-foreground-600 leading-relaxed">
                {project.uiuxCaseStudy.summary}
              </p>
            )}
          </div>

          {project.uiuxCaseStudy.phases.map((phase) => (
            <div key={phase.name} className="space-y-4">
              <h3 className="text-xl font-semibold">{phase.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {phase.results.map((result) => (
                  <figure
                    key={`${phase.name}-${result.page}`}
                    className="overflow-hidden rounded-xl border border-white/15 bg-black/40"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        fill
                        alt={`${phase.name} - ${result.page}`}
                        className="object-contain"
                        loading="lazy"
                        src={result.image}
                      />
                    </div>
                    <figcaption className="border-t border-white/15 px-4 py-3 text-sm font-medium text-foreground">
                      {result.page}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
