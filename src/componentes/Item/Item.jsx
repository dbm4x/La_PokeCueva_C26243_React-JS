import { Link } from 'react-router-dom';
import styles from './Item.module.css';

export function Item({ id, nombre, precio, stock, imagen }) {
  return (
    <div className={styles.tarjeta}>
      <Link to={`/producto/${id}`}>
        <img src={imagen} alt={nombre} width="150" height="150" />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
      </Link>
      <Link to={`/producto/${id}`} className={styles.boton}>
        Ver detalle
      </Link>
    </div>
  );
}
