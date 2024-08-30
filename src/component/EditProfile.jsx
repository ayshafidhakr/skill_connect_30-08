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
import PasswordStrengthMeter from './Passcheck';

function EditProfile() {
  const [childData, setChildData] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('ds');

  const handleDataFromChild = (data) => {
    setChildData(data);
  };

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
      <div className="editprofileWrapper">
        <div className="contentWrapper">

          <div className="content">
            <div className="editProfileWrapper">
              <a href="" className='backLink'><Link to="/studentprofile"><FontAwesomeIcon icon={faArrowLeft} /></Link> <span>Profile</span></a>
              
              <div className="profileTop">
                <div className="profilePic">
                  <img src={User} alt="" />
                </div>
                <div></div>
                <div className='description'>
                  <h4>Profile photo</h4>
                  <span>This will be displayed on your profile</span>
                  <div className='buttonWrap editProfileButtonWrap'>
                    <button className='btnEdit'>Change picture</button>
                    
                    <button className='btnEdit btnRemove'>Delete picture</button>
                  </div>
                </div>
                <div className="profile-content">
                  <div className="form_title">Personal details</div>
                  <div className='editFormWrap'>
                  <form className='personalDetailsForm'>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Full name</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Full name' />
                    </fieldset>
                    <fieldset className='txtEmail'>
                      <div className='formLabel'><label htmlFor="">Year of birth</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Email' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Gender</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Grade</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Institution</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>
                  </form>
                  <form className='personalDetailsForm'>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Contact number</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Full name' />
                    </fieldset>
                    <fieldset className='txtEmail'>
                      <div className='formLabel'><label htmlFor="">Email</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Email' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Address</label></div>
                      <textarea id="textarea" value="" rows="4" cols="46" />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Country</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>


                  </form>
                  </div>
                  <div>
                  <div className="form_title bottomForm">Personal details</div>
                  <form className='personalDetailsForm'>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Parent name</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Full name' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel formLabelParent'><label htmlFor="">Parent Contact Number</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>
                    <fieldset>
                      <div className='formLabel'><label htmlFor="">Occupation</label></div>
                      <input type='text' className='textboxs editProfile_textbox' placeholder='Mobile number' />
                    </fieldset>
                  </form>
                  </div>
                  <div className="btnNext">
                    <button value='Login' className='signBtn' onClick={submitLogin}> Save </button>
                  </div>

                </div>

              </div>
              {/* <div className="profileLeft">11</div>
              <div className="profileRight">22</div> */}


            </div>

          </div>
        </div>



      </div>
    </div>
  );
}

export default EditProfile;