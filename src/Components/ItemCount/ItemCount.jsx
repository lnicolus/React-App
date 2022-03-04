import React from "react";
import { useState } from "react";
import "./stylesItemCount.css";

/* This component handles the selection of Kilograms to buy from the UI, it adds the total count selected which begins in 1 as default, it then sends the count
to ItemDetail, to handle it to the CartContext, which in turn handles the global cart values. As you can see in the CartContext, we have an arrow function (quantity,
line 57) and a function (addToCart line 20) they use and index, a conditional and then a reduce to avoid reiteration of objects, instead, only adding up the quantities
of the same product, in case the customer forgot to buy more kgs of a product he already has in the cart and comes back to order more. */

function ItemCount({ initial, buyLimit, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < buyLimit) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAdd(count);
  };

  return (
    <div className="count">
      <div className="buttonContainer">
        <button
          className="btn btn-outline-success bg-success text-light"
          onClick={handleIncrease}
        >
          + Kg
        </button>
        {count}
        <button
          className="btn btn-outline-success bg-success text-light"
          onClick={handleDecrease}
        >
          - Kg
        </button>
        <button
          className="btn btn-outline-success btn-block bg-success text-light"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
