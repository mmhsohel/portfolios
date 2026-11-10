import Image from "next/image";
import { Download, FolderGit2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brands";
import { profile } from "@/data/profile";
export default function Hero(){
  return(<section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-24 md:pt-28 md:pb-32">
    <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
      <div>
        <p className="text-sm text-[var(--accent)] mb-3">Hello, I'm</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-lg md:text-xl text-[var(--muted)]">{profile.designation}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text)]/85">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.resumePath} download className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] text-black font-medium hover:opacity-90"><Download size={16}/>Download Resume</a>
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)]"><FolderGit2 size={16}/>View Projects</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)]"><GithubIcon size={18}/></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)]"><LinkedinIcon size={18}/></a>
        </div>
      </div>
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden surface mx-auto md:mx-0">
        <Image src={profile.photo} alt={`${profile.name} profile photo`} fill sizes="256px" className="object-cover" priority/>
      </div>
    </div>
  </section>);
}