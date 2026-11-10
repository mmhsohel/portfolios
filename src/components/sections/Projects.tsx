import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
export default function Projects(){
  return(<section id="projects" className="mx-auto max-w-6xl px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
  </section>);
}