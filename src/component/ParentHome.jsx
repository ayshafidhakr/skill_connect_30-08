import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function ParentHome() {
  const percentage = 56;
  const percentage2 = 66;
  const percentage3 = 76;
  return (
    <div className="App">
      <div className="wrapSpin">
     <CircularProgressbar
  value={percentage2}
  text={`${percentage2}`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(111, 82, 19, ${percentage2 / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#ccc',
  })}
/></div>
<div className="wrapSpin">
     <CircularProgressbar
  value={percentage}
  text={`${percentage}`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 52, 299, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#ccc',
  })}
/></div>
<div className="wrapSpin">
     <CircularProgressbar
  value={percentage3}
  text={`${percentage3}`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 22, 79, ${percentage3 / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/></div>;
    </div>
  );
}

export default ParentHome;