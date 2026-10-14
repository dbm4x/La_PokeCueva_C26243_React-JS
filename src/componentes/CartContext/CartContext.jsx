import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto, cantidad = 1) => {
    setCarrito((previo) => {
      const existente = previo.find((item) => item.id === producto.id);
      if (existente) {
        return previo.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...previo, { ...producto, cantidad }];
    });
  };

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, addToCart, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
}
