import React, { useState } from 'react';
import bubuFlower from './hi-waving.gif';
import bubuDudu from './sweet.gif';
import './App.css';
import YesButton from './YesButton';
import NoButton from './NoButton';

const initialMessage = "❤️ Will you be my valentine? ❤️";
const noMessages = ["No", "No! Don't touch me!!!", "I'm running away!!", "Are you sure?", "Are you really sure?", "Really really really sure?", "Take some time to think it through", "A little bit more time", "NOOOOO", "Please don't say no!", "I'm begging you!", "Wahhhhhh", "You've hurt my feelings", "Just say yes!", "Don't say no!", "I'm not going to forgive you!", ":<", "Owie", "PLEASE PLEASE PLEASE PLEASE PLEASE", "Hmmph", "Fine", "You forced me to do this"];

function App() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [message, setMessage] = useState(initialMessage);
  const [imageSrc, setImageSrc] = useState(bubuFlower);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [imageStyle, setImageStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleYesClick = () => {
    setMessage(<span style={{ fontSize: '30px', fontFamily: 'Arial , sans-serif' }}>❤️ Yayyyy I love you!!! ❤️</span>);
    setImageSrc(bubuDudu);
    setButtonsVisible(false);
    setImageStyle({ width: '300px', height: '300px' });
    setBackgroundColor('#FFD9E6');
  };

  const handleNoClick = () => {
    console.log("No button clicked");
    setMessageIndex((prevIndex) => prevIndex + 1);
  };

  const renderNoButton = messageIndex < noMessages.length ? (
    <NoButton onClick={handleNoClick} message={noMessages[messageIndex]} />
  ) : (
    <YesButton onClick={handleYesClick} message="Yes Again!" />
  );

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: backgroundColor }}> {}
        <img src={imageSrc} className="App-logo" alt="logo" style={imageStyle} />
        <h style={{ color: 'black' }}>
          {message}
        </h>
        {buttonsVisible && (
          <div className="button-container">
            <YesButton onClick={handleYesClick} message="Yes" />
            {renderNoButton}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;