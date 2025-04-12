// src/components/BlackBar.jsx
import React from 'react';

const BlackBar = () => {
  const barStyle = {
    backgroundColor: '#000',     // Black background
    height: '30px',              // Adjust the height as needed
    width: '100%',               // Full width of the viewport
    position: 'fixed',           // Fixed to the top
    top: 0,
    left: 0,
    zIndex: 1040,                // Adjust the z-index if necessary
    display: 'flex',             // Enable flex layout
    alignItems: 'center',        // Vertically center items
    padding: '0 15px',           // Horizontal padding
  };

  const textStyle = {
    color: '#fff',               // White text for contrast
    fontSize: '14px',            // Adjust font size if needed
  };

  return (
    <div style={barStyle}>
      <span style={textStyle}>Hi, there!</span>
    </div>
  );
};

export default BlackBar;
