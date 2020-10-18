/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArchiveIcon from '@material-ui/icons/Archive';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EditIcon from '@material-ui/icons/Edit';
import CustomTableToolbar from '../general/CustomTableToolbar';
import CustomTableHead from '../general/CustomTableHead';
import { DetailViewActionContext } from '../general/LayoutTemplate';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		"&$hover:hover": {
			backgroundColor: lighten("#066ff9", 0.85) //lighten(theme.palette.primary.light,0.85)
		},
		"&$selected, &$selected:hover": {
			backgroundColor: lighten("#066ff9", 0.75) //lighten(theme.palette.primary.dark, 0.70)
		},
	},
	hover: {},
	selected: {},
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

export default function TasksOverviewTable(props) {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('title');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(20);
	const openDetailAction = React.useContext(DetailViewActionContext);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = props.rows.map((n) => n.id);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleEditClick = () => {
		if (selected != null && selected.length === 1) {
			props.setSelectedTasks(selected); // Set selected id value, object to be fetched from detail view
			openDetailAction(); // Open detal view on tasks page
		}
	};

	const handleArchiveClick = () => {
		if (selected != null) {
			props.setSelectedTasks(selected);
			props.archiveAction();
		}
	};

	const handleChangePage = (event, newPage) => { setPage(newPage); };

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

	return (
		<div>
			<Paper className={classes.paper}>
				<CustomTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size="small"
						aria-label="custom table"
						stickyHeader
					>
						<CustomTableHead
							headCells={props.headings}
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={props.rows.length}
						/>
						<TableBody>
							{
								stableSort(props.rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const isItemSelected = isSelected(row.id);
										const labelId = `custom-table-checkbox-${index}`;

										return (
											<StyledTableRow
												hover
												onClick={(event) => handleClick(event, row.id)}
												role="checkbox"
												aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.id}
												selected={isItemSelected}
											>
												<StyledTableCell padding="checkbox">
													<Checkbox
														checked={isItemSelected}
														inputProps={{ 'aria-labelledby': labelId }}
														style={{ color: "#066ff9" }}
													/>
												</StyledTableCell>
												<StyledTableCell component="th" id={labelId} align="left" scope="row" padding="none">{row.id}</StyledTableCell>
												<StyledTableCell align="left">{row.name}</StyledTableCell>
												<StyledTableCell align="left">{row.system}</StyledTableCell>
												<StyledTableCell align="left" padding="none">{row.analysts}</StyledTableCell>
												<StyledTableCell align="left" padding="default">{row.priority}</StyledTableCell>
												<StyledTableCell align="left" padding="default">{row.progress}</StyledTableCell>
												<StyledTableCell align="right" >{row.noOfSubtasks}</StyledTableCell>
												<StyledTableCell align="right" >{row.noOfFindings}</StyledTableCell>
												<StyledTableCell align="right" padding="default">{new Date(row.dueDate).toLocaleDateString()}</StyledTableCell>
											</StyledTableRow>
										);
									})
							}
							{emptyRows > 0 && (
								<TableRow style={{ height: 33 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<div style={{ display: "inline-block", verticalAlign: "bottom" }}>
					{/* Archive Button */}
					<Button
						disabled={selected.length < 1}
						variant="contained"
						startIcon={<ArchiveIcon />}
						style={{ backgroundColor: "#ffc108", color: "charcoal", margin: "0.5em", }}
						size="large"
						onClick={handleArchiveClick}
					>
						Archive
					</Button>
					{/* Promote Button */}
					<Button
						disabled={selected.length < 1}
						variant="contained"
						startIcon={<ArrowDownwardIcon />}
						color="secondary"
						size="large"
					>
						Demote
					</Button>
					{/* Edit Button */}
					<Button
						onClick={handleEditClick}
						disabled={selected.length !== 1}
						variant="contained"
						startIcon={<EditIcon />}
						style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
						size="large"
					>
						Edit
					</Button>
				</div>
				<TablePagination
					rowsPerPageOptions={[10]}
					component="div"
					count={props.rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}

TasksOverviewTable.propTypes = {
	rows: PropTypes.array.isRequired,
	headings: PropTypes.array.isRequired,
	setSelectedTasks: PropTypes.func.isRequired,
	archiveAction: PropTypes.func.isRequired,
}