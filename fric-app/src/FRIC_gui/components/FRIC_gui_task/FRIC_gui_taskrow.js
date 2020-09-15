import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Tasks from './FRIC_gui_task';

export default class TaskRow extends Component {

    render() {
  
      return (
        ReactDOM.render(
            <container>
                <div>
                    < Tasks />

                    <tr className="eachRow">
                        <td>
                            {this.props.task.id}
                        </td>

                        <td>
                            {this.props.task.name}
                        </td>
                
                        <td>
                            {this.props.task.system}
                        </td>

                        <td>
                            {this.props.task.status}
                        </td>

                        <td>
                            {this.props.task.priority}
                        </td>

                        <td>
                            {this.props.task.duedate}
                        </td>

                        <td>
                            {this.props.task.acc}
                        </td>

                    </tr>
                </div>
            </container>, document.getElementById('FRIC'))
        
      );
  
    }
  }
