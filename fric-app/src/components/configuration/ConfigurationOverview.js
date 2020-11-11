/**
 * 
 */

import React from 'react';
import ConfigurationTable from './ConfigurationTable';

export default function ConfigurationOverview() {
	const configurations = [
		{ title: 'Countermeasure Options', resource: '/countermeasure' },
		{ title: 'Event Rule Options', resource: '/event-rule', },
		{ title: 'Event Type Options', resource: '/event-type', },
		{ title: 'Finding Class Options', resource: '/finding-class', },
		{ title: 'Finding Impact Options', resource: '/finding-impact', },
		{ title: 'Impact Level Options', resource: '/impact', },
		{ title: 'Level Options', resource: '/level', },
		{ title: 'Notification Options', resource: '/notification', },
		{ title: 'Posture Options', resource: '/posture', },
		{ title: 'Progress Options', resource: '/progress', },
		{ title: 'Report Template Options', resource: '/template', },
		{ title: 'Severity Code Options', resource: '/severity' },
		{ title: 'Threat Level Options', resource: '/threat', },
	];

	return (
		<>
			{
				configurations.map(config => {
					return (
						<div key={config.title}>
							<ConfigurationTable
								title={config.title}
								baseURL={'http://localhost:5000/configure' + config.resource}
							/>
							<hr />
						</div>
					);
				})
			}
		</>
	);
}
