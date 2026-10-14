import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.marca}>
        <h1 className={styles.titulo}>
          <Link to="/">Bienvenidos a La PokéCueva</Link>
        </h1>
        <p className={styles.descripcion}>
          Tienda de cartas coleccionables Pokémon y productos TCG
        </p>
      </div>
      <nav>
        <ul className={styles.nav}>
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
    </header>
  );
}

export default Header;
