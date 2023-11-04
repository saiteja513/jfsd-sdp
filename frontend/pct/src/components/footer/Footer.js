import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container content='center'>
    <footer className="bg-light text-dark text-center p-3">
      <div className="container">
        
        <p>&copy; {new Date().getFullYear()} Price Comparator pvt ltd.</p>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
