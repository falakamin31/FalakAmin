import { Code2, Figma, Gauge } from "lucide-react";
import { services } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const icons = { Code2, Figma, Gauge };

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title="Services built around your goals"
      subtitle="From first wireframe to a fast, polished product that's ready for real users."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] || Code2;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
