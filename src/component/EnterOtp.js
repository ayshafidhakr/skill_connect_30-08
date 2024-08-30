// Spinner.js
import React from 'react';
import './Style.css';
import Logo from './img/loading.png';

const Waiting = () => {
    return (
        <div className='otpWrapper'>
            <h1>Enter Code</h1>
            <span>Code is sent to 9249203534</span>
            <div className='otpWrap'>
                <div>
                    <input type='text' />
                </div>
                <div>
                    <input type='text' />
                </div>
                <div>   
                    <input type='text' />
                </div>
                <div>
                    <input type='text' />
                </div>
            </div>
            <span className='shortNote'>Didn't receive a code? <a href='#'>Resend</a></span>
        </div>
    )
};

export default Waiting;
