import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class MainNav extends Component{
  render(){

    return (
      <div >

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/main">F.R.I.C.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="View" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/tasks/new">Tasks</NavDropdown.Item>
                  <NavDropdown.Item href="/archive">Archives</NavDropdown.Item>
                  <NavDropdown.Item href="/systems/new">Systems</NavDropdown.Item>
                  <NavDropdown.Item href="/summary">Summary</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/event">Events</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="/notification">Notifications</Nav.Link>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/configuration">Configurations</NavDropdown.Item>
                  <NavDropdown.Item href="/setup">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#help">Help</NavDropdown.Item>
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