import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from "./Components/Appnavbar/Appnavbar.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx"
import ItemCount from "./Components/ItemListContainer/ItemCount.jsx"

export default function App() {
 
  return (
        <>                       
          <Appnavbar/>
          <ItemListContainer greetings='Welcome to our Coder Store!'/>
          <ItemCount stock={5} initial={1} onAdd={contador}/>          
        </> 
  )
} 
