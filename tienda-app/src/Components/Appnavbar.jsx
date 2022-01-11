import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Brand from './Brand';
export default function Appnavbar () { 

    return (
        
        <div className='headerWrapper'>
                    <head>
    
                        <title>Grocery on React with shopping cart</title>
                        <link href="styles.css" rel="stylesheet"/>

                    </head>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <Brand/>
                            </Navbar.Brand>
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
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar> 

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
            
 
    </div>
    )
}


