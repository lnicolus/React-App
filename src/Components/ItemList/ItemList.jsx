import React from "react";
import Item from "../Item/Item";
import "./stylesItemList.css";
import { CategoryNotFound } from "./../PageNotFound/CategoryNotFound";

/* The list of products comes from the father node (ItemListContainer) by props, for such cases where the user types a category in the browser instead of clicking those
available in the collapsible navbar and that category does not exist, the object passed into the array will have no length, giving a falsy value, thus the user 
will be redirected.  Otherwise, the appropiate products will be rendered according to the selection. */

const ItemList = ({ products }) => {
  return (
    <>
      {!products.length ? (
        <CategoryNotFound />
      ) : (
        products.map((prod) => <Item key={prod.id} prod={prod} />)
      )}
    </>
  );
};

export default ItemList;
