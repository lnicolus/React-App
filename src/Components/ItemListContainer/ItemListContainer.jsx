import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import { getFetch } from "../MockBackEnd/mock"
import ItemCount from "./ItemCount"
import './stylesItemListContainer.css'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

const ItemListContainer = ( {greetings} ) => { 

    ItemListContainer.propTypes = {
    greetings: PropTypes.string.isRequired        
    }

    const [products, setProducts] = useState ([])
    const [loading, setloading] = useState(true)
    
    
    useEffect(() => {    

        getFetch
        .then(res => setProducts(res))
        .catch(err => console.log(err))        
        .finally(()=> setloading(false))  
             
    }, [])

    function onAdd(count) {
        console.log(count)
    }

    return (
        <>
            <div className='itemListWrapper'>
                <h1>Welcome to Coder Grocery!</h1>
                <p>{ greetings }</p> 
                </div>
                <div className='storeContainer'>
                    { loading ? <LoadingAnimation/> :
                                        products.map( prod => <div 
                                            key={prod.id}
                                            className='col-md-4'
                                            >                        
                                            <div className="card w-100 mt-5" >
                                                <div className="card-header bg-success text-light">
                                                    {`${prod.name} - ${prod.category}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.pic} alt='grocery product pic' className='w-50' />
                                                    {prod.price}                                                            
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-success btn-block bg-success text-light">
                                                        Buy
                                                    </button>                                                              
                                                </div>
                                            </div>
                                        </div>                                    
                
                    ) } 
                </div>

                <ItemCount initial={1} stock={10} onAdd={onAdd} />    
     </>  
        
    )
}

export default ItemListContainer