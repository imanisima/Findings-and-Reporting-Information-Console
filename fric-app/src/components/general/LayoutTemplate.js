/**
 * 
 * Created by Marco Soto
 */

// React imports
import React,  { useState, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// Styling imports
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';

// UI component imports

import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import Button from 'react-bootstrap/Button'

// Sidebar Icons
import EventIcon from '@material-ui/icons/Event';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import FindPageIcon from '@material-ui/icons/FindInPage';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DnsIcon from '@material-ui/icons/Dns';
import ArchiveIcon from '@material-ui/icons/Archive';
import HelpIcon from '@material-ui/icons/HelpSharp';
import BuildIcon from '@material-ui/icons/Build';
import SyncIcon from '@material-ui/icons/Sync'
import DescriptionIcon from '@material-ui/icons/Description';
// import SyncProblemIcon from '@material-ui/icons/SyncProblem';
// import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';

// Navbar Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

// Custom Components
import SyncForm from '../sync/SyncForm';

import NotificationOverviewTasks from '../NotificationOverviewTasks';
import getcount from '../NotificationOverviewTasks';
//Progression bar
import ProgressBar from 'react-bootstrap/ProgressBar'

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	notification: {
		margin: '0.5em 0.3em 0.5em 0.3em',
	},
	test: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		marginLeft: "auto",
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		display: "inline-block",
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	links: {
		color: "inherit",
		'&:hover': {
			color: "inherit",
			textDecoration: "none",
		}
	}
}));

export const DetailViewActionContext = React.createContext(null);

