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

  eventTreeHandler(){
    window.location.href = '/event_tree'
    window.open(window.location.href)
}

  render(){

    return (
      <div >

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
<<<<<<< HEAD
            <Navbar.Brand href="/main">F.R.I.C.</Navbar.Brand>
=======
            <Navbar.Brand href="#home" onClick={()=>this.handleClicks('/main')}>F.R.I.C.</Navbar.Brand>
>>>>>>> 442e30811c1c180051a4380e8f7ad2a0d120a55c
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="View" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/tasks/new">Tasks</NavDropdown.Item>
                  <NavDropdown.Item href="/archive">Archives</NavDropdown.Item>
                  <NavDropdown.Item href="/summary">Summary</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => handleClick('system')}>Systems</NavDropdown.Item>
<<<<<<< HEAD
                  <Nav.Link href="/event">Events</Nav.Link>
=======
                  <NavDropdown.Item href="#action/3.4" onClick={()=> this.handleClicks('/summary')}>Summary</NavDropdown.Item>
>>>>>>> 442e30811c1c180051a4380e8f7ad2a0d120a55c
                </NavDropdown>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link onClick = {this.eventTreeHandler}>Events Tree</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#notification" onClick={()=> this.handleClicks('/notification')}>Notifications</Nav.Link>
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
  
  
  handleClicks(place) {
    window.location.href = place
    window.open(window.location.href)
  }
  
}


export default MainNav;
