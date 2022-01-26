import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Appnavbar from "./Components/Appnavbar/Appnavbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Appnavbar />
      <ItemListContainer greetings="Welcome to our Coder Store!" />
    </BrowserRouter>
  );
}
