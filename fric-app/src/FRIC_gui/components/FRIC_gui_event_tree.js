import React from 'react'
import MainNav from '../bootstrap/FRIC_gui_navbar' ;
import '../css/FRIC_gui_event_tree.css'
import EventTreeView from '../components/FRIC_gui_event_tree_table'

function FRIC_gui_event_tree() {
    return (
        <div className= "event_tree_view">
            <MainNav/>
            <h1>Event Tree</h1>
            <h2> <EventTreeView/> </h2>

        </div>
    )
}

export default FRIC_gui_event_tree
