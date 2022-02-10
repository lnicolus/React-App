import React from "react";
import { useCartContext } from './../../Context/CartContext';


const Cart = () => {
    const {cartList, vaciarCarrito, eliminarUno} = useCartContext()
    return  (
        <>
{ cartList.map( produ => <li>{produ.name}, Price: {produ.price} Quantity: {produ.quantity}Kg <button onClick={() => eliminarUno(produ.name)}>eliminar</button></li>) 
}
<button onClick={vaciarCarrito}>Empty Cart</button>

</>
)

};

export default Cart;
