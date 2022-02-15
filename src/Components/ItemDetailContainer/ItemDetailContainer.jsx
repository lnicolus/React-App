import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingAnimation from './../LoadingAnimation/LoadingAnimation';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});  
  const [loading, setloading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore()

   const itemReference = doc(db, 'products', idProduct)

   getDoc(itemReference)
     .then((res) => setProduct({ id: res.id, ...res.data()} ))
      .catch((err) => console.log(err))
     .finally(()=> setloading(false))
   }, [idProduct]);

  /*
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
*/
  return (
    <> 
    {loading ? (<LoadingAnimation />) : (<ItemDetail key={product.id} product={product} />)} 
    </>
  );
};

export default ItemDetailContainer;
