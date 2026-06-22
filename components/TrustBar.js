"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function TrustBar() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray(".stat-num");
      nums.forEach((el) => {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals, 10) || 0;
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
        });
      });

      gsap.from(".stat-cell", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell px-5 py-9 text-center">
            <p
              className="stat-num font-display text-3xl font-bold gradient-text sm:text-4xl"
              data-target={s.target}
              data-decimals={s.decimals}
              data-suffix={s.suffix}
            >
              0{s.suffix}
            </p>
            <p className="mt-1.5 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
