import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (cart.length === 0) {
    return (
      <section className={styles.page}>
        <h1 className={styles.titulo}>Carrito</h1>
        <div className={styles.vacio}>
          <p>Tu carrito está vacío.</p>
          <p>
            <Link to="/productos">Ir al catálogo</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <h1 className={styles.titulo}>Carrito ({totalItems})</h1>

      <ul className={styles.lista}>
        {cart.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.imagen} alt={item.nombre} />
            <div>
              <h3>{item.nombre}</h3>
              <p>${item.precio.toLocaleString('es-AR')} c/u</p>
            </div>
            <div className={styles.acciones}>
              <div className={styles.qty}>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                  aria-label="Restar"
                >
                  −
                </button>
                <span>{item.cantidad}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                  aria-label="Sumar"
                >
                  +
                </button>
              </div>
              <span className={styles.subtotal}>
                ${(item.precio * item.cantidad).toLocaleString('es-AR')}
              </span>
              <button
                type="button"
                className={styles.remove}
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.resumen}>
        <p className={styles.total}>
          Total: ${totalPrice.toLocaleString('es-AR')}
        </p>
        <button type="button" className={styles.clearBtn} onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </section>
  );
}

export default Cart;
