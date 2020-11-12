/**
 * 
 */

import axios from 'axios';
import React, { useLayoutEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import CustomTable from '../general/CustomTable';
import NewConfigurationDialog from './NewConfigurationDialog';
import ConfirmDeleteDialog from '../general/ConfirmDeleteDialog';
import { DetailViewActionContext } from '../general/LayoutTemplate';
import { ToolbarNewActionContext } from '../general/CustomTableToolbar';

// import { data } from '../general/test/configtestdata'; //TODO: delete test data in production

const useStyles = makeStyles((theme) => ({
	menuButtons: {
		margin: "0.5em",
	}
}));

export default function ConfigurationTable(props) {
	const classes = useStyles();
	const openDetailAction = useContext(DetailViewActionContext);
	const [newDialogOpen, setNewDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [rowData, setRowData] = useState([]);
	const [selected, setSelected] = useState([]);

	const headings = [
		{ id: 'value', numeric: false, disablePadding: false, label: 'Value' },
	];

	const reload = () => {
		axios.get('http://localhost:5000/configure/table', {
			params: {
				type: props.configType
			}
		})
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					setRowData(res.data);
				}
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	const deleteConfigs = async () => {
		console.log(selected);
		await axios.delete('http://localhost:5000/configure/delete', {
			params: {
				type: props.configType,
				values: selected
			}
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	}

	const handleNewClick = () => setNewDialogOpen(true);

	const handleEditClick = () => {
		if (selected.length === 1) openDetailAction()
	};

	const handleDeleteClick = () => setDeleteDialogOpen(true);

	useLayoutEffect(() => reload(), []);

	return (
		<>
			<ToolbarNewActionContext.Provider value={handleNewClick}>
				<CustomTable
					tableName={props.title}
					trackField="value"
					headings={headings}
					rows={rowData}
					rowsDisplayed={5}
					setSelected={setSelected}
				>
					{/* Table action buttons */}

					{/* Edit Button */}
					<Button
						className={classes.menuButtons}
						disabled={selected.length !== 1}
						variant="contained"
						startIcon={<EditIcon />}
						color="primary"
						size="medium"
						onClick={handleEditClick}
					>
						Edit
				</Button>

					{/* Delete Button */}
					<Button
						className={classes.menuButtons}
						disabled={selected.length < 1}
						variant="contained"
						startIcon={<DeleteIcon />}
						color="secondary"
						size="medium"
						onClick={handleDeleteClick}
					>
						Delete
				</Button>
				</CustomTable>
			</ToolbarNewActionContext.Provider>

			{/* Dialog Windows */}
			<NewConfigurationDialog
				isOpen={newDialogOpen}
				closeDialogAction={() => setNewDialogOpen(false)}
				reload={reload}
				baseURL={props.baseURL}
				configTitle={props.title}
				configType={props.configType}
			/>
			<ConfirmDeleteDialog
				isOpen={deleteDialogOpen}
				numSelected={0} //TODO: bind numSelected value
				confirmAction={deleteConfigs}
				closeDialogAction={() => setDeleteDialogOpen(false)}
				objectType={props.configType}
			/>
		</>
	)
}

ConfigurationTable.propTypes = {
	title: PropTypes.string.isRequired,
	configType: PropTypes.string.isRequired,
	baseURL: PropTypes.string.isRequired,
}
