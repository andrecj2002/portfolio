import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@heroui/react";

import { ProjectCardProps } from "@/components/projects/types";
import { useLocale } from "@/hooks/use-locale";

export const ProjectCard = memo(function ProjectCard({
  project,
  href,
}: ProjectCardProps) {
  const { t } = useLocale();

  return (
    <Card
      as={Link}
      href={href}
      isFooterBlurred
      isHoverable
      className="
        border-none bg-white/90 dark:bg-black/70
        shadow-md dark:shadow-white/10
        rounded-xl overflow-hidden h-full w-full
        transition-colors
      "
      radius="lg"
    >
      <CardBody className="p-0 flex flex-col h-full">
        <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
          <Image
            alt={project.title}
            className="object-contain"
            fill
            loading="lazy"
            src={project.image}
          />
          <CardFooter
            className="
    justify-center
    bg-black/40 
    border-white/20 border-1
    overflow-hidden py-2.5 absolute before:rounded-xl rounded-large
    bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10
    backdrop-blur-sm
  "
          >
            <p className="text-xs font-medium text-white tracking-wider uppercase z-10">
              {project.category}
            </p>
          </CardFooter>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-medium border border-white px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:!text-black">
            {t.projects.detail}
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
