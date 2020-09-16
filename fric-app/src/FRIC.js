import React, { Component } from 'react';

import logo from './logo.svg';
import './FRIC.css';

import Main from './FRIC_gui/pages/FRIC_gui_main.js';
import MainNav from './FRIC_gui/bootstrap/FRIC_gui_navbar.js';


class FRIC extends Component {
  render() {
    return (
      <div className="FRIC">
        <header className="FRIC-header">
          <img src={logo} className="FRIC-logo" alt="logo" />
          <h1 className="FRIC-title">Welcome to F.R.I.C.</h1>
        </header>
        <p className="FRIC-intro">
          The information console for tracking vulnerabilities and findings.
        </p>

       <MainNav />
        <Main displaytext="Main Component Data"/>
        

      </div>
    );
  }
}

export default FRIC;