import React from 'react';
import ReactDOM from 'react-dom';
import './FRIC_gui/FRIC_gui_main.css';
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
  render(){
      return (
          <h2>Welcome to FRIC</h2>
      )
  }
}







// render application
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
