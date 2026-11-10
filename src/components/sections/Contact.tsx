"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brands";
import { profile } from "@/data/profile";
const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
});
type FormValues = z.infer<typeof schema>;
export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(`From: ${data.name} <${data.email}>\n\n${data.message}`);
    const subject = encodeURIComponent(data.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-[var(--muted)] mb-6">Reach out via the form (opens your email client) or the links below.</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} className="text-[var(--accent)]"/><a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></li>
            {profile.phone && (<li className="flex items-center gap-2"><Phone size={16} className="text-[var(--accent)]"/><a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a></li>)}
            <li className="flex items-center gap-2"><GithubIcon size={16}/><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            <li className="flex items-center gap-2"><LinkedinIcon size={16}/><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="surface p-5 space-y-3" noValidate>
          {(["name","email","subject"] as const).map(field=>(
            <div key={field}>
              <label className="text-xs uppercase tracking-wide text-[var(--muted)]" htmlFor={field}>{field}</label>
              <input id={field} type={field==="email"?"email":"text"} {...register(field)}
                className="mt-1 w-full bg-transparent border border-[var(--border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent)]"/>
              {errors[field] && <p className="text-xs text-red-400 mt-1">{errors[field]?.message}</p>}
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-wide text-[var(--muted)]" htmlFor="message">message</label>
            <textarea id="message" rows={4} {...register("message")}
              className="mt-1 w-full bg-transparent border border-[var(--border)] rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent)]"/>
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] text-black font-medium"><Send size={14}/>Send Message</button>
          {status==="sent" && <p className="text-xs text-emerald-400">Your email client should open now. If it doesn't, email {profile.email} directly.</p>}
        </form>
      </div>
    </section>
  );
}