import { RefObject, useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }
): [boolean, RefObject<HTMLElement>] => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);

  return [isVisible, ref];
};
