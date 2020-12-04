/**
 * 
 */

import axios from 'axios';
import React, { useState, useLayoutEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import BuildIcon from '@material-ui/icons/Build';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import FindPageIcon from '@material-ui/icons/FindInPage';
import DnsIcon from '@material-ui/icons/Dns';
import UsersIcon from '@material-ui/icons/SupervisedUserCircle';
import DescriptionIcon from '@material-ui/icons/Description';
// import ReceiptIcon from '@material-ui/icons/Receipt';

import OverviewCard from './OverviewCard';
import ChartCard from './ChartCard';
import Spinner from '../general/Spinner';

export default function SummaryView() {
	const [contentIsLoading, setContentIsLoading] = useState(true);
	const [numAnalysts, setNumAnalysts] = useState(0);
	const [numSystems, setNumSystems] = useState(0);
	const [numConfigs, setNumConfigs] = useState(0);
	const [numReports, setNumReports] = useState(0);
	const [findingsInfo, setFindingsInfo] = useState({});
	const [tasksInfo, setTasksInfo] = useState({});
	const [subtasksInfo, setSubtasksInfo] = useState({});

	useLayoutEffect(() => {
		setContentIsLoading(true);

		axios.get('http://localhost:5000/summary')
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					if (res.data.numAnalysts) setNumAnalysts(res.data.numAnalysts);
					if (res.data.numSystems) setNumSystems(res.data.numSystems);
					if (res.data.numConfigs) setNumConfigs(res.data.numConfigs);
					if (res.data.numReports) setNumReports(res.data.numReports);
					if (res.data.finding_stats) setFindingsInfo(res.data.finding_stats);
					if (res.data.task_stats) setTasksInfo(res.data.task_stats);
					if (res.data.subtask_stats) setSubtasksInfo(res.data.subtask_stats);

					setContentIsLoading(false);
				} else console.log('Fetch progress summary failed.');
			})
			.catch(err => {
				console.log(err);
				//TODO: display error message
				setContentIsLoading(false);
			});
	}, [])

	return (
		<>
			{
				(contentIsLoading) ? <Spinner /> : (
					<>
						<div style={{display: 'inline'}}>
							<ChartCard />
						</div>

						<div style={{ display: 'inline-block' }}>
							<Card style={{ margin: '1em 0 1em 0', maxWidth: 800 }}>
								<CardContent style={{ textAlign: 'center' }}>
									<OverviewCard for="Analysts" amount={numAnalysts} icon={<UsersIcon color="primary" />} />
									<OverviewCard for="Systems" amount={numSystems} icon={<DnsIcon color="primary" />} />
									<OverviewCard for="Configurations" amount={numConfigs} icon={<BuildIcon color="primary" />} />
								</CardContent>
							</Card>

							<Card style={{ margin: '1em 0 1em 0', maxWidth: 800 }}>
								<CardContent style={{ textAlign: 'center' }}>
									<OverviewCard for="Active Findings" amount={findingsInfo.active} icon={<FindPageIcon color="action" />} />
									<OverviewCard for="Archived Findings" amount={findingsInfo.archived} icon={<FindPageIcon color="error" />} />
									<OverviewCard for="Reports" amount={numReports} icon={<DescriptionIcon color="action" />} />
								</CardContent>
							</Card>

							<Card style={{ margin: '1em 0 1em 0', maxWidth: 800 }}>
								<CardContent style={{textAlign: 'center' }}>
									<OverviewCard for="Completed Tasks" amount={tasksInfo.complete} icon={<CheckedIcon color="action" />} />
									<OverviewCard for="Incomplete Tasks" amount={tasksInfo.incomplete} icon={<CheckedIcon color="secondary" />} />
									<OverviewCard for="Archived Tasks" amount={tasksInfo.archived} icon={<CheckedIcon color="error" />} />
								</CardContent>
							</Card>

							<Card style={{ margin: '1em 0 1em 0', maxWidth: 800 }}>
								<CardContent style={{ textAlign: 'center' }}>
									<OverviewCard for="Completed Subtasks" amount={subtasksInfo.complete} icon={<LowPriorityIcon color="action" />} />
									<OverviewCard for="Incomplete Subtasks" amount={subtasksInfo.incomplete} icon={<LowPriorityIcon color="secondary" />} />
									<OverviewCard for="Archived Subtasks" amount={subtasksInfo.archived} icon={<LowPriorityIcon color="error" />} />
								</CardContent>
							</Card>
							
							{/* <OverviewCard for="Reports" amount="0" icon={<DescriptionIcon color="secondary" />} /> */}
							{/* <OverviewCard for="Transactions" amount="69" icon={<ReceiptIcon color="secondary" />} /> */}
						</div>
						<div>
							<Doughnut id="donut" width={400} height={80} data={{}} />
						</div>
					</>
				)
			}
			
		</>
	);
}