import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
import CreateNewEvent from "./assets/images/events/CreateNewEvent.jpg";
import SelectEvent from "./assets/images/events/SelectEvent.jpg";
import EditEvent from "./assets/images/events/EditEvent.jpg";
import ArchiveEvent from "./assets/images/events/ArchiveEvent.jpg";
import SaveEvent from "./assets/images/events/SaveEvent.jpg";
import EventInformation from "./assets/images/events/EventInformation.jpg";
import EventTeamInformation from "./assets/images/events/EventTeamInformation.jpg";


class EventsManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Events </h1>
            <p> Create, edit, and archive events. </p>

            {/* Create an Event */}
            <section>
            <h2> Creating an Event </h2>
            <img src={CreateNewEvent} alt="create a new event" height={250}></img>

            <br></br><br></br>
            <ol>
              <li>To create a new event, click "New" button at the top of the page. </li>
              <li>Step 2</li>
              <li>Step 3 </li>
            </ol>
            </section>

            {/* Edit an Event */}
            <section>
            <h2> Edit an Event </h2>
            <br></br>
            <ol>
              <li>Check the box beside the event you want to edit. Note: You can only edit one at a time.</li>
              <img src={SelectEvent} alt="Select an event" height={250}></img>
              <br></br><br></br>

              <li>Click the edit button at the bottom of the screen.</li>
              <img src={EditEvent} alt="Click the edit button" height={150}></img>
              <br></br><br></br>

              <li>Enter information about the event.</li>
              
              <img src={EventInformation} alt="event information" height={350}></img>
              <br></br><br></br>

              <li>Enter team information.</li>
              <p> Select the Lead Analyst and optional collaborators that can work on the event. </p>
              
              <img src={EventTeamInformation} alt="team information" height={170}></img>
              <br></br><br></br>

              <li>Click Save Button.</li>
              <img src={SaveEvent} alt="Save event information" height={100}></img>
              <br></br><br></br>
            </ol>
            

            </section>

            {/* Archive an Event */}
            <section>
            <h2> Archive an Event </h2>
            <br></br>
            <ol>
              <li>Check the box beside the event you want to edit. Note: You can only edit one at a time.</li>
              <img src={SelectEvent} alt="Select an event" height={250}></img>
              <br></br><br></br>

              <li>Click the archive button at the bottom of the screen.</li>
              <img src={ArchiveEvent} alt="Click the archive button" height={130}></img>
              <br></br><br></br>

            </ol>
            

            </section>

        </Container>

      );
    }
}

export default EventsManual