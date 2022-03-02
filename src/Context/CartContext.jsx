/*
 This component provides the global states and functions of the SPA.
 The components are renderized and their information updated by injecting the props in the children nodes (see below in the provider)
 The context provider for the cart has an empty array as its defaut state to allow storing the buyers choice products.
*/

import React from "react";
import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

/* This particular function allows the context to be used automatically without importing it. 
Kudos to the author, Federico Osandón https://github.com/federico-osandon */

export function useCartContext() {
  return useContext(cartContext);
}

function CartContextProvider({ children }) {
  // The cart array of objects is provided at an initial empty State
  const [cartList, setCartList] = useState([]);    

  function addToCart(chosenProduct) {
    /* 
    We prevent the overlapping of additional quantities of the same product here.
    findIndex iterates the Cart and returns true when the chosen product actually exists, if not,
    it will return -1 pushing the -not previously bought product- in the array. 
    Otherwise, it will just modify the quantity of a repeteadly chosen product by pointing to its existing index 
    in the array of the Cart.  
    Finally, the cart is updated with a new array of products with the added changes, changing the state of the 
    old cart list, in order to avoid errors.  
    */

    const index = cartList.findIndex((prod) => prod.id === chosenProduct.id);

    if (index === -1) {
      setCartList([...cartList, chosenProduct]);
    } else {
      const quant = cartList[index].quantity;
      cartList[index].quantity = chosenProduct.quantity + quant;
      const newCartList = [...cartList];
      setCartList(newCartList);
    }
  }
  /* 
  This set makes the simple operations of displaying...
  1) The total of the bill
  2) Adding to multiple selections of the same product, avoiding overlapping

  Erasing a particular selection...
  3) Deleting items by filter using the id of the product to erase it using a State

  Erasing the full cart...
  4) Clear the cart using a State
  */
  const billTotal = () => {
    return cartList.reduce(
      (acum, prod) => (acum = acum + prod.price * prod.quantity),
      0
    );
  };

  const quantity = () => {
    return cartList.reduce((acum, prod) => (acum += prod.quantity), 0);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  function clearCart() {
    setCartList([]);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        billTotal,
        quantity,
        deleteItem,                 
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
