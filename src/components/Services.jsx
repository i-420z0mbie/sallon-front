import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../services.css';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const headingControls = useAnimation();
  const sectionControls = useAnimation();
  const [headingRef, headingInView] = useInView({ threshold: 0.3 });
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    }
  }, [headingInView, headingControls]);

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    }
  }, [sectionInView, sectionControls]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/simple/services/')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const serviceImages = [
    '/images/serv.png',
    '/images/serv2.png',
    '/images/serv3.png',
    '/images/serv4.png',
    '/images/serv5.png',
    '/images/serv6.png',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: '0 25px 50px -12px rgba(255, 126, 179, 0.3)'
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20 }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookNow = () => {
    handleCloseModal();
  };

  return (
    <div>
      <motion.h1
        ref={headingRef}
        className="text-center my-5"
        variants={headingVariants}
        initial="hidden"
        animate={headingControls}
      >
        Explore Our Services
      </motion.h1>

      <section id="services" className="services-section py-7" ref={sectionRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={sectionControls}
            className="text-center mb-6"
          >
            <h2 className="section-title gradient-text mb-4">Our Luxurious Services</h2>
            <div className="title-divider mx-auto"></div>
          </motion.div>

          <Row className="g-5 justify-content-center">
            {services.map((service, index) => (
              <Col key={service.id} xl={4} lg={4} md={6} className="service-col">
                <motion.div
                  variants={cardVariants}
                  initial="visible"
                  animate="visible"
                  whileHover="hover"
                  className="service-card position-relative"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="image-container">
                    <motion.img
                      src={serviceImages[index % serviceImages.length]}
                      alt={service.title}
                      className="service-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="service-content">
                    <motion.h3 className="service-title">{service.title}</motion.h3>
                    <div className="price-badge">
                      GH${service.price}
                      <span className="duration">{service.duration}min</span>
                    </div>
                    <div className="service-hover-content">
                      <button className="btn-book">View Details</button>
                    </div>
                  </div>
                  <div className="card-glow"></div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <AnimatePresence>
            {selectedService && (
              <motion.div
                className="service-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
              >
                <motion.div
                  className="service-modal-content"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="modal-close"
                    onClick={handleCloseModal}
                    style={{ zIndex: 1001 }}
                  >
                    &times;
                  </button>
                  <img
                    src={serviceImages[services.indexOf(selectedService) % serviceImages.length]}
                    alt={selectedService.title}
                    className="modal-image"
                  />
                  <div className="modal-body">
                    <h3>{selectedService.title}</h3>
                    <div className="price">${selectedService.price}</div>
                    <p className="description">
                      {selectedService.description || 'Premium beauty treatment with expert care'}
                    </p>
                    <a
                      href="#appointment"
                      className="btn-book-lg"
                      onClick={handleBookNow}
                    >
                      Book Now
                      <span className="btn-glow"></span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </div>
  );
};

export default ServicesSection;
