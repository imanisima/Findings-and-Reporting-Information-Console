import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
import ArchiveSub from "./assets/images/subtasks/ArchiveSub.png";
import CreateSubtask from "./assets/images/subtasks/CreateSubtask.jpg";
import EditSub from "./assets/images/subtasks/EditSub.png";
import PromoteSub from "./assets/images/subtasks/PromotSub.png";
import SelectSubtask from "./assets/images/subtasks/SelectSubtask.png";
import SubtaskInfo from "./assets/images/subtasks/SubtaskInfo.png";

class SubtasksManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Subtasks </h1>
            <p> Create, Edit, and Archive subtasks. </p>

            {/* Create */}
            <section>
            <h2> Create a Subtask </h2>
            <img src={CreateSubtask} alt="create a new subtask" height={200}></img>

            <br></br><br></br>
            <ol>
              <li>To create a new subtask, click the "Add" button at the top of the page. </li>

            </ol>
            </section>

            {/* Edit Subtask */}
            <section>
            <h2> Edit a Subtask </h2>
            

            <br></br><br></br>
            <ol>
            <li>Select the desired subtask you want to modify. </li>
            <img src={SelectSubtask} alt="select a subtask" height={250}></img>
            <br></br><br></br>

            <li>To edit a subtask, click the "Edit" button at the bottom of the page. </li>
            <img src={EditSub} alt="edit a subtask" height={50}></img>
            <br></br><br></br>

            <li>Fill out the subtask information. </li>
            <img src={SubtaskInfo} alt="subtask information" height={400}></img>
            <br></br><br></br>
                <ul>
                    <li>Title: Name of the subtask.</li>
                    <li>Description: Purpose of the subtask.</li>
                    <li>Date: Due Date</li>
                    <li>Progress: Current state of the task.</li>
                    <li>Select Analyst: Who will be working on this task?</li>
                    <li>Select Collaborators: Who can assist the analyst?</li>
                    <li>Select Tasks: Which tasks is this subtask linked to? </li>
                    <li>Select Subtasks: Other subtasks related to this one. </li>
                    <li>Attachments: Any additional files? </li>
                </ul>
            <li>Click "Save" to save your changes! </li>

            </ol>
            </section>

            <section>
            <h2> Promote a Subtask </h2>
            <p> Elevate a subtask to a task.</p>
            <img src={PromoteSub} alt="elevate a subtask" height={50}></img>

            <br></br><br></br>
            <ol>
              <li>To convert a subtask to a task, click the "Promote" button at the bottom of the page. </li>

            </ol>
            </section>

            <section>
            <h2> Archive a Subtask </h2>
            <p> Elevate a subtask to a task.</p>
            <img src={ArchiveSub} alt="archive a subtask" height={50}></img>

            <br></br><br></br>
            <ol>
              <li>To archive a subtask to a task, click the "Archive" button at the bottom of the page. </li>

            </ol>
            </section>



        </Container>

      );
    }
}

export default SubtasksManual