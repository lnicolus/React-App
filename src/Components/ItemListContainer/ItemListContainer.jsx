import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import { getFetch } from "../MockBackEnd/mock"
import ItemCount from "./ItemCount"
import './stylesItemListContainer.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

const ItemListContainer = ( {greetings} ) => { 
    /* A greeting by props, at Coder request */
    ItemListContainer.propTypes = {
    greetings: PropTypes.string.isRequired        
    }

    const [products, setProducts] = useState ([])
    const [loading, setloading] = useState(true)
    
    
    useEffect(() => {    

        getFetch
        .then(res => setProducts(res))     /* Ensures products are renderized just once */
        .catch(err => console.log(err))        
        .finally(()=> setloading(false))  /* along with the upper prop 'loading' mocks a server delay of 3 seconds */
             
    }, [])

    function onAdd(count) {
        console.log(count)          /* for the Item Count at Coder Request */
    }

    return (
        <>
            <div className='itemListWrapper'>
                <h1>Welcome to Coder Grocery!</h1>
                <p>{ greetings }</p> 
                </div>
                <div className='storeContainer'>
                    {/* It will show a loading animation when there is a server delay */}
                    { loading ? <LoadingAnimation/> :
                                        products.map( prod => <div 
                                            key={prod.id}                                            
                                            >                        
                                            <div className="card w-100 mt-5 itemFlex" >
                                                <div className="card-header bg-success text-light text-center">
                                                    {`${prod.name} - ${prod.category} - price $${prod.price}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.pic} alt='grocery product pic'/>                                                                                                              
                                                </div>
                                                <div className="cardFooter">
                                                    <button className="btn btn-outline-success btn-block bg-success text-light">
                                                        Buy
                                                    </button>                                                              
                                                </div>
                                            </div>                                            
                                        </div>                                                                         
                
                    ) }
                        
                </div>
                {/* It will show an empty fragment when there is a server delay */}
                { loading ? <></> : <ItemCount initial={1} stock={10} onAdd={onAdd}/> }
                
     </>  
        
    )
}

export default ItemListContainer