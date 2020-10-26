/**
 * 
 */

import React from 'react';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import DnsIcon from '@material-ui/icons/Dns';


import OverviewCard from './OverviewCard';
import ChartCard from './ChartCard';


const completeSystem = 4;
const completeTask = 12;
const completeSubtask = 35;

const incompleteSystem = 2;
const incompleteTask = 3;
const incompleteSubtask = 4;

export default function SummaryView() {
	return (
		<>
			<ChartCard />
			<div>
				<OverviewCard for="Complete Systems" amount= {completeSystem} icon={<DnsIcon color="action" />} />
				<OverviewCard for="Complete Tasks" amount={completeTask} icon={<CheckedIcon color="action" />} />
				<OverviewCard for="Complete Subtasks" amount={completeSubtask} icon={<LowPriorityIcon color="action" />} />
			</div>
			
			<div>
				<OverviewCard for="Incomplete Systems" amount={incompleteSystem} icon={<DnsIcon color="secondary" />} />
				<OverviewCard for="Incomplete Tasks" amount={incompleteTask} icon={<CheckedIcon color="secondary" />} />
				<OverviewCard for="Incomplete Subtasks" amount={incompleteSubtask} icon={<LowPriorityIcon color="secondary" />} />
			</div>
		</>
	);
}