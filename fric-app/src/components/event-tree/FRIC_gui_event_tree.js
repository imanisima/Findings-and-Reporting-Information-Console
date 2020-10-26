import React from 'react'
import '../../css/event-tree/FRIC_gui_event_tree.css'
import EventTreeView from './FRIC_gui_event_tree_table'

import { darkTheme } from '../general/ThemeColors'
import LayoutTemplate from '../general/LayoutTemplate';
import { ThemeProvider } from '@material-ui/core/styles';

function FRIC_gui_event_tree() {
    return (
        <ThemeProvider theme = {darkTheme}>
        <LayoutTemplate
            mainContentComponent= {<EventTreeView />}
        />
        </ThemeProvider>
    )
}


export default FRIC_gui_event_tree
