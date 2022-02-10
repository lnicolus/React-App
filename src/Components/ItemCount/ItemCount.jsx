import React from "react";
import { useState } from "react";
import "./stylesItemCount.css";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
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
    <div className="countExercise">
      <div className="buttonContainer">
        <button
          className="btn btn-outline-success bg-success text-light"
          onClick={handleIncrease}
        >
          {" "}
          +{" "}
        </button>
        {count}
        <button
          className="btn btn-outline-success bg-success text-light"
          onClick={handleDecrease}
        >
          {" "}
          -{" "}
        </button>
        <button
          className="btn btn-outline-success btn-block bg-success text-light"
          onClick={addToCart}
        >
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
