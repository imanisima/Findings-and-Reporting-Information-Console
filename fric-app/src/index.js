import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import FRIC from './FRIC.js';


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

// ReactDOM.render(<MainNav />, document.getElementById('FRIC'));


serviceWorker.unregister();
