/**
 * 
 */

import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import FindPageIcon from '@material-ui/icons/FindInPage';
import DnsIcon from '@material-ui/icons/Dns';
import UsersIcon from '@material-ui/icons/SupervisedUserCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DescriptionIcon from '@material-ui/icons/Description';
import OverviewCard from './OverviewCard';
import EventTreeCard from './EventTreeCard';
import ChartCard from './ChartCard';

import { Doughnut } from 'react-chartjs-2';

export default function SummaryView() {
	const chartData = {
		
	}

	return (
		<>
			<div>
				<ChartCard />
			</div>
			<div>
				<OverviewCard for="Events" amount="1" icon={<EventIcon color="secondary" />} />
				<OverviewCard for="Systems" amount="4" icon={<DnsIcon color="secondary" />} />
				<OverviewCard for="Analysts" amount="4" icon={<UsersIcon color="secondary" />} />
				<OverviewCard for="Findings" amount="1" icon={<FindPageIcon color="secondary" />} />
				<OverviewCard for="Reports" amount="0" icon={<DescriptionIcon color="secondary" />} />
				<OverviewCard for="Tasks" amount="12" icon={<CheckedIcon color="secondary" />} />
				<OverviewCard for="Subtasks" amount="35" icon={<LowPriorityIcon color="secondary" />} />
				<OverviewCard for="Transactions" amount="69" icon={<ReceiptIcon color="secondary" />} />
			</div>
			<div>
				<Doughnut id="donut" width={30} height={60} data={chartData} />
			</div>
			<div>
				<EventTreeCard />
			</div>
		</>
	);
}