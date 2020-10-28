import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

// images
// import x from "./assets/images/tasks/x.png";
// import x from "./assets/images/tasks/x.png";
// import x from "./assets/images/tasks/x.png";

class TasksManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Tasks </h1>
            <p> Create, Edit, and Archive Tasks. </p>

            {/* Create */}
            <section>
            <h2> Create a Task </h2>
            {/* <img src={CreateSubtask} alt="create a new subtask" height={200}></img> */}

            <br></br><br></br>
            <ol>
              <li>To create a new Task, click the "Add" button at the top of the page. </li>

            </ol>
            </section>

            {/* Edit Subtask */}
            <section>
            <h2> Edit a Task </h2>
            

            <br></br><br></br>
            <ol>
            <li>Select the desired Task you want to modify. </li>
            {/* <img src={SelectSubtask} alt="select a subtask" height={250}></img> */}
            <br></br><br></br>

            <li>To edit a Task, click the "Edit" button at the bottom of the page. </li>
            {/* <img src={EditSub} alt="edit a subtask" height={50}></img> */}
            <br></br><br></br>

            <li>Fill out the Task information. </li>
            {/* <img src={SubtaskInfo} alt="subtask information" height={400}></img> */}
            <br></br><br></br>
                <ul>
                    <li>Title: Name of the Task.</li>
                    <li>Description: Purpose of the Task.</li>
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
            <h2> Demote a Task </h2>
            <p> Convert a task to a subtask.</p>
            {/* <img src={PromoteSub} alt="elevate a subtask" height={50}></img> */}

            <br></br><br></br>
            <ol>
              <li>Click the "Promote" button at the bottom of the page. </li>

            </ol>
            </section>

            <section>
            <h2> Archive a Task </h2>
            {/* <img src={ArchiveSub} alt="archive a subtask" height={50}></img> */}

            <br></br><br></br>
            <ol>
              <li>To archive a task, click the "Archive" button at the bottom of the page. </li>

            </ol>
            </section>



        </Container>

      );
    }
}

export default TasksManual