// SignUp.js
import React from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './img/logo.png';
import studentType from './img/studentType.png';
import parentType from './img/parentType.png';
import counsellorType from './img/CouncillorType.png';
import InstitutionType from './img/institutionType.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const backTo = () => {
        console.log('Clicked ...')
    
    }
    return (
        <div className="App">
        <div className="strip"></div>
            <div className="wrapper">
                <div className='header'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" title='logo' />
                    </div>
                    <div className='backtoWrap'>
                        <button className='backtoweb' onClick={backTo}>
                            <FontAwesomeIcon icon={faAngleLeft} /> Back to website
                        </button>
                    </div>
                </div>

                <div className='signup-content'>
                    <div className='signupTitle'>
                        <h1>Select your User type</h1>
                    </div>  <ul className='userType'>
                        <li>
                            <img src={studentType} />
                        </li>
                        <li>
                            <img src={parentType} />
                        </li>
                        <li>
                            <img src={counsellorType} />
                        </li>
                        <li>
                            <img src={InstitutionType} />
                        </li>
                    </ul>
                    <div className='signBtnWrap'>
                    <button value='Login' className='nextBtn'>Next</button>
                    </div>
                    <div className='haveAccount'><span>Already have an account ?</span> <Link to="/"><a href='#'>Sign In</a></Link></div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;
