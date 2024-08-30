import React, { useState } from "react";
import "./Style.css";
import Logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Waiting from "./Loading";
import EnterOtp from "./EnterOtp";
import VerifyStatus from "./VerificationStatus";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Menu from "./menuDashboard";
import FileLogoTypeImg from "./img/File_duotone.png";
import BtnArrowTypeImg from "./img/Expand_right.png";
import BtnShareTypeImg from "./img/Expand_right1.png";
import FrameTypeImg from "./img/Frame 295.png";
function CounsellorHome() {
  return (
    <div className="navContainer">
      <div className="strap"> </div>

      <div className="secondNav">
        <div className="secondNav-logo">
          <img src={Logo} alt="logo" title="logo" />
        </div>
        <div className="wrapperLinks">
          <a href="/dashboard">Dashboard</a>
          <a href="/counselling">Counselling</a>
          <a href="/exam-packs">Exam Packs</a>
          <a href="/students-list">Students List</a>
          <a href="/enquiries-list">Enquiries List</a>
        </div>
        <div className="iconBtn">
          <button class="button button--outline">inbox</button>
        </div>
      </div>
      <div className="mainWrapper">
        <div className="wrapperContent">
          <div className="contentLeft">
            <div className="wrapperToggle">
              <div className="wrapperToggleHead">
                <div className="toggleHeading">
                  <h1>My packs</h1>
                </div>
              </div>
              <div className="WrapperToggleCard">
                <div className="toggleCrads"></div>
                <div className="toggleCrads"></div>
                <div className="toggleCrads"></div>
                <div className="toggleCrads"></div>
                <div className="toggleCrads"></div>
                <div className="toggleCrads"></div>
              </div>
              <div className="toggleScrollBar">
                <div className="scrollScroller"></div>
              </div>
            </div>
          </div>
          <div className="contentRight">
            <h1>
              Your<br></br> Dashboard
            </h1>
            <div className="wrapperSearchbarContainer">
              <input
                type="text"
                className="wrapperSearchBar"
                placeholder="Search by contact number"
              />
              <button className="search-button">Search</button>
            </div>
            <div className="wrapperStatusContainer">
              <div className="outerCard">
                <div className="innerCard"></div>
                <p className="cardText">
                  {" "}
                  Here is the total number of students currently enrolled under
                  your supervision
                </p>
              </div>
              <div className="outerCard">
                <div className="innerCard"></div>
                <p className="cardText">
                  {" "}
                  Here is the comprehensive total of all counselling sessions
                  that have been conducted to date
                </p>
              </div>
              <div className="outerCard">
                <div className="innerCard"></div>
                <p className="cardText">
                  {" "}
                  Here is a detailed overview of the new counselling requests we
                  have received recently
                </p>
              </div>
              <div className="outerCard">
                <div className="innerCard"></div>
                <p className="cardText">
                  {" "}
                  Here is the new enquiries list of students currently enrolled
                  under your supervision
                </p>
              </div>
            </div>
            <div className="packAssignContainer">
              <div className="packContainer">
                <div className="packContainerHeading">
                  <h1>Search and assign pack</h1>
                </div>
                <div className="autoFieldContainer">
                  <div className="autoFields">
                    <div className="autoField">
                      <div className="autoFieldLabel"> </div>
                    </div>
                  </div>
                  <div className="autoFields">
                    <div className="autoField">
                      <div className="autoFieldLabel"> </div>
                    </div>
                  </div>
                  <div className="autoFields">
                    <div className="autoField">
                      <div className="autoFieldLabel"> </div>
                    </div>
                    <div className="fileUploadContainer">
                      <div className="fileLogo">
                        <img src={FileLogoTypeImg} alt="file-logo"></img>
                      </div>
                      <div className="fileUploadText">
                        <h1>File upload</h1>
                        <a href="#" class="view-link">
                          View
                        </a>
                      </div>
                    </div>
                    <div className="assignBtn">
                      <div className="btnText">
                        <h1>Assign</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="referalLinkContainer">
              <div className="referalBox">
                <div className="referalLinkHead">
                  <h1>Refferal links</h1>
                  <div className="referalSubText">
                    <h2>Referral links for sharing with students</h2>
                  </div>
                </div>
              </div>
              <div className="buttonContainer">
                <button className="referalbtn">
                  Referral student list
                  <img
                    src={BtnArrowTypeImg}
                    alt="btn arrow"
                    className="btnArrow"
                  />
                </button>

                <button className="referalShareBtn">
                  Share referral link
                  <img
                    src={BtnShareTypeImg}
                    alt="share btn"
                    className="shareBtnArrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounsellorHome;
