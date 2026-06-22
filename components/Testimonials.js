import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What clients say"
      subtitle="Placeholder quotes — swap in real client feedback as you collect it."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
              <Quote className="h-7 w-7 text-accent/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
