import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandName}>TalentoLab</span>
          <span className={styles.brandTag}>Tech Store</span>
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/carrito">Carrito</Link>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
