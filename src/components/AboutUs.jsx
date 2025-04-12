import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../AboutUs.css';

function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <Container
      id="aboutus"
      ref={ref}
      className="py-7 aboutus-section position-relative overflow-hidden"
    >
      <motion.div
        className="aboutus-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Row className="align-items-center position-relative g-5">
          <Col md={6} className="pe-lg-5">
            <motion.div variants={leftVariants}>
              <h2 className="display-3 mb-4 gold-gradient">
                About <span className="gold-text">Us</span>
              </h2>
              <p className="lead mb-4 fs-5 opacity-75 delay-animate">
                At Lormy-Beauty, we believe that everyone deserves to look and feel their absolute best.
                Our highly skilled team of beauty artisans is passionate about delivering exceptional,
                high-quality haircare in a relaxing, sanctuary-like environment.
              </p>
              <div className="d-flex gap-3 delay-animate flex-wrap">
                <Button
                  href='#appointment'
                  variant="outline-gold"
                  className="px-4 py-3 rounded-pill text-uppercase fw-bold hover-scale"
                >
                  <i className="fas fa-calendar-alt me-2"></i>Book Appointment
                </Button>
                <Button
                  href='#footer'
                  variant="gold"
                  className="px-4 py-3 rounded-pill text-uppercase fw-bold hover-scale"
                >
                  <i className="fas fa-phone me-2"></i>Call Now
                </Button>
              </div>
              <div className="mt-5 delay-animate">
                <div className="d-flex gap-4">
                  <div className="stat-box text-center p-3 gold-border">
                    <h3 className="gold-text mb-0">15+</h3>
                    <p className="mb-0">Years Experience</p>
                  </div>
                  <div className="stat-box text-center p-3 gold-border">
                    <h3 className="gold-text mb-0">5k+</h3>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col md={6} className="ps-lg-5 mt-5 mt-md-0">
            <motion.div variants={rightVariants} className="photo-stack-wrapper position-relative">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`/images/hero${i}.jpg`}
                  alt={`Lormy photo ${i}`}
                  className={`photo-card photo-${i} img-fluid rounded-4 shadow-lg`}
                />
              ))}
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default AboutUs;
