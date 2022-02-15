import React from "react";
import "./stylesItemListContainer.css";
import { useEffect, useState } from "react";
//import { getProducts } from "../helpers/mock";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);
  /* we must capture the parameter in the route for it to work and lead us to the 2 categories in the grocery */
  const { idCategory } = useParams();
  

  /* Through the conditional we enable what content can be seen acording to the UI input */
  useEffect(() => {
    const db = getFirestore() 

    const queryCollection = collection(db, 'products') 
    
    const queryFilter = ! idCategory ? 
            queryCollection                
        : 
            query(queryCollection, 
                where('category', '==', idCategory)                
            )  

    setloading(true)
    getDocs(queryFilter)
    .then( resp => setProducts( resp.docs.map(prod =>( { id: prod.id, ...prod.data()} ) ) ) )    
    .catch((error)=> console.log(error) )
    .finally(()=> setloading(false) )


   /*
    setloading(true)
    getProducts()
    .then((res) =>
      setProducts(idCategory ? res.filter((prod) => prod.category === idCategory) : res)
      )
    .catch((err) => console.log(err))
    .finally(() =>
      setloading(false)
    ); /* along with the upper prop 'loading' mocks a server delay of 3 seconds */

}, [idCategory]); /* So that it detects any change in the filters */ 
console.log(products, 'hola')
  return (
    <>
      <div className="itemListWrapper">
        <h1>Welcome to Coder Grocery!</h1>
      </div>
      <>
        {/* It will show a loading animation when there is a server delay */}
        {loading ? (
          <LoadingAnimation />
        ) : (
          <>
            <div className="storeContainer">
              <ItemList products={products} />
            </div>

            
          </>
        )}
        {/* It will show an empty fragment when there is a server delay */}
      </>
    </>
  );
};

export default ItemListContainer;
