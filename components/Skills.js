"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import Reveal from "./Reveal";

// Each tech with its brand logo + brand color. Monochrome logos use
// `currentColor` so they adapt to light/dark automatically.
const TECH = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: null },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "SASS", Icon: SiSass, color: "#CC6699" },
  { name: "Three.js", Icon: SiThreedotjs, color: null },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: null },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: null },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", Icon: SiVercel, color: null },
  { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
];

const rowA = TECH.filter((_, i) => i % 2 === 0);
const rowB = TECH.filter((_, i) => i % 2 === 1);

function Pill({ name, Icon, color }) {
  return (
    <span className="group mr-4 inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent">
      <Icon
        className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110"
        style={color ? { color } : undefined}
      />
      {name}
    </span>
  );
}

function Marquee({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((t, i) => (
          <Pill key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto mb-12 max-w-6xl px-5">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Tech Stack
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I build with
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            A modern, full-stack JavaScript toolkit — from polished React
            front-ends to Node APIs and the platforms that ship them.
          </p>
        </Reveal>
      </div>

      <div className="space-y-4">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>
    </section>
  );
}
