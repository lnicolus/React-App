import React from "react";
import { Link } from "react-router-dom";

/* Thanks to my Tutor, Juan Martin Cereceda for this component. Its function is to help the user back when the path is badly written.
It is the basis of the other error pages  */

export const PageNotFound = () => {
  return (
    <div className="storeContainer">
      <div className="center-block border border-danger rounded">
        <h1>Page not found</h1>

        <button className="btn bg-success text-light">
          <Link className="text-light" to="/">
            Return Home
          </Link>
        </button>
      </div>
    </div>
  );
};
