import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const tasks = [
  {
    tasknum: 1,
    name: 'Check Errors',
    system: 'Wells Fargo ATM',
    status: 'In Progress',
    priority: 'M',
    duedate: '08/20/2020',
    id: 'AC'
  }, {
    tasknum: 2,
    name: 'Blind SQL Injection',
    system: 'Wells Fargo ATM',
    status: 'Completed',
    priority: 'H',
    duedate: '09/05/2020',
    id: 'DB'
  }, {
    tasknum: 3,
    name: 'Run Wireshark',
    system: 'Wells Fargo Switch #5',
    status: 'Ackowledged',
    priority: 'L',
    duedate: '09/20/2020',
    id: 'IE'
  }
];

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
  },
  {
    dataField: "system",
    text: "System",
    footer: 'System',
  },
  {
    dataField: "status",
    text: "Status",
    footer: 'Status',
  },
  {
    dataField: "priority",
    text: "Priority",
    footer: 'Priority',
  },
  {
    dataField: "duedate",
    text: "Due Date",
    footer: 'Due Date',
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

      
      
      hover
      pagination={ paginationFactory(options)}
      
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
