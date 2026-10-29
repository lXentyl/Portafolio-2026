import Reveal from "./Reveal";
import { IconCode, IconLayers, IconTools, IconSpark } from "./Icons";

const skillGroups = [
  {
    number: "01", title: "Desarrollo web", icon: IconCode,
    description: "Interfaces, componentes y aplicaciones para la web.",
    items: ["JavaScript", "React", "Node.js", "Vite", "HTML", "CSS"],
  },
  {
    number: "02", title: "Datos y bases de datos", icon: IconLayers,
    description: "Consultas, organización y manejo de información.",
    items: ["SQL", "PostgreSQL", "Python", "SQL Server (en curso)"],
  },
  {
    number: "03", title: "Soporte técnico", icon: IconTools,
    description: "Diagnóstico y resolución de problemas de usuarios y equipos.",
    items: ["Hardware", "Software", "Diagnóstico de incidencias", "Mantenimiento", "Configuración de sistemas"],
  },
  {
    number: "04", title: "Herramientas y automatización", icon: IconSpark,
    description: "Herramientas que utilizo para desarrollar y organizar mi trabajo.",
    items: ["GitHub", "Visual Studio Code", "Visual Studio", "n8n"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section capabilities-section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal className="section-heading heading-split">
          <div><p className="eyebrow">Conocimientos y herramientas</p><h2 id="skills-heading">Habilidades técnicas.</h2></div>
          <p className="section-description">Lo que aplico en mis proyectos y en mi experiencia profesional.</p>
        </Reveal>
        <div className="technical-skills-grid">
          {skillGroups.map(({ number, title, icon, description, items }, index) => {
            const Icon = icon;
            return (
            <Reveal as="article" className="technical-skill-group" delay={index * 90} key={number}>
              <div className="capability-top"><Icon size={26} /><span>{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="technical-skill-list" aria-label={title}>
                {items.map((skill) => <li key={skill} className={skill.includes("en curso") ? "skill-in-progress" : ""}>{skill}</li>)}
              </ul>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
