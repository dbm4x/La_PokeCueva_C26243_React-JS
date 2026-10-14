import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import Inicio from './pages/Inicio';
import ProductoDetalle from './pages/ProductoDetalle';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/productos"
          element={<ItemListContainer Mensaje="Catálogo de productos" />}
        />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
