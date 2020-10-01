import React, {Component} from 'react';
import FindingsInformation from './FRIC_gui_finding_information';
import '../../css/findings/FRIC_gui_findings_details.css';
import FindingsImpact from './FRIC_gui_finding_impact';
import FindingsAnalyst from './FRIC_gui_finding_analyst';
import FindingsMitigation from './FRIC_gui_finding_mitigation'
import FindingsExtras from './FRIC_gui_findings_extras';
import MainNav from '../../bootstrap/FRIC_gui_navbar';

class FindingsDetail extends Component {
    render() {
      return (
        <div className='finding_details_div'>
          <MainNav> </MainNav>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <FindingsInformation> </FindingsInformation>
          <FindingsImpact> </FindingsImpact>
          <FindingsAnalyst> </FindingsAnalyst>
          <FindingsMitigation> </FindingsMitigation>
          <FindingsExtras> </FindingsExtras>
        </div>
      );
    }
}

export default FindingsDetail