/**
 * 
 */

import React from 'react';
import ConfigurationTable from './ConfigurationTable';
import styles from '../../css/configuration/ConfigurationOverview.module.css';

export default function ConfigurationOverview() {
	const configurations = [
		{ title: 'Countermeasures', type: 'Countermeasure', resource: '/countermeasure' },
		{ title: 'Event Rules', type: 'Event Rule', resource: '/event-rule', },
		{ title: 'Event Types', type: 'Event Type', resource: '/event-type', },
		{ title: 'Finding Classes', type: 'Finding Class', resource: '/finding-class', },
		{ title: 'Finding Impacts', type: 'Finding Impact', resource: '/finding-impact', },
		{ title: 'Impact Levels', type: 'Impact Level', resource: '/impact', },
		{ title: 'Levels', type: 'Level', resource: '/level', },
		{ title: 'Notifications', type: 'Notification', resource: '/notification', },
		{ title: 'Postures', type: 'Posture', resource: '/posture', },
		{ title: 'Progressions', type: 'Progression', resource: '/progress', },
		{ title: 'Report Templates', type: 'Report Template', resource: '/template', },
		{ title: 'Severity Codes', type: 'Severity Code', resource: '/severity' },
		{ title: 'Threat Levels', type: 'Threat Level', resource: '/threat', },
	];

	return (
		<div className={styles.container}>
			{
				configurations.map(config => {
					return (
						<div key={config.title} className={styles.tableContainer}>
							<ConfigurationTable
								title={config.title}
								configType={config.type}
								baseURL={'http://localhost:5000/configure' + config.resource}
							/>
							<hr />
						</div>
					);
				})
			}
		</div>
	);
}
