/**
 * 
 */

import React from 'react';
import ConfigurationTable from './ConfigurationTable';
import styles from '../../css/configuration/ConfigurationOverview.module.css';

export default function ConfigurationOverview() {
	const configurations = [
		{ title: 'Countermeasures', resource: '/countermeasure' },
		{ title: 'Event Rules', resource: '/event-rule', },
		{ title: 'Event Types', resource: '/event-type', },
		{ title: 'Finding Classes', resource: '/finding-class', },
		{ title: 'Finding Impacts', resource: '/finding-impact', },
		{ title: 'Impact Levels', resource: '/impact', },
		{ title: 'Levels', resource: '/level', },
		{ title: 'Notifications', resource: '/notification', },
		{ title: 'Postures', resource: '/posture', },
		{ title: 'Progressions', resource: '/progress', },
		{ title: 'Report Templates', resource: '/template', },
		{ title: 'Severity Codes', resource: '/severity' },
		{ title: 'Threat Levels', resource: '/threat', },
	];

	return (
		<div className={styles.container}>
			{
				configurations.map(config => {
					return (
						<div key={config.title} className={styles.tableContainer}>
							<ConfigurationTable
								title={config.title}
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
