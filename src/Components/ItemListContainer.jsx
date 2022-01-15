import PropTypes from 'prop-types';

const ItemListContainer = ( {greetings} ) => { 

    ItemListContainer.propTypes = {
    greetings: PropTypes.string.isRequired        
    }

    return (
        <>
            <h1>Welcome to Coder Grocery!</h1>
            <p>{ greetings }</p> 
            <ul>
                <li>Carrots</li>
                <li>Broccoli</li>
                <li>Apples</li>
                <li>Oranges</li>
            </ul>     
        
        </>
    )
}

export default ItemListContainer