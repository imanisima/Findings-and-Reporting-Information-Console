/**
 * 
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// Components
import Main from './pages/Main';
import EventsPage from './pages/EventsPage';
import ArchivesPage from './pages/ArchivesPage';
import ConfigurePage from './pages/ConfigurePage';
import FindingsPage from './pages/FindingsPage';
import SettingsPage from './pages/SettingsPage';
import SubtasksPage from './pages/SubtasksPage';
import SystemsPage from './pages/SystemsPage';
import TasksPage from './pages/TasksPage';
import ReportsPage from './pages/ReportsPage';
import ManualPage from './pages/ManualPage';
import TestPage from './pages/TestPage';

function App() {
	return (
		<>
			{ /* Apply page routes */ }
			<Router path="/">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/event" component={EventsPage} />
					<Route exact path="/tasks" component={TasksPage} />
					<Route exact path="/subtasks" component={SubtasksPage} />
					<Route exact path="/archive" component={ArchivesPage} />
					<Route exact path="/systems" component={SystemsPage} />
					<Route exact path="/configure" component={ConfigurePage} />
					<Route exact path="/findings" component={FindingsPage} />
					<Route exact path="/reports" component={ReportsPage} />
					<Route exact path="/settings" component={SettingsPage} />
					<Route exact path="/test" component={TestPage} />
					<Route exact path="/manual" component={ManualPage} />
				</Switch>
			</Router>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('fric-app'));
serviceWorker.unregister();
