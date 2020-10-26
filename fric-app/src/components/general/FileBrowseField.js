/**
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function BrowseField(props) {
	const classes = useStyles();

	const browse = () => {
		//TODO: implement browse files feature
		props.setter(''); //TODO: set external values state
	};

	return (
		<Paper className={classes.root}>
			{/* <IconButton className={classes.iconButton} aria-label="menu">
				<MenuIcon />
			</IconButton> */}
			<InputBase
				className={classes.input}
				placeholder="No File Selected"
				value={props.value}
				inputProps={{ 'aria-label': 'browse files' }}
			/>
			<Divider className={classes.divider} orientation="vertical" />
			<Button startIcon={<FolderIcon />} onClick={browse}>Browse</Button>
			{/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
				<DirectionsIcon />
			</IconButton> */}
		</Paper>
	);
}

BrowseField.propTypes = {
	value: PropTypes.string.isRequired,
	setter: PropTypes.func,
}
