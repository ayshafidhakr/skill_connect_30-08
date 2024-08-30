import React, { useState } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import EmailVerificationStatus from './VerificationEmailStatus';

function EmailVerificationStart() {
  const [text, setText] = useState('');
  const backTo = () => {
    console.log('Clicked ...')
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  const handleChange = (event) => {
  }
  return (
    <div className="App">
        <div className="strip"></div>
      <div className="verficationWrapper">
        <div className='left'>
          <div className='header'>
            <div className='logo'>
              <img src={Logo} alt="logo" title='logo' />
            </div>
          </div>
          <h1 className='title'> Email Verification</h1>
          <div className='verifyForm'>{text}
            <form>

              <fieldset>  
                <input type='text' className='textboxs' placeholder='name@gmail.com' />
              </fieldset>

            
            <div className='verifyText'>
            <p>We will send a verification link to your email to confirm it's you.</p>
            </div>
            <button value='Login' className='forgtBtn' onClick={submitLogin}>Sent Code</button>
            </form>
          </div>
        </div>
        <div className="right">
          {/* <Waiting></Waiting> */}
          {/* <VerifyStatus></VerifyStatus> */}
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationStart;