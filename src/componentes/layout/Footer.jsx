import styles from './Footer.module.css';

const equipo = [
  { id: 1, nombre: 'Lanfranco Darel Caballero', puesto: 'Desarrollador' },
  { id: 2, nombre: 'Martina Ríos', puesto: 'Diseñadora UX/UI' },
  { id: 3, nombre: 'Joaquín Ferreyra', puesto: 'Especialista TCG' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.empresa}>
        <h2>La PokéCueva</h2>
        <p>Tienda de cartas coleccionables Pokémon y productos TCG</p>
      </div>

      <h3>Nuestro equipo</h3>
      <div className={styles.equipo}>
        {equipo.map((persona) => (
          <div key={persona.id} className={styles.tarjeta}>
            <div className={styles.avatar}>{persona.nombre.charAt(0)}</div>
            <h4>{persona.nombre}</h4>
            <p>{persona.puesto}</p>
          </div>
        ))}
      </div>

      <p className={styles.copy}>© 2026 La PokéCueva</p>
    </footer>
  );
}

export default Footer;
