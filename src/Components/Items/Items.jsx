import React from 'react';
import ItemList from '../ItemList/ItemList';

const Items = ()=> { 

  return (
   
    <div key={prod.id}>
              <div className="card w-100 mt-5 itemFlex">
                <div className="card-header bg-success text-light text-center">
                  {`${prod.name} - ${prod.category} - price $${prod.price}`}
                </div>
                <div className="card-body">
                  <img src={prod.pic} alt="grocery product pic" />
                </div>
                <div className="cardFooter">
                  
                    <button className="btn btn-outline-success btn-block bg-success text-light">
                      Buy
                    </button>
                  
                </div>
              </div>
    </div>
      
    )
};


export default Items