/**
 * 
 */

import React, {Component} from 'react';
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutSkeleton from '../components/general/LayoutSkeleton';
import OverviewCards from '../components/summary/OverviewCards';
import { darkTheme } from '../components/general/ThemeColors';
import SetupContentView from '../components/setup/SetupForm';


class Main extends Component {
	constructor (props) {
		super(props);
	
		this.state ={
		  events: null
		};
	}
	
	  componentDidMount() {
		axios.get('http://localhost:5000/events/')
		.then(response =>  {
			console.log(response.data);
			this.setState({ events: response.data})
		})
		.catch(error => {
			console.log(error)
		});
	}

	render() {
		{console.log(this.state.events);}
		//{console.log(this.state.events.length);}
		return (

			// Added dark theme provider, remove for normal color
			<>
			{ this.state.events && this.state.events.length > 0 } ?
				<>
					<ThemeProvider theme={darkTheme}>
						<LayoutSkeleton mainContentComponent={<OverviewCards />}/>
					</ThemeProvider>
				</>
				:
				<>
					<ThemeProvider theme={darkTheme}>
						<LayoutSkeleton mainContentComponent={<SetupContentView />}/>
					</ThemeProvider>
				</>
			</>

		);
	}
}

export default Main