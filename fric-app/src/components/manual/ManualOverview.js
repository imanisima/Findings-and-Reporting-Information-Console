import React, {Component} from 'react';
import '../../css/manual/ManualOverview.css'

// class ManualOverview extends Component {
  class ManualOverview extends Component{

    handleClick() {
      window.location.href = '/manual'
      window.open(window.location.href)
    }

    // render() {

    // }
     
  }
  
  export default ManualOverview