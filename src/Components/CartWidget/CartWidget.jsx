import React from "react";
import { useCartContext } from "../../Context/CartContext";


export default function CartWidget() {
  
  const { quantity, billTotal } = useCartContext()
  return (
    <div className="cart">
      <p className="text-light navText">Cart</p>
      
        <img
          className="cartImg"
          src="https://cdn1.iconfinder.com/data/icons/food-delivery-44/64/Grocery-bag-vegetable-shop-store-food-delivery-256.png"
          alt="buy"
        />
{ quantity() !==0 &&  (
     <>
      <ul className="shoppingStatusDisplay">
        <li className="text-light navText">{`Kilograms: ${quantity()}`}</li>
        <li className="text-light navText">{`Subtotal: ${billTotal()}`}</li>
      </ul>
      </>)     
    
    }
    </div>
  );
}
