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
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
// import ArchiveIcon from '@material-ui/icons/Archive';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FormControlLabel from '@material-ui/core/FormControlLabel'; // For toggling the dense row setting
import Switch from '@material-ui/core/Switch'; // For toggling the dense row setting
import CustomTableHead from './CustomTableHead';
import CustomTableToolbar from './CustomTableToolbar'

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

export default function CustomTable(props) {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('title');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState((props.rowsDisplayed !== null && props.rowsDisplayed >= 5) ? props.rowsDisplayed : 10);
	const [dense, setDense] = React.useState(true); // For toggling the dense row setting

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

	const handleChangePage = (event, newPage) => { setPage(newPage); };

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event) => { setDense(event.target.checked); }; // For toggling the dense row setting

	const isSelected = (name) => selected.indexOf(name) !== -1;

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<CustomTableToolbar title={props.tableName} numSelected={selected.length} />
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
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
							{stableSort(props.rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.id);
									const labelId = `table-checkbox-${index}`;
									
									function makeRowCells() {
										return props.headings.map(heading => {
											return (
												<StyledTableCell
													id={heading.id}
													key={`${index}-${heading.id}`}
													align={(heading.numeric) ? 'right' : 'left'}
													padding="default"
												>
													{row[heading.id]}
												</StyledTableCell>
											)
										});
									}

									return (
										<StyledTableRow
											hover
											onClick={(event) => handleClick(event, row[props.trackField])}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row[props.trackField]}
											selected={isItemSelected}
										>
											<StyledTableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
													style={{ color: "#066ff9" }}
												/>
											</StyledTableCell>
											{makeRowCells()}
											{/* <StyledTableCell component="th" id={labelId} align="right" scope="row" padding="none">
												{row[props.trackField]}
											</StyledTableCell>
											<StyledTableCell align="left">{row.title}</StyledTableCell>
											<StyledTableCell align="left">{row.task}</StyledTableCell>
											<StyledTableCell align="left" padding="none">{row.analyst}</StyledTableCell>
											<StyledTableCell align="right" padding="none">{row.progress}</StyledTableCell>
											<StyledTableCell align="left" >{row.findings}</StyledTableCell> */}
										</StyledTableRow>
									);
								})
							}
							{emptyRows > 0 && (
								<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>

				{/* Render elements in bottom toolbar */}
				<div style={{ display: "inline-block", verticalAlign: "bottom" }}>
					{props.children}
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
			{/* For toggling the dense row setting */}
			{
				props.controlDensity && (
					<FormControlLabel
						control={<Switch checked={dense} onChange={handleChangeDense} />}
						label="Dense padding"
					/> 
				)
			}
		</div>
	);
}

CustomTable.propTypes = {
	tableName: PropTypes.string.isRequired, // Name that will be displayed in table toolbar
	trackField: PropTypes.string.isRequired, // Field name to track rows by
	headings: PropTypes.array.isRequired, // Table headings
	rows: PropTypes.array.isRequired, // Table row data
	rowsDisplayed: PropTypes.number, // Default is 10
	controlDensity: PropTypes.bool, // Default is false
}
