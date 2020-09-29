import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Sidebar Icons
import EventIcon from '@material-ui/icons/Event';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DnsIcon from '@material-ui/icons/Dns';
import ArchiveIcon from '@material-ui/icons/Archive';
import SyncIcon from '@material-ui/icons/Sync'
// import SyncProblemIcon from '@material-ui/icons/SyncProblem';
// import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';

// Navbar Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Detail View Icons
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

// Test Content
import SubtasksContentView from '../subtasks/SubtasksContentView';
import SubtasksDetailView from '../subtasks/SubtaskDetailView';
import { subtaskTestObject, options } from './test/subtaskstestdata'; //TODO: remove test data import when connected to backend

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
}));

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

export default function PageLayout() {
	const classes = useStyles();
	const theme = useTheme();
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [detailOpen, setDetailOpen] = React.useState(false);
	const [anchorPopover, setAnchorPopover] = React.useState(null);
	const [anchorAuth, setAnchorAuth] = React.useState(null);
	const [snackbarOpen, setSnackbarOpen] = React.useState(true);
	const [auth] = React.useState(true);

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

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
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
						</Typography>
						<div className={classes.grow} />
						<div style={{marginLeft: "auto",}} >
							{/* Notifications Button */}
							<IconButton
								color="inherit"
								aria-label="notifs"
								onClick={handlePopoverOpen}
							>
								<Badge badgeContent={4} color="error"><NotificationsIcon /></Badge>
							</IconButton>
							{/* Notifications Popover */}
							<Popover
								open={Boolean(anchorPopover)}
								onClose={handlePopoverClose}
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
									<Alert severity="error" className={classes.notification}>Aute consequat id laboris anim culpa proident laborum cillum sit.</Alert>
									<Alert severity="warning" className={classes.notification}>This is a warning message!</Alert>
									<Alert severity="info" className={classes.notification}>This is an information message!</Alert>
									<Alert severity="success" className={classes.notification}>This is a success message!</Alert>
								</div>	
							</Popover>
							{/* Sync Button */}
							<IconButton
								color="inherit"
								aria-label="sync"
							>
								<SyncIcon />
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
					<div className={classes.toolbar}>
						<IconButton onClick={handleMenuDrawerClose}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Divider />
					{/* Sidebar Icons, Text, and Links */}
					<List>
						<ListItem button key="Overview">
							<ListItemIcon><DashboardIcon /></ListItemIcon>
							<ListItemText primary="Overview" />
						</ListItem>
						<ListItem button key="Events">
							<ListItemIcon><EventIcon /></ListItemIcon>
							<ListItemText primary="Events" />
						</ListItem>
						<ListItem button key="Tasks">
							<ListItemIcon><CheckedIcon /></ListItemIcon>
							<ListItemText primary="Tasks" />
						</ListItem>
						<ListItem button key="Event Tree">
							<ListItemIcon><AccountTreeIcon /></ListItemIcon>
							<ListItemText primary="Event Tree" />
						</ListItem>
						<ListItem button key="Archive">
							<ListItemIcon><ArchiveIcon /></ListItemIcon>
							<ListItemText primary="Archive" />
						</ListItem>
						<ListItem button key="Systems">
							<ListItemIcon><DnsIcon /></ListItemIcon>
							<ListItemText primary="Systems" />
						</ListItem>
						<ListItem button key="Configuration">
							<ListItemIcon><SettingsIcon /></ListItemIcon>
							<ListItemText primary="Configuration" />
						</ListItem>
					</List>
				</Drawer>

				{/* Content Section */}
				<main className={classes.content}>
					{/* Toolbar Spacer */}
					<div className={classes.toolbar} />
					{/* Content */}
					<SubtasksContentView editAction={handleDetailDrawerOpen} />
				</main>
				
				{/* Right Detail Sidebar Section */}
				<div>
					<React.Fragment key="right">
						<Drawer anchor="right" open={detailOpen}>
							<div style={{ width: "60em" }}>
								<SubtasksDetailView selectedSubtask={subtaskTestObject} options={options} />
								<Button
									onClick={handleDetailDrawerClose}
									variant="contained"
									size="large"
									startIcon={<SaveIcon />}
									style={{ backgroundColor: "#ffc108", color: "charcoal", margin: "0.5em", }}
								>Save</Button>
								<Button
									onClick={handleDetailDrawerClose}
									variant="contained"
									size="large"
									startIcon={<CancelIcon />}
									style={{ backgroundColor: "#dc3545", color: "white", margin: "0.5em", }}
								>Cancel</Button>
							</div>
						</Drawer>
					</React.Fragment>
				</div>

				{/* Bottom Notification Snackbar Component */}
				<Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
					<Alert onClose={handleSnackbarClose} severity="success">
						Notification Popup
					</Alert>
				</Snackbar>
			</div>
		</ThemeProvider>
	);
}
