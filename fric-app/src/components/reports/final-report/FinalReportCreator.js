import { AlignmentType, Document, Header, HeadingLevel, Media, Paragraph, PageBreak, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export class FinalReportCreator {

    create(analysts, blob) {
        const document = new Document();
        const image1 = Media.addImage(document, blob, 250, 100);
        const finding = [1,2,3,4]

        document.addSection({
            children: [
                this.createHeader(image1),
                new Paragraph({text: ""}),
                this.createFirstPage(analysts),
                this.createDisclaimerPage(),
                ...finding
                    .map((finding) => {
                        const arr = [];
                        arr.push(this.createFindingTable(finding))
                        arr.push(new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                            text:""
                        }))

                        return arr;
                    })
                    .reduce((prev, curr) => prev.concat(curr), [])
            ]
        })

        return document;
    }

    createHeader(image1) {
        return  new Paragraph({
                border: {
                    bottom: {
                        color: "auto",
                        space: 1,
                        value: "single",
                        size: 10,
                    }
                },
                thematicBreak: true,
                children: [
                    image1,
                    new TextRun({
                        text: "\t\t\t\tEnter Date Here",
                        bold: true
                    })
                ]
        })
    }

    createFirstPage(analysts) {
        return new Paragraph ({
            break: true,
            children: [
                new TextRun({
                text: "Combat Capabilities Development Command (CCDC) Data & Analysis Center (DAC) Enter System Name Enter Event Type (e.g., CVPA, CVI, VoF, etc) Report",
                size: 40,
                bold: true,
                color: "000000"
                }),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: this.analystsToString(analysts),
                            size: 28,
                        })
                    ]
                }),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({
                    border: {
                        top: {
                            color: "auto",
                            space: 1,
                            value: "single",
                            size: 10,
                        },
                    },
                    children: [
                        new TextRun({
                            text: "Classified By: {Lead Analyst}",
                        }),
                    ]
                }),
                new Paragraph({
                    text: "Derived from: {System's Security Classification Guide}",
                }),
                new Paragraph({
                    border: {
                        bottom: {
                            color: "auto",
                            space: 1,
                            value: "single",
                            size: 10,
                        },
                    },
                    text: "Declassify on: {DeclassifyDate}",
                }),
            ]
        })
    }

    createDisclaimerPage() {
        return new Paragraph({
            pageBreakBefore: true,
            children: [
                new TextRun({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({text: ""}),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text:  "DESTRUCTION NOTICE",
                            bold: true,
                            size: 36,
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    children: [
                        new TextRun({
                        text: "Destroy by any method that will prevent disclosure of contents or reconstruction of the document.",
                        size: 28
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                        text: "DISCLAIMER",
                        bold: true,
                        size: 36
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    children: [
                        new TextRun({
                        text: "The findings in this report are not to be construed as an official Department of the Army position unless so specified by other official documentation.",
                        size: 28
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                        text: "WARNING",
                        bold: true,
                        size: 36
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    children: [
                        new TextRun({
                        text: "Information and data contained in this document are based on the input available at the time of preparation.",
                        size: 28
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                        text: "TRADE NAMES",
                        bold: true,
                        size: 36
                        })
                    ]
                }),
                new Paragraph({text:""}),
                new Paragraph({text:""}),
                new Paragraph({
                    children: [
                        new TextRun({
                        text: "The use of trade names in this report does not constitute an official endorsement or approval of the use of such commercial hardware or software.  The report may not be cited for purposes of advertisement.",
                        size: 28
                        })
                    ]
                }),

            ]
        })
    }
    //Ignore, this is a pain
    /*
    createEventTable() {
        return new Table({
            width: {
                size: 50000,
                type: WidthType.DXA
            },
            rows: [
                new TableRow({//First Row
                    children: [
                        new TableCell({
                            width: {
                                size: 32000,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: " REPORT DOCUMENTATION PAGE",
                                            bold: true,
                                            size: 28
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 18000,
                                type: WidthType.DXA
                            },
                            children:[
                                new Paragraph({text:"  "})
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 18000,
                                type: WidthType.DXA
                            },
                            children:[
                                new Paragraph({text:"  "})
                            ]
                        })
                    ]
                }),
                new TableRow({//Blank Line
                    children: [
                        new TableCell({
                            width: {
                                size: 40000,
                                type: WidthType.DXA
                            },
                            columnSpan: 2,
                            children:  [
                                new Paragraph({text: " Intentionally Left Blank"})
                            ]
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 13334,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                   text: new TextRun({
                                        text: "1. REPORT DATE",
                                        bold: true
                                    }),
                                    children: [
                                        new Paragraph({text: "Date"})
                                    ]
                                }),
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 13334,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    text: new TextRun({
                                         text: "2. REPORT TYPE",
                                         bold: true
                                     }),
                                     children: [
                                        new Paragraph({text: "Event Type"})
                                     ]
                                 }),
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 13332,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    text: "Table"
                                 }),
                                new Paragraph({text: "Dates covered"})
                            ]
                        })
                    ]
                })
            ],
        })
    }  */

    createFindingTable(finding) {
        return new Table ({
            width: {
                size: 50000,
                type: WidthType.DXA
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE
                            },
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "FINDING DOCUMENTATION",
                                            bold: true,
                                            size: 36
                                        })
                                    ]
                                })
                            ]
                        }),
                    ]
                }),
                new TableRow({ //Finding Host Name Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Host Name",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding hostName}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding IP:Port Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "IP: Port",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding ipPort}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding Impact Score Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Impact Score",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding impactScore}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding SevCatCode Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "CAT",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding SevCatCode}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding SevCatScore Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "CAT SCORE",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding SevCatScore}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding vulSeverity Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Vs SCORE",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding vulSeverity}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding qVs Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Vs",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding qVs}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding Status Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Status",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding status}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding posture Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Posture",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding posture}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding likelihood Row
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Likelihood",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding likelihood}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding Impact
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Impact",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding impactLevel}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding Risk
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Risk",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding risk}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding effectiveRating or CounterMeasure/CM
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "CM",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding effectiveRating}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding confidentiality
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "C",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding confidentiality}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding integrity
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "I",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding integrity}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding availability
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "A",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding availability}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding type
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Type",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding type}",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding description
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Description",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding Description}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding type
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Mitigation",
                                            bold: true,
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "{Finding mitigation} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                            size: 24
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new TableRow({ //Finding type
                    children: [
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "C-CONFIDENTIALITY      I-INTEGRITY     A-AVAILABILITY CM-COUNTERMEASURE",
                                            size: 20
                                        })
                                    ]
                                })
                            ]
                        }),
                    ]
                }),
            ]
        })
    }

    analystsToString(analysts) {
        let str = "By, "

        for (var i = 0, len = analysts.length; i < len; i++) {
            str += analysts[i].role + " " + analysts[i].name + ", ";
        }
        return str
    }


}
