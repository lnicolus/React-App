import React from "react";
import { Link } from "react-router-dom";


const Item = ({ prod }) => {
  return (
    <div key={prod.id}>
      <div className="card w-100 mt-5 itemFlex">
        <div className="card-header bg-success text-light text-center">
          {`${prod.name} - price $${prod.price} by kg`}
        </div>
        <div className="card-body">
          <img src={prod.pic} alt="grocery product pic" />
        </div>
        <div className="cardFooter">
          <Link to={`/detail/${prod.id}`}>
            <button className="btn btn-outline-success btn-block bg-success text-light">
              Check
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
