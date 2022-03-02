import React from "react";



export default function PostPurchase({ orderId }) {
      
    console.log(orderId, 'post purchase')

    return (          
        <>
        {orderId  !== "" &&  
        <>    
        <p className='alert alert-success' onChange={(e) => orderId(e.target.value)}>Purchase successful. Your purchase identification is : {orderId} </p> 
            </>              
            }
        </>
    ) 
    
}