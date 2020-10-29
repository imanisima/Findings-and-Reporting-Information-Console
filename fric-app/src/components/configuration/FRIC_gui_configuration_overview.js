/**
 * 
 */

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import FindingsTable from '../findings/FRIC_gui_findings_table';
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
                <label>Finding</label>
                <FindingsTable />
                <br></br>
                <label>
                    Posture
                </label>
                <PostureTable />
                <label>
                    Threat
                </label>
                <ThreatTable/>
            <label>
                Impact Table
                </label>
                <ImpactTable />
                <label>
                    Finding Classification
                </label>
                <FindingClassificationTable />
                <label>
                    CounterMeasureTable 
                </label>
                <CounterMeasureTable />
                <label>
                    EventTypeTable FindingImpactTable
                </label>
                <EventTypeTable />
                <label>
                    Finding Impact Table
                </label>
                <FindingImpactTable />
                
                <label>
                    SeverityTable
                </label>
                <SeverityTable />
                
                <label>
                    ProgressTable
                </label>
                <ProgressTable />
                <label>
                    Event Table rules
                </label>
                <></>
                 <label>
                    Report Template Table
                </label>
                <ReportTemplateTable />
                <label>
                    notification
                </label>
                <Notification/>
                </body>
        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Save Changes</Button>
        </div>
    );
  }
}

export default ConfigurationOverview