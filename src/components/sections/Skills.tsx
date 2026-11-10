import { skillCategories } from "@/data/skills";
const tone: Record<string,string> = { Familiar:"bg-blue-500/10 text-blue-300 border-blue-500/30", Intermediate:"bg-cyan-500/10 text-cyan-300 border-cyan-500/30", "Currently Learning":"bg-purple-500/10 text-purple-300 border-purple-500/30" };
export default function Skills(){
  return(<section id="skills" className="mx-auto max-w-6xl px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Skills</h2>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillCategories.map(cat=>(<div key={cat.title} className="surface p-5"><h3 className="font-medium mb-4">{cat.title}</h3><ul className="flex flex-wrap gap-2">{cat.skills.map(s=>(<li key={s.name} className={`text-xs border rounded-md px-2 py-1 ${tone[s.proficiency]}`}>{s.name} · {s.proficiency}</li>))}</ul></div>))}</div>
  </section>);
}