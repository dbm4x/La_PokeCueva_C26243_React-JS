import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

function Carrito() {
  const { carrito, cantidadTotal } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/productos">Ir a productos</Link>
      </div>
    );
  }

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem' }}>
      <h1>Carrito ({cantidadTotal})</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {carrito.map((item) => (
          <li
            key={item.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '12px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <img src={item.imagen} alt={item.nombre} width="70" height="70" />
            <div>
              <h3 style={{ margin: '0 0 4px' }}>{item.nombre}</h3>
              <p style={{ margin: 0 }}>
                Cantidad: {item.cantidad} · ${item.precio} c/u
              </p>
              <p style={{ margin: '4px 0 0' }}>
                Subtotal: ${item.precio * item.cantidad}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Carrito;
