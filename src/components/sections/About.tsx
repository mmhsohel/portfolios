import { profile } from "@/data/profile";
const blocks=[["Programming Journey",profile.journey],["Interests",profile.interests],["Hobbies",profile.hobbies],["Professional Goals",profile.goals],["Working Philosophy",profile.philosophy]] as const;
export default function About(){
  return(<section id="about" className="mx-auto max-w-6xl px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
    <p className="max-w-3xl leading-relaxed text-[var(--text)]/85 whitespace-pre-line">{profile.about}</p>
    <div className="mt-10 grid gap-4 sm:grid-cols-2">{blocks.map(([title,body])=>(<div key={title} className="surface p-5"><h3 className="font-medium mb-2">{title}</h3><p className="text-sm text-[var(--muted)] whitespace-pre-line">{body||"—"}</p></div>))}</div>
  </section>);
}