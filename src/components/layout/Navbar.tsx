"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
const sections=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];
export default function Navbar(){
  const [open,setOpen]=useState(false);const [active,setActive]=useState("home");
  useEffect(()=>{const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);}),{rootMargin:"-40% 0px -55% 0px"});sections.forEach(s=>{const el=document.getElementById(s.id);if(el)obs.observe(el);});return()=>obs.disconnect();},[]);
  const go=(id:string)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"});};
  return(<header className="sticky top-0 z-40 backdrop-blur bg-[rgba(10,14,26,0.75)] border-b border-[var(--border)]">
    <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <Link href="#home" onClick={()=>go("home")} className="font-semibold tracking-tight"><span className="gradient-text">{profile.name.split(" ")[0]}</span><span className="text-[var(--muted)]">.dev</span></Link>
      <ul className="hidden md:flex items-center gap-6 text-sm">{sections.map(s=>(<li key={s.id}><button onClick={()=>go(s.id)} className={cn("transition-colors hover:text-white",active===s.id?"text-[var(--accent)]":"text-[var(--muted)]")} aria-current={active===s.id?"page":undefined}>{s.label}</button></li>))}
        <li><a href={profile.resumePath} download className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition"><Download size={14}/>Resume</a></li>
      </ul>
      <button className="md:hidden p-2" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    {open&&(<div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]"><ul className="px-4 py-3 flex flex-col gap-1">{sections.map(s=>(<li key={s.id}><button onClick={()=>go(s.id)} className={cn("w-full text-left py-2",active===s.id?"text-[var(--accent)]":"text-[var(--muted)]")}>{s.label}</button></li>))}<li><a href={profile.resumePath} download className="flex items-center gap-2 py-2 text-[var(--accent)]"><Download size={14}/>Resume</a></li></ul></div>)}
  </header>);
}