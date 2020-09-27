/**
 * 
 */

import React from 'react';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import SyncOverview from '../components/sync/FRIC_gui_sync_overview'

export default function Sync() {
	return (
		<>
			<MainNav />
			<SyncOverview />
		</>
	);
}
