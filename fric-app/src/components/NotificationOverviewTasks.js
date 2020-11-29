/**
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';


import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
    },
    p: {
        marginBottom: '0rem',
    },
	table: {
		minWidth: 750,
    },
    notification: {
        margin: '0.5em 0.5em 0.5em 0.5em',

       
    },
    label:{
        paddingLeft: '25px',
        textAlign: 'center',
        paddingTop: '15px',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        fontSize:'150%',
    },
    labelMissed:{
        paddingLeft: '40px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'verdana',
        fontSize:'150%',
    },
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

export default function NotificationOverviewTasks(props) {
 
    const classes = useStyles();
    var today = new Date();

   
   // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 
       let content=[];
       content.push(<label className={classes.label}><headings>Upcoming Tasks</headings></label>);

    //Upcoming Tasks
    for(let i =0; i < props.rows.length; i++){
       var dD = new Date(props.rows[i].dueDate);
       //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        var range =dD.getDate()- today.getDate() ;
        
        if(today.getMonth()+1 == dD.getMonth()+1 && range < 5 && range >=0  ){
            content.push(<Alert severity="warning" className={classes.notification}>Task:
            <strong>{props.rows[i].name} </strong><p className={classes.p}> {new Date(props.rows[i].dueDate).toLocaleDateString()}</p> </Alert>);
      
        }
    }      
    //Upcoming Subtasks
    for(let i =0; i < props.subs.length; i++){
        dD = new Date(props.subs[i].dueDate);
        //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        range =dD.getDate()- today.getDate() ;
         
         if(today.getMonth()+1 == dD.getMonth()+1 && range <= 5 && range >=0  ){
             content.push(<Alert severity="warning" className={classes.notification}>Subtask:
             <strong>{props.subs[i].name} </strong><p className={classes.p}> {new Date(props.subs[i].dueDate).toLocaleDateString()}</p> </Alert>);
          
         }
     }      
     content.push(<label className={classes.labelMissed}><headings>Missed Tasks</headings></label>);
     //Overdue Tasks 
     for(let i =0; i < props.rows.length; i++){
        dD = new Date(props.rows[i].dueDate);
        //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
         range =dD.getDate()- today.getDate() ;
         
         if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
             content.push(<Alert severity="error" className={classes.notification}>Task:
             <strong>{props.rows[i].name} </strong><p className={classes.p}> {new Date(props.rows[i].dueDate).toLocaleDateString()}</p> </Alert>);
            
         }
     } 
     //OverdueSubtask
     for(let i =0; i < props.subs.length; i++){
        dD = new Date(props.subs[i].dueDate);
        //var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        range =dD.getDate()- today.getDate() ;
         if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
             content.push(<Alert severity="error" className={classes.notification}>Subtask:
             <strong>{props.subs[i].name} </strong><p className={classes.p}> {new Date(props.subs[i].dueDate).toLocaleDateString()}</p> </Alert>);
            
         }
     }
    
    return content;

}


NotificationOverviewTasks.propTypes = {
    rows: PropTypes.array.isRequired,
    subs: PropTypes.array.isRequired,
    
}