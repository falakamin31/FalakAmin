import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Projects I've shipped"
      subtitle="A few projects that show how I turn ideas into fast, polished, production-ready products."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {p.subtitle}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                  <a
                    href={p.live}
                    target={p.live !== "#" ? "_blank" : undefined}
                    rel={p.live !== "#" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
                  >
                    Live <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
