import {
  GraduationCap,
  Award,
  Boxes,
  Presentation,
  Briefcase,
} from "lucide-react";
import { profile } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const facts = [
  { icon: GraduationCap, text: "B.Sc. Computer Engineering — UET Lahore" },
  { icon: Award, text: "Node.js — The Complete Guide certified (Udemy)" },
  { icon: Boxes, text: "Three.js Journey certified (Bruno Simon)" },
  { icon: Presentation, text: "Mobile App Development Instructor at NAVTTC" },
  { icon: Briefcase, text: "Clients across e-commerce, SaaS & marketplaces" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A bit about me">
      <div className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-2">
        {/* Left — narrative */}
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>{profile.intro}</p>
            <p>
              I care about clean architecture, performance, and writing code
              that&apos;s easy to maintain. Beyond building, I enjoy teaching —
              instructing mobile app development at NAVTTC kept my fundamentals
              sharp and my communication clear, which clients tell me makes me
              easy to work with.
            </p>
            <p>
              Whether it&apos;s a brand-new product or an extra pair of hands on
              an existing team, I focus on shipping work that&apos;s fast,
              accessible, and genuinely pleasant to use.
            </p>
          </div>
        </Reveal>

        {/* Right — quick facts list (tops align with the text on the left) */}
        <Reveal delay={0.1}>
          <ul className="overflow-hidden rounded-2xl border border-border bg-surface px-5">
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <li
                  key={f.text}
                  className={`flex items-center gap-4 py-4 ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-snug text-foreground/90">
                    {f.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
