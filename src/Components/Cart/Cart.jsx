import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext();

  return (
    <div>
      {cartList.length !== 0 ? (
        
        <div className="itemListWrapper">
          {cartList.map((produ) => (
            <>
              <li className="list-unstyled">
                <h3>{produ.name}</h3>
                <li className="list-unstyled">Price by kg: ${produ.price} </li>
                <li className="list-unstyled"> Your order: {produ.quantity}Kgs</li>
              </li>
              <button className="btn btn-outline-success btn-block bg-success text-light" onClick={() => borrarItem(produ.id)}>Erase item</button>              
              </>  
            
          ))}
          
          {`Your total is $${sumaTotal()}`}
          <div className="btn-group" >
          <button className="btn btn-outline-success btn-block bg-success text-light">Checkout</button>
          <button className="btn btn-outline-success btn-block bg-success text-light" onClick={vaciarCarrito}>Empty my cart</button>
          </div>
          </div>
        
      ) : (
        <div className="itemListWrapper">
          <h1>Your cart is empty!</h1>
          <Link to="/">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felearningdom.com%2Fwp-content%2Fthemes%2Fmrtailor%2Fimages%2Fempty_cart.png&f=1&nofb=1"
              alt="sad cart noises"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
