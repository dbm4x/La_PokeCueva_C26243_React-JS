import { Link } from 'react-router-dom';
import styles from './Item.module.css';

export function Item({ id, nombre, precio, stock, imagen, categoria }) {
  const precioFormateado = precio.toLocaleString('es-AR');

  return (
    <article className={styles.card}>
      <Link to={`/producto/${id}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={imagen} alt={nombre} />
        </div>
        <div className={styles.body}>
          {categoria && <span className={styles.categoria}>{categoria}</span>}
          <h3 className={styles.nombre}>{nombre}</h3>
          <p className={styles.precio}>${precioFormateado}</p>
          <p className={styles.stock}>Stock: {stock}</p>
        </div>
      </Link>
      <Link to={`/producto/${id}`} className={styles.cta}>
        Ver detalle
      </Link>
    </article>
  );
}
