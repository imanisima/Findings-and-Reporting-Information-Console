import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

class ConfigManual extends Component {
    render() {
      return (
        <Container fixed>
            <h1> Configuration </h1>
            <p> Manage the actions of any page from here! </p>

            Select the component you would like to manage, the option (Edit or Delete), and then the select "Save" buttoon at the bottom to save your changes.



        </Container>

      );
    }
}

export default ConfigManual