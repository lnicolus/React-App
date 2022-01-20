import { useState } from 'react';
import React from 'react'

function ItemCount ({initial, stock, onAdd}) {

    const [contador, setcontador] = useState(initial);

    const handleIncrease = ()=> {
        if(contador < stock) {
            setcontador(contador + 1)
        }
        
    }

    const handleDecrease = ()=> {
        if(contador > initial) {
            setcontador(contador - 1)
        }
    }

    const addToCart = ()=> {
        onAdd(contador)
    }

    function onAdd(cant) {
        console.log(cant)
    } // esto va en el useEffect

    return (
        <div className='container w-50'>
        <button className='btn btn-outline-primary' onClick={handleIncrease}> + </button>
        {contador}
        <button className='btn btn-outline-primary' onClick={handleDecrease}> - </button> 
        <button className='btn btn-outline-primary btn-block' onClick={addToCart}> Add to Cart </button>
        </div>
    )
}

export default ItemCount;