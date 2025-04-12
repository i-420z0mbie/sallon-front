// src/components/Hero.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <Container fluid style={{ backgroundColor: '#eae8e3' }} className="py-0">
      
      <Row className="align-items-center">

        <Col 
          xs={12} md={6} 
          className="p-0 order-1 order-md-2"
        >
          <img
            src="/images/hero8.png"
            alt="Hair Salon Hero"
            className="img-fluid rounded w-100"
          />
        </Col>

        {/* Text second on mobile */}
        <Col 
          xs={12} md={6} 
          className="p-3 order-2 order-md-1"
        >
          <h2 className="display-4">We Care For You</h2>
          <p className="lead">
            "Discover your own style. Don’t try to repeat what has already been written—
            have the courage to do your own thing and don’t be afraid to do something different!"
          </p>
          <Button href="#aboutus" variant="primary" size="lg">About Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
