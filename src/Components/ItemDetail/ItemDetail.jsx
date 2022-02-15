import React from 'react';
import '../ItemList/stylesItemList.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
import { useCartContext } from './../../Context/CartContext';
import { useState } from 'react';


const ItemDetail = (props) => {
  const { name, category, price, pic, quantity } = props.product; 
  const [count, setCount ] = useState(false); 

 const { cartList, agregarAlCarrito } = useCartContext()

  function onAdd(quantity) {
    agregarAlCarrito( {...props.product, quantity: quantity, price} ) 
    setCount(true)        
  }

  

  return (
    <div className='storeContainer'>
      
      <div className="card mt-5 itemFlex">
        <div className="card-header bg-success text-light text-center">
          {`${name} - ${category} - price $${price}`}
        </div>
        <div className="card-body">
          <img src={pic} alt="grocery product pic" />
        </div>
        <div className="cardFooter">         
       
          {/* If the count is 0, user can keep buying */}
          {!count  ?
          <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
          :
          <>
          <Link to="/cart">
          <button className="btn btn-outline-success btn-block bg-success text-light">Finish buying</button>
          </Link>
          <Link to="/">
          <button className="btn btn-outline-success btn-block bg-success text-light">Keep buying</button>
          </Link>
          </>
        }
        </div>
      </div>
    
    </div>
  );
};

export default ItemDetail;
