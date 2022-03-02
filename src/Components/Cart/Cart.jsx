import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import Form from "../Form/Form";
import PostPurchase from './PostPurchase';
import { Link } from "react-router-dom";


/*
 In this Cart component we handle the display of the client's choice of products, and the possibility to erase them, erase their entire selection, or checkout to buy,
 using Firebase as the backend, with a stock follow up. Several validations are in place in order to make a better UX. The ID of the operation is displayed in
*/

const Cart = () => {
  const [checkout, falseCheckout] = useState(false);
   
  const {
    cartList,
    clearCart,
    billTotal,
    deleteItem,        
  } = useCartContext();

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <div className="itemListWrapper">
            {cartList.map((produ) => (
              <div key={produ.id}>
                <h3>{produ.name}</h3>
                <p>Price by kg: ${produ.price} </p>
                <p> Your order: {produ.quantity}Kgs</p>

                <button
                  className="btn btn-outline-success btn-block bg-success text-light"
                  onClick={() => deleteItem(produ.id)}
                >
                  Erase item
                </button>
              </div>
            ))}

            {`Your total is $${billTotal()}`}
            <div className="btn-group">
              <button
                className="btn btn-outline-success btn-block bg-success text-light"
                onClick={falseCheckout}
              >
                Checkout
              </button>
              <button
                className="btn btn-outline-success btn-block bg-success text-light"
                onClick={clearCart}
              >
                Empty my cart
              </button>
              <PostPurchase />  
            </div>              
            {checkout ? (
              <Form />
            ) : (
              <>
                <p>Click checkout to confirm your purchase</p>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="itemListWrapper">
          <h1>Your cart is empty!</h1>
          <Link to="/">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felearningdom.com%2Fwp-content%2Fthemes%2Fmrtailor%2Fimages%2Fempty_cart.png&f=1&nofb=1"
              alt="sad cart noises"
            />
          </Link>   
          <PostPurchase/>               
        </div>        
      )}
    </div>
  );
};

export default Cart;
