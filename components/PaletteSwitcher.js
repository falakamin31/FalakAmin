"use client";

import { useEffect, useState } from "react";
import { Palette as PaletteIcon, Check } from "lucide-react";
import { palettes, defaultPalette } from "@/lib/palettes";

export default function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(defaultPalette);

  useEffect(() => {
    let saved = defaultPalette;
    try {
      saved = localStorage.getItem("palette") || defaultPalette;
    } catch {}
    setCurrent(saved);
    document.documentElement.setAttribute("data-palette", saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (!e.target.closest("[data-palette-switcher]")) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [open]);

  const choose = (key) => {
    setCurrent(key);
    document.documentElement.setAttribute("data-palette", key);
    try {
      localStorage.setItem("palette", key);
    } catch {}
    setOpen(false);
  };

  return (
    <div className="relative" data-palette-switcher>
      <button
        type="button"
        aria-label="Change color theme"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <PaletteIcon className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-border bg-background p-1.5 shadow-xl">
          <p className="px-2.5 pb-1.5 pt-1 text-xs font-semibold uppercase tracking-wider text-muted">
            Color theme
          </p>
          {palettes.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => choose(p.key)}
              className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-surface"
            >
              <span className="flex -space-x-1.5">
                <span
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ background: p.a }}
                />
                <span
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ background: p.b }}
                />
              </span>
              <span className="flex-1 text-left">{p.name}</span>
              {current === p.key && (
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
