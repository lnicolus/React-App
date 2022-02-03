import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/mock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});  
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts
      .then((res) => {
        setProduct(res.find((prod) => prod.id === idProduct));
      })
      .catch((err) => console.log(err));
  }, [idProduct]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
