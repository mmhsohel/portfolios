"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brands";
import { profile } from "@/data/profile";

export default function Footer(){
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return(<footer className="border-t border-[var(--border)] mt-24">
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
      <div><p className="font-semibold">{profile.name}</p><p className="text-sm text-[var(--muted)]">{profile.designation}</p></div>
      <nav className="text-sm flex flex-wrap gap-x-4 gap-y-2 text-[var(--muted)]">{["about","skills","projects","contact"].map(id=>(<a key={id} href={`#${id}`} className="hover:text-white capitalize">{id}</a>))}</nav>
      <div className="flex gap-3 md:justify-end items-start">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 border border-[var(--border)] rounded-md hover:border-[var(--accent)]"><GithubIcon size={16}/></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border border-[var(--border)] rounded-md hover:border-[var(--accent)]"><LinkedinIcon size={16}/></a>
        <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="p-2 border border-[var(--border)] rounded-md hover:border-[var(--accent)]" aria-label="Back to top"><ArrowUp size={16}/></button>
      </div>
    </div>
    <div className="border-t border-[var(--border)] text-center text-xs text-[var(--muted)] py-4">
      © {year ?? "____"} {profile.name}. All rights reserved.
    </div>
  </footer>);
}