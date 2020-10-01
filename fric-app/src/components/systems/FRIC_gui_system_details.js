import React, {Component} from 'react';
import SystemsInformation from './FRIC_gui_system_information';

import '../../css/systems/FRIC_gui_system_details.css'

class SystemDetail extends Component {
    render() {
        return(
            <div className='systems_detail_div'>
                <br></br><br></br><br></br><br></br>
                <SystemsInformation> </SystemsInformation>
            </div>
        )
    }
}

export default SystemDetail