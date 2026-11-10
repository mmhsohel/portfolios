import { experience } from "@/data/experience";
export default function Experience(){
  return(<section id="experience" className="mx-auto max-w-6xl px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Independent Development Experience</h2>
    <ol className="relative border-l border-[var(--border)] pl-6 space-y-10">{experience.map((x,i)=>(<li key={i}><div className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-[var(--accent)]"/><p className="text-xs text-[var(--muted)]">{x.startDate} — {x.endDate} · {x.type}</p><h3 className="font-medium mt-1">{x.position}</h3><p className="text-sm text-[var(--accent)]">{x.company}</p><ul className="list-disc list-inside text-sm text-[var(--text)]/85 mt-2 space-y-1">{x.responsibilities.map((r,j)=><li key={j}>{r}</li>)}</ul><div className="mt-3 flex flex-wrap gap-1.5">{x.technologies.map(t=>(<span key={t} className="text-xs border border-[var(--border)] rounded px-2 py-0.5 text-[var(--muted)]">{t}</span>))}</div></li>))}</ol>
  </section>);
}