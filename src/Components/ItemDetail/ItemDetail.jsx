import React from 'react';

const ItemDetail = (props) => {
  const { name, category, stock, price } = props.products;

  return (
    <>
      <h1>{name}</h1>
      <h4>Category: {category}</h4>
      <h4>Stock: {stock}</h4>
      <h4>Price: ${price}</h4>
    </>
  );
};

export default ItemDetail;