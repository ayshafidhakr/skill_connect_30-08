import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style.css';
import CounsellorWrap from './CounsellorMain';

function SampleApi() {
  
  return (
    <div className="App">
      <CounsellorWrap></CounsellorWrap>
    </div>
  );
}

export default SampleApi;