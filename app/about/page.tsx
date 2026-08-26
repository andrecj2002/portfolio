"use client";

import { ProfileCard } from "@/components/about/profile-card";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { getData } from "@/data";
import { useLocale } from "@/hooks/use-locale";

export default function AboutPage() {
  const { t, locale } = useLocale();
  const { education, experience, profile } = getData(locale).about;
  const tech = getData(locale).about.technologies;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={t.about.texts} />
      <ProfileCard description={profile.description} title={profile.title} />
      <ExperienceTimeline experience={experience} />
      <EducationTimeline education={education} />
      <Skills tech={tech} />
    </section>
  );
}
