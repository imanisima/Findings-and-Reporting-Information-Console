import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Form from 'react-bootstrap/Form';
import styles from '../../../css/subtasks/NewSubtaskDialog.module.css'
import { ERBCreator } from './ERBCreator'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const analystsList = [
    { id: 1, name: 'Erick Nevarez', role: 'Lead Analyst' },
    { id: 2, name: 'Raquel Gonzales', role: 'Analyst' },
    { id: 3, name: 'Imani Martin', role: 'Analyst' },
    { id: 4, name: 'Marco Soto', role: 'Analyst' },
    { id: 5, name: 'Ricardo Aguilar', role: 'Analyst' },
    { id: 6, name: 'Jose Marquez', role: 'Analyst' }
]
export default function ErbForm(props){
    //Build your functions here
    const [selectedAnalysts, setSelectedAnalysts] = useState([]);
    const [selectedRankTitle, setRankTitle] = useState([]);

    const handleAnalystSelect = function (selectedItems) {
        const analysts = [];
        for (let i = 0; i < selectedItems.length; i++) {
            let analyst = analystsList.find(a => a.name === selectedItems[i].value)
            analysts.push(analyst);
        }
        console.log(analysts)
        setSelectedAnalysts(analysts);
        console.log(selectedAnalysts)
    }
    const handleRankTitle = function (selectedItems) {
        var rankTitle = "";
        rankTitle = document.getElementById("titleRank").value;

        console.log(rankTitle)
        setRankTitle(rankTitle);
        console.log(selectedRankTitle)
    }
        
    const generatePPT = async () => {
        const PptCreator = new ERBCreator();
        const presentation = PptCreator.create(selectedAnalysts,selectedRankTitle)
        };
  

    const handleSubmit = () => {
        generatePPT();
        props.closeDialogAction();
    }

    const handleClose = () => {
        props.closeDialogAction();
    }
    
    return (
        <Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			scroll="body"
            keepMounted
            fullWidth={true}
			maxWidth={'md'}
			disableBackdropClick
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			<DialogTitle id="scroll-dialog-title" className={styles.title}>Emerging Results Brief Form</DialogTitle>
			<DialogContent dividers={true}>
                    {/*Build your UI form in here*/}
                <h2>Emerging Results Brief Form</h2>
                <Form>
                    <Form.Group controlId="AnalystForm">
                        <Form.Label>Analyst(s) in the Event</Form.Label>
                        <Form.Control as="select" multiple onChange={e => handleAnalystSelect(e.target.selectedOptions)}>
                            {analystsList.map(analyst => (
                                <option key={analyst.id} value={analyst.name}>{analyst.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Text muted> Hold CTRL or Command for multiple select</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="RankTitle">
                        <Form.Label>Rank/Title of Presenter</Form.Label>
                        <Form.Control as="textarea" id = "titleRank" rows={1} name="RankTitle" onChange={e => handleRankTitle(e.target.selectedOptions)} />
                        <Form.Text muted>Ex. CISSP, CE|H, Security+</Form.Text>
                    </Form.Group>

                </Form>
            </DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit} variant="contained" size="large" color="primary">Submit</Button>
				<Button onClick={handleClose} variant="contained" size="large" color="secondary">Cancel</Button>
			</DialogActions>
        </Dialog>

    )
}

ErbForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDialogAction: PropTypes.func.isRequired,
}