import type { SkillCategory } from "@/types";
export const skillCategories: SkillCategory[] = [
  { title: "Frontend Development", skills: [
    { name: "HTML5", proficiency: "Intermediate" },{ name: "CSS3", proficiency: "Intermediate" },
    { name: "Tailwind CSS", proficiency: "Intermediate" },{ name: "React.js", proficiency: "Intermediate" },
    { name: "Next.js", proficiency: "Intermediate" },{ name: "Responsive UI", proficiency: "Intermediate" },
  ]},
  { title: "Backend Development", skills: [
    { name: "Node.js", proficiency: "Intermediate" },{ name: "Express.js", proficiency: "Intermediate" },
    { name: "REST APIs", proficiency: "Intermediate" },{ name: "Authentication", proficiency: "Familiar" },
    { name: "RBAC", proficiency: "Familiar" },{ name: "BFF Architecture", proficiency: "Familiar" },
  ]},
  { title: "Database & ORM", skills: [
    { name: "PostgreSQL", proficiency: "Intermediate" },{ name: "MongoDB", proficiency: "Familiar" },
    { name: "Prisma ORM", proficiency: "Intermediate" },{ name: "Relational Design", proficiency: "Familiar" },
  ]},
  { title: "Languages", skills: [
    { name: "JavaScript", proficiency: "Intermediate" },{ name: "TypeScript", proficiency: "Intermediate" },
  ]},
  { title: "Tools & Infrastructure", skills: [
    { name: "Git", proficiency: "Intermediate" },{ name: "GitHub", proficiency: "Intermediate" },
    { name: "Netlify", proficiency: "Familiar" },{ name: "Render", proficiency: "Familiar" },
    { name: "Cloudflare", proficiency: "Familiar" },{ name: "Docker", proficiency: "Currently Learning" },
    { name: "Redis", proficiency: "Currently Learning" },
  ]},
];