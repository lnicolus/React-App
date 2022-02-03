import React from 'react';
import '../ItemList/stylesItemList.css'


const ItemDetail = (props) => {
  const { name, category, price, pic } = props.product;
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
          
          <button className="btn btn-outline-success btn-block bg-success text-light">
            Buy
          </button>
          
        </div>
      </div>
    
    </div>
  );
};

export default ItemDetail;
