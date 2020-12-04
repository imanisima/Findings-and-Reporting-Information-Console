import React, { useState, useEffect, useContext, useMemo} from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from 'react-bootstrap/Tooltip'
import axios from 'axios';
import { SystemContext } from './SystemContext';
import SystemForm from './SystemForm';
import Spinner from '../general/Spinner';
import '../../css/systems/SystemDetailView.css'
import { SystemContext } from '../systems/SystemContext';
import SystemForm from '../systems/SystemForm';
import { DetailViewActionContext } from '../general/LayoutTemplate';
import styles from '../../css/subtasks/SubtaskDetailView.module.css';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

export default function SystemDetailView(props) {

    const [contentIsLoading, setContentIsLoading] = useState(true);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');
	const [router, setRouter] = useState('');
	const [switchName, setSwitchName] = useState('');
	const [room, setRoom] = useState('');
    const [testPlan, setTestPlan] = useState('');
    const [archived, setArchived] = useState('');
    const closeDetailAction = useContext(DetailViewActionContext);
    const findingProviderValue = useMemo(() => ({
		name, setName,
		description, setDescription,
		location, setLocation,
		router, setRouter,
		switchName , setSwitchName,
        room, setRoom,
        testPlan, setTestPlan
    }), [name, description, location, router,
        switchName, room, testPlan]);
		

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const renderTooltip = (props) => (
		<Tooltip id="help-tooltip" {...props} >
			Helpful tooltip goes here...
		</Tooltip>
    );

   
    const handleSaveClick =  () => {
        if (props.selectedSystem != null) {
            console.log(router)
            axios.put('http://localhost:5000/systems/update', {
                params: {
                    id: props.selectedSystem,
                    name: name,
                    description: description,
                    location: location,
                    router: router,
                    switch: switchName,
                    room: room,
                    testPlan: testPlan,
                }
            })
                .then(res => {
                    setContentIsLoading(true);
                    console.log(res);
                    closeDetailAction();
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            const newSystem = {
                name: name,
                description: description,
                location: location,
                router: router,
                switch: switchName,
                room: room,
                testPlan: testPlan,
            };
            console.log(newSystem);
            
            axios.post('http://localhost:5000/systems/add', newSystem)
                        .then(response => {
                            console.log(response.data);
                            window.location = '/systems'
                        })
                        .catch(error => console.log(error));
        }
    };

    
    useEffect(() => {
		//TODO: fetch task object from db using id
        //TODO: set state values using fetched object fields
		console.log(props.selectedSystem);

		if (props.selectedSystem != null) {

            axios.get('http://localhost:5000/systems', {
                params: {
                    id: props.selectedSystem
                }
            })
                .then(res => {
                    setName(res.data.name);
                    setDescription(res.data.description);
                    setLocation(res.data.location);
                    setRouter(res.data.router);
                    setSwitchName(res.data.switch);
                    setRoom(res.data.room);
                    setTestPlan(res.data.testPlan);
                    setContentIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setContentIsLoading(false);
				})
        }
        setContentIsLoading(false)
	}, [props.selectedSystem])

    return (
        (contentIsLoading) ? <Spinner /> :
        <div className={styles.container}>
        <div style={{ textAlign: "center"}}>
            <h4 style={{ display: "inline-block", padding: "0.3em"}}>System Detail View</h4>
            <HelpOutlineRoundedIcon size="large" style={{verticalAlign: "baseline"}}/>
        </div>
        
        <SystemContext.Provider value={systemProviderValue}>
            <SystemForm 
           />
            

        </SystemContext.Provider>

        <div className={styles.actionButtonsContainer}>
					<Button
						className={styles.actionButtons}
						onClick={handleSaveClick}
						variant="contained"
						size="large"
						startIcon={<SaveIcon />}
						color="primary"
					>Save</Button>
					<Button
						className={styles.actionButtons}
						onClick={closeDetailAction}
						variant="contained"
						size="large"
						startIcon={<CancelIcon />}
						color="secondary"
					>Cancel</Button>
				</div>
    </div>
    );
}

SystemDetailView.propTypes = {
    
    selectedSystem: PropTypes.object.isRequired,
    reload: PropTypes.func.isRequired,
	findingArray: PropTypes.array,

    
}