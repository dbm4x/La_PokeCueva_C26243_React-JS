import styles from './Footer.module.css';

const equipo = [
  {
    id: 1,
    nombre: 'Silvia',
    puesto: 'Product Owner',
    foto: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 2,
    nombre: 'Luis',
    puesto: 'Diseñador UX/UI',
    foto: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    nombre: 'Matías',
    puesto: 'Desarrollador',
    foto: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 4,
    nombre: 'Sabrina',
    puesto: 'Desarrolladora',
    foto: 'https://i.pravatar.cc/150?img=32',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.company}>
          <h2>TalentoLab</h2>
          <p>
            Convertimos ideas en herramientas digitales innovadoras y confiables. Ofrecemos
            desarrollo con foco en calidad y eficiencia, para potenciar negocios con
            creatividad y tecnología.
          </p>
          <p className={styles.meta}>
            contacto@talentolab.com · Buenos Aires, Argentina
          </p>
        </section>

        <h3 className={styles.teamTitle}>Equipo TalentoLab</h3>
        <div className={styles.team}>
          {equipo.map((persona) => (
            <article key={persona.id} className={styles.card}>
              <img
                className={styles.avatar}
                src={persona.foto}
                alt={`Foto de ${persona.nombre}`}
              />
              <h3>{persona.nombre}</h3>
              <p>{persona.puesto}</p>
            </article>
          ))}
        </div>

        <p className={styles.copy}>© {new Date().getFullYear()} TalentoLab — Pre-entrega React</p>
      </div>
    </footer>
  );
}

export default Footer;
