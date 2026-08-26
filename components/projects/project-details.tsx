"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import type { Project } from "@/components/projects/types";
import ImageGallery from "@/components/image-gallery";
import { getData } from "@/data";
import { useLocale } from "@/hooks/use-locale";

type ProjectDetailsProps = {
  projectId: Project["id"];
};

const ModalZoomControls = ({
  zoom,
  setZoom,
  setFullscreenImage,
}: {
  zoom: number;
  setZoom: (value: number | ((current: number) => number)) => void;
  setFullscreenImage: (value: string | null) => void;
}) => {
  const { t } = useLocale();

  const handleZoomIn = () => setZoom((current) => Math.min(current + 0.25, 3));
  const handleZoomOut = () => setZoom((current) => Math.max(current - 0.25, 1));

  return (
    <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 backdrop-blur-sm">
      <button
        className="h-8 w-8 rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20"
        type="button"
        onClick={handleZoomOut}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-white">
        {Math.round(zoom * 100)}%
      </span>
      <button
        className="h-8 w-8 rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20"
        type="button"
        onClick={handleZoomIn}
      >
        +
      </button>
      <button
        className="ml-2 rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white transition hover:bg-white/20"
        type="button"
        onClick={() => setFullscreenImage(null)}
      >
        {t.projects.close}
      </button>
    </div>
  );
};

export const ProjectDetails = ({ projectId }: ProjectDetailsProps) => {
  const { t, locale } = useLocale();
  const project = getData(locale).projects.work.find(
    (item) => item.id === projectId,
  );
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  if (!project) return null;

  const architectureSection = project.architectureSection;

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
          ← {t.projects.backToProjects}
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
            <h2 className="text-xl font-semibold mb-3">
              {t.projects.technologies}
            </h2>
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
                {t.projects.github}
              </Button>
            )}
            {project.live && (
              <Button
                as={Link}
                className="border border-foreground bg-transparent text-foreground shadow-none transition-colors hover:bg-white hover:!text-black dark:border-white dark:text-white"
                href={project.live}
                variant="bordered"
              >
                {t.projects.live}
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
                {t.projects.promoPage}
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
                {t.projects.promoVideo}
              </Button>
            )}
          </div>
        </div>
      </div>

      {architectureSection && (
        <section className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {architectureSection.title}
            </h2>
            <p className="text-foreground-600 leading-relaxed">
              {architectureSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {architectureSection.images.map((image, index) => (
              <figure
                key={`${architectureSection.title}-${index}`}
                className="overflow-hidden rounded-xl border border-white/15 bg-black/40"
              >
                <div
                  className="relative aspect-[16/10] w-full cursor-pointer"
                  onClick={() => {
                    setZoom(1);
                    setFullscreenImage(image);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setZoom(1);
                      setFullscreenImage(image);
                    }
                  }}
                >
                  <Image
                    fill
                    alt={
                      architectureSection.imageLabels?.[index] ??
                      `${project.title} architecture ${index + 1}`
                    }
                    className="object-contain"
                    loading="lazy"
                    src={image}
                  />
                </div>
                {architectureSection.imageLabels?.[index] && (
                  <figcaption className="border-t border-white/15 px-4 py-3 text-sm font-medium text-foreground">
                    {architectureSection.imageLabels[index]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6"
          onClick={() => setFullscreenImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setFullscreenImage(null);
            }
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center overflow-auto rounded-lg bg-black p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalZoomControls
              setFullscreenImage={setFullscreenImage}
              setZoom={setZoom}
              zoom={zoom}
            />
            <div className="mt-12 flex min-h-0 w-full items-center justify-center overflow-auto">
              <Image
                alt="Expanded project detail"
                className="max-h-[80vh] w-auto object-contain transition-transform duration-200"
                src={fullscreenImage}
                style={{ transform: `scale(${zoom})` }}
                width={1600}
                height={1200}
              />
            </div>
          </div>
        </div>
      )}

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
                    <div
                      className="relative aspect-[16/10] w-full cursor-pointer"
                      onClick={() => {
                        setZoom(1);
                        setFullscreenImage(result.image);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setZoom(1);
                          setFullscreenImage(result.image);
                        }
                      }}
                    >
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
