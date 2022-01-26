import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./stylesAppnavbar.css";

export default function Appnavbar() {
  return (
    <div className="headerWrapper">
      <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {/* Me linkea a la homepage */}
            <NavLink to="/">
              <Brand />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="category/fruits" className="text-light">
                Fruits
              </Link>
              <Link to="category/vegetables" className="text-light">
                Vegetables
              </Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="bg-success"
              >
                <NavDropdown.Item href="#action/3.1" className="text-black">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="text-black">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="text-black">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="text-black">
                  Separated link
                </NavDropdown.Item>
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
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
}
