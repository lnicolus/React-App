import React, { useState, useEffect } from 'react';
import { getProducts } from '../helpers/mock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const productId = "8";

  useEffect(() => {
    getProducts
      .then((data) => {
        setProduct(data.find((item) => item.id === productId));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
