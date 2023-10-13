import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import logo from './images/logo.png';

const Landing = () => {
  return (
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src={logo} width={170} roundedCircle />
      </Col>
    </Row>
    <h3>Welcome to our Website</h3>
  </Container>
  
  )
}

export default Landing