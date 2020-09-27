import React from 'react';
import PropTypes from 'prop-types';
import CustomTable from "../general/CustomTable";

export default function EventOverviewTable(props) {
	return  <CustomTable rows={props.rows} headings={props.headings} />;
}

EventOverviewTable.propTypes = {
	rows: PropTypes.object.isRequired,
	headings: PropTypes.object.isRequired,
}
