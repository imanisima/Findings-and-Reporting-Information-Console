/**
 * 
 */

import React from 'react';
import MainNav from '../bootstrap/FRIC_gui_navbar.js';
import ConfigurationOverview from '../components/configuration/FRIC_gui_configuration_overview'

export default function ConfigurationPage() {
    return (
        <>
            <MainNav />
            <ConfigurationOverview/>
        </>
    );
}
