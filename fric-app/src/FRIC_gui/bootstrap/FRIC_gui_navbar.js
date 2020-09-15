import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const handleClick = (action) => {
  switch(action){
    case 'system':
      console.log('System touched');
      window.location.href = '/systems'
      window.open(window.location.href)
      break;
    default:
      console.log('default');
      break;
  }
}

class MainNav extends Component{
  render(){

    return (
      <div >

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">F.R.I.C.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="View" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Tasks</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Archives</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => handleClick('system')}>Systems</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Summary</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#events">Events</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#notification">Notifications</Nav.Link>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Configurations</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          </div>


    );
    
  }
  
}


export default MainNav;