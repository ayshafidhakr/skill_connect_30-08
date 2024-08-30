import './Style.css';
import Logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  
  let navigate = useNavigate();
  const backTo = () => {
    console.log('Clicked ...')
  }
  const submitLogin = () => {
    console.log('Loggined ...')   
  }
  const forgtPass = ()=> {
    
  }
  const checkMail = ()=>{
    let path = '/checkemail'
    navigate(path);
}
  return (
    <div className="App">
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
        <div className='forgetContent'>
          <div className='left'>
            <h1 className='title'>Forgot your <br />password?</h1>
            <p className='forgetpassword'>No worries! We’ll send a password reset link to your registered email address once you confirm the forget password option</p>
            <button value='Login' className='forgtBtn' onClick={checkMail}>Forget Password</button>
            <div className='noaccount'><span>Don't have an account ?</span> <Link to="/newaccount"><a href='#' />Sign Up</Link></div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;