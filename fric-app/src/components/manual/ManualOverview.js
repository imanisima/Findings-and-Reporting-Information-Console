import React, {Component} from 'react';
import '../../css/manual/ManualOverview.css'

class ManualOverview extends Component {

    handleClick() {
      window.location.href = '/manual'
      window.open(window.location.href)
    }
  
    render() {
      return (
        <>
        {/* <Button type="submit" className="add_btn" onClick ={this.handleClick} variant="primary">Add new finding</Button>
        <Button className="erb_btn" variant="primary">ERB Report</Button>
        <Button className="risk_btn" variant="primary">Risk Matrix</Button>
        <Button className="final_btn" variant="primary">Final Report</Button>
        <FindingsTable></FindingsTable> */}
        </>
      );
    }
  }
  
  export default ManualOverview