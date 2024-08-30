import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Style.css";
import Logo from "./img/logo.png";
import parentTypeImg from "./img/parentType.png";
import conselorTypeImg from "./img/CouncillorType.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Waiting from "./Loading";
import EnterOtp from "./EnterOtp";
  import VerifyStatus from "./VerificationStatus";
  import Menu from "./menuDashboard";
import TypeImg from "./img/parent.png";
import CouncellorTypeImg from "./img/counsellor.png";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function CounsellorWrap() {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const [parentSelected, setParentSelected] = useState(false);
  const [counSelected, setCounSelected] = useState(false);
  const requestCounselling = () => {
    let path = "/requestcounselling";
    navigate(path);
  };

  const navigateParent = () => {};

  const SelectedItem = () => {
    setIsActive(true);
  };

  const selectCouns = () => {
    setIsActive(true);
    setSelectedItem("Couns");
  };

  const selectParent = () => {
    setIsActive(true);
    setParentSelected(!parentSelected);
    const timer = setTimeout(() => {
      let path = "/counsellorHome"; 
      navigate(path);
    }, 1000);
  };
  const selectCounsellor = () => {
    setIsActive(true);
    setCounSelected(!counSelected);
    const timer = setTimeout(() => {
      let path = "/parentHome";
      navigate(path);
    }, 1000);
  };

  const navigateCounsellor = () => {
    setCounSelected(true);
  };

  return (
    <div className="App">
      <div className="dashboardWrapper">
        <div className="contentWrapper">
          <div className="examPackContent">
            <div className="aboutExamWrapper examAttendedWrapper counselTypeWrap">
              <div className="counsellorwrap">
                <h1 className="counsellorwrapmsg">
                  Choose the Account You'd Like to Access:<br></br>Counselor or
                  Parent
                </h1>
              </div>
              <div className="counselorImageContainer">
                <div
                  onClick={selectParent}
                  className={
                    parentSelected
                      ? "card selectedType activeClass"
                      : "card selectedType inactiveClass"
                  }
                >
                  <img src={TypeImg} alt="image 1"></img>
                </div>
                <div
                  class="card selectedType"
                  onClick={selectCounsellor}
                  className={
                    counSelected
                      ? "card selectedType activeClass"
                      : "card selectedType inactiveClass"
                  }
                >
                  <img
                    src={CouncellorTypeImg}
                    onClick={selectCounsellor}
                    alt="Image 2"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounsellorWrap;
