import React from "react";
import "../ItemListContainer/stylesItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "./../../Context/CartContext";
import { useState } from "react";
import { ProductNotFound } from "./../PageNotFound/ProductNotFound";

/* In this component we receive the props of the products and use them to display the corresponding individual cards. 
We receive the data through the props so the Context addToCart can receive it and make it persist.
The count state allows us to keep track if the user has chosen a quantity for the product, if so, it will display the option to keep buying 
(thus returning to the store) or then directly to the cart.

Another feature is that "!name" for these cases where the user types a wrong product ID, the result will be falsy, thus redirecting to an error
page.

Finally we can see that there is a state, false by default, conditioning the display giving the keep buying or go finish and go to cart, to the user 
choosing a quantity, which will be handled by the ItemCount component. In the onAdd function it receives the quantity chosen, adding to the array. */

const ItemDetail = (props) => {
  const { name, category, price, pic, description } = props.product;
  const [count, setCount] = useState(false);

  const { addToCart } = useCartContext();

  function onAdd(quantity) {
    addToCart({ ...props.product, quantity: quantity, price });
    setCount(true);
  }

  return (
    <>
      {!name ? (
        <ProductNotFound />
      ) : (
        <div className="storeContainer">
          <div className="card mt-5 itemFlex">
            <div className="card-header bg-success text-light text-center">
              {`${name} - ${category} - price by Kg $${price}`}
            </div>
            <div className="card-body">
              <img src={pic} alt="grocery product pic" />
            </div>

            <div className="cardFooter">
              {`${description}`}

              {!count ? (
                <ItemCount initial={1} buyLimit={30} onAdd={onAdd} />
              ) : (
                <div className="buttonContainer">
                  <button className="btn btn-outline-success btn-block bg-success ">
                    <Link className="text-light" to="/cart">
                      Finish buying
                    </Link>
                  </button>

                  <button className="btn btn-outline-success btn-block bg-success">
                    <Link className="text-light" to="/">
                      Keep buying
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
