import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PasswordStrengthMeter from './Passcheck';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { countries } from 'country-data'
import Flag from 'react-world-flags';

function CreateAccount({ setWeatherData }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '00971',
    mobilenumber: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [childData, setChildData] = useState('');
  const [outData, setOutData] = useState('');
  const [countryName, setCountryName] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [text, setText] = useState('');
  const [countryCode, setCountryCode] = useState('')
  const countries = getCountries();
  const { getCode, getName } = require('country-list');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data submitted:', formData);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Async operation
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data submitted:', formData);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const CountryFlag = ({ countryCode }) => {
    return (
      <div className='flag'>
        <Flag code={countryCode} />
      </div>
    );
  };

  useEffect(() => {
    setCountryCode(getCode(countryName))

    setFormData((prevData) => ({
      ...prevData,
      [password]: childData,
    }));
  })

  const handleDataFromChild = (data) => {
    console.log(data)
  };

const sampleClick=()=>{
  handleDataFromChild();
}
  const backTo = () => {
    console.log('Clicked ...')
  }
  const submitLogin = (e) => {
    e.stopPropagation();
    const formData = (name, email, password, countryCode)
    console.log(JSON.parse(formData))
  }
  const handleChange = (event) => {
  }
  const handleChangeSelect = (event) => {
    setSelectedCode(event.target.value);
    alert('jhi')
    setCountryName(getName(selectedCode))
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="App">
      <div className="strip">
      </div>
      <div className="wrapper">
        <div className='header'>
          <div className='logo'>
            {name}
            <img src={Logo} alt="logo" title='logo' onClick={sampleClick} />
          </div>
        </div>
        <div className='createAccount'>
          <div className="sample">
          </div>
          <div className='left'>
            <h1 className='title'>Create a new account</h1>
            <div className='createNewAcForm'>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    className='textboxs'
                    placeholder='Full name'
                    onChange={handleChange2}
                  />
                  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className='textboxs'
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange2}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="password">Mobile Number:</label>
                  <input
                    type="text"
                    className='textboxs'
                    id="mobilenumber"
                    name="mobilenumber"
                    placeholder='Mobile Number'
                    value={formData.mobilenumber}
                    onChange={handleChange2}
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                <div className='textboxs country-code codeItem'>
                  <CountryFlag countryCode={countryCode} />
                  <div className='countryName'>{countryName}</div>
                  <select onChange={(event) => setCountryName(getName(event.target.value))}>
                    {countries.map((country) => {
                      const code = getCountryCallingCode(country);
                      return (
                        <option key={country} value={country}>
                          ({code ? `+${code}` : 'No code'})
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='links'>

                  <PasswordStrengthMeter name='password' setPassword={setPassword} onSendData={handleDataFromChild} ></PasswordStrengthMeter>

                  <div className="warn">
                    <div className="passwordCorrect"><FontAwesomeIcon icon={faCheck} /></div>
                    <label for="rememberme"> 8 characters</label>
                  </div>

                  <div className="warn">
                    <div className="passwordInCorrect"></div>
                    <label for="rememberme"> 1 lower case character</label>
                  </div>

                  <div className="warn">
                    <div className="passwordInCorrect"></div>
                    <label for="rememberme"> 1 lower case character</label>
                  </div>

                </div>

              </form>

              <div className='newAccountHaveAccount'><span>Already have an account ?</span> <Link to="/"><a href='#'>Sign In</a></Link></div>

              <form onSubmit={handleSubmit}>

                <fieldset>

                </fieldset>

                <fieldset>
                  <button value='Login' className='signBtn'> Continue</button>
                </fieldset>
                <div className='newAccountHaveAccount'><span>Already have an account ?</span> <Link to="/"><a href='#'>Sign In</a></Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;