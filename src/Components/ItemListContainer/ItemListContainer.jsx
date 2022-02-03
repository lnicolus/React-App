import React from "react";
import "./stylesItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/mock";
import ItemCount from "../ItemCount/ItemCount";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);
  /* we must capture the parameter in the route for it to work and lead us to the 2 categories in the grocery */
  const { idCategory } = useParams();

  /* Through the conditional we enable what content can be seen acording to the UI input */
  useEffect(() => {
    if (idCategory) {
      getProducts
        .then((res) =>
          setProducts(res.filter((prod) => prod.category === idCategory))
        )
        .catch((err) => console.log(err))
        .finally(() =>
          setloading(false)
        ); /* along with the upper prop 'loading' mocks a server delay of 3 seconds */
    } else {
      getProducts
        .then((res) =>
          setProducts(res)
        ) /* Ensures products are renderized just once */
        .catch((err) => console.log(err))
        .finally(() =>
          setloading(false)
        ); /* along with the upper prop 'loading' mocks a server delay of 3 seconds */
    }
  }, [idCategory]); /* So that it detects any change in the filters */

  function onAdd(count) {
    console.log(count); /* for the Item Count at Coder Request */
  }

  return (
    <>
      <div className="itemListWrapper">
        <h1>Welcome to Coder Grocery!</h1>
      </div>
      <>
        {/* It will show a loading animation when there is a server delay */}
        {loading ? (
          <LoadingAnimation />
        ) : (
          <>
            <div className="storeContainer">
              <ItemList products={products} />
            </div>

            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          </>
        )}
        {/* It will show an empty fragment when there is a server delay */}
      </>
    </>
  );
};

export default ItemListContainer;
