import React from 'react';

const YesButton = ({onClick}) => { 
    return (
        <button 
        style={{
            backgroundColor: '#FF69B4', // Pink color
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '20px', // Rounded corners
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for depth
            transition: 'background-color 0.3s ease', // Smooth color transition
        }}
        onClick={onClick}
        >
            Yes
        </button>
    );
};

export default YesButton;