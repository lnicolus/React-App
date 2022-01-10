import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export default function Appnavbar () { 

    return (
        
        <div>       
                
                <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 

                <head>
	
	                <title>Grocery on React with shopping cart</title>
                    <link href="styles.css" rel="stylesheet"/>

                </head>

                <header className="headContainer">
                          
                    
                    <div className="brand">
                 
                    <img
                     className="logo"
                     src="https://cdn1.iconfinder.com/data/icons/grocery-14/64/paper_bag-market-shopping-food-water-grocery_bag-512.png"
                     alt="Grocery Logo"
                    />
                    <p>Coder Grocery</p>

                    </div>
      
            

                <div className="cart">
                    <p>Buy!</p>
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
                        <li>Products: </li>
                        <li>Subtotal: </li>
                    </ul>
      
                </div>
            
        </header>
    </div>
    )
}


