import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CustomTableHead from '../general/CustomTableHead';
import CustomTableToolbar from '../general/CustomTableToolbar'
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import SystemsDetailView from '../systems/SystemsDetailView'
import { DetailViewActionContext } from '../general/LayoutTemplate';
import axios from 'axios';

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

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});



export default function SystemOverviewTable(props) {
	const classes = useStyles();
	const [dialogOpen, handleDialog] = React.useState(false)
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('title');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(20);
	const openDetailAction = React.useContext(DetailViewActionContext);

	const handleRequestSort = (system, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (system) => {
		if (system.target.checked) {
			const newSelecteds = props.rows.map((n) => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (system, name) => {
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

	const handleChangePage = (system, newPage) => { setPage(newPage); };

	const handleChangeRowsPerPage = (system) => {
		setRowsPerPage(parseInt(system.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	const handleEditClick = () => {
		if (selected != null && selected.length === 1) {
			props.setSelectedSystem(selected[0]);
			openDetailAction();
		}
	}

	const handleArchiveClick = () => {
		if (selected != null && selected.length === 1) {
			console.log("Archive clicked")
			axios.put('http://localhost:5000/systems/update', {
				params: {
					id: selected,
					name: selected.name,
					description: selected.description,
					location: selected.location,
					router: selected.router,
					switch: selected.switchName,
					room: selected.room,
					testPlan: selected.testPlan,
					archived: true
				}
			})
				.then(res => {
					console.log(res);
					window.location = '/systems'
				})
				.catch(err => {
					console.log(err);
				})
		}
	}

	function onNewClicked() {
		console.log("New Clicked");
		handleDialog(true)
	}
	
	function handleDialogClose() {
		handleDialog(false)
	}

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<CustomTableToolbar title="Systems" numSelected={selected.length} onNewClick={onNewClicked} />
				<Dialog
					open={dialogOpen}
					TransitionComponent={Transition}
					keepMounted
					fullWidth={true}
					maxWidth={'md'}
					onClose={handleDialogClose}
					aria-labelledby="slide-dialog-title"
					aria-describedby="slide-dialog-description"
					disableBackdropClick
				>
					<SystemsDetailView closeDetailAction={handleDialogClose}/>
				</Dialog>
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
							{stableSort(props.rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `custom-table-checkbox-${index}`;

									return (
										<StyledTableRow
											hover
											onClick={(system) => handleClick(system, row.name)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name}
											selected={isItemSelected}
										>
											<StyledTableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
													style={{ color: "#066ff9" }}
												/>
											</StyledTableCell>
											<StyledTableCell align="left">{row.name}</StyledTableCell>
											<StyledTableCell align="right">{row.numTasks}</StyledTableCell>
											<StyledTableCell align="right" padding="none">{row.numFindings}</StyledTableCell>
											<StyledTableCell align="left" >{row.progress}</StyledTableCell>

										</StyledTableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 33 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				
				<div style={{display: "inline-block", marginLeft: "1em",}}>
					{/* Edit Button */}
					<Button
						onClick={handleEditClick}
						disabled={selected.length !== 1}
						variant="contained"
						startIcon={<EditIcon />}
						style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
						size="large"
					>Edit</Button>
					{/* Delete Button */}
					<Button
						disabled={selected.length === 0}
						variant="contained"
						startIcon={<ArchiveIcon />}
						style={{ backgroundColor: "#dc3545", margin: "0.5em", }}
						size="large"
						onClick={handleArchiveClick}
					>Archive</Button>
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

SystemOverviewTable.propTypes = {
	rows: PropTypes.array.isRequired,
	headings: PropTypes.array.isRequired,
	setSelectedSystem: PropTypes.func.isRequired,
}