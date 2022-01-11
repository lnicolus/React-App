import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, DropdownButton } from 'react-bootstrap';
import Brand from './Brand';
import CartWidget from './CartWidget';
export default function Appnavbar () { 

    return (
        
        <div className='headerWrapper'>
                    <head>
    
                        <title>Grocery on React with shopping cart</title>
                        <link href="styles.css" rel="stylesheet"/>

                    </head>
                    <Navbar bg="success" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <Brand/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className='text-light'>Home</Nav.Link   >
                                <Nav.Link href="#link" className='text-light'>Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='bg-success'>
                                <NavDropdown.Item href="#action/3.1" className='text-black'>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='text-black'>Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='text-black'>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className='text-black'>Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="dark">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                            <CartWidget/>
                        </Container>
                    </Navbar>             
 
    </div>
    )
}


