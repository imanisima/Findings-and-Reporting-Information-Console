/**
 *
 */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { darken, makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export const ToolbarNewActionContext = createContext(null);

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.common.white,
				backgroundColor: 'lighten("#066ff9", 0.1)' //lighten(theme.palette.primary.dark, 0.20) 
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.primary.dark,
			},
	start: {
		flex: '1 1 100%',
		textAlign: 'left',
	},
	center: {
		flex: '1 1 100%',
		textAlign: 'center',
	},
	end: {
		flex: '1 1 100%',
		textAlign: 'right',
	}
}));

const AddButton = withStyles((theme) => ({
	root: {
		color: theme.palette.common.white,
		backgroundColor: "#066ff9",
		'&:hover': {
			backgroundColor: darken("#066ff9", 0.13),
		},
	},
}))(Button);

export default function CustomTableToolbar(props) {
	const classes = useToolbarStyles();
	const newClickAction = useContext(ToolbarNewActionContext);

	const handleNewClick = () => {
		//TODO: handle behavior of non existent context or prop function
		newClickAction();
	};

	const handleFilterClick = () => {
		if (props.enableFilter) props.filterAction();
	};

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: props.numSelected > 0,
			})}
		>
			{
				props.numSelected > 0 ? (
					<Typography className={classes.start} color="inherit" variant="subtitle1" component="div">
						{props.numSelected} selected
					</Typography>
				) : (
						<div className={classes.start}>
							<AddButton
								variant="contained"
								size="large"
								startIcon={<AddIcon />}
								onClick={handleNewClick}
							>
								New
							</AddButton>
						</div>
				)
			}
			<Typography variant="h5" className={classes.center}>
				{props.title}
			</Typography>
			<div className={classes.end}>
				{
					(props.numSelected === 0) && (props.enableFilter) && (
						<Tooltip title="Filter list">
							<Button variant="contained" size="large" endIcon={<FilterListIcon />} onClick={handleFilterClick}>Filter</Button>
						</Tooltip>
					)
				}
			</div>
		</Toolbar>
	);
};

CustomTableToolbar.propTypes = {
	title: PropTypes.string, // Title Displayed in center of toolbar
	numSelected: PropTypes.number.isRequired, // Number of selected to display at left of toolbar
	newAction: PropTypes.func, // Action used when 'New' button is clicked
	enableFilter: PropTypes.bool,
	filterAction: PropTypes.func,
};
