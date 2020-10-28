import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
import SyncButton from "./assets/images/sync/SyncButton.png";
import SyncAnalyst from "./assets/images/sync/SyncAnalyst.png";
import ByIP from "./assets/images/sync/ByIP.png";
import ByAnalyst from "./assets/images/sync/ByAnalyst.png";

class SyncManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Sync </h1>
            <p> Sync data (findings and tasks) with other analysts. </p>

            {/* Sync */}
            <section>
            <h2> How to Sync</h2>
            <img src={SyncButton} alt="Sync btn" height={100}></img>

            <br></br><br></br>
            <ol>
                <li>Click the sync button. </li>

                <br></br><br></br>
                <h3> Sync By Analyst</h3>
                <img src={ByAnalyst} alt="By Analyst" height={200}></img>

                <br></br><br></br>
                <ol>
                    <li>Select "With Analyst". </li>
                    <li>Choose analyst."</li>
                    <li>Select "Sync"</li>

                </ol>
                <br></br>
                <img src={SyncAnalyst} alt="Sync" height={100}></img>


                <br></br><br></br>

                <h3> Sync By IP</h3>
                <img src={ByIP} alt="By I{" height={200}></img>

                <br></br><br></br>
                <ol>
                    <li>Select "By IP". </li>
                    <li>Type in the IP Address."</li>
                    <li>Select "Sync"</li>
                </ol>
                
                <br></br>
                <img src={SyncAnalyst} alt="Sync" height={100}></img>

            </ol>
            </section>


        </Container>

      );
    }
}

export default SyncManual