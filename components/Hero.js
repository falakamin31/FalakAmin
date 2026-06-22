"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-3xl px-5 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance &amp; contract work
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} — a{" "}
            <span className="gradient-text">{profile.role}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-contrast shadow-lg shadow-accent/20 transition-shadow hover:shadow-accent/40"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1"
        >
          <span className="h-2 w-1 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
