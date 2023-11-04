import React from 'react';
import { Navbar} from "react-bootstrap";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function Snav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Navbar.Brand href="/">Price Comparator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  )
}

export default Snav