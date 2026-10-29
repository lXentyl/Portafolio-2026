import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-copy">
        <p className="eyebrow hero-enter">Elian Rodríguez · Desarrollo & tecnología</p>
        <h1 className="hero-enter">Desarrollo web.<br /><span className="gradient-text">Soluciones con propósito.</span></h1>
        <p className="hero-intro hero-enter">Desarrollador web enfocado en React, aplicaciones y bases de datos. Construyo interfaces y soluciones para personas y negocios.</p>
        <div className="hero-actions hero-enter">
          <a className="button button-primary" href="#projects">Explorar proyectos <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/cv.pdf" target="_blank" rel="noreferrer">Ver CV <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-showcase hero-enter">
        <div className="showcase-glow" aria-hidden="true" />
        <a className="hero-device" href={projects.find((project) => project.repo === "Living-Life-Website").link} target="_blank" rel="noreferrer" aria-label="Visitar Living Life, proyecto de desarrollo web">
          <div className="device-screen"><img src="/projects/living-life.jpg" alt="Portada del sitio Living Life, uno de mis proyectos de desarrollo web" width="1357" height="932" fetchPriority="high" /></div>
          <div className="device-base" aria-hidden="true"><span /></div>
        </a>
        <div className="showcase-caption"><span>Diseño con intención. Desarrollo con detalle.</span><a href="#projects">Conoce mi trabajo <span aria-hidden="true">↓</span></a></div>
      </div>
      <div className="container hero-foot"><span>Ingeniería en Software · UNAPEC</span><span>Web. Datos. Soluciones.</span></div>
    </section>
  );
}
