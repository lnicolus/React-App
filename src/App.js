import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appnavbar from "./Components/Appnavbar/Appnavbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";

export default function App() {
  return (
    <>
      <Appnavbar />
      <ItemListContainer greetings="Welcome to our Coder Store!" />
    </>
  );
}
