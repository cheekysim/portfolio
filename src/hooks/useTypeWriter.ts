import { useEffect, useRef, useState, RefObject } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export const useTypeWriter = (
  content = "",
  duration = 1,
  delay = 0
): [string, RefObject<HTMLElement>] => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string>("");
  const dur = useRef<number>(duration);
  const del = useRef<number>(delay);
  const [isVisible, ref] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible || prevText.current === content) return;
    setText("");
    prevText.current = content;
    const type = async () => {
      for (let i = 0; i < content.length; i++) {
        setText((t) => t + content[i]);
        await new Promise((resolve) =>
          setTimeout(resolve, dur.current / content.length)
        );
      }
    };
    setTimeout(() => {
      type();
    }, del.current);
  }, [content, isVisible]);

  return [text, ref];
};
