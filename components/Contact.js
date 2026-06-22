"use client";

import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="grid lg:grid-cols-2">
          {/* Left — invitation */}
          <div className="relative flex flex-col justify-center p-8 sm:p-12">
            <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-accent/20 blur-[90px]" />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="relative mt-4 leading-relaxed text-muted">
              Have a project in mind or need an extra pair of hands? I&apos;m
              available for freelance and contract work. I usually reply within
              24 hours.
            </p>

            <div className="relative mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" /> {profile.phone}
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — form (wire up to Formspree / Resend later) */}
          <div className="border-t border-border bg-background p-8 sm:p-12 lg:border-l lg:border-t-0">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                Send Message <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
