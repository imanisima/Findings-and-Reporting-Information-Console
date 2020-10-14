/**
 * 
 */

import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { darkTheme } from '../components/general/ThemeColors';
import LayoutTemplate from '../components/general/LayoutTemplate';
import TestComponent from '../components/tasks/NewTaskDialog';

import TaskForm from '../components/tasks/TaskForm';

export default function TestPage() {
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				{/* <LayoutTemplate
					mainContentComponent={ <></> }
				/> */}

				<Button color="primary" variant="contained" onClick={() => setDialogOpen(true)}>Open Dialog</Button>

				<TestComponent isOpen={dialogOpen} closeDialogAction={() => setDialogOpen(false)}>
					<TaskForm />
				</TestComponent>
			</ThemeProvider>
		</>
	);
}
