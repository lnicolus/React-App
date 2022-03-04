import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./stylesAppnavbar.css";

/* The present component contains a collapsible navbar that allows access to the corresponding categories of the products; to see all
 of them as is default or to navigate to the cart through the widget (which displays data of the current state of the purchases) */

export default function Appnavbar() {
  return (
    <div className="headerWrapper">
      <Navbar bg="success" expand="lg">
        <Container>
          <Link to="/">
            <Brand />
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
              <Link to="/" className="text-light navText">
                All
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/Cart">
            <CartWidget></CartWidget>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
