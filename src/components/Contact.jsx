import { useEffect, useRef, useState } from "react";
import { IconCopy, IconCheck, IconGithub } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  const email = "elianmercedes24@gmail.com";
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Correo copiado");
    } catch {
      setMessage("No se pudo copiar. Puedes seleccionar el correo o abrir el enlace para escribirme.");
    }
    timer.current = setTimeout(() => setMessage(""), 3500);
  }
  return <section id="contact" className="section contact-section"><Reveal className="container contact-content"><p className="eyebrow">El siguiente proyecto empieza con una conversación</p><h2>¿Una idea en mente?<br /><span>Hagámosla realidad.</span></h2><p>Estoy abierto a proyectos, colaboraciones y oportunidades<br className="desktop-break" /> donde pueda aportar y seguir creciendo.</p><a className="button button-light" href={`mailto:${email}`}>Hablemos de tu idea <span aria-hidden="true">↗</span></a><div className="contact-email"><a href={`mailto:${email}`}>{email}</a><button type="button" aria-label="Copiar correo electrónico" onClick={copyEmail}>{message === "Correo copiado" ? <IconCheck size={18} /> : <IconCopy size={18} />}</button></div><p className="copy-status" role="status">{message}</p><div className="contact-secondary"><a href="https://github.com/lXentyl" target="_blank" rel="noreferrer"><IconGithub size={16} /> GitHub <span aria-hidden="true">↗</span></a><a href="/cv.pdf" target="_blank" rel="noreferrer">Ver CV <span aria-hidden="true">↗</span></a><a href="tel:+18295621043">829 562 1043 <span aria-hidden="true">↗</span></a></div></Reveal></section>;
}
