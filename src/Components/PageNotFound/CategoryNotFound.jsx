import React from "react";
import { Link } from "react-router-dom";

// See component PageNotFound.jsx for reference

export const CategoryNotFound = () => {
  return (
    <div className="center-block border border-danger rounded">
      <h1>Category does not exist</h1>
      <p>Check available categories in the Navbar</p>

      <button className="btn bg-success text-light">
        <Link className="text-light" to="/">
          Return Home
        </Link>
      </button>
    </div>
  );
};
