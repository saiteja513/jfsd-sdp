import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Navbar.Brand href="#">Price Comparator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )}

export default Navbars;