import React from "react";
import Item from "../Item/Item";
import "./stylesItemList.css";


const ItemList = ({products}) => {


  return (
    <>
      
      {products.map((prod) => <Item prod={prod} />)}
      
    </>
  );
};

export default ItemList;
