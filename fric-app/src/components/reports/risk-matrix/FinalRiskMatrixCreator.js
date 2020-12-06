import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../../../components/general/LayoutTemplate';
import {darkTheme} from "../../../components/general/ThemeColors";

import React, { Component, useState } from "react";
import DataGrid, {
  Column,
  Export,
  GroupPanel
} from "devextreme-react/data-grid";
import Button from '@material-ui/core/Button';
import ExcelJS from "exceljs/dist/es5/exceljs.browser";
import saveAs from "file-saver";
import service from "./data.js";



class FinalRiskMatrixCreator extends Component {
  constructor(props) {
    super(props);
    this.findings = service.getFindings();

    this.state = {
      excelFilterEnabled: true
    };
  }

  
  handleExportClick = e => {
    this.excelExport(this.state.instanceDataGrid);
    
  };

  excelExport = DataGrid => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("ExcelJS sheet");
    var columns = DataGrid.getVisibleColumns();

    worksheet.mergeCells("A2:Y2");

    const customCell = worksheet.getCell("A2");
    customCell.font = {
      name: "Calibri",
      family: 4,
      size: 20,
      underline: true,
      bold: true
    };

    customCell.value = "Findings";
    

    var headerRow = worksheet.addRow();
    worksheet.getRow(4).font = { bold: true };

    for (let i = 0; i < columns.length; i++) {
      let currentColumnWidth = DataGrid.option().columns[i].width;
      worksheet.getColumn(i + 1).width =
        currentColumnWidth !== undefined ? currentColumnWidth / 6 : 20;
      let cell = headerRow.getCell(i + 1);
      cell.value = columns[i].caption;
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFF00'}
      };
    }


    if (this.state.excelFilterEnabled === true) {
      worksheet.autoFilter = {
        from: {
          row: 3,
          column: 1
        },
        to: {
          row: 3,
          column: columns.length
        }
      };
    }

    // eslint-disable-next-line no-unused-expressions
    this.state.excelFilterEnabled === true
      ? (worksheet.views = [{ state: "frozen", ySplit: 3 }])
      : undefined;

    worksheet.properties.outlineProperties = {
      summaryBelow: false,
      summaryRight: false
    };

    //add data into file
    DataGrid.getController("data")
      .loadAll()
      .then(function(allItems) {
        for (let i = 0; i < allItems.length; i++) {
          var dataRow = worksheet.addRow();
          if (allItems[i].rowType === "data") {
            dataRow.outlineLevel = 1;
          }
          for (let j = 0; j < allItems[i].values.length; j++) {
            let cell = dataRow.getCell(j + 1);
            cell.value = allItems[i].values[j];
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
          }
        }
        //End of Findings
        const rowCount = worksheet.rowCount;
        worksheet.mergeCells(`A${rowCount + 2}:Y${rowCount + 2}`);
        worksheet.getRow(1).font = { bold: true };
        worksheet.getCell(`A${rowCount+2}`).font = {
          name: "Calibri",
          family: 4,
          size: 20,
          underline: true,
          bold: true
        };

        worksheet.getCell(`A${rowCount+2}`).value = "End of Findings";

        ExcelJSWorkbook.xlsx.writeBuffer().then(function(buffer) {
          saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `${DataGrid.option().export.fileName}.xlsx`
          );
        });
      });
  };

  render() {
    return (
      
        <ThemeProvider theme={darkTheme}>
          <LayoutTemplate
        mainContentComponent = { <div>
        
        <DataGrid
          id={"gridContainer"}
          dataSource={this.findings}
          showBorders={true}
          showColumnHeaders={true}
          onCellPrepared={this.onCellPrepared}
          onContentReady={this.onContentReady}
        >
          <Column dataField={"ID"} width={40} />
          <Column dataField={"HOST_NAME"}width={150}  />
          <Column dataField={"IP_PORT"} width={150} />
          <Column dataField={"FINDING_TYPE"} width={150} />
          <Column dataField={"DESCRIPTION"} width={150} />
          <Column dataField={"LONG_DESCRIPTION"} width={200} />
          <Column dataField={"STATUS"}  width={150} />
          <Column dataField={"POSTURE"}  width={150} />
          <Column dataField={"C"}  width={150} />
          <Column dataField={"I"}  width={150} />
          <Column dataField={"A"} width={150} />
          <Column dataField={"IMP_SCORE"} width={150} />
          <Column dataField={"CAT"} width={150} />
          <Column dataField={"CAT_SCORE"} width={150} />
          <Column dataField={"CM"} width={150} />
          <Column dataField={"Vs_n"} width={150} />
          <Column dataField={"Vs_q"} width={150} />
          <Column dataField={"RELEVANCE_OF_THREAT"} width={150} />
          <Column dataField={"LIKELIHOOD"} width={150} />
          <Column dataField={"IMPACT"} width={150} />
          <Column dataField={"IMPACT_RATIONALE_HIDE"} width={300} />
          <Column dataField={"RISK"} width={150} />
          <Column dataField={"MITIGATION_1_LINER"}width={300}  />
          <Column dataField={"MITIGATION_HIDE"} width={350} />
          <Column dataField={"ANALYST"} width={150} />
          

          <Export
            enabled={true}
            fileName="RISK MATRIX"
            excelFilterEnabled={true}
            customizeExcelCell={this.customizeExcelCell}
          />
          <GroupPanel visible={true} />
        </DataGrid>
        <Button
          onClick={this.handleExportClick}
          variant="contained"
          style={{ backgroundColor: "#066ff9", margin: "0.5em", }}
          size="large"
          >Export Risk Matrix</Button>
        </div>
        }
        />
        
        
        </ThemeProvider>
      
    );
  }

  onContentReady = e => {
    var instanceGrid = e.component.instance();

    this.setState({
      excelFilterEnabled: instanceGrid.option().export.excelFilterEnabled,
      instanceDataGrid: instanceGrid
    });
  };

  
}

export default FinalRiskMatrixCreator;
