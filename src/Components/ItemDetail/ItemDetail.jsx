import React from 'react';
import '../ItemList/stylesItemList.css'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {
  const { name, category, price, pic } = props.product;

const [count, setCount] = useState(0);

  function onAdd(count) {
    setCount(count); 
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
          {count  === 0 ?
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
