// Spinner.js
import React from 'react';
import './Style.css';
import tick from './img/successtick.png';

const VerifyStatus = () => {
    return (
        <div className='otpWrapper statusWrapper'>
            <h2>Mobile Verification Successful</h2>
            <div className='statustick'>
               <img src={tick} />
            </div>
        
        </div>
    )
};

export default VerifyStatus;
