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
