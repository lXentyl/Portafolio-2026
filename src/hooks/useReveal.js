import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.06 });
    element.classList.add("reveal-ready");
    observer.observe(element);
    return () => {
      observer.disconnect();
      element.classList.remove("reveal-ready");
    };
  }, []);
  return ref;
}
