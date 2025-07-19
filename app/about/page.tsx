import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, profile, skills } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={DATA.morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        image={profile.image}
        name={profile.name}
        title={profile.title}
      />
      <EducationTimeline education={education} />
      {/* Render skills list if present */}
      {skills && Array.isArray(skills) && skills.length > 0 && (
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="inline-block bg-primary-500 text-white rounded-full px-3 py-1 text-sm">
              Skills
            </span>
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Skills tech={tech} />
    </section>
  );
}
