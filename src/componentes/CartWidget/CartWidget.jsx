import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartWidget.module.css';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" className={styles.widget} aria-label="Ver carrito">
      <span className={styles.icon} aria-hidden="true">
        🛒
      </span>
      <span className={styles.badge}>{totalItems}</span>
    </Link>
  );
}

export default CartWidget;
