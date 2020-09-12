import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

// css
import './FRIC_gui/assets/FRIC_gui_main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import FRIC from './FRIC.js';

// render application
ReactDOM.render(
  <React.StrictMode>
    <FRIC />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
