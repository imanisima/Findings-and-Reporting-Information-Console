/**
 * 
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// Components
import Main from './pages/Main';
import SummaryPage from './pages/SummaryPage';
import EventsPage from './pages/EventsPage';
import ArchivesPage from './pages/ArchivesPage';
import ConfigurePage from './pages/ConfigurePage';
import SyncPage from './pages/SyncPage';
import FindingsPage from './pages/FindingsPage';
import SettingsPage from './pages/SettingsPage';
import SubtasksPage from './pages/SubtasksPage';
import SystemsPage from './pages/SystemsPage';
import TasksPage from './pages/TasksPage';
import ManualPage from './pages/ManualPage';
import TestPage from './pages/TestPage';

import ArchiveTask from './components/archive/FRIC_gui_archive_task';
import ArchiveSubtask from './components/archive/FRIC_gui_archive_subtask';
import ArchiveSystem from './components/archive/FRIC_gui_archive_system';
import ArchiveFinding from './components/archive/FRIC_gui_archive_findings';
import EventTree from './components/event-tree/FRIC_gui_event_tree';

function App() {
	return (
		<>
			{ /* Apply page routes */ }
			<Router path="/">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/summary" component={SummaryPage} />
					<Route exact path="/events" component={EventsPage} />
					<Route exact path="/event_tree" component={EventTree} />
					<Route exact path="/tasks" component={TasksPage} />
					<Route exact path="/subtasks" component={SubtasksPage} />
					<Route exact path="/findings" component={FindingsPage} />
					<Route exact path="/archive" component={ArchivesPage} />
					<Route exact path="/systems" component={SystemsPage} />
					<Route exact path="/configure" component={ConfigurePage} />
					<Route exact path="/settings" component={SettingsPage} />
					<Route exact path="/test" component={TestPage} />

					<Route exact path="/sync" component={SyncPage} />
					<Route exact path="/archive/archive_task_view" component={ArchiveTask} />
					<Route exact path="/archive/archive_subtask_view" component={ArchiveSubtask} />
					<Route exact path="/archive/archive_system_view" component={ArchiveSystem} />
					<Route exact path="/archive/archive_finding_view" component={ArchiveFinding} />
				</Switch>
			</Router>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('fric-app'));
serviceWorker.unregister();
