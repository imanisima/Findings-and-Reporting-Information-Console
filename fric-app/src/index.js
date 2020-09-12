// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';

// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import FRIC from './FRIC.js';
import MainNav from './FRIC_gui/bootstrap/navbar.js';

// css
import './FRIC_gui/css/FRIC_gui_main.css';
import './index.css';

// render application
ReactDOM.render(
  <React.StrictMode>
    <FRIC />
  </React.StrictMode>,
  document.getElementById('FRIC')
);

ReactDOM.render(<MainNav />, document.getElementById('FRIC'));


serviceWorker.unregister();
