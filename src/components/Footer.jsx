// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  // Get current day for highlight
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = days[new Date().getDay()];

  return (
    <footer className="bg-dark text-light pt-5 mt-5 border-top border-danger border-3">
      <Container id='footer'>
        <Row className="g-4">
          {/* Salon Info */}
          <Col lg={3} md={6} className="pe-lg-5">
            <h3 className="text-danger mb-4 fw-bold hover-scale" style={{ transition: 'all 0.3s' }}>
              Lormy Beauty
            </h3>
            <p className="text-glow mb-4 fw-bold hover-scale" style={{ transition: 'all 0.3s' }}>
              Transforming beauty with passion and expertise.
            </p>
            <div className="social-icons mt-4">
              <a className="text-light me-3 hover-up">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text-light me-3 hover-up">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text-light me-3 hover-up">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="text-light hover-up">
                <FaYoutube size={25} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} className="ps-lg-4">
            <h5 className="text-uppercase text-danger mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#aboutus" className="text-light text-decoration-none hover-slide">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none hover-slide">Services</a>
              </li>
              <li className="mb-2">
                <a href="#appointment" className="text-light text-decoration-none hover-slide">Schedule Appointment</a>
              </li>
            </ul>
          </Col>

          {/* Business Hours */}
          <Col lg={3} md={6}>
            <h5 className="text-uppercase text-danger mb-4">Opening Hours</h5>
            <ul className="list-unstyled">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <li 
                  key={day}
                  className={`d-flex justify-content-between mb-2 ${day === currentDay ? 'text-danger fw-bold' : ''}`}
                >
                  <span>{day}:</span>
                  <span>{day === 'Sun' ? 'Closed' : '8:00 AM - 7:00 PM'}</span>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="text-uppercase text-danger mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt className="text-danger me-3" />
              <a href="tel:xxxxxxxxx" className="text-light text-decoration-none hover-scale">+233xxxxxx</a>
            </div>
            <p className="text-muted">Golf City, main street</p>
            <p className="text-muted">Le domino Hotel</p>
            <p className="text-muted">info@lormybeauty.com</p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5 pt-3 border-top border-secondary">
          <Col className="text-center text-muted">
            <p className="mb-0">
              © {new Date().getFullYear()} Lormy-Beauty. All rights reserved. | 
              <a href="#" className="text-muted text-decoration-none ms-1 hover-scale">Privacy Policy</a> | 
              <a href="#" className="text-muted text-decoration-none ms-1 hover-scale">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;