import PropTypes from "prop-types";
import React from "react";
import "./stylesItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../helpers/mock";
import ItemCount from "../ItemCount/ItemCount";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = ({ greetings }) => {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
  /* A greeting by props, at Coder request */
  ItemListContainer.propTypes = {
    greetings: PropTypes.string.isRequired,
  };



  return (
    <>
      <div className="itemListWrapper">
        <h1>Welcome to Coder Grocery!</h1>
        <p>{greetings}</p>
      </div> 
      <div className="storeContainer">
        {/* It will show a loading animation when there is a server delay */}
        {loading ? (
          <LoadingAnimation />
        ) : (
          <ItemList products={products}/>
        )}
        {/* It will show an empty fragment when there is a server delay */}
        </div>
        {loading ? <></> : <ItemCount initial={1} stock={10} onAdd={onAdd} />}   
        <ItemDetailContainer/>  
    </>
  );
};

export default ItemListContainer;
