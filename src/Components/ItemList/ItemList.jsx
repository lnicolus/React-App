import React from "react";
import Items from "../Items/Items";
import "./stylesItemList.css";


const ItemList = ({products}) => {


  return (
    <>
      
      {products.map((prod) => <Items prod={prod} />)}
      
    </>
  );
};

export default ItemList;
