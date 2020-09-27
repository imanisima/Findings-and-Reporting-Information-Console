/**
 * 
 */

import React from 'react';
import MainNav from '../bootstrap/FRIC_gui_navbar';
import SubtasksContentView from '../components/subtasks/SubtasksContentView'

export default function SubtasksPage() {
	return (
		<>
			<MainNav />
			<SubtasksContentView />
		</>
	);
}
