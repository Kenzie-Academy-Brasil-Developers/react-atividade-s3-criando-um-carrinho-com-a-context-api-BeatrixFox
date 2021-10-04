import { createContext, useState } from "react";

export const CartContext = CartContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
