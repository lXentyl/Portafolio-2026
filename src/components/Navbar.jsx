import { useEffect, useRef, useState } from "react";

export default function Navbar() {
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

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label="Elian Rodríguez, inicio">elian<span>.</span></a>
          <button ref={toggle} className={`nav-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span /><span /></button>
          <nav id="primary-nav" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navegación principal">
            <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
            <a href="#skills" onClick={() => setOpen(false)}>Habilidades</a>
            <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experiencia</a>
            <a href="#certificaciones" onClick={() => setOpen(false)}>Formación</a>
            <a href="#linkedin" onClick={() => setOpen(false)}>LinkedIn</a>
            <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Hablemos <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
    </>
  );
}
