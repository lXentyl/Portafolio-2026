import Reveal from "./Reveal";

const experience = [
  { company: "Ricoh Dominicana", role: "Operador Técnico", time: "Mayo 2025 — Actual", current: true, bullets: ["Operación y control de equipos tecnológicos dentro de los procedimientos del servicio.", "Aplicación de procedimientos operativos y estándares de calidad en el trabajo diario.", "Coordinación con personal técnico y administrativo para las tareas del servicio."] },
  { company: "OPITEL", role: "Soporte Técnico", time: "Junio 2024 — Diciembre 2024", bullets: ["Atención a usuarios con incidencias de hardware y software.", "Diagnóstico de fallos y resolución de incidencias técnicas de los usuarios.", "Mantenimiento y configuración de sistemas como parte del soporte técnico."] },
];

export default function Experience() {
  return <section id="experience" className="section experience-section"><div className="container">
    <Reveal className="section-heading heading-split"><div><p className="eyebrow">Mi recorrido</p><h2>Aprender haciendo.</h2></div><p className="section-description">Experiencia en entornos reales.<br />Personas, procesos y tecnología.</p></Reveal>
    <div className="experience-list">{experience.map((item) => <Reveal as="article" className="experience-row" key={item.company}><div className="experience-company"><div className="experience-company-line"><h3>{item.company}</h3>{item.current && <span className="current-indicator">Actual</span>}</div><p>{item.time}</p></div><div className="experience-detail"><h4>{item.role}</h4><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></Reveal>)}</div>
  </div></section>;
}
