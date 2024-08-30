import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import Logo from './img/logo.png';
import Timer from './img/timerIco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Helpico from './img/helpIco.png';
import TimerLine from './img/timerLine.png';
import pl1 from './img/pl1.png';
import pl2 from './img/pl2.png';

import { useNavigate } from "react-router-dom";
import pl3 from './img/pl3.png';
import pl4 from './img/pl4.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';import Menu from './menuDashboard';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ExamStarted() {

  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const FinishExam = () => {

    let path = '/finishexam'
    navigate(path);
  }
  const selectedItem = (e) => {

  }
  const NextQuest = () => {
    let path = '/startedexam02'
    navigate(path);
  }
  return (
    <div className="App">
      <div className="strip"></div>
      <div className="dashboardWrapper">
        <div className='dashboardHeader'>
          <div className='dashboardlogo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className="menu_wrap">
            <Link to="/studentinbox"><input type="submit" value="Inbox" className='btnInbox' /></Link>
            <a href="#" className='userMenu'>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <Menu></Menu>
          </div>
        </div>


        <div className="contentWrapper">
          <div className="sideMenu">
            <ul>
              <li className='dashboard'><Link to="/studentdashboard">Dashboard</Link></li>
              <li><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} /><span>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /></Link><span>Exam History</span></li>
            </ul>
          </div>
          <div className="content hauto">
            <div className="mailWrapper startExamWrapper">
              <span className='examStartedTitle'>Exam</span>
              <div className="examTimer">
                <div className="ico">
                  <img src={Timer} alt="" />
                  <img src={TimerLine} alt="" className='timerline' />

                </div>
                <div className="timerDisplay">
                  <div> Timer </div>
                  <div className="time"> 01:05:21 </div>
                </div>
                <div className="btnFinishExam">
                  <button value='Login' className='btnExamFinish' onClick={FinishExam}> Finish Exam</button>
                </div>
              </div>
              <div className="examStartTitle">Question 51 of 200</div>
              <div className='margin2'>Which is the biggest planet in our solar system ?</div>
              <div className="keys">
                <ul className='key'>
                  <li className={`my-div ${isActive ? 'active' : ''}`} id="PL1" onClick={selectedItem}><div className="imageBox"><img src={pl1} alt="" /> </div> </li>
                  <li className={`my-div ${isActive ? 'active' : ''}`} id="PL2" onClick={selectedItem}><div className="imageBox"><img src={pl2} alt="" /> </div></li>
                  <li className={`my-div ${isActive ? 'active' : ''}`} id="PL3" onClick={selectedItem}><div className="imageBox"><img src={pl3} alt="" /> </div></li>
                  <li className={`my-div ${isActive ? 'active' : ''}`} id="PL4" onClick={selectedItem}><div className="imageBox"><img src={pl4} alt="" /> </div></li>
                </ul>
              </div>


              <div className="nextPrevWrap">
                <button className="btnPrevQuestion">Back</button>
                <button className="btnNextQuestion" onClick={NextQuest}>Next</button>
              </div>

              <div className="omrWrap">
                <ul>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='marked'></li>
                  <li className='marked'></li>
                  <li className='marked'></li>
                  <li className='marked'></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='checked'></li>
                  <li className='marked'></li>
                  <li></li>
                  <li></li>

                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className="calc">
                Answered : <span>50</span>
                Remaining : <span>150</span>
              </div>
            </div>
            <div className="dashboardHelp effect2">
              <div className="helpIco">
                <img src={Helpico} ></img>
              </div>
              <h3>Need help ?</h3>
              <p>if you need any help or clarification, you can reach out via email, and we will get back you soon.</p>
              <button value='Login' className='helpBtn'> Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamStarted;