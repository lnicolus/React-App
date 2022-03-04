import React, { createContext } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Appnavbar from "./Components/Appnavbar/Appnavbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Cart from "../src/Components/Cart/Cart.jsx";
import ItemDetailContainer from "../src/Components/ItemDetailContainer/ItemDetailContainer.jsx";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";
import CartContextProvider from "./Context/CartContext";

export const ContextApp = createContext();

/* Here we provide a context, since the data from the cart choices is needed available across the SPA. See CartContext for more detail.
The Browser allows a basic navigation utilizing useParams in the named elements ItemDetail and ItemList. Products might be chosen by their category name or 
by their ID number in the corresponding collection in the database at Firebase.
 Any other paths will prompt the user to go home by advising that the page has not been found and given a button to return home page. */

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Appnavbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:idCategory"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detail/:idProduct"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
