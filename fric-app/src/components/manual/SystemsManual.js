import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
import CreateSystem from "./assets/images/systems/CreateSystem.png";
import SystemInfo from "./assets/images/systems/SystemInfo.png";

class SystemsManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Systems </h1>
            <p> Create, Edit, and Archive systems. </p>

            {/* Create */}
            <section>
            <h2> Create a System </h2>
            <img src={CreateSystem} alt="create a new system" height={100}></img>

            <br></br><br></br>
            <ol>
              <li>To create a new system, click the "Add" button at the top of the page. </li>

              <br></br><br></br>
              <img src={SystemInfo} alt="system information" height={300}></img>
              <li>Fill out the system information </li>

              <ul>
                  <li>System Name: Name of the system</li>
                  <li>System Description: Purpose of the system.</li>
                  <li>System Location: Where is the system?</li>
                  <li>System Router: The router belonging to the system.</li>
                  <li>System Switch: Switch of the system.</li>
                  <li>System Room: room of the system.</li>
                  <li>Test plan: How are you going to test the system?</li>
                  <li>Confidentiality: High, Medium, Low</li>
                  <li>Integrity: High, Medium, Low</li>
                  <li>Availability: High, Medium, Low</li>
              </ul>

            </ol>
            </section>

        </Container>

      );
    }
}

export default SystemsManual