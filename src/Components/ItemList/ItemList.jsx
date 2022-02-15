import React from "react";
import Item from "../Item/Item";
import "./stylesItemList.css";




const ItemList = ({products}) => {



  return (
    <>
      
      {products.map((prod) => <Item key={prod.id} prod={prod} />)}
      
    </>
  );
};

export default ItemList;
