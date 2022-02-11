import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./stylesAppnavbar.css";


export default function Appnavbar() {
  
  return (
    <div className="headerWrapper">
      <Navbar bg="success" expand="lg">
        <Container>
                     
            <Link to="/">
              <Brand/>
            </Link>
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="category/fruits" className="text-light navText">
                Fruits
              </Link>
              <Link to="category/vegetables" className="text-light navText">
                Vegetables
              </Link>              
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
          <Link to="/Cart">
          <CartWidget/>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
