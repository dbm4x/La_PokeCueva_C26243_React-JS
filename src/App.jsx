import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/layout/Layout';
import Inicio from './componentes/Inicio/Inicio';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ProductoDetalle from './componentes/ProductoDetalle/ProductoDetalle';
import Carrito from './componentes/Carrito/Carrito';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/productos"
          element={<ItemListContainer Mensaje="Catálogo de cartas" />}
        />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default App;
