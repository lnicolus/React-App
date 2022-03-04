import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./stylesCartDetail.css";

export default function CartDetail({ falseCheckout }) {
  const { cartList, billTotal, deleteItem, clearCart} = useCartContext();  

/* Provided the customer has selected at least one item, the selection will be mapped and styled, updated on the fly if the customer goes back to the store to choose
more since we are using a context for the cart list. 
The context provider allows to show the total of the bill, erasing individual items (in the future we will implement reduction and adding up kgs capabilities on this 
component)  */

  return (
    <>
      {cartList.length > 0 && (
        <>
          {cartList.map((produ) => (
            <div key={produ.id}>
              <div className="mt-1" >
                <div className="cartDetailWrapper border border-success p-3">
                  <h3>{produ.name}</h3>
                  <p>Price by kg: ${produ.price} </p>
                  <p>Your order: {produ.quantity}Kgs</p>
                  <p>{produ.description}</p>                  
                  <button
                    className="btn btn-outline-success btn-block bg-success text-light"
                    onClick={() => deleteItem(produ.id)}
                  >
                    Erase {produ.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            className="btn btn-outline-success btn-block bg-success text-light"
            onClick={clearCart}
          >
            Empty my cart
          </button>
          <button
            className="btn btn-outline-success btn-block bg-success text-light"
            onClick={falseCheckout}
          >
            Checkout
          </button>
          {`Your total is $${billTotal()}`}
          <p>Click checkout to confirm your purchase</p>
        </>
      )}
    </>
  );
}
