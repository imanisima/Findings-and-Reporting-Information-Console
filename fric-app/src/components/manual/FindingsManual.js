import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
import CreateFinding from "./assets/images/findings/CreateFinding.png";
import EditFinding from "./assets/images/findings/EditFinding.png";
// import EditEvent from "./assets/images/events/EditEvent.jpg";
// import ArchiveEvent from "./assets/images/events/ArchiveEvent.jpg";
// import SaveEvent from "./assets/images/events/SaveEvent.jpg";
// import EventInformation from "./assets/images/events/EventInformation.jpg";
// import EventTeamInformation from "./assets/images/events/EventTeamInformation.jpg";


class FindingsManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Findings </h1>
            <p> Create, Edit, and Delete Findings </p>

            {/* Create */}
            <section>
            <h2> Create a Finding </h2>
            <img src={CreateFinding} alt="create a new finding" height={200}></img>

            <br></br><br></br>
            <ol>
              <li>To create a new finding, click "Add New Finding" button at the top of the page. </li>

            </ol>
            </section>

            <section>
            <h2> Edit a Finding </h2>
            <img src={EditFinding} alt="manage a finding" height={250}></img>

            <br></br><br></br>
            <ol>
              <li>To edit a finding, click "Edit" button at the top of the page. </li>
              <li>To delete a findings, click the "Delete" button. </li>
            </ol>
            </section>


        </Container>

      );
    }
}

export default FindingsManual