import { useContext, createContext, useState } from "react";

// 1. Creamos el contexto (Nube que envuelve componenntes)
export const CartContext = createContext();
// 2. crear un custom hook
export const useCart = () => {
  return useContext(CartContext);
};

// 3.Creamos el proveedor
export const CartProvider = ({ children }) => {
  // inicializar del carrito
  const [cart, setCart] = useState([]);

  // agregar al carrito
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existigProduct = prevCart.find((item) => item?.id === product?.id);
      if (existigProduct) {
        return prevCart.map((item) => {
          return item?.id === product?.id
            ? { ...item, quantity: item?.quantity + quantity }
            : item;
        });
      }
      return [...prevCart, { ...product, quantity }];
    });
  };
  // calculamos el total de los productos agregados
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  // Referente al carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const values = { cart, addToCart, totalQuantity, removeFromCart, clearCart };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
