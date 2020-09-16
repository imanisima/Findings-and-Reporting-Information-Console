import React, {Component} from 'react';
import { Table, Button } from 'react-bootstrap';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import ReactDOM from "react-dom";
export default class Notification extends Component {
    render() {
      return (
        ReactDOM.render(
            <container>
            <div>
               
                <MainNav />
                <body>
                
                    
                <h1>***</h1>
                <h1>Notification</h1>     
                    <Table striped bordered hover> 
                   
                    <thead>
                    <tr>
                    
                        <th>Task Title</th>
                        <th>Task Due Date</th>
                        <th>Subtask Title</th>
                        <th>Subtask Due Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    
                        <td>Task1</td>
                        <td>09/17/2020</td>
                        <td>Subtask1</td>
                        <td>09/15/2020</td>
                    </tr>
                    <tr>
                
                        <td>Task2</td>
                        <td>09/27/2020</td>
                        <td>Subtask2</td>
                        <td>09/24/2020</td>
                    </tr>
                    
                    </tbody>
                    </Table>
                    <Button class="notification" onClick={()=> this.handleClick()}>OK</Button>
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