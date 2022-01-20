import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from "./Appnavbar"
import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer"


export default function App() {
 
  return (
        <>                       
          <Appnavbar/>
          <ItemListContainer greetings='Welcome to our Coder Store!'/>
          <ItemCount stock={5} initial={1} onAdd={}/>          
        </> 
  )
} 
