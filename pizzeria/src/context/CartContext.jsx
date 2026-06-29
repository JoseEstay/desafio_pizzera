import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const handleIncrease = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const handleDecrease = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
    ).filter((pizza) => pizza.count > 0));
  };

  const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, handleIncrease, handleDecrease, total }}>
      {children}
    </CartContext.Provider>
  );
};