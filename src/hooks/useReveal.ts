import { useEffect } from "react";

/** Adds the `.in` class to `.rv` elements as they scroll into view. */
export function useReveal(dep: unknown): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rv"));
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => {
      if (!el.classList.contains("in")) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [dep]);
}
