import { useContentStore } from "@/store/useContentStore";

export const useExperiences = () => useContentStore((s) => s.experiences);
export const useExperienceCount = () =>
  useContentStore((s) => s.experiences.length);

export const useWorks = () => useContentStore((s) => s.works);
export const useWorkCount = () => useContentStore((s) => s.works.length);

export const useEducations = () => useContentStore((s) => s.educations);
export const useEducationCount = () =>
  useContentStore((s) => s.educations.length);

export const useAwardCertifications = () =>
  useContentStore((s) => s.awardsCertifications);
export const useAwardCertificationCount = () =>
  useContentStore((s) => s.awardsCertifications.length);

export const useStacks = () => useContentStore((s) => s.stacks);
export const useStackCount = () => useContentStore((s) => s.stacks.length);
