import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

export function ItemListContainer({ Mensaje = 'Nuestros productos' }) {
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
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className={styles.estado}>Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p className={`${styles.estado} ${styles.error}`}>Error: {error}</p>;
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>{Mensaje}</h2>
      <p className={styles.subtitulo}>{productos.length} productos disponibles</p>
      <ItemList productos={productos} />
    </section>
  );
}
