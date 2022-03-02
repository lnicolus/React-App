import React from "react";
import { useCartContext } from "../../Context/CartContext";


export default function PostPurchase({ orderId }) {

    const { clearCart } = useCartContext();    
    console.log(orderId, 'post purchase')

    return (          
        <>
        {orderId  !== "" &&  
        <>    
        <p className='alert alert-success' onChange={(e) => orderId(e.target.value)}>Purchase successful. Your purchase identification is : {orderId} </p> 
        <button
        className="btn btn-outline-success btn-block bg-success text-light"
        onClick={clearCart}
      >
        Empty cart to continue
      </button>
      </>  
            
            }
        </>
    ) 
    
}