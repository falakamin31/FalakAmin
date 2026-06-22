import Reveal from "./Reveal";

// Shared section shell with an optional eyebrow + heading.
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
      {(eyebrow || title) && (
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
