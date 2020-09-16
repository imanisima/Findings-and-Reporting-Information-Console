import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const tasks = [
  {
    tasknum: 1,
    name: 'Check Errors',
    system: 'Wells Fargo ATM',
    status: 'In Progress',
    priority: 'Moderate',
    duedate: '08/20/2020',
    id: 'AC'
  }, {
    tasknum: 2,
    name: 'Blind SQL Injection',
    system: 'Wells Fargo ATM',
    status: 'Completed',
    priority: 'High',
    duedate: '09/05/2020',
    id: 'DB'
  }, {
    tasknum: 3,
    name: 'Run Wireshark',
    system: 'Wells Fargo Switch #5',
    status: 'Ackowledged',
    priority: 'Low',
    duedate: '09/20/2020',
    id: 'IE'
  }
];

// filtering
const selectPriorityOptions = {
  0: 'low',
  1: 'moderate',
  2: 'high'
};

const selectStatusOptions = {
  0: 'Acknowledged',
  1: 'In Progress',
  2: 'Complete',
  3: 'Not do-able'
};


const columns = [
  {
    dataField: "id",
    hidden: true
  },
  {
    dataField: "name",
    text: "Task",
    sort: true,
    footer: 'Task',
    // filter: textFilter()
  },
  {
    dataField: "system",
    text: "System",
    footer: 'System',
    sort: true,
    // filter: textFilter()
  },
  {
    dataField: "status",
    text: "Status",
    footer: 'Status',
    sort: true,

    editor: {
      type: Type.SELECT,
      getOptions: (setOptions, { row, column }) => {
        console.log(`current editing row id: ${row.id}`);
        console.log(`current editing column: ${column.dataField}`);
        return [{
          value: 'In Progress',
          label: 'In Progress',
        }, {
          value: 'Acknowledged',
          label: 'Acknowledged',
        }, {
          value: 'Complete',
          label: 'Complete',
        }, {
          value: 'Not do-able',
          label: 'Not do-able',
        }];
      }
    }
  },
  {
    dataField: "priority",
    text: "Priority",
    footer: 'Priority',
    sort: true,

    editor: {
      type: Type.SELECT,
      getOptions: (setOptions, { row, column }) => {
        console.log(`current editing row id: ${row.id}`);
        console.log(`current editing column: ${column.dataField}`);
        return [{
          value: 'High',
          label: 'High',
        }, {
          value: 'Moderate',
          label: 'Moderate',
        }, {
          value: 'Low',
          label: 'Low',
        }];
      }
    }
  },
  {
    dataField: "duedate",
    text: "Due Date",
    footer: 'Due Date',
    sort: true
  }
];

/* Pagination */
const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange
}) => (
  <div className="btn-group" role="group">
    {
      options.map((option) => {
        const isSelect = currSizePerPage === `${option.page}`;
        return (
          <button
            key={ option.text }
            type="button"
            onClick={ () => onSizePerPageChange(option.page) }
            className={ `btn ${isSelect ? 'btn-secondary' : 'btn-warning'}` }
          >
            { option.text }
          </button>
        );
      })
    }
  </div>
);


/* Insert */
function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
  alert('The new row is:\n ' + newRowStr);
}

/* Sorting */
const defaultSorted = [{
  dataField: 'duedate',
  order: 'desc'
}];


const options = {
  sizePerPageRenderer,
  afterInsertRow: onAfterInsertRow
};

const { SearchBar } = Search;
const BasicTable = () => {
  return (

    // <BootstrapTable
    <BootstrapTable
      keyField="id"
      data={ tasks }
      columns={ columns }

      insertRow={ true }
      options={ options }
      striped
      defaultSorted={ defaultSorted } 
      
      cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true }) }
      
      hover
      // pagination={ paginationFactory(options)}
      
    >


      {
        props => (
          <div>
            <h3>Input something at below input field:</h3>
            <SearchBar
              { ...props.searchProps }
              className="custome-search-field"
              style={ { color: 'black' } }
              delay={ 100 }
              placeholder="Search..."
            />
            <hr />
            <BootstrapTable
              { ...props.baseProps }
            />
          </div>
        )
      }
    </BootstrapTable>
  );
};

export default BasicTable;
