import { IconArrow } from "./Icons";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { IconGithub, IconCode } from "./Icons";
import Reveal from "./Reveal";
import { caseStudies } from "../data/caseStudies";

const featuredNames = ["Living Life", "Madera & Sal", "GymAI"];
const selected = featuredNames.map((name) => projects.find((project) => project.title === name));
const moreProjects = projects.filter((project) => !featuredNames.includes(project.title));

function ExpandIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.title}`}>Ver sitio <span aria-hidden="true"><IconArrow /></span></a>}
    {project.repo && <a className="code-link" href={`https://github.com/lXentyl/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}><IconGithub size={16} /> Código</a>}
  </div>;
}

function CaseStudy({ project }) {
  const study = caseStudies[project.title];
  return <details className="case-study">
    <summary>Explorar el caso <span aria-hidden="true">+</span></summary>
    <dl><div><dt><span aria-hidden="true">01 / </span>Objetivo</dt><dd>{study.objective}</dd></div><div><dt><span aria-hidden="true">02 / </span>Solución técnica</dt><dd>{study.approach}</dd></div><div><dt><span aria-hidden="true">03 / </span>Qué puedes explorar</dt><dd>{study.result}</dd></div></dl>
  </details>;
}

function AppFlow() {
  return <div className="app-flow" role="img" aria-label="Esquema funcional de GymAI: entrenamiento y nutrición, seguimiento del progreso y asistencia con IA">
    <p className="eyebrow">GymAI · Esquema funcional</p><h4>Del registro al progreso.</h4>
    <ol><li><span>01</span><div><strong>Entrenamiento y nutrición</strong><p>Registro de actividad</p></div></li><li><span>02</span><div><strong>Progreso</strong><p>Consulta y seguimiento</p></div></li><li><span>03</span><div><strong>Asistencia con IA</strong><p>Apoyo durante el recorrido</p></div></li></ol>
    <p className="flow-caption">Representación de funcionalidades</p>
  </div>;
}

