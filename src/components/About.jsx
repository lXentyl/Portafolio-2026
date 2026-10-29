import Reveal from "./Reveal";

export default function About() {
  return <section id="about" className="section about-section"><div className="container about-layout">
    <Reveal className="about-identity"><img className="about-portrait" src="/elian-rodriguez.webp" alt="Retrato de Elian Rodríguez" width="319" height="319" loading="lazy" /><div className="identity-caption"><span>Elian Rodríguez</span><span>Desarrollo & tecnología</span></div></Reveal>
    <Reveal className="about-copy"><p className="eyebrow">Un poco sobre mí</p><h2>Curiosidad para aprender.<br /><span>Iniciativa para construir.</span></h2><p>Soy estudiante de Ingeniería en Software en UNAPEC, en término. Me interesa entender cómo funcionan las cosas y convertir ese conocimiento en soluciones que otras personas puedan usar.</p><p>Mi experiencia en soporte técnico me ha enseñado a escuchar, diagnosticar y resolver. En desarrollo, llevo esa misma forma de pensar al código y a cada interfaz.</p><dl className="about-facts"><div><dt>Formación</dt><dd>Ingeniería en Software<br /><span>Universidad APEC · En término</span></dd></div><div><dt>Idiomas</dt><dd>Español nativo<br /><span>Inglés · Nivel medio</span></dd></div></dl><a className="text-link" href="/cv.pdf" target="_blank" rel="noreferrer">Ver mi CV completo <span aria-hidden="true">↗</span></a></Reveal>
  </div></section>;
}
