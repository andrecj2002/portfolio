import { notFound } from "next/navigation";

import { DATA } from "@/data";
import { slugify } from "@/lib/utils";
import { ProjectDetails } from "@/components/projects/project-details";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const legacySlugs: Readonly<Record<string, string>> = {
  "chat-bot-techlab": "Chat-Bot for TechLab",
};

export function generateStaticParams() {
  return DATA.projects.work.flatMap((project) => {
    const slugs = [slugify(project.title)];
    const legacySlug = Object.entries(legacySlugs).find(
      ([, title]) => title === project.title,
    )?.[0];

    if (legacySlug) slugs.push(legacySlug);

    return slugs.map((slug) => ({ slug }));
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectTitle = legacySlugs[slug];
  const project = DATA.projects.work.find(
    (item) => slugify(item.title) === slug || item.title === projectTitle,
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails projectId={project.id} />;
}