export default function LayoutTemplate(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [detailOpen, setDetailOpen] = React.useState(false);
	const [anchorPopover, setAnchorPopover] = React.useState(null);
	const [anchorAuth, setAnchorAuth] = React.useState(null);
	const [snackbarOpen, setSnackbarOpen] = React.useState(true);
	const [syncDialogOpen, setSyncDialogOpen] = React.useState(false);
	const [auth] = React.useState(true);
	const [tableData, setTableData] = useState([]);
	const [tableData2, setTableData2] = useState([]);
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [contentIsLoading2, setContentIsLoading2] = useState(true);
	


	const handleMenuDrawerOpen = () => setMenuOpen(true);
	const handleMenuDrawerClose = () => setMenuOpen(false);

	const handleDetailDrawerOpen = () => setDetailOpen(true);
	const handleDetailDrawerClose = () => setDetailOpen(false);

	const handlePopoverOpen = (event) => setAnchorPopover(event.currentTarget);
	const handlePopoverClose = () => setAnchorPopover(null);

	const handleAuthMenuOpen = (event) => setAnchorAuth(event.currentTarget);
	const handleAuthMenuClose = () => setAnchorAuth(null);

	// const handleSnackbarOpen = () => setSnackbarOpen(true);
	const handleSnackbarClose = () => setSnackbarOpen(false);
	
	
	const reload = () => {
		setContentIsLoading(true);
		axios.get('http://localhost:5000/tasks/table') // Fetch table data
			.then(res => {
				setTableData(res.data);
				setContentIsLoading(false);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			});
	};
	const reload2 = () => {
		setContentIsLoading2(true);
		axios.get('http://localhost:5000/subtasks/table') // Fetch table data
			.then(res => {
				console.log(res);
				setTableData2(res.data);
				setContentIsLoading2(false);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading2(false);
			});
	};

	useLayoutEffect(() => reload2(), []);
	useLayoutEffect(() => reload(), []);

	
	;


    //const Progression Bar
    const now = localStorage.getItem("IncompleteT") - localStorage.getItem("CompleteT") ;

	return (
		<div className={classes.root}>
			<CssBaseline />

			{/* Navbar Section */}
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: menuOpen,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleMenuDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: menuOpen,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" noWrap>
						Findings and Reporting Information Console (FRIC)

						<Link to="/progress" replace={useLocation().pathname === '/progress'} className={classes.links}>
							<ProgressBar now={now} label={`Overall Progress ${now}%` } />
						</Link>

					</Typography>
					<div className={classes.grow} />
					<div style={{ marginLeft: "auto", }} >
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
						{/* Notifications Button */}
						<IconButton
							color="inherit"
							aria-label="notifs"
							onClick={handlePopoverOpen}
						>
						<Badge badgeContent={getCount(tableData,tableData2)}color="error"><NotificationsIcon /></Badge>
						</IconButton>
						{/* Notifications Popover */}
						<Popover
							open={Boolean(anchorPopover)}
							
							//onClose={handlePopoverClose}
							anchorEl={anchorPopover}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							{/* Notification Popover Content */}
							<div>
								<NotificationOverviewTasks rows={tableData} subs={tableData2}/>
								
							</div>
							<Button
								onClick={() => {handlePopoverClose()}}>
								OK
							</Button>
						</Popover>
						{/* Sync Button */}
						<IconButton
							color="inherit"
							aria-label="sync"
							onClick={() => setSyncDialogOpen(true)}
						>
							<SyncIcon />
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="help"
						>

							<Link to="/manual" replace={useLocation().pathname === '/manual'} className={classes.links}>
								<HelpIcon />
							</Link>
						</IconButton>
						{auth && (
							<>
								<IconButton
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleAuthMenuOpen}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorAuth}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorAuth)}
									onClose={handleAuthMenuClose}
								>
									<MenuItem onClick={handleAuthMenuClose}>Login</MenuItem>
									<MenuItem onClick={handleAuthMenuClose}>Logout</MenuItem>
								</Menu>
							</>
						)}
					</div>
				</Toolbar>
			</AppBar>

			{/* Left Menu Sidebar Section */}
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: menuOpen,
					[classes.drawerClose]: !menuOpen,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: menuOpen,
						[classes.drawerClose]: !menuOpen,
					}),
				}}
			>
				{/* Menut Icon Button */}
				<div className={classes.toolbar}>
					<IconButton onClick={handleMenuDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />

				{/* Sidebar Icons, Text, and Links */}
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

					<Link to="/event_tree" replace={useLocation().pathname !== '/findings'} className={classes.links}>
						<ListItem button key="Event Tree">
							<ListItemIcon><AccountTreeIcon /></ListItemIcon>
							<ListItemText primary="Event Tree" />
						</ListItem>
					</Link>

					{/*  */}
					<Link to="/findings" replace={useLocation().pathname === '/'} className={classes.links}>
						<ListItem button key="Findings">
							<ListItemIcon><FindPageIcon /></ListItemIcon>
							<ListItemText primary="Findings" />
						</ListItem>
					</Link>

					{/* Archive Link */}
					<Link to="/archive" replace={useLocation().pathname === '/archive'} className={classes.links}>
						<ListItem button key="Archive">
							<ListItemIcon><ArchiveIcon /></ListItemIcon>
							<ListItemText primary="Archive" />
						</ListItem>
					</Link>

					{/* Systems Link */}
					<Link to="/systems" replace={useLocation().pathname === '/systems'} className={classes.links}>
						<ListItem button key="Systems">
							<ListItemIcon><DnsIcon /></ListItemIcon>
							<ListItemText primary="Systems" />
						</ListItem>
					</Link>

					{/* ReportsLink */}
					<Link to="/reports" replace={useLocation().pathname === '/reports'} className={classes.links}>
						<ListItem button key="Reports">
							<ListItemIcon><DescriptionIcon /></ListItemIcon>
							<ListItemText primary="Reports" />
						</ListItem>
					</Link>

					{/* Configuration Link */}
					<Link to="/configure" replace={useLocation().pathname === '/configure'} className={classes.links}>
						<ListItem button key="Configuration">
							<ListItemIcon><BuildIcon /></ListItemIcon>
							<ListItemText primary="Configuration" />
						</ListItem>
					</Link>

					{/* Settings Link */}
					<Link to="/settings" replace={useLocation().pathname === '/settings'} className={classes.links}>
						<ListItem button key="Settings">
							<ListItemIcon><SettingsIcon /></ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItem>
					</Link>
				</List>
			</Drawer>

			{/* Main Content Section */}
			<main className={classes.content}>
				{/* Toolbar Spacer */}
				<div className={classes.toolbar} />
				{/* Main Content */}
				{/* Pass thru main component with context to handle opening detail view */}
				<DetailViewActionContext.Provider value={handleDetailDrawerOpen}>
					{ props.mainContentComponent }
				</DetailViewActionContext.Provider>
			</main>

			{ 
				/* Right Detail Sidebar Section, only render if detail component is used */
				props.detailComponent != null && (
					<div>
						<React.Fragment key="right">
							<Drawer anchor="right" open={detailOpen}>
								<div style={{ width: "60em" }}>

									{/* Pass thru detail component with context to handle closing detail view */}
									<DetailViewActionContext.Provider value={handleDetailDrawerClose}>
										{ props.detailComponent }
									</DetailViewActionContext.Provider>
								</div>
							</Drawer>
						</React.Fragment>
					</div>
				)
			}
			
			{/* Bottom Notification Snackbar Component 
			<Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
				<Alert onClose={handleSnackbarClose} severity="info" >
					Notification Popup
				</Alert>
			</Snackbar>
			*/}
			{/* Sync Dialog Form */}
			<Dialog
				open={syncDialogOpen}
				keepMounted
				onClose={() => {}}
				aria-labelledby="sync-dialog-title"
				aria-describedby="sync-dialog-description"
				disableBackdropClick
			>
				<SyncForm syncAction={() => setSyncDialogOpen(false)} closeAction={() => setSyncDialogOpen(false)} analystOptions={[]} />
			</Dialog>
		</div>
		
	);
	
}
function getCount(t1, t2){
    var count = 0;
    var today = new Date();
 
    for(let i =0; i < t1.length; i++){
       var dD = new Date(t1[i].dueDate);
       //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        var range =dD.getDate()- today.getDate() ;
        
        if(today.getMonth()+1 == dD.getMonth()+1 && range < 5 && range >=0  ){
           
            count++;
        }else if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
          count++;
        }
    }      
    for(let i =0; i < t2.length; i++){
        dD = new Date(t2[i].dueDate);
        //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        range =dD.getDate()- today.getDate() ;
         
         if(today.getMonth()+1 == dD.getMonth()+1 && range <= 5 && range >=0  ){
             count++;
         }else if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
             count++;
         }
     }      
    
    return count;
}

LayoutTemplate.propTypes = {
	mainContentComponent: PropTypes.element.isRequired,
	detailComponent: PropTypes.element,
}
