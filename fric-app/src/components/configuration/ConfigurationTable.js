/**
 * 
 */

import axios from 'axios';
import React, { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CustomTable from '../general/CustomTable';

import { DetailViewActionContext } from '../general/LayoutTemplate';

import { data } from '../general/test/configtestdata'; //TODO: delete test data in production

export default function ConfigurationTable(props) {
	const openDetailAction = useContext(DetailViewActionContext);

	const headings = [
		{ id: 'value', numeric: false, disablePadding: false, label: 'Value' },
		{ id: 'id', numeric: false, disablePadding: false, label: '_id' },
	];

	const getData = () => {
		axios.get(props.baseURL)
			.then(res => {
				console.log(res);
				
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	const createData = async () => {
		await axios.post(props.baseURL + '/new', {
			params: {

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

	const editCell = async () => {
		openDetailAction();

		await axios.put(props.baseURL + '/update', {
			params: {

			}
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
			})
	};

	const deleteCell = async () => {
		await axios.delete(props.baseURL + '/delete', {
			params: {

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

	const handleEditClick = () => {
		openDetailAction();
		// editCell();
	};

	useLayoutEffect(() => getData());

	return (
		<CustomTable
			tableName={props.title}
			trackField="id"
			headings={headings}
			rows={data}
			rowsDisplayed={5}
		>
			{/* Table action buttons */}
			
			{/* Edit Button */}
			<Button
				// className={classes.menuButtons}
				// disabled={selected.length !== 1}
				variant="contained"
				startIcon={<EditIcon />}
				color="primary"
				size="large"
				onClick={handleEditClick}
			>
				Edit
			</Button>

			{/* Delete Button */}
			<Button
				// className={classes.menuButtons}
				// disabled={selected.length !== 1}
				variant="contained"
				startIcon={<DeleteIcon />}
				color="secondary"
				size="large"
				// onClick={handleEditClick}
			>
				Delete
			</Button>
		</CustomTable>
	)
}

ConfigurationTable.propTypes = {
	title: PropTypes.string.isRequired,
	baseURL: PropTypes.string.isRequired,
}
