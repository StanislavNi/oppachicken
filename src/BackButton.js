import React from 'react';
import Back from './images/back-arrow.png';


function BackButton() {
  return (
    <div className="backButton">
        <img src={Back} className="backImg" alt="backImg"/>
    </div>
  );
}

export default BackButton;