export type Proficiency = "Familiar" | "Intermediate" | "Currently Learning";
export interface Skill { name: string; proficiency: Proficiency; }
export interface SkillCategory { title: string; skills: Skill[]; }
export interface EducationEntry { institution: string; degree: string; department: string; startYear: string; endYear: string; description: string; }
export interface ExperienceEntry { company: string; position: string; type: string; startDate: string; endDate: string; responsibilities: string[]; technologies: string[]; }
export interface ProjectFeature { title: string; implemented: boolean; }
export interface Project {
  slug: string; name: string; shortDescription: string; thumbnail: string; thumbnailAlt: string;
  technologies: string[]; status: "In Development" | "Live" | "Completed";
  liveUrl?: string; clientRepo?: string; serverRepo?: string; repoUrl?: string;
  overview: string; problem: string; features: ProjectFeature[]; architecture: string;
  responsibilities: string[]; challenges: string[]; solutions: string[]; futureImprovements: string[];
}