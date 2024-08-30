// src/components/PasswordStrengthMeter.js
import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import './PasswordStrengthMater.css'; // Import the CSS file for styling

const PasswordStrengthMeter = ({ onSendData }) => {
  const [passwordText, setPasswordText] = useState('');
  const [passwordMatch, setPasswordMatch] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');
  const [strength, setStrength] = useState(0);
  const [width, setWidth] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getStrengthWidth();
    console.log()

    if (passwordText == confirmPassword) {
      setMessage('');
    } else {
      setMessage('Password do not match');
    }
  });

  const evaluatePassword = (password) => {
    const result = zxcvbn(password);
    return result.score;
  };

  const handleChange = (e) => {
    setStatus(getStrengthStatus())
    const passwordText = e.target.value;
    setPasswordText(passwordText);
    const score = evaluatePassword(passwordText);
    setStrength(score);





    onSendData(passwordText);

  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
      case 1:
        return '#da5a5a';
      case 2:
        return '#e9c055';
      case 3:
        return '#bbca56'
      default:
        return 'lightgray';
    }
  };

  const getStrengthStatus = () => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Good';
      case 3:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  const getStrengthWidth = () => {
    if (getStrengthColor() == 'red') {
      setWidth(33)
      setStatus('Weak')
    }
    else if (getStrengthColor() == 'orange') {
      setWidth(66)
      setStatus('Strong')
    }
    else if (getStrengthColor() == 'green') {
      setWidth(100)
      setStatus('Excellent')
    }

  }
  const handleSubmit = (e) => {
    e.stopPropagation();
  };

  const validatePasswords = () => {

    console.log(passwordText,confirmPassword)
  };

  const handlePasswordChange = (e) => {
    setPasswordText(e.target.value);
    validatePasswords();
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords();
  };
  return (
    <div>

<fieldset>
                  <label>Enter a password</label><br ></br>
                  <input
        type="password"
        name='password'
        value={passwordText}
        onChange={handleChange}
        placeholder="Enter your password"
        className='textboxs'
        maxLength={10}
      />
              </fieldset>





     <div className='stWrap'><p className='progressWrapText'>Password strength</p>
      <div className="progress-container">
        <div className='ProgressWrapper'>

          <div
            className="progress-bar"
            style={{
              width: `${(strength / 3) * 100}%`,
              backgroundColor: getStrengthColor()
            }}
          />
          <div className="strength-label" style={{ backgroundColor: getStrengthColor(), width: width, borderRadius: 10, height: 8, marginTop: 15 }}>
      </div>


        </div>
      </div>
      <div className='passwordStatus'>{status}</div> </div>
      <fieldset>
                  <label> Confirm password </label>
                  <input type='password' className='textboxs' placeholder='Enter Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <p style={{ color: 'red' }}>{message}</p>    </fieldset>

    </div>
  );
};

export default PasswordStrengthMeter;
