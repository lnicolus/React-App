import React from "react";
import { createContext, useState, useContext } from "react";


const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)}  // funcion que automaticamente permite utilizarla sin hacer importacion

// Actualizo en tiempo real los componentes, inyectando las prop con children

function CartContextProvider({ children }) {

    // Estados y funciones globales de la aplicacion
    
    const [cartList, setCartList] = useState([]); // carrito vacio
    
    function agregarAlCarrito(item){

        const precioTotal = (item.price * item.quantity);

        if ( duplicados(item.name)) {
            const cantidadTotal = [...cartList];

            cantidadTotal.forEach(i => {
                if (i.name === item.name) {
                    i.quantity += item.quantity
                    i.price += precioTotal
                }
            })
            return setCartList (cantidadTotal)
        }
        return setCartList([...cartList, {name: item.name, price: precioTotal, quantity: item.quantity}])
    }

    const duplicados = (seleccion) => {
        const find = cartList.find( (i) =>{
            return i.name === seleccion
        })
        return find
    }
       
    function vaciarCarrito() {
        setCartList([])        
    }

    const eliminarUno = (item) => {
		const eliminarItem = [...cartList]
		const itemEliminado = eliminarItem.filter(x => x.name !== item)		
		return setCartList(itemEliminado)
	}
    
  return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito,  
      eliminarUno    
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;
