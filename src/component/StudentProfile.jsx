import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import User from './img/profilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faFilePen } from '@fortawesome/free-solid-svg-icons';

function StudentProfile() {

  return (
    <div className="App">
      <div className="strip"></div>
      <div className="editprofileWrapper">
        <div className="contentWrapper">
          <div className="content">
            <div className="profileWrapper">
              <div className="profileBackWrap">
              <a href="" className='backLink'>
                <Link to="/studentdashboard"><FontAwesomeIcon icon={faArrowLeft} /> <span>Profile</span></Link></a>
              <Link to="/editprofile"><button className='btnEdit'>Edit Profile</button></Link>
              </div>
              <div className="profileTop">
                <div className="profilePic">
                  <img src={User} alt="" />
                </div>
              </div>
              <div className="profileLeft">
                <div className="title03">Personal details</div>
                <div>Name : </div>
                <div>Year of birth : </div>
                <div>Gender : </div>
                <div>Grade : </div>
                <div>Institution : </div>
                <div>Contact Number : </div>
                <div>Email : </div>
                <div>Address : </div>
                <div>Country : </div>
              </div>
              <div className="profileRight">
                <div className="title03">Parent details</div>
                <div>Name : </div>
                <div>Parent Contact Number : </div>
                <div>Occupation : </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default StudentProfile;