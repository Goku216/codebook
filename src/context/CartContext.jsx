import { createContext, useContext } from "react";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ childern }) => {
  const value = {
    cartList: [],
    total: 0,
  };

  return <CartContext.Provider value={value}>{childern}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
