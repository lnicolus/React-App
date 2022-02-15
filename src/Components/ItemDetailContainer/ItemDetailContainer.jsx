import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../helpers/mock";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingAnimation from './../LoadingAnimation/LoadingAnimation';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});  
  const [loading, setloading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
        .then((res) =>{
          setProduct(res.find((prod) => prod.id === idProduct));
        })        
        .catch((err) => console.log(err))
        .finally(() =>
          setloading(false)
        ); 
    
  }, [idProduct]); 

  return (
    <> 
    {loading ? (<LoadingAnimation />) : (<ItemDetail product={product} />)} 
    </>
  );
};

export default ItemDetailContainer;
