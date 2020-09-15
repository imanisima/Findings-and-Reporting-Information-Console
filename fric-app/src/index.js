import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

//Components
import FRIC from './FRIC.js';
import Archive from './FRIC_gui/pages/FRIC_gui_archive.js';
import Configuration from './FRIC_gui/pages/FRIC_gui_config.js';
import Context from './FRIC_gui/pages/FRIC_gui_context.js';
import Event from './FRIC_gui/pages/FRIC_gui_event.js';
import FindingsDetails from './FRIC_gui/components/findings/FRIC_gui_finding_details';
import Setup from './FRIC_gui/pages/FRIC_gui_setup.js';
import Summary from './FRIC_gui/pages/FRIC_gui_summary.js';

// css
import './FRIC_gui/css/FRIC_gui_main.css';
import './index.css';
import SystemsOverview from './FRIC_gui/components/system/FRIC_gui_system_overview';
import SystemDetail from './FRIC_gui/components/system/FRIC_gui_system_details';

// render application
ReactDOM.render(
  <Router>
    <Route exact path='/'>
      <React.StrictMode>
        <FRIC />
      </React.StrictMode>
    </Route>
    <Route exact path='/Imanisima/Findings-and-Reporting-Information-Console'>
      <React.StrictMode>
        <FRIC />
      </React.StrictMode>
    </Route>
    <Route path="/archive" component={Archive}/>
    <Route path="/event" component={Event}/>
    <Route exact path="/findings/new" component={FindingsDetails}/>
    <Route path="/configuration" component={Configuration}/>
    <Route path="/setup" component={Setup}/>
    <Route exact path="/systems" component={SystemsOverview}/>
    <Route exact path="/systems/new" component={SystemDetail}/>
    <Route path="/context" component={Context}/>
    <Route path="/summary" component={Summary}/>
  </Router>,
  document.getElementById('FRIC')
);

// ReactDOM.render(<MainNav />, document.getElementById('FRIC'));


serviceWorker.unregister();
