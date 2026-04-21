export type SocialKind = 'github' | 'linkedin' | 'web' | 'email' | 'phone';

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly kind: SocialKind;
}

export interface Profile {
  readonly fullName: string;
  readonly headline: string;
  readonly summary: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  /** URI para discagem direta (ex.: `tel:+55...`). */
  readonly phoneDialUrl: string;
  readonly links: readonly SocialLink[];
}

export interface ExperienceItem {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly bullets: readonly string[];
}

export interface EducationItem {
  readonly title: string;
  readonly institution: string;
  readonly detail: string;
}

export interface ProjectItem {
  readonly name: string;
  readonly context: string;
  readonly highlights: readonly string[];
}

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export interface PortfolioSnapshot {
  readonly profile: Profile;
  readonly experience: readonly ExperienceItem[];
  readonly education: readonly EducationItem[];
  readonly projects: readonly ProjectItem[];
  readonly skills: readonly SkillGroup[];
}
