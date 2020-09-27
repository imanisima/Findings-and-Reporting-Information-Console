/**
 * 
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// Components
import MainPage from './pages/MainPage';
import ArchivesPage from './pages/ArchivesPage';
import ConfigurationPage from './pages/ConfigurationPage';
import Context from './pages/ContextPage';
import Event from './pages/FRIC_gui_event';
import TasksDetails from './components/tasks/FRIC_gui_tasks_details';
import SyncPage from './pages/SyncPage'
import EventInformation from './components/event/FRIC_gui_event_information'
import EventAnalystInformation from './components/event/FRIC_gui_event_analyst_information'
import FindingsDetails from './components/findings/FRIC_gui_finding_details';
import SetupPage from './pages/SetupPage';
import SummaryPage from './pages/SummaryPage';
import NotificationsPage from './pages/NotificationsPage';
import SubtasksPage from './pages/SubtasksPage';
import ArchiveTask from './components/archive/FRIC_gui_archive_task'
import ArchiveSubtask from './components/archive/FRIC_gui_archive_subtask'
import ArchiveSystem from './components/archive/FRIC_gui_archive_system'
import ArchiveFinding from './components/archive/FRIC_gui_archive_findings'
import EventTree from './components/event-tree/FRIC_gui_event_tree'
import SystemsOverview from './components/system/FRIC_gui_system_overview';
import SystemDetail from './components/system/FRIC_gui_system_details';
import EventsPage from './pages/EventsPage';
import PageLayout from './components/general/PageLayout';
import TestPage from './pages/TestPage';

function App() {
	return (
		<>
			{ /* Apply page routes */ }
			<Router path="/">
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/archive" component={ArchivesPage} />
					<Route exact path="/event" component={Event} />
					<Route exact path="/tasks/new" component={TasksDetails} />
					<Route exact path="/findings/new" component={FindingsDetails} />
					<Route exact path="/event/new" component={EventInformation} />
					<Route exact path="/event/newAnalyst" component={EventAnalystInformation} />
					<Route exact path="/sync" component={SyncPage} />
					<Route exact path="/setup" component={SetupPage} />
					<Route exact path="/configuration" component={ConfigurationPage} />
					<Route exact path="/systems" component={SystemsOverview} />
					<Route exact path="/systems/new" component={SystemDetail} />
					<Route exact path="/context" component={Context} />
					<Route exact path="/summary" component={SummaryPage} />
					<Route exact path="/notification" component={NotificationsPage} />
					<Route exact path="/subtasks" component={SubtasksPage} />
					<Route exact path="/archive/archive_task_view" component={ArchiveTask} />
					<Route exact path="/archive/archive_subtask_view" component={ArchiveSubtask} />
					<Route exact path="/archive/archive_system_view" component={ArchiveSystem} />
					<Route exact path="/archive/archive_finding_view" component={ArchiveFinding} />
					<Route exact path="/event_tree" component={EventTree} />
					<Route exact path="/event2.0" component={EventsPage} />
					<Route exact path="/general" component={PageLayout} />
					<Route exact path="/testpage" component={TestPage} />
				</Switch>
			</Router>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('fric-app'));
serviceWorker.unregister();
