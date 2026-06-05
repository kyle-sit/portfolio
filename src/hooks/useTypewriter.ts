import { useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  type?: number;
  erase?: number;
  hold?: number;
}

/** Cycles through `words`, typing and erasing each in turn. */
export function useTypewriter(
  words: string[],
  { type = 70, erase = 40, hold = 1400 }: TypewriterOptions = {},
): string {
  const [text, setText] = useState("");
  const i = useRef(0);
  const sub = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    let to: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = words[i.current % words.length];
      if (!del.current) {
        sub.current++;
        setText(w.slice(0, sub.current));
        if (sub.current === w.length) {
          del.current = true;
          to = setTimeout(tick, hold);
          return;
        }
        to = setTimeout(tick, type);
      } else {
        sub.current--;
        setText(w.slice(0, sub.current));
        if (sub.current === 0) {
          del.current = false;
          i.current++;
          to = setTimeout(tick, 240);
          return;
        }
        to = setTimeout(tick, erase);
      }
    };
    to = setTimeout(tick, 500);
    return () => clearTimeout(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
