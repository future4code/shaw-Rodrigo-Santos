import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});

  const addToCart = (product, quantity, newRestaurant) => {
    if (newRestaurant.id === restaurant.id) {
      setCart([...cart, { ...product, quantity }]);
    } else {
      setCart([{ ...product, quantity }]);
      setRestaurant(newRestaurant);
    }
  };

  const removeToCart = (id) => {
    const index = cart.findIndex((product) => product.id === id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const states = { cart };
  const requests = { addToCart, removeToCart };
  const setters = {};

  console.log(cart);
  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
