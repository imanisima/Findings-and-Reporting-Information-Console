import React from "react";
import EventOverviewTable from "./EventOverviewTable";
import EventDetailView from "./EventDetailView";
import styles from "../../css/event/EventsContentView.module.css";
import { data, headings, eventTestObject, options } from "../general/test/eventstestdata"; //TODO: remove test data import when connected to backend

export default function EventContentView() {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.tableView}>
				<EventOverviewTable rows={data} headings={headings} />
			</div>
			<div className={styles.detailView}>
				<EventDetailView selectedTask={eventTestObject} options={options} />
			</div>
		</div>
	);
}