export default function Projects() {
  const [category, setCategory] = useState("Todos");
  const [preview, setPreview] = useState(null);
  const previewDialog = useRef(null);
  useEffect(() => {
    if (preview && previewDialog.current && !previewDialog.current.open) previewDialog.current.showModal();
  }, [preview]);
  function closePreview() { previewDialog.current?.close(); }
  function showPreview(project, src) { setPreview({ project, src }); }
  const filtered = category === "Todos" ? moreProjects : moreProjects.filter((project) => project.category === category);
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Reveal className="section-heading heading-split">
          <div><p className="eyebrow">Una selección de mi trabajo</p><h2>El trabajo habla.</h2></div>
          <p className="section-description">De una primera idea a algo que puedes explorar. Sitios, aplicaciones y soluciones con personalidad propia.</p>
        </Reveal>
        <Reveal as="article" className="featured-project feature-living">
          <div className="feature-copy">
            <p className="eyebrow">01 / Proyecto personal · Moda y lookbook</p>
            <h3>Living Life.<br /><span>Actitud en cada detalle.</span></h3>
            <p>{selected[0].desc}</p>
            <div className="tech-line">React <span>·</span> Vite <span>·</span> Framer Motion</div>
            <ProjectLinks project={selected[0]} />
            <CaseStudy project={selected[0]} />
          </div>
          <button type="button" className="feature-browser preview-button depth-surface" onClick={() => showPreview(selected[0], "/projects/living-life.jpg")} aria-label="Ampliar captura de Living Life">
            <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>Living Life</span></div>
            <img src="/projects/living-life.jpg" alt="Vista completa de la portada del sitio web Living Life" loading="lazy" width="1357" height="932" />
            <span className="preview-hint"><ExpandIcon /> Ampliar vista</span>
          </button>
        </Reveal>
        <div className="feature-pair">
          {selected.slice(1).map((project, index) => (
            <Reveal as="article" key={project.title} delay={index * 100} className={`secondary-feature ${index === 0 ? "feature-madera" : "feature-gym"}`}>
              <div className="secondary-copy">
                <p className="eyebrow">0{index + 2} / {caseStudies[project.title].context}</p>
                <h3>{project.title}.</h3>
                <p>{project.desc}</p>
                <div className="tech-line">{project.tags.join(" · ")}</div>
                <ProjectLinks project={project} />
                <CaseStudy project={project} />
              </div>
              <div className="secondary-visual">
                {index === 0 ? <button type="button" className="preview-button depth-surface" onClick={() => showPreview(project, "/projects/madera-y-sal.jpg")} aria-label={`Ampliar captura de ${project.title}`}>
                  <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>madera-y-sal.vercel.app</span></div>
                  <img src="/projects/madera-y-sal.jpg" alt="Portada completa de Madera & Sal" loading="lazy" width="1348" height="926" />
                  <span className="preview-hint"><ExpandIcon /> Ampliar vista</span>
                </button> : <AppFlow />}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="more-work">
          <div className="more-work-heading"><h3>Más por descubrir.</h3><span>{projects.length} proyectos en total</span></div>
          <div className="project-filters" role="group" aria-label="Filtrar otros proyectos">
            {["Todos", "Sitios web", "Aplicaciones"].map((filter) => <button key={filter} className={`filter-button ${category === filter ? "is-active" : ""}`} type="button" aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}<span>{filter === "Todos" ? moreProjects.length : moreProjects.filter((project) => project.category === filter).length}</span></button>)}
          </div>
          <p className="sr-only" role="status">{filtered.length} proyectos · {category}</p>
          <div className="project-catalog" key={category}>
            {filtered.map((project, index) => <Reveal as="article" className="catalog-project" delay={(index % 2) * 90} key={project.title}>
              {project.img ? <button type="button" className="catalog-screenshot preview-button" onClick={() => showPreview(project, project.img)} aria-label={`Ampliar captura de ${project.title}`}><img src={project.img} alt={`Vista del sitio ${project.title}`} width="1893" height="998" loading="lazy" /></button> : <div className={`project-emblem emblem-${project.theme || "zyntex"}`} aria-hidden="true"><IconCode size={24} /></div>}
              <div className="catalog-content"><p className="project-type">{project.context} · {project.label || project.category}</p><h4>{project.title}</h4><p className="catalog-description">{project.desc}</p>{project.title === "ACV2 Print" && <div className="catalog-flow" aria-label="Áreas funcionales de ACV2 Print"><span>Tablero de trabajos</span><span>Inventario</span><span>Roles e historial</span></div>}
              {project.title === "SafeVault" && <div className="catalog-flow" aria-label="Componentes de seguridad de SafeVault"><span>JWT</span><span>Autorización por roles</span><span>Pruebas xUnit</span></div>}
              <div className="tech-line">{project.tags.join(" · ")}</div><ProjectLinks project={project} /></div>
            </Reveal>)}
          </div>
        </div>
      </div>
      <dialog className="image-preview" ref={previewDialog} aria-labelledby="image-preview-title" onClose={() => setPreview(null)} onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}>
        {preview && <>
          <div className="image-preview-header"><div><h3 id="image-preview-title">{preview.project.title}</h3><p>Vista real del proyecto</p></div><button type="button" className="image-preview-close" onClick={closePreview} aria-label="Cerrar vista ampliada"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></button></div>
          <div className="image-preview-content"><img src={preview.src} alt={`Captura completa de ${preview.project.title}`} /></div>
          <div className="image-preview-footer"><span>Captura completa en su proporción original.</span>{preview.project.link && <a className="text-link" href={preview.project.link} target="_blank" rel="noreferrer">Visitar sitio <span aria-hidden="true"><IconArrow /></span></a>}</div>
        </>}
      </dialog>
    </section>
  );
}
