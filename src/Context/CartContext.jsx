import React from "react";
import { createContext, useState, useContext } from "react";


const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}  // funcion que automaticamente permite utilizarla sin hacer importacion

// Actualizo en tiempo real los componentes, inyectando las prop con children

function CartContextProvider({ children }) {

    // Estados y funciones globales de la aplicacion
    
    const [cartList, setCartList] = useState([]); // carrito vacio
    
    function agregarAlCarrito(item){
        

        // -1 no existe en el cart list, 0 en adelante si is in cart
        const index = cartList.findIndex(prod => prod.id === item.id )
  
        

        if (index === -1) {
            // no existe, lo agrego
            setCartList( [ ...cartList, item ] )
            
       
        } else {
            // si ya existe
            const cant = cartList[index].quantity
            cartList[index].quantity = item.quantity + cant 
            const newCartList = [ ...cartList ]
            setCartList(newCartList)  
        }

    }
    const sumaTotal = () => {
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.price * prod.quantity)  ,0)
    }
    
    const cantidad = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.quantity  ,0)
    }

    const borrarItem = (id) => { 
        setCartList( cartList.filter( prod => prod.id !== id ) )
    }

    function vaciarCarrito() {
        setCartList([])
        
    }
    
    
  return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito,
      sumaTotal,
      cantidad,
      borrarItem
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
