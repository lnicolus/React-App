import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import PostPurchase from './PostPurchase';
import CartDetail from "../CartDetail/CartDetail";
import EmptyCart from "./EmptyCart";
import { useCartContext } from "../../Context/CartContext";


/*
 In this Cart component we handle the display of the client's choice of products, and the possibility to erase them, erase their entire selection, or checkout to buy,
 using Firebase as the backend, with a stock follow up. Several validations are in place in order to make a better UX. The ID of the operation is displayed in
*/

const Cart = () => {

const [orderId, setOrderId] = useState("");
const [checkout, falseCheckout] = useState(false);
const {
  cartList,      
} = useCartContext();    
  return (
    <div className="itemListWrapper">
      <CartDetail falseCheckout={falseCheckout}  />
   
            <>          
            {checkout && cartList.length > 0 &&  <Form setOrderId={setOrderId}  orderId={orderId} /> }        
            </>        
       
              
      <EmptyCart/>
      
      <PostPurchase orderId={orderId}/>
      
    </div>
  );
};

export default Cart;
