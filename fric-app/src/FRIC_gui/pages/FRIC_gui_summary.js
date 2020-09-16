import React, {Component} from 'react';
import { ProgressBar } from 'react-bootstrap';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import ReactDOM from "react-dom";
import Findings from '../components/findings/FRIC_gui_findings_table'
import Systems from '../components/system/FRIC_gui_system_table'
export default class Notification extends Component {
    render() {
      return (
        ReactDOM.render(
            <container>
            <div>
               
                <MainNav />
               
                <body>
                  {/* Need both h1 to display header (Not sure why yet)   */}
                <h1>***</h1>
                <h1>Analyst Progress Summary Content View</h1>
                <div>
               
                  <ProgressBar variant="success" now={40} />
                  <h5>Tasks</h5>
                  <ProgressBar variant="info" now={20} />
                  <h5>Subtasks</h5>
                  <ProgressBar variant="warning" now={50} />
                  <h5>Findings</h5>
                  <ProgressBar variant="danger" now={80} />
                  <h5>Systems</h5>
                </div>
                <h2>Findings Overview Table</h2>
                    <Findings></Findings>
                    
                    <h2>Systems Overview Table </h2>
                    <Systems></Systems>
                    
                  
                </body>
            </div>
            </container>, document.getElementById('FRIC'))
    
        
      );
    }
    handleClick() {
        window.location.href = '/main'
        window.open(window.location.href)
      }
  }
  


    // end of code