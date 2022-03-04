import React from "react";
import { Link } from "react-router-dom";

// See component PageNotFound.jsx for reference

export const ProductNotFound = () => {
  return (
    <div className="storeContainer">
      <div className="center-block border border-danger rounded">
        <h1>Product does not exist</h1>
        <p>Try a different ID</p>

        <button className="btn bg-success text-light">
          <Link className="text-light" to="/">
            Return Home
          </Link>
        </button>
      </div>
    </div>
  );
};
