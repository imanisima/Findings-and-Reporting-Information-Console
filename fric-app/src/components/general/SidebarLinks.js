/**
 * 
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Material UI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material UI Sidebar Icons
import EventIcon from '@material-ui/icons/Event';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FindPageIcon from '@material-ui/icons/FindInPage';
import DnsIcon from '@material-ui/icons/Dns';
import ArchiveIcon from '@material-ui/icons/Archive';
import BuildIcon from '@material-ui/icons/Build';

// Material UI styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	links: {
		color: "inherit",
		'&:hover': {
			color: "inherit",
			textDecoration: "none",
		}
	}
}));

export default function SidebarLinks() {
	const classes = useStyles();

	return (
		/* Sidebar Icons, Text, and Links */
		<List>
			<Link to="/" replace={useLocation().pathname === "/"} className={classes.links}>
				<ListItem button key="Overview">
					<ListItemIcon><DashboardIcon /></ListItemIcon>
					<ListItemText primary="Overview" />
				</ListItem>
			</Link>

			<Link to="/events" replace={useLocation().pathname === '/events'} className={classes.links}>
				<ListItem button key="Events">
					<ListItemIcon><EventIcon /></ListItemIcon>
					<ListItemText primary="Events" />
				</ListItem>
			</Link>

			<Link to="/tasks" replace={useLocation().pathname === '/tasks'} className={classes.links}>
				<ListItem button key="Tasks">
					<ListItemIcon><CheckedIcon /></ListItemIcon>
					<ListItemText primary="Tasks" />
				</ListItem>
			</Link>

			<Link to="/subtasks" replace={useLocation().pathname === '/subtasks'} className={classes.links}>
				<ListItem button key="Subtasks">
					<ListItemIcon><LowPriorityIcon /></ListItemIcon>
					<ListItemText primary="Subtasks" />
				</ListItem>
			</Link>

			{/*  */ }
			<Link to="/findings" replace={useLocation().pathname === '/findings'} className={classes.links}>
				<ListItem button key="Findings">
					<ListItemIcon><FindPageIcon /></ListItemIcon>
					<ListItemText primary="Findings" />
				</ListItem>
			</Link>

			{/* Archive Link */ }
			<Link to="/archive" replace={useLocation().pathname === '/archive'} className={classes.links}>
				<ListItem button key="Archive">
					<ListItemIcon><ArchiveIcon /></ListItemIcon>
					<ListItemText primary="Archive" />
				</ListItem>
			</Link>

			{/* Systems Link */ }
			<Link to="/systems" replace={useLocation().pathname === '/systems'} className={classes.links}>
				<ListItem button key="Systems">
					<ListItemIcon><DnsIcon /></ListItemIcon>
					<ListItemText primary="Systems" />
				</ListItem>
			</Link>

			{/* Configuration Link */ }
			<Link to="/configure" replace={useLocation().pathname === '/configure'} className={classes.links}>
				<ListItem button key="Configuration">
					<ListItemIcon><BuildIcon /></ListItemIcon>
					<ListItemText primary="Configuration" />
				</ListItem>
			</Link>
		</List>
	);
}
