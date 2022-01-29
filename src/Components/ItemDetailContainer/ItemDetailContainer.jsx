import React, { useState, useEffect } from 'react';
import { getProducts } from '../helpers/mock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const productId = "8";
 console.log(products,"A")
  useEffect(() => {
    getProducts() /* Asking the mock base the grocery array */
      .then((data) => {
        setProducts(data.find((item) => item.id === productId));
        console.log(products,"B") /* Ask it to find the hard coded Lettuce (its line 62 of the mock file) and set the state of the array to just one product */
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail products={products} />
    </>
  );
};

export default ItemDetailContainer;