import React from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useEffect, useState } from "react";
import { getProducts } from "../helpers/mock";
import ItemCount from "../ItemCount/ItemCount";
import "./stylesItemList.css";
import Items from "../Items/Items"

const ItemList = () => {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);

    useEffect( () => {

      getProducts
        .then((res) =>
          setProducts(res)
         ) /* Ensures products are renderized just once */
        .catch((err) => console.log(err))
        .finally(() =>
          setloading(false)
        ); /* along with the upper prop 'loading' mocks a server delay of 3 seconds */
    
  }, [products]); /* So that it detects any change in the filters */

  function onAdd(count) {
    console.log(count); /* for the Item Count at Coder Request */
  }

  return (
    <>
      <div className="storeContainer">
        {/* It will show a loading animation when there is a server delay */}
        {loading ? (
          <LoadingAnimation />
        ) : (
          products.map((prod) => (
            <Items prod={prod}/>
          ))
        )}
        {/* It will show an empty fragment when there is a server delay */}
      </div>
      {loading ? <></> : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
    </>
  );
};

export default ItemList;
