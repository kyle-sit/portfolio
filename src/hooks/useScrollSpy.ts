import { useEffect, useState } from "react";

/** Tracks which section id is currently in view (drives navbar active state). */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join();
  useEffect(() => {
    const targets = key.split(",");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [key]);
  return active;
}
