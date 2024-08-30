// Spinner.js
import React from 'react';
import './Style.css';
import tick from './img/successtick.png';

const EmailpVerificationStatus = () => {
    return (
        <div className='otpWrapper statusWrapper'>
            <h2>Email verification Successfull</h2>
            <div className='statustick'>
               <img src={tick} />
            </div>
        </div>
    )
};

export default EmailpVerificationStatus;
