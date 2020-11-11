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
    
	table: {
		minWidth: 750,
    },
    notification: {
        margin: '0.5em 0.5em 0.5em 0.5em',
       
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
export var count = 0;
export default function NotificationOverviewTasks(props) {
    const classes = useStyles();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
   //props.rows.map((n) =>{ 
       let content=[];
    for(let i =0; i < props.rows.length; i++){
       var dD = new Date(props.rows[i].dueDate);
       var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
        var range =dD.getDate()- today.getDate() ;
        
        if(today.getMonth()+1 == dD.getMonth()+1 && range < 5 && range >=0  ){
            content.push(<Alert severity="warning" className={classes.notification}>
            <strong>{props.rows[i].name} </strong><p> {new Date(props.rows[i].dueDate).toLocaleDateString()}</p> </Alert>);
            count++;
        }else if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
            content.push(<Alert severity="error" className={classes.notification}>
            <strong>{props.rows[i].name} </strong><p> {new Date(props.rows[i].dueDate).toLocaleDateString()}</p> </Alert>);
            count++;
        }
    }      
    for(let i =0; i < props.subs.length; i++){
        var dD = new Date(props.subs[i].dueDate);
        var duedate = dD.getFullYear()+'-'+(dD.getMonth()+1)+'-'+dD.getDate();
         var range =dD.getDate()- today.getDate() ;
         
         if(today.getMonth()+1 == dD.getMonth()+1 && range <= 5 && range >=0  ){
             content.push(<Alert severity="warning" className={classes.notification}>
             <strong>{props.subs[i].name} </strong><p> {new Date(props.subs[i].dueDate).toLocaleDateString()}</p> </Alert>);
             count++;
         }else if(today.getMonth()+1 == dD.getMonth()+1 && dD.getDate()< today.getDate() && Math.abs(range) <= 5){
             content.push(<Alert severity="error" className={classes.notification}>
             <strong>{props.subs[i].name} </strong><p> {new Date(props.subs[i].dueDate).toLocaleDateString()}</p> </Alert>);
             count++;
         }
     }      
     console.log(count);
    return content;

}


NotificationOverviewTasks.propTypes = {
    rows: PropTypes.array.isRequired,
    subs: PropTypes.array.isRequired,
    
}