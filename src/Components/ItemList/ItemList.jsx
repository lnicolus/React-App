import React, {useContext} from "react";
import Item from "../Item/Item";
import "./stylesItemList.css";
import { ContextApp } from "../../App";



const ItemList = () => {

  const { prods } = useContext(ContextApp)

  return (
    <>
      
      {prods.map((prod) => <Item prod={prod} />)}
      
    </>
  );
};

export default ItemList;
