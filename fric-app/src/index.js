/**
 * 
 */

// import axios from 'axios';
import cookieParser from 'cookie';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// Page Components
import Main from './pages/Main';
import SummaryPage from './pages/SummaryPage';
import EventsPage from './pages/EventsPage';
import ArchivesPage from './pages/ArchivesPage';
import ConfigurePage from './pages/ConfigurePage';
import FindingsPage from './pages/FindingsPage';
import SettingsPage from './pages/SettingsPage';
import SubtasksPage from './pages/SubtasksPage';
import SystemsPage from './pages/SystemsPage';
import TasksPage from './pages/TasksPage';
import TestPage from './pages/TestPage';

import ArchiveTask from './components/archive/FRIC_gui_archive_task';
import ArchiveSubtask from './components/archive/FRIC_gui_archive_subtask';
import ArchiveSystem from './components/archive/FRIC_gui_archive_system';
import ArchiveFinding from './components/archive/FRIC_gui_archive_findings';
import EventTree from './components/event-tree/FRIC_gui_event_tree';

function App() {
	const { event_id } = cookieParser.parse(document.cookie);


	React.useEffect(() => {
		console.log('react router effect');
		(async () => {
			console.log('react router fetched cookie: ' + document.cookie);
			if (!document.cookie) {
				await axios.get('http://localhost:5000', { withCredentials: true })
					.then(res => {
						console.log('Fetched cookie: ' + document.cookie);
					})
					.catch(err => console.log(err));
			}
		})();
	}, [])


	return (
		<>
			{ /* Apply page routes */ }
			<Router path="/">
				<Switch>
					<Route exact path="/" component={Main} />
					{
						(event_id) ? (
							<>
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
							</>
						) : <Redirect to='/'/>
					}
					
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
