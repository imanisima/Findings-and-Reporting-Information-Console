/**
 * 
 */
import React from 'react';
import CheckedIcon from '@material-ui/icons/AssignmentTurnedIn';
import LowPriorityIcon from '@material-ui/icons/AssignmentReturned';
import DnsIcon from '@material-ui/icons/Dns';
import axios from "axios";


import OverviewCard from './OverviewCard';
import ChartCard from './ChartCard';

	var completeSystem = 0;
	var completeTask = 0;
	var completeSubtask = 0;
	var incompleteSystem = 0;
	var incompleteTask = 0;
	var incompleteSubtask = 0;


export default function SummaryView() {
	//var assert = require('assert')
	//var expect = require('chai').expect
	//var promise = new Promise(function (completeTask, incompleteTask))
    async function fetchtask() {
        await axios.get('http://localhost:5000/tasks', {
            params: {}
        })
            .then(res => {
                const longeur = res.data.length;

                for (var i = 0; i < res.data.length; i++) {
                    //console.log(i)
                    if (res.data[i].progress === "Complete") {
                        completeTask = completeTask + 1;
                        //console.log('Complete task',completeTask)
                    }
                    else {
                        incompleteTask = incompleteTask + 1
                        //console.log('incomplete',incompleteTask)
                    }
                }
                localStorage.setItem("CompleteT", completeTask);
                localStorage.setItem("IncompleteT", longeur - completeTask);
                console.log('Complete task', completeTask)
                console.log('Incomplete task', longeur - completeTask)
            })
        return axios(completeTask);
    }
    async function fetchSystem() {
        await axios.get('http://localhost:5000/systems', {
            params: {}
        })
            .then(res => {
                const Sylongeur = res.data.length;

                for (var i = 0; i < res.data.length; i++) {
                    console.log(i)
                    if (res.data[i].progress === "Complete") {
                        completeSystem = completeSystem + 1;
                        //console.log('Complete task',completeTask)
                    }
                    else {
                        incompleteSystem = incompleteSystem + 1
                        //console.log('incomplete',incompleteTask)
                    }
                }
                localStorage.setItem("CompleteSy", completeSystem);
                localStorage.setItem("IncompleteSy", completeSystem - Sylongeur);
                console.log('Complete Sytask', completeSystem)
                console.log('Incomplete Sytask', completeSystem - Sylongeur)
            })
        return axios(completeSystem)
    }
    async function fetchSubtask() {
			 await axios.get('http://localhost:3000/subtasks', {
			params: {}
		})
            .then(res => {
                const Slongeur = res.data.length;
                for (var i = 0; i < res.data.length; i++) {
                    console.log(i)
                    if (res.data[i].progress === "Complete") {
                        completeSubtask = completeSubtask + 1;
                        //console.log('Complete task',completeTask)
                    }
                    else {
                        incompleteSubtask = incompleteSubtask + 1
                        //console.log('incomplete',incompleteTask)
                    }
                }
                localStorage.setItem("CompleteS", completeSubtask);
                localStorage.setItem("IncompleteS", Slongeur - completeTask);
                console.log('Complete Stask', completeSubtask)
                console.log('Incomplete Stask', incompleteSubtask)
            })
		//console.log('Complete task', completeTask)

	};
    
	//fetch();
	//console.log('Complete task', completeTask)
	return (
		<>
			<ChartCard />
			<div>
                <OverviewCard for="Complete Systems" amount={Math.abs(localStorage.getItem("CompleteSy"))} icon={<DnsIcon color="action" />} />
                <OverviewCard for="Complete Tasks" amount={Math.abs(localStorage.getItem("CompleteT"))} icon={<CheckedIcon color="action" />} />
                <OverviewCard for="Complete Subtasks" amount={Math.abs(localStorage.getItem("CompleteS"))} icon={<LowPriorityIcon color="action" />} />
			</div>
			
			<div>
                <OverviewCard for="Incomplete Systems" amount={Math.abs(localStorage.getItem("IncompleteSy"))} icon={<DnsIcon color="secondary" />} />
                <OverviewCard for="Incomplete Tasks" amount={Math.abs(localStorage.getItem("IncompleteT"))} icon={<CheckedIcon color="secondary" />} />
				<OverviewCard for="Incomplete Subtasks" amount={Math.abs(localStorage.getItem("IncompleteS"))} icon={<LowPriorityIcon color="secondary" />} />
			</div>
		</>
	);
}