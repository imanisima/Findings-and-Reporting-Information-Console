
/**
 * 
 */

import React, { useState, createContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../components/general/ThemeColors';
import LayoutTemplate from '../components/general/LayoutTemplate';
import ConfigurationOverview from '../components/configurations/ConfigurationOverview';
import ConfigurationDetailView from '../components/configurations/ConfigurationDetailView';

export const ConfigDetailContext = createContext(null);

var configReload = () => {};
const setConfigReload = (func) => configReload = func;

export default function ConfigurationPage() {
	const [detailConfig, setDetailConfig] = useState(null);
	const [configType, setConfigType] = useState(null);

	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={
					<ConfigDetailContext.Provider value={{ setDetailConfig, setConfigType, setConfigReload }}>
						<ConfigurationOverview />
					</ConfigDetailContext.Provider>
				}
				detailComponent={<ConfigurationDetailView selected={detailConfig} type={configType} reload={configReload} />}
			/>
		</ThemeProvider>
	);
}
