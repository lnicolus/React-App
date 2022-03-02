import React from "react";
import { useCartContext } from "../../Context/CartContext";

export default function CartDetail({falseCheckout}) {
    const {
        cartList,        
        billTotal,
        deleteItem,
        clearCart,         
      } = useCartContext();     

    return (
        <>
        {cartList.length > 0 && 
            <>
            {cartList.map((produ) => (
                <div className="itemListWrapper" key={produ.id}>
                  <h3>{produ.name}</h3>
                  <p>Price by kg: ${produ.price} </p>
                  <p> Your order: {produ.quantity}Kgs</p>
  
                  <button
                    className="btn btn-outline-success btn-block bg-success text-light"
                    onClick={() => deleteItem(produ.id)}
                  >
                    Erase item
                  </button> 
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
               
            </div>                  
                </div>
                
              ))}
              {`Your total is $${billTotal()}`}
              <p>Click checkout to confirm your purchase</p>              
            </>  
                      
        }
        </>
    )
}