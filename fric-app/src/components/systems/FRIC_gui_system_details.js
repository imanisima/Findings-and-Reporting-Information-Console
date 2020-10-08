import React, {Component} from 'react';
import SystemDetailView from './SystemsInformation';

import '../../css/systems/FRIC_gui_system_details.css'

class SystemDetail extends Component {
    render() {
        return(
            <div className='systems_detail_div'>
                <br></br><br></br><br></br><br></br>
                <SystemDetailView> </SystemDetailView>
            </div>
        )
    }
}

export default SystemDetail