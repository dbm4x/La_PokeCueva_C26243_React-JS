import { Link } from 'react-router-dom';
import { ItemListContainer } from '../componentes/ItemListContainer/ItemListContainer';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.brand}>TalentoLab</h1>
          <p className={styles.headline}>Tecnología pensada para tu día a día</p>
          <p className={styles.lead}>
            Explora nuestro catálogo de productos seleccionados. Calidad, diseño y
            soporte del equipo TalentoLab.
          </p>
          <Link to="/productos" className={styles.cta}>
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className={styles.destacados}>
        <ItemListContainer Mensaje="Productos destacados" />
      </section>
    </>
  );
}

export default Inicio;
