import React from "react";
import { useCartContext } from "../../Context/CartContext";


export default function CartWidget() {
  

  const { cantidad, sumaTotal } = useCartContext()
  return (
    <div className="cart">
      <p className="text-light navText">Cart</p>
      
        <img
          className="cartImg"
          src="https://cdn1.iconfinder.com/data/icons/food-delivery-44/64/Grocery-bag-vegetable-shop-store-food-delivery-256.png"
          alt="buy"
        />
     
      <ul className="shoppingStatusDisplay">
        <li className="text-light navText">{`Kilograms: ${cantidad()}`}</li>
        <li className="text-light navText">{`Subtotal: ${sumaTotal()}`}</li>
      </ul>
    </div>
  );
}
