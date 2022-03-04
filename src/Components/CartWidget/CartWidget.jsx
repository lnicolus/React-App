import React from "react";
import { useCartContext } from "../../Context/CartContext";

export default function CartWidget() {

  /* This component displays constantly the amount of kgs in the order and the total of the bill, it displays only when there is at least one Kg inputted, and only updates 
  when necessary */
  
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
     <div>
      <ul className="shoppingStatusDisplay">
        <li className="text-light navText">{`Kilograms: ${quantity()}`}</li>
        <li className="text-light navText">{`Subtotal: ${billTotal()}`}</li>
      </ul>
      </div>)     
    
    }
    </div>
  );
}
