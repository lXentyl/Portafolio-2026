import Reveal from "./Reveal";
import { IconLinkedIn } from "./Icons";
import { social } from "../data/social";

export default function LinkedIn() {
  const linkContent = <>Ver perfil en LinkedIn <span aria-hidden="true">↗</span></>;
  return (
    <section id="linkedin" className="linkedin-section" aria-labelledby="linkedin-heading">
      <div className="container">
        <Reveal className="linkedin-panel">
          <div className="linkedin-brand"><IconLinkedIn size={38} /><span>LinkedIn</span></div>
          <div className="linkedin-layout">
            <div className="linkedin-copy">
              <p className="eyebrow">Más sobre mi trayectoria</p>
              <h2 id="linkedin-heading">Conectemos en LinkedIn.</h2>
              <p>Conoce mi experiencia, mi formación y mi perfil profesional. Un espacio para conectar y explorar nuevas oportunidades.</p>
              <div className="linkedin-identity"><img className="linkedin-avatar" src="/elian-rodriguez.webp" alt="" width="42" height="42" loading="lazy" /><div><strong>Elian Rodríguez</strong><span>Ingeniería en Software · Desarrollo web · Datos</span></div></div>
            </div>
            <div className="linkedin-action">
              {social.linkedIn ? <a className="button button-primary" href={social.linkedIn} target="_blank" rel="noreferrer" aria-label="Visitar el perfil de Elian Rodríguez en LinkedIn, abre en otra pestaña">{linkContent}</a> : <button className="button button-primary" type="button" disabled>{linkContent}</button>}
              <p>Experiencia. Formación. Conexiones.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
