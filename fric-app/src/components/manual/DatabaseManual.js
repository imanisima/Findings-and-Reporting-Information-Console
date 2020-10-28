import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
// import CreateNewEvent from "./assets/images/events/CreateNewEvent.jpg";
// import SelectEvent from "./assets/images/events/SelectEvent.jpg";
// import EditEvent from "./assets/images/events/EditEvent.jpg";
// import ArchiveEvent from "./assets/images/events/ArchiveEvent.jpg";
// import SaveEvent from "./assets/images/events/SaveEvent.jpg";
// import EventInformation from "./assets/images/events/EventInformation.jpg";
// import EventTeamInformation from "./assets/images/events/EventTeamInformation.jpg";


class DatabaseManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Database </h1>
            <p> Information about the database. </p>

            {/* Create an Event */}
            <section>
            {/* <h2> Creating an Event </h2> */}
            {/* <img src={CreateNewEvent} alt="create a new event" height={250}></img> */}

            <br></br><br></br>
            {/* <ol>
              <li>To create a new event, click "New" button at the top of the page. </li>
              <li>Step 2</li>
              <li>Step 3 </li>
            </ol> */}
            </section>


        </Container>

      );
    }
}

export default DatabaseManual