"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { DATA } from "@/data";

export const SkillsOverviewSection = () => {
  const { sectionTitle, sectionDescription } = DATA.home.skills;
  const technologies = DATA.about.technologies;

  return (
    <section className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(technologies).map(([category, { tools }]) => (
            <div key={category} className="text-center">
              <h3 className="mb-3 text-lg font-semibold">
                {{
                  backendAndData: "Backend & Data",
                  designAndDelivery: "Design & Delivery",
                  development: "Development",
                }[category] ?? category}
              </h3>
              <div className="relative mx-auto h-64 w-full max-w-xs overflow-hidden">
                <OrbitingCircles
                  className="[&>div]:rounded-full [&>div]:bg-content1 [&>div]:p-2 [&>div]:shadow-sm"
                  duration={24}
                  iconSize={38}
                  radius={88}
                >
                  {tools.map((tool) => (
                    <div key={tool.name} title={tool.name}>
                      <Icon className="h-6 w-6" icon={tool.icon} />
                    </div>
                  ))}
                </OrbitingCircles>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            as={Link}
            className="border border-white bg-white px-8 py-4 text-lg font-semibold text-black shadow-md transition-colors hover:bg-white hover:!text-black dark:border-white dark:bg-white dark:text-black"
            href="/about#technologies"
            size="lg"
            variant="shadow"
          >
            View more
          </Button>
        </div>
      </div>
    </section>
  );
};
