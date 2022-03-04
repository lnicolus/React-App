import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingAnimation from "./../LoadingAnimation/LoadingAnimation";
import { doc, getDoc, getFirestore } from "firebase/firestore";

/* This component requires its own fetch to the database, given that we require to pass on the individual product detail, as well as being responsive to changes or 
avoiding re renderization in the route (useParams) when its not needed. The ID becomes necessary to display exactly the product from the Firestore and pass it on the
display component ItemDetail */

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemReference = doc(db, "products", idProduct);

    getDoc(itemReference)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [idProduct]);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <ItemDetail key={product.id} product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
