import { education } from "@/data/education";
export default function Education(){
  return(<section id="education" className="mx-auto max-w-6xl px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Education</h2>
    <ol className="relative border-l border-[var(--border)] pl-6 space-y-8">{education.map((e,i)=>(<li key={i}><div className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-[var(--accent)]"/><p className="text-xs text-[var(--muted)]">{e.startYear} — {e.endYear}</p><h3 className="font-medium mt-1">{e.degree}</h3><p className="text-sm text-[var(--accent)]">{e.institution}</p><p className="text-sm text-[var(--muted)]">{e.department}</p>{e.description&&<p className="text-sm mt-2 text-[var(--text)]/80">{e.description}</p>}</li>))}</ol>
  </section>);
}