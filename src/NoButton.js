import React, { useState } from 'react';

const NoButton = ({ onClick, message }) => {
  const yesButtonWidth = 180; 
  const yesButtonHeight = 525; 
  
  const [position, setPosition] = useState({ 
    top: yesButtonHeight + 20, 
    left: yesButtonWidth + 40, 
  });

  const handleNoClick = () => {
    const maxTop = window.innerHeight - 50; 
    const maxLeft = window.innerWidth - 180; 
    const randomTop = Math.min(Math.floor(Math.random() * maxTop), maxTop);
    const randomLeft = Math.min(Math.floor(Math.random() * maxLeft), maxLeft);

    setPosition({ top: randomTop, left: randomLeft });
    onClick();
};

  return (
    <button
      style={{
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        backgroundColor: '#FFC8BB',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'top 0.3s ease, left 0.3s ease', // Add transition for smooth movement
      }}
      onClick={handleNoClick}
    >
      {message}
    </button>
  );
};

export default NoButton;