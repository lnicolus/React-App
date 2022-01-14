export default function CartWidget () { 

    return (
                <div className="cart">
                <p className='text-light'>Buy!</p>
                <a                   
                href="#"                 
                >
                <img
                className="cartImg"
                src="https://cdn1.iconfinder.com/data/icons/food-delivery-44/64/Grocery-bag-vegetable-shop-store-food-delivery-256.png"                    
                alt="buy" 
                />
                </a>
                <ul className="shoppingStatusDisplay">
                    <li className='text-light'>Products: </li>
                    <li className='text-light'>Subtotal: </li>
                </ul>
  
            </div>
    )
}