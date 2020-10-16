import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { getInitials } from '../general/stringOps';

const useStyles = makeStyles((theme) => ({
	formControl: {
	margin: theme.spacing(1),
	minWidth: 120,
	maxWidth: 300,
	},
	chips: {
	display: 'flex',
	flexWrap: 'wrap',
	},
	chip: {
	margin: 2,
	},
	noLabel: {
	marginTop: theme.spacing(3),
	},
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
	style: {
		maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		width: 250,
	},
	},
};

export default function Multiselect(props) {
	const classes = useStyles();
	const [selected, setSelected] = React.useState([]);

	const handleChange = (event) => { setSelected(event.target.value); };

	useEffect(() => {
		if (props.value != null) {
			try {
				setSelected(props.value)
			}
			catch (err) {
				console.log(err);
			}
		}
	}, [props.value]);

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="multiselect-label">{(props.label) ? props.label : ''}</InputLabel>
				<Select
					labelId="multiselect-label"
					id="multiselect"
					multiple
					autoWidth={true}
					value={selected}
					onChange={handleChange}
					input={<Input />}
					renderValue={selected => (
						<div className={classes.chips}>
							{selected.map((value) => (
								<Chip
									key={value}
									label={value}
									color={(props.withInitialsAvatar) ? "primary" : "default"}
									avatar={props.withInitialsAvatar && <Avatar>{getInitials(value)}</Avatar>}
									className={classes.chip}
								/>
							))}
						</div>
					)}
					MenuProps={MenuProps}
					variant={(props.variant != null) ? props.variant : 'standard'}
				>
					{props.options.map((el) => (
					<MenuItem key={el} value={el}>
							<Checkbox checked={selected.indexOf(el) > -1} style={{ color: "#066ff9"}} />
						<ListItemText primary={el} />
					</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

Multiselect.propTypes = {
	options: PropTypes.array.isRequired,
	variant: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.array,
	withInitialsAvatar: PropTypes.bool
}
