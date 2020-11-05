/**
 * 
 */

import axios from 'axios';
import cookie from 'cookie';
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

function App() {
	const [fetchingCookie, setFetchingCookie] = React.useState(true);
	const [event_id, setEvent_id] = React.useState(cookie.parse(document.cookie).event_id);

	const fetchCookie = () => {
		axios.get('http://localhost:5000', { withCredentials: true })
			.then(() => {
				const c = cookie.parse(document.cookie);
				if (c && c.event_id) {
					setEvent_id(c.event_id);
					setFetchingCookie(false);
					console.log(c);
					console.log('React router set cookie');
				}
			})
			.catch(err => {
				//TODO: display error message
				console.log(err);
				setFetchingCookie(false);
			})
	};

	React.useEffect(() => fetchCookie(), []);

	return (
		<>
			{ /* Apply page routes */ }
			<Router path="/">
				<Switch>
						{
							// Add main landing page route
							(fetchingCookie) ? <></> : <Route exact path="/" component={Main} />
						}
						{
							// Add remaining page routes
							(!fetchingCookie && event_id) ? (
								<>
									<Route exact path="/summary" component={SummaryPage} />
									<Route exact path="/events" component={EventsPage} />
									<Route exact path="/tasks" component={TasksPage} />
									<Route exact path="/subtasks" component={SubtasksPage} />
									<Route exact path="/findings" component={FindingsPage} />
									<Route exact path="/archive" component={ArchivesPage} />
									<Route exact path="/systems" component={SystemsPage} />
									<Route exact path="/configure" component={ConfigurePage} />
									<Route exact path="/settings" component={SettingsPage} />
									<Route exact path="/test" component={TestPage} />
								</>
							) : <Redirect to='/' />
						}
				</Switch>
			</Router>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('fric-app'));
serviceWorker.unregister();
