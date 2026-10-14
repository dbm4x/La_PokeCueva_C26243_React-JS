import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductoDetalle.module.css';

function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch('/data/productos.json')
      .then((response) => {
        if (!response.ok) throw new Error('No se pudo cargar el producto');
        return response.json();
      })
      .then((data) => {
        const encontrado = data.find((p) => p.id === parseInt(id, 10));
        if (!encontrado) {
          setError('Producto no encontrado');
          setProducto(null);
        } else {
          setProducto(encontrado);
          setCantidad(1);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  const incrementar = () => {
    if (producto && cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAdd = () => {
    if (!producto) return;
    addToCart(producto, cantidad);
    setMensaje(`Agregaste ${cantidad} unidad(es) de ${producto.nombre}`);
    setTimeout(() => setMensaje(''), 2500);
  };

  if (cargando) {
    return <h2 className={styles.estado}>Cargando detalle del producto...</h2>;
  }

  if (error || !producto) {
    return <h2 className={styles.estado}>{error || 'Producto no encontrado.'}</h2>;
  }

  return (
    <section className={styles.page}>
      <div className={styles.layout}>
        <img
          className={styles.image}
          src={producto.imagen}
          alt={producto.nombre}
        />
        <div className={styles.info}>
          {producto.categoria && (
            <span className={styles.categoria}>{producto.categoria}</span>
          )}
          <h1>{producto.nombre}</h1>
          <p className={styles.precio}>
            ${producto.precio.toLocaleString('es-AR')}
          </p>
          <p className={styles.descripcion}>{producto.descripcion}</p>
          <p className={styles.stock}>Stock disponible: {producto.stock}</p>

          <div className={styles.controls}>
            <button type="button" onClick={decrementar} disabled={cantidad <= 1}>
              −
            </button>
            <span className={styles.cantidad}>{cantidad}</span>
            <button
              type="button"
              onClick={incrementar}
              disabled={cantidad >= producto.stock}
            >
              +
            </button>
          </div>

          <button type="button" className={styles.addBtn} onClick={handleAdd}>
            Agregar al carrito
          </button>

          {mensaje && <p className={styles.feedback}>{mensaje}</p>}
        </div>
      </div>
    </section>
  );
}

export default ProductoDetalle;
