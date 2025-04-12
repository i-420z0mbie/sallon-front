// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Navbar 
      expand="lg"
      className={`fixed-top ${scrolled ? 'nav-scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}
      onToggle={(expanded) => setIsOpen(expanded)}
      style={{ 
        background: scrolled 
          ? 'linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)' 
          : 'linear-gradient(45deg, rgb(207, 201, 201) 0%, rgb(194, 184, 184) 100%)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.3)' : 'none',
        top: '30px' // Offset the navbar by the height of the black bar
      }}
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
          transition={{ duration: 0.8 }}
        >
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="gradient-text logo-text">Lormy-Beauty</span>
            <div className="logo-glow"></div>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler"
          style={{ borderColor: isOpen ? 'transparent' : '#fff' }}
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {['Services', 'About Us'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Nav.Link 
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="nav-link-item"
                >
                  <span className="link-text">{item}</span>
                  <span className="link-underline"></span>
                </Nav.Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button href='#appointment'
                variant="primary" 
                className="book-button ms-lg-3 mt-3 mt-lg-0"
              >
                <span className="button-content">
                  Book Now
                  <span className="button-glow"></span>
                  <span className="button-pulse"></span>
                </span>
              </Button>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
