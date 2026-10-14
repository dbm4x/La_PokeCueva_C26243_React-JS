import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    setCargando(true);
    setError(null);

    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información del producto');
        }
        return respuesta.json();
      })
      .then((datos) => {
        const productoEncontrado = datos.find((p) => p.id === parseInt(id));
        if (!productoEncontrado) {
          setError('Producto no encontrado.');
          setProducto(null);
        } else {
          setProducto(productoEncontrado);
          setCantidad(1);
        }
      })
      .catch((err) => {
        setError(err.message);
        console.error('Error al cargar el producto:', err);
      })
      .finally(() => {
        setCargando(false);
      });
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

  const agregarAlCarrito = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${producto.nombre} al carrito.`);
  };

  if (cargando) {
    return (
      <h2 style={{ textAlign: 'center', padding: '2rem' }}>
        Cargando detalle del producto...
      </h2>
    );
  }

  if (error || !producto) {
    return (
      <h2 style={{ textAlign: 'center', padding: '2rem' }}>
        {error || 'Producto no encontrado.'}
      </h2>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem', textAlign: 'center' }}>
      <h2>Detalle del producto: {producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ maxWidth: '300px' }}
      />
      <h3>${producto.precio}</h3>
      <p>{producto.descripcion}</p>
      <p>Stock disponible: {producto.stock}</p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        <button onClick={decrementar}>-</button>
        <p style={{ margin: '0 10px' }}>{cantidad}</p>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ProductoDetalle;
