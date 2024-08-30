import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import SplashScreenLogo from './img/splash-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function SplashScreen() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="splashScreen">
        <img src={SplashScreenLogo} />
      </div>
    </div>
  );
}

export default SplashScreen;