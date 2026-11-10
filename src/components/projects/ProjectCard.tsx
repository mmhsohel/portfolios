import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/Brands";
import type { Project } from "@/types";
export default function ProjectCard({ project }: { project: Project }) {
  return(<article className="surface overflow-hidden flex flex-col">
    <div className="relative aspect-video"><Image src={project.thumbnail} alt={project.thumbnailAlt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover"/></div>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between"><h3 className="font-medium">{project.name}</h3><span className="text-[10px] uppercase tracking-wide border border-[var(--border)] rounded px-2 py-0.5 text-[var(--muted)]">{project.status}</span></div>
      <p className="text-sm text-[var(--muted)] mt-2 flex-1">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">{project.technologies.slice(0,5).map(t=>(<span key={t} className="text-[10px] border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--muted)]">{t}</span>))}</div>
      <div className="flex items-center justify-between mt-4">
        <Link href={`/projects/${project.slug}`} className="text-sm text-[var(--accent)] hover:underline">View Details →</Link>
        <div className="flex gap-2">
          {project.liveUrl&&(<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="p-1.5 border border-[var(--border)] rounded hover:border-[var(--accent)]"><ExternalLink size={14}/></a>)}
          {(project.repoUrl||project.clientRepo)&&(<a href={project.repoUrl??project.clientRepo} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 border border-[var(--border)] rounded hover:border-[var(--accent)]"><GithubIcon size={14}/></a>)}
        </div>
      </div>
    </div>
  </article>);
}