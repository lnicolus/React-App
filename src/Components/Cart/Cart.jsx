import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import PostPurchase from "./PostPurchase";
import CartDetail from "../CartDetail/CartDetail";
import EmptyCart from "./EmptyCart";
import { useCartContext } from "../../Context/CartContext";

/* In this Cart component we handle the display of the client's choice of products, and the possibility to erase them, erase their entire selection, or checkout to buy,
 using Firebase as the backend, with a stock follow up. Several validations are in place in order to make a better UX. The ID of the operation is displayed in the 
 successful post purchase message.
  Firstly the person must click the checkout button, to ensure they really want to input their personal data to buy. 
  Secondly, no Cart Detail will be shown if there are no products, instead prompting the user to return shopping (see CartDetail) through EmptyCart
  Thirdly, if both conditions are met, the Form is displayed running its own validations before accepting to submit the order to the Firestore. */

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const [checkout, falseCheckout] = useState(false);
  const { cartList } = useCartContext();

  return (
    <div className="itemListWrapper p-3">
      <CartDetail falseCheckout={falseCheckout} />

      <>{checkout && cartList.length > 0 && <Form setOrderId={setOrderId} />}</>

      <PostPurchase orderId={orderId} />
      <EmptyCart />
    </div>
  );
};

export default Cart;
