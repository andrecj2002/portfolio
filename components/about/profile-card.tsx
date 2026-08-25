"use client";

import { memo } from "react";
import { Card } from "@heroui/react";

import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/components/about/types";

export const ProfileCard = memo(function ProfileCard({
  title,
  description,
}: ProfileCardProps) {
  return (
    <Card className="mb-12 w-full overflow-hidden rounded-2xl bg-white/90 p-6 shadow-md dark:bg-black/60 md:p-8">
      <div className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        <p className="mb-2 text-lg font-bold text-foreground">{title}</p>
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            <SplittingText
              delay={index * 500}
              inView={true}
              inViewOnce={true}
              motionVariants={{ stagger: 0.08 }}
              text={paragraph}
              type="words"
            />
          </p>
        ))}
      </div>
    </Card>
  );
});
