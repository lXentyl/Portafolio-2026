import { IconArrow } from "./Icons";
import { projects } from "../data/projects";

export default function Hero() {
  return <section id="top" className="hero studio-hero">
    <div className="container studio-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-enter"><span className="identity-dot" /> Elian Rodríguez · Desarrollador web</p>
        <h1><span className="title-line"><span>De una idea</span></span><span className="title-line"><span>a una experiencia</span></span><span className="title-line title-accent"><span>que funciona.</span></span></h1>
        <p className="hero-intro hero-enter">Diseño y desarrollo sitios y aplicaciones con React, conectando interfaces, datos y necesidades reales.</p>
        <div className="hero-actions hero-enter"><a className="button button-primary" href="#projects">Explorar mi trabajo <span aria-hidden="true"><IconArrow /></span></a><a className="text-link" href="/cv.pdf" target="_blank" rel="noreferrer">Ver CV <span aria-hidden="true"><IconArrow /></span></a></div>
        <div className="hero-specialties hero-enter"><span>Frontend</span><span>Aplicaciones</span><span>Bases de datos</span></div>
      </div>
      <div className="studio-stage hero-enter">
        <div className="stage-orbit" aria-hidden="true" />
        <div className="stage-index" aria-hidden="true">IDEA → CÓDIGO → EXPERIENCIA</div>
        <a className="stage-main depth-surface" href={projects.find(p => p.title === "Living Life").link} target="_blank" rel="noreferrer" aria-label="Visitar Living Life, proyecto personal de moda">
          <div className="stage-bar"><span>01 / Living Life</span><span aria-hidden="true"><IconArrow /></span></div><img src="/projects/living-life.jpg" alt="Portada del proyecto Living Life" width="1357" height="932" fetchPriority="high" />
        </a>
        <a className="stage-secondary depth-surface" href={projects.find(p => p.title === "Madera & Sal").link} target="_blank" rel="noreferrer" aria-label="Visitar Madera & Sal, restaurante ficticio">
          <img src="/projects/madera-y-sal.jpg" alt="Diseño del proyecto Madera & Sal" width="1348" height="926" /><div className="stage-bar"><span>02 / Madera & Sal</span><span aria-hidden="true"><IconArrow /></span></div>
        </a>
        <div className="stage-note"><span aria-hidden="true"><svg width="34" height="34" viewBox="0 0 40 40" fill="none"><path d="M20 2v36M2 20h36M7 7l26 26M7 33L33 7" stroke="currentColor" strokeWidth="3" /></svg></span><p>Diseño con intención.<br />Código con propósito.</p></div>
      </div>
    </div>
    <div className="container hero-foot"><span>Ingeniería en Software · UNAPEC</span><a href="#projects">Descubre los proyectos <span aria-hidden="true">↓</span></a></div>
  </section>;
}
