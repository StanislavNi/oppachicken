import React from 'react';
import logo from './images/logo.png';


function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="logoDiv">
         <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Header;