/**
 * 
 */

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import PostureTable from './FRIC_gui_configuration_posture_table'
import ThreatTable from './FRIC_gui_configuration_threat_table'
import ImpactTable from './FRIC_gui_configuration_impact_table'
import CounterMeasureTable from './FRIC_gui_configuration_countermeasure_table'
import FindingClassificationTable from './FRIC_gui_configuration_finding_classification_table'
import EventTypeTable from './FRIC_gui_configuration_EventType_table'
import FindingImpactTable from './FRIC_gui_configuration_finding_impact_table'
import SeverityTable from './FRIC_gui_configuration_severity_table'
import ProgressTable from './FRIC_gui_configuration_progress_table'
import ReportTemplateTable from './FRIC_gui_configuration_report_templates'
import Notification from "./FRIC_gui_configuration_notification"

class ConfigurationOverview extends Component {

  handleClick() {
    window.location.href = '/configuration/done'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='configuration_overview_div'>
            <br></br><br></br><br></br><br></br>
            <h1>Configuration</h1>
            <br></br>
            <body>
                <h2>Finding</h2>
                < FindingClassificationTable />
                <br></br>
                <h2>
                    Posture
                </h2>
                <PostureTable />
                <h2>
                    Threat
                </h2>
                <ThreatTable/>
            <h2>
                Impact Table
                </h2>
                <ImpactTable />
                <h2>
                    Finding Classification
                </h2>
                <FindingClassificationTable />
                <h2>
                    CounterMeasureTable 
                </h2>
                <CounterMeasureTable />
                <h2>
                    EventTypeTable
                </h2>
                <EventTypeTable />
                <h2>
                    Finding Impact Table
                </h2>
                <FindingImpactTable />
                
                <h2>
                    SeverityTable
                </h2>
                <SeverityTable />
                
                <h2>
                    ProgressTable
                </h2>
                <ProgressTable />
                <></>
                 <h2>
                    Report Template Table
                </h2>
                <ReportTemplateTable />
                <h2>
                    Notification
                </h2>
                <Notification/>
                </body>
        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Save Changes</Button>
        </div>
    );
  }
}

export default ConfigurationOverview