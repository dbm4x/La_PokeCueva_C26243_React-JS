import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

export function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información de los productos');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className={styles.estado}>Cargando productos, por favor esperá...</p>;
  }

  if (error) {
    return <p className={styles.estado}>Error: {error}</p>;
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.subtitulo}>{Mensaje}</h2>
      <div className={styles.productos}>
        <ItemList productos={productos} />
      </div>
    </div>
  );
}
