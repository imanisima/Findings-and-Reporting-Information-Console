/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, darken, makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useToolbarStyles = makeStyles((theme) => ({
	root: {
	paddingLeft: theme.spacing(2),
	paddingRight: theme.spacing(1),
	},
	highlight:
	theme.palette.type === 'light'
		? {
				color: theme.palette.common.white,
				backgroundColor: lighten("#066ff9", 0.1) //lighten(theme.palette.primary.dark, 0.20) 
			}
		: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.primary.light,
			},
	title: {
	flex: '1 1 100%',
	},
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

export default function SubtasksOverviewTableToolbar(props) {
	const classes = useToolbarStyles();
	const { numSelected } = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
			[classes.highlight]: numSelected > 0,
			})}
		>
		{
			numSelected > 0 ? (
				<Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : (
				<div className={classes.title}>
					<AddButton size="large" variant="contained" startIcon={<AddIcon />}>
						New
					</AddButton>
				</div>
			)
		}
		{
			false && numSelected === 1 && (
				<Tooltip title="Edit">
					<IconButton aria-label="edit" style={{color: "dark-grey", backgroundColor: "#ffffff"}}><EditIcon  /></IconButton>
				</Tooltip>
				// <Button variant="contained" endIcon={<EditIcon />}>Edit</Button>
			)
		}
		{ 
			numSelected === 0 && (
				<Tooltip title="Filter list">
					<Button size="large" variant="contained" endIcon={<FilterListIcon />}>Filter</Button>
				</Tooltip>
			)
		}
	</Toolbar>
	);
};

SubtasksOverviewTableToolbar.propTypes = { numSelected: PropTypes.number.isRequired, };
