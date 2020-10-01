/**
 * 
 */

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MainNav from '../../bootstrap/FRIC_gui_navbar';
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
import EventBasicTable from '../events/FRIC_gui_event_basic_information_table'
import LevelTable from "./FRIC_gui_configuration_level_table"
import ReportTemplateTable from './FRIC_gui_configuration_report_templates'
import Notification from "./FRIC_gui_configuration_notification"
import '../../css/event/FRIC_gui_event_overview.css'

class ConfigurationOverview extends Component {

  handleClick() {
    window.location.href = '/configuration/done'
    window.open(window.location.href)
  }

  render() {
    return (
        <div className='configuration_overview_div'>
            <MainNav> </MainNav>
            <br></br><br></br><br></br><br></br>
            <h1>Configuration</h1>
            <br></br>
            <body>
                <br></br>
                <h2>Findings</h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Finding Configuration</Button>
                <FindingsTable />
                <br></br>
                <h2>
                    Postures
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Posture Configuration</Button>
                <PostureTable />
                <h2>
                    Threats
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Threat Configuration</Button>
                <br></br>
                <ThreatTable/>
            <h2>
                Impact Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Impact Configuration</Button>
                <ImpactTable />
                <h2>
                    Finding Classification Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Finding Classification configuration</Button>
                <FindingClassificationTable />
                <h2>
                    Countermeasure Table 
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Countermeasure Configuration</Button>
                <CounterMeasureTable />
                <h2>
                    Event Type Table
                </h2>
                <br></br>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Event Type Configuration</Button>
                <EventTypeTable />
                <h2>
                    Levels Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Levels Configuration</Button>
                <LevelTable />
                <h2>
                    Finding Impact Table
                </h2>
                
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Finding Impact Configuration</Button>
                <FindingImpactTable />
                <h2>
                    Severity Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Severity  Configuration</Button>
                <SeverityTable />
                <h2>
                    Progress Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Progress Configuration</Button>
                <ProgressTable />
                <h2>
                    Event Table rules
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Event Table Configuration</Button>
                <EventBasicTable /> 
                 <h2>
                    Report Template Table
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Report Template configuration</Button>
                <ReportTemplateTable />
                <h2>
                    Notifications
                </h2>
                <Button type="submit" className="add_btn" onClick={this.handleClick} variant="primary">Notification Configuration</Button>
                <Notification/>
                </body>

        <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Save Changes</Button>
        </div>
    );
  }
}

export default ConfigurationOverview