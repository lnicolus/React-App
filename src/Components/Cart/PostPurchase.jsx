import React from "react";
import { useCartContext } from "../../Context/CartContext";


export default function PostPurchase({ id }) {
    const { clearCart } = useCartContext();
    console.log(id)
    return (          
        <>
        {id !== undefined &&  
        <>    
        <p className='alert alert-success' onChange={(e) => id(e.target.value)}>Purchase successful. Your purchase identification is : {id} </p> 
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