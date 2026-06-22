import { experience } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Where I've worked">
      <div className="relative border-l border-border pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.06}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {e.role}
                </h3>
                <span className="text-sm text-muted">{e.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {e.company}
              </p>
              <ul className="mt-3 space-y-2">
                {e.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
