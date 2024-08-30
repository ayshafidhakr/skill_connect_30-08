import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import { useNavigate } from "react-router-dom";
import Logo from './img/logo_new.png';
import Helpico from './img/helpIco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Waiting from './Loading';
import EnterOtp from './EnterOtp';
import VerifyStatus from './VerificationStatus';
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import Menu from './menuDashboard';

function StudentDashboard() {
  let navigate = useNavigate();
  const [entries, setEntries] = useState([
    { time: '1hr ago',
      mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.'},
     { time: '1hr ago',
      mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.'},
      {time: '1hr ago',
      mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.'}
    ]);

  const inboxMail = {
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    time: '1hr ago',
    mail: 'Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.',
    
  }
  const inbox = () => {
    localStorage.setItem('mails', JSON.stringify(entries));
  };

  const StartExam = () => {
    let path = 'startexam'
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
            <Link to="/studentinbox">
            <input type="submit" value="Inbox" className='btnInbox' onClick={inbox} />
            </Link>
            <a href="#" className='userMenu'>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <Menu></Menu>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="sideMenu">
            <ul>
              <li className='dashboard'><Link to="/">Dashboard</Link></li>
              <li><Link to="/aboutcounselling"><FontAwesomeIcon icon={faUsers} />  <span className='custom-padding'>Counselling</span></Link></li>
              <li><Link to="/examhistory"><FontAwesomeIcon icon={faFilePen} /><span>Exam History</span></Link></li>
            </ul>
          </div>
          <div className="content">
            <div className="wrapMain">
              <div className="wrapMainSub">
                <div className="aboutExam">
                  <h1 className="abouttitle">About Exam</h1>
                  <span>Purchase the pack and begin a new journey</span>
                  <div className="notification">
                    <div className='total'>
                      7th
                    </div>
                    <div className="title02">Standard exam</div>
                  </div>
                  <a href="/aboutexam" className='link'>Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                <Link to="/aboutcounselling">
                  <div className="workcounsellor">
                    <a href="#"></a>
                  </div>
                </Link></div>
              <div className="suggestedTitle">
                <div class="title09">Your Exam Pack</div></div>
              <div className="suggestedWrap yourExamWrap">
                <div className="suggestedPack">7th
                  <span>Standard exam <br></br>
                    <Link to="/startexam"><button className='suggestedPackButton startExamButton' onClick={StartExam}>Start Exam</button></Link></span>
                </div>
              </div>
              <div className="suggestedTitle">
                <div class="title09">Suggested Exam Pack</div></div>
              <div className="suggestedWrap">
                <div className="suggestedPack mb-0">7th
                  <span>Standard exam <br></br>
                    <button className='suggestedPackButton'>View</button></span>
                </div>
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

export default StudentDashboard;