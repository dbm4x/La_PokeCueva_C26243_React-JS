import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import styles from './CartWidget.module.css';

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" className={styles.widget}>
      Carrito <span className={styles.contador}>{cantidadTotal}</span>
    </Link>
  );
}

export default CartWidget;
