import React from "react";
export default function CartWidget() {
  return (
    <div className="cart">
      <p className="text-light navText">Cart</p>
      
        <img
          className="cartImg"
          src="https://cdn1.iconfinder.com/data/icons/food-delivery-44/64/Grocery-bag-vegetable-shop-store-food-delivery-256.png"
          alt="buy"
        />
     
      <ul className="shoppingStatusDisplay">
        <li className="text-light navText">Products: </li>
        <li className="text-light navText">Subtotal: </li>
      </ul>
    </div>
  );
}
