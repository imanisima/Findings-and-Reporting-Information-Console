
import Main from './FRIC_gui/pages/FRIC_gui_main.js';
import Archive from './FRIC_gui/pages/FRIC_gui_archive.js';
import Configuration from './FRIC_gui/pages/FRIC_gui_config.js';
import Context from './FRIC_gui/pages/FRIC_gui_context.js';
import Event from './FRIC_gui/pages/FRIC_gui_event.js';
import Findings from './FRIC_gui/pages/FRIC_gui_findings.js';
import Setup from './FRIC_gui/pages/FRIC_gui_setup.js';
import Summary from './FRIC_gui/pages/FRIC_gui_summary.js';


export default(
        <Route path="/" component={FRIC}>
        <Route path="/archive" component={Archive}/>
        <Route path="/event" component={Event}/>
        <Route path="/findings/new" component={Findings}/>
        <Route path="/configuration" component={Configuration}/>
        <Route path="/setup" component={Setup}/>
        <Route path="/context" component={Context}/>
        <Route path="/summary" component={Summary}/>

    </Route>

);