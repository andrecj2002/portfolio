export interface Project {
  readonly id: number | string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly details: string;
  readonly image: string;
  readonly detailImage?: string;
  readonly galleryLabels?: readonly (string | undefined)[];
  readonly architectureSection?: {
    title: string;
    description: string;
    images: readonly string[];
    imageLabels?: readonly (string | undefined)[];
  };
  readonly github?: string;
  readonly live?: string;
  readonly promoPage?: string;
  readonly promoVideo?: string;
  readonly uiuxCaseStudy?: {
    summary?: string;
    phases: readonly {
      name: string;
      results: readonly {
        page: string;
        image: string;
      }[];
    }[];
  };
  readonly gallery: readonly string[];
  tech: readonly {
    name: string;
    icon: string;
  }[];
}

export interface ProjectsTabsProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export interface ProjectsGridProps {
  projects: readonly Project[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
  href: string;
}

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}
