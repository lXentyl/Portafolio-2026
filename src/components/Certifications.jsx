import { IconAward, IconLink } from "./Icons";
import Reveal from "./Reveal";

const groups = [
  { title: "Bases de datos y ciencia de datos", certs: [
    { title: "Microsoft SQL Server", org: "Instituto Tecnológico de Las Américas (ITLA)", year: "En curso" },
    { title: "Ciencia de Datos - Nivel Intermedio", org: "INDOTEL", year: "2026" },
    { title: "Introduction to SQL", org: "DataCamp", year: "2026" },
    { title: "Data Engineer", org: "DataCamp", year: "2025" },
    { title: "Python Intermediate", org: "DataCamp", year: "2025" },
  ] },
  { title: "Desarrollo web", certs: [
    { title: "Full-Stack Web Development Bootcamp", org: "Udemy · Dra. Angela Yu", detail: "JavaScript, Node.js, React, PostgreSQL y despliegue de aplicaciones." },
    { title: "Web Dreamweaver", org: "CENTU", year: "2021" },
  ] },
  { title: "Inteligencia artificial", certs: [
    { title: "Google AI Essentials", org: "Google · Coursera", year: "2026", detail: "Herramientas de IA, productividad, prompting y uso responsable.", url: "https://coursera.org/verify/specialization/ABOPW9LTAQ7Y" },
    { title: "Introduction to AI Agents", org: "DataCamp", year: "2026" },
  ] },
  { title: "Gestión de riesgos", certs: [
    { title: "Risk Management Excellence with ISO 31000 Frameworks", org: "Packt · Coursera", year: "2026", url: "https://coursera.org/verify/2XSHMZQTZCKN" },
    { title: "Governance and Risk Management Concepts", org: "Packt · Coursera", year: "2026", url: "https://coursera.org/verify/ZKBJI90OTEFK" },
  ] },
  { title: "Soporte y sistemas", certs: [
    { title: "Hardware y software informático", org: "Coursera", year: "2026" },
    { title: "Datos, seguridad y privacidad", org: "Coursera", year: "2026" },
    { title: "Productividad y desarrollo de sistemas", org: "Coursera", year: "2026" },
  ] },
];

export default function Certifications() {
  return <section className="section training-section" id="certificaciones"><div className="container training-layout">
    <Reveal className="training-intro"><p className="eyebrow">Formación continua</p><h2>Aprender.<br />Aplicar.<br /><span>Repetir.</span></h2><p>Cursos y programas que amplían lo que puedo hacer. De las bases de datos a la inteligencia artificial.</p><div className="training-seal"><IconAward size={24} /><span>Google · DataCamp · INDOTEL<br />Udemy · Coursera · CENTU · ITLA</span></div></Reveal>
    <div className="training-accordions">{groups.map((group) => <details className="training-accordion" key={group.title}>
      <summary><span>{group.title}</span><span className="accordion-meta">{group.certs.length}<b aria-hidden="true">+</b></span></summary>
      <div className="training-entries">{group.certs.map((cert) => <article className="training-entry" key={cert.title}><div><h3>{cert.title}</h3><p>{cert.org}</p>{cert.detail && <p className="training-detail">{cert.detail}</p>}{cert.url && <a className="text-link" href={cert.url} target="_blank" rel="noreferrer" aria-label={`Ver credencial de ${cert.title}`}>Ver credencial <IconLink size={14} /></a>}</div>{cert.year && <span className={`training-year ${cert.year === "En curso" ? "is-current" : ""}`}>{cert.year}</span>}</article>)}</div>
    </details>)}</div>
  </div></section>;
}
