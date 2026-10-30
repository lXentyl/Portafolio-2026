import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let surface = null;
    const resetSurface = () => {
      surface?.style.removeProperty("--tilt-x");
      surface?.style.removeProperty("--tilt-y");
      surface = null;
    };
    const update = () => {
      frame = 0;
      const distance = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--page-progress", distance > 0 ? window.scrollY / distance : 0);
      root.style.setProperty("--hero-drift", preference.matches ? "0px" : `${Math.min(window.scrollY * .12, 80)}px`);
      root.classList.toggle("page-scrolled", window.scrollY > 24);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const pointer = event => {
      if (preference.matches || !finePointer.matches) return;
      const next = event.target.closest(".depth-surface");
      if (next !== surface) { resetSurface(); surface = next; }
      if (!surface) return;
      const box = surface.getBoundingClientRect();
      surface.style.setProperty("--tilt-x", `${(event.clientY - box.top - box.height / 2) / box.height * -5}deg`);
      surface.style.setProperty("--tilt-y", `${(event.clientX - box.left - box.width / 2) / box.width * 5}deg`);
    };
    const change = () => { resetSurface(); schedule(); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("pointerleave", resetSurface);
    preference.addEventListener("change", change);
    update();
    return () => {
      cancelAnimationFrame(frame); resetSurface();
      window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule);
      document.removeEventListener("pointermove", pointer); document.removeEventListener("pointerleave", resetSurface);
      preference.removeEventListener("change", change);
      root.style.removeProperty("--page-progress"); root.style.removeProperty("--hero-drift"); root.classList.remove("page-scrolled");
    };
  }, []);
  return <div className="reading-progress" aria-hidden="true" />;
}
