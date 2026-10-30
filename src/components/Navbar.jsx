import { IconArrow } from "./Icons";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = [...document.querySelectorAll("main > section[id]")];
      const current = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
      setActive(current?.id || "top");
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", scroll, { passive: true });
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", scroll); };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label="Elian Rodríguez, inicio">elian<span>.</span></a>
          <button ref={toggle} className={`nav-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span /><span /></button>
          <nav id="primary-nav" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navegación principal">
            <a href="#projects" aria-current={active === "projects" ? "location" : undefined} onClick={() => setOpen(false)}>Proyectos</a>
            <a href="#about" aria-current={active === "about" ? "location" : undefined} onClick={() => setOpen(false)}>Sobre mí</a>
            <a href="#experience" aria-current={active === "experience" ? "location" : undefined} onClick={() => setOpen(false)}>Experiencia</a>
            <a className="nav-contact" href="#contact" aria-current={active === "contact" ? "location" : undefined} onClick={() => setOpen(false)}>Hablemos <span aria-hidden="true"><IconArrow /></span></a>
          </nav>
        </div>
      </header>
    </>
  );
}
