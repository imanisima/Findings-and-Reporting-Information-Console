import FRIC from './FRIC.js';
import Archive from './FRIC_gui/pages/FRIC_gui_archive.js';
import Configuration from './FRIC_gui/pages/FRIC_gui_config.js';
import Context from './FRIC_gui/pages/FRIC_gui_context.js';
import Event from './FRIC_gui/pages/FRIC_gui_event.js';
import Tasks from './FRIC_gui/pages/FRIC_gui_tasks.js';
import Findings from './FRIC_gui/pages/FRIC_gui_findings.js';
import Setup from './FRIC_gui/pages/FRIC_gui_setup.js';
import Summary from './FRIC_gui/pages/FRIC_gui_summary.js';
import Notification from './FRIC_gui/pages/FRIC_gui_notification.js';

// css
import './FRIC_gui/css/FRIC_gui_main.css'
import './index.css'

export default(
    <Route path="/" component={FRIC}>
    <Route path="/archive" component={Archive}/>
    <Route path="/event" component={Event}/>
    <Route path="/tasks/new" component={Tasks}/>
    <Route path="/findings/new" component={Findings}/>
    <Route path="/configuration" component={Configuration}/>
    <Route path="/setup" component={Setup}/>
    <Route path="/context" component={Context}/>
    <Route path="/summary" component={Summary}/>
    <Route path="/notification" component={Notification}/>
    <Route path="/event/new" component={Event} />
    </Router>,
    document.getElementById('FRIC')
);

ServiceWorker.unregsiter();