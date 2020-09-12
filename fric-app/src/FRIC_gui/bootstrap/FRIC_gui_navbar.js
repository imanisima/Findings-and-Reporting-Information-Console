import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class MainNav extends Component{
  render(){

    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };

    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">F.R.I.C.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="View" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Tasks</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Archives</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Summary</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Events</Nav.Link>
                <Nav.Link href="#pricing">Context?</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Configurations</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          </div>
        </div>


    );
    
  }
  
}


export default MainNav;