import PropTypes from 'prop-types'
import React from "react";
import './stylesItemListContainer.css'
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ( {greetings} ) => { 
    
    /* A greeting by props, at Coder request */
    ItemListContainer.propTypes = {
    greetings: PropTypes.string.isRequired        
    }

    return (
        <>
            <div className='itemListWrapper'>
                <h1>Welcome to Coder Grocery!</h1>
                <p>{ greetings }</p> 
            </div>
              <ItemList/>  
        </>  
        
    )
}

export default ItemListContainer