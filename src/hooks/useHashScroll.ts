import { useEffect } from "react";

const SETTLE_MS = 120;

/**
 * Deep-link support: on load, if the URL has a `#section` hash, scroll to that
 * element. The SPA renders sections after the browser's native hash-scroll has
 * already run against an empty page, so we redo it once React has mounted —
 * after a short delay to let layout/fonts settle so the target lands accurately.
 */
export function useHashScroll(): void {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }),
        SETTLE_MS,
      );
    }
  }, []);
}