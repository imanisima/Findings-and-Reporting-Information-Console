import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import FinalReportForm from './final-report/FinalReportForm'
import ErbForm from './erb/ErbForm'
import RiskMatrixForm from './risk-matrix/RiskMatrixForm'

export default function ReportOverview(props) {

    const [FinalDialogOpen, setFinalDialog] = useState(false);
    const [findingReportData, setFindingReportData] = useState([]);
    const [ERBDialogOpen, setERBDialog] = useState(false);
    const [RiskDialogOpen, setRiskDialog] = useState(false);
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    function onButtonClicked(action) {

        switch(action) {
            case 'final':
                console.log("Final")
                setFinalDialog(true)
                break;
            case 'erb':
                console.log("ERB")
                setERBDialog(true)
                break;
            case 'risk':
                console.log("Risk")
                setRiskDialog(true)
                break;
            default:
                console.log("Default")
        }
    }

    const reload = () => {
        async function getData() {
            const finalRptFindForm = axios.get('http://localhost:5000/findings/findingReport');
            const eventData = axios.get('')
            axios
                .all([finalRptFindForm])
                .then(
                    axios.spread((...responses) => {
                        const finalReportResponse = responses[0].data;
                        setFindingReportData(finalReportResponse);
                    })
                )
                .catch(err => {
                    console.log(err)
                })
        }
        getData()
    }
    
    useLayoutEffect(() => reload(), []);

    return (
        <div>
            <div style={{display: "inline-block", marginLeft: "1em",}}>

                <h1>Exported Reports</h1>
                <p> Please select which report you would like to export</p>

                {/* Final Button */}
                <Button
                    onClick={() => onButtonClicked('final')}
                    variant="contained"
                    style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
                    size="large"
                >Final Report</Button>
                {/* ERB Button */}
                <Button
                    onClick={() => onButtonClicked('erb')}
                    variant="contained"
                    style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
                    size="large"
                >Emerging Result Brief</Button>
                {/* Risk Button */}
                <Button
                    onClick={() => onButtonClicked('risk')}
                    variant="contained"
                    style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
                    size="large"
                >Risk Matrix</Button>
            </div>
            <FinalReportForm
                isOpen={FinalDialogOpen}
                closeDialogAction={() => setFinalDialog(false)}
                findingFormData={findingReportData}
            />
            <ErbForm
                isOpen={ERBDialogOpen}
                closeDialogAction={() => setERBDialog(false)}
            />
            <RiskMatrixForm
                isOpen={RiskDialogOpen}
                closeDialogAction={() => setRiskDialog(false)}
            />
        </div>
    );
}