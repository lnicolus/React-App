import React from 'react';

const ItemDetail = ({products}) => {

  return (
    <>
      <h1>{products.name}</h1>
      <h4>Category: {products.category}</h4>
      <h4>Stock: {products.stock}</h4>
      <h4>Price: ${products.price}</h4>
    </>
  );
};

export default ItemDetail;

