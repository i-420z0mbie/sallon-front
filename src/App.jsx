// src/App.jsx
import React from 'react';
import MyNavbar from './components/Navbar';
import BlackBar from './components/BlackBar';
import Hero from './components/Hero';
import AppointmentSection from './components/AppointmentSection';
import ServicesSection from './components/Services'; 
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  // Adjust this value based on the combined height of BlackBar and Navbar
  const topOffset = 20 + 55; 

  return (
    <div>
      <BlackBar />
      <MyNavbar />
      {/* Add top padding to offset fixed elements */}
      <div style={{ paddingTop: `${topOffset}px` }}>
        <Hero />
        <ServicesSection /> 
        <AppointmentSection />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
