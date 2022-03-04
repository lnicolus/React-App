import React from "react";
import "./stylesItemListContainer.css";
import { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

/* This component contains the list of products and handles its own data requests to the Firestore. Firstly we utilize a state to validate the loading animation, 
in order to make a better UX in case of server delays, so we await the finalization of the query process to the database before disabling the animation with a boolean.
The corresponding states reset at every new request of the user.

 Second state allows to set the props coming from the Firebase, in order to pass them on to the children in the below nodes.
 Through the conditional in the queryFilter we enable what content can be seen acording to the UI input, and we detect changes at the end of the effect.
(see App.js for the route) */

const ItemListContainer = () => {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "products");

    const queryFilter = !idCategory
      ? queryCollection
      : query(queryCollection, where("category", "==", idCategory));

    setloading(true);
    getDocs(queryFilter)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  }, [idCategory]);

  return (
    <>
      <h1 className="center-block">Coder Grocery Store</h1>

      <>
        {loading ? (
          <LoadingAnimation />
        ) : (
          <>
            <div className="storeContainer">
              <ItemList products={products} />
            </div>
          </>
        )}
      </>
    </>
  );
};

export default ItemListContainer;
