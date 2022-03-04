import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  const { cartList } = useCartContext();
  return (
    <>
      {cartList.length <= 0 && (
        <>
          <h1>Your cart is empty!</h1>
          <Link to="/">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felearningdom.com%2Fwp-content%2Fthemes%2Fmrtailor%2Fimages%2Fempty_cart.png&f=1&nofb=1"
              alt="sad cart noises"
            />
          </Link>
        </>
      )}
    </>
  );
}
