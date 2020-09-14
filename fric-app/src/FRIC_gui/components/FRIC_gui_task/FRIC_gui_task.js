import React, {Component} from 'react';
import TasksTable from './FRIC_gui_task_table';

class Tasks extends Component {
  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.tasks = [
      {
        id: 1,
        task: 'Check Errors',
        system: 'Wells Fargo ATM',
        status: 'In Progress',
        priority: 'M',
        duedate: '08/20/2020',
        acc: 'AC'
      }, {
        id: 2,
        task: 'Blind SQL Injection',
        system: 'Wells Fargo ATM',
        status: 'Completed',
        priority: 'H',
        duedate: '09/05/2020',
        acc: 'DB'
      }, {
        id: 3,
        task: 'Run Wireshark',
        system: 'Wells Fargo Switch #5',
        status: 'Ackowledged',
        priority: 'L',
        duedate: '09/20/2020',
        acc: 'IE'
      }
    ];

  }

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var task = {
      id: id, // autoincrement later! - date assigned
      task: "e",
      system: "e",
      status: "e",
      priority: "e",
      duedate: "e",
      acc: "e"
    }
    this.state.tasks.push(task);
    this.setState(this.state.tasks);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };

  var tasks = this.state.tasks.slice();
  var newTasks = tasks.map(function(task) {

    for (var key in task) {
      if (key == item.name && task.id == item.id) {
        task[key] = item.value;

      }
    }
    return task;
  });
    this.setState({tasks:newTasks()});
  };
  render() {

    return (
      <div>
        <TasksTable onTaskTableUpdate={this.handleTaskTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} tasks={this.state.tasks} />
      </div>
    );

  }

}

export default Tasks