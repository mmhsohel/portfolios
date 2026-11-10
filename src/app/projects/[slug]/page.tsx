import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Clock, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/Brands";
import { projects, getProject } from "@/data/projects";
import type { Metadata } from "next";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const p=getProject(slug);if(!p)return{};
  return{title:p.name,description:p.shortDescription,openGraph:{title:p.name,description:p.shortDescription,images:[{url:p.thumbnail}]}};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const project=getProject(slug);if(!project)notFound();
  const sections=[["Overview",project.overview],["Problem Statement",project.problem]] as const;
  return(<article className="mx-auto max-w-4xl px-4 py-16">
    <Link href="/#projects" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-white"><ArrowLeft size={14}/>Back to projects</Link>
    <h1 className="mt-6 text-3xl md:text-4xl font-bold">{project.name}</h1>
    <p className="mt-2 text-[var(--muted)]">{project.shortDescription}</p>
    <div className="mt-6 relative aspect-video rounded-xl overflow-hidden surface"><Image src={project.thumbnail} alt={project.thumbnailAlt} fill sizes="100vw" className="object-cover"/></div>
    <div className="mt-6 flex flex-wrap gap-3 text-sm">
      {project.liveUrl?(<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[var(--accent)] text-black"><ExternalLink size={14}/>Live</a>):(<span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--muted)]">Live Demo Coming Soon</span>)}
      {project.repoUrl&&(<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--border)]"><GithubIcon size={14}/>Repository</a>)}
      {project.clientRepo&&(<a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--border)]"><GithubIcon size={14}/>Client</a>)}
      {project.serverRepo&&(<a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--border)]"><GithubIcon size={14}/>Server</a>)}
    </div>
    {sections.map(([title,body])=>(<section key={title} className="mt-10"><h2 className="text-xl font-semibold mb-2">{title}</h2><p className="text-[var(--text)]/85 leading-relaxed">{body}</p></section>))}
    <section className="mt-10"><h2 className="text-xl font-semibold mb-3">Main Features</h2><ul className="grid sm:grid-cols-2 gap-2 text-sm">{project.features.map(f=>(<li key={f.title} className="flex items-center gap-2 surface p-2.5">{f.implemented?<Check size={14} className="text-emerald-400"/>:<Clock size={14} className="text-amber-400"/>}<span className="text-[var(--text)]/85">{f.title}</span><span className="ml-auto text-[10px] uppercase text-[var(--muted)]">{f.implemented?"Implemented":"Planned"}</span></li>))}</ul></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">Technologies</h2><div className="flex flex-wrap gap-2">{project.technologies.map(t=>(<span key={t} className="text-xs border border-[var(--border)] rounded px-2 py-1 text-[var(--muted)]">{t}</span>))}</div></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">Architecture Overview</h2><p className="text-[var(--text)]/85 leading-relaxed">{project.architecture}</p></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">My Responsibilities</h2><ul className="list-disc list-inside text-[var(--text)]/85 space-y-1">{project.responsibilities.map((r,i)=><li key={i}>{r}</li>)}</ul></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">Development Challenges</h2><ul className="list-disc list-inside text-[var(--text)]/85 space-y-1">{project.challenges.map((r,i)=><li key={i}>{r}</li>)}</ul></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">Solutions & Decisions</h2><ul className="list-disc list-inside text-[var(--text)]/85 space-y-1">{project.solutions.map((r,i)=><li key={i}>{r}</li>)}</ul></section>
    <section className="mt-10"><h2 className="text-xl font-semibold mb-2">Future Improvements</h2><ul className="list-disc list-inside text-[var(--text)]/85 space-y-1">{project.futureImprovements.map((r,i)=><li key={i}>{r}</li>)}</ul></section>
  </article>);
}