import { AlignmentType, Document, Header, HeadingLevel, Media, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";

export class FinalReportCreator {

    create(analysts, blob) {
        const document = new Document();
        const image1 = Media.addImage(document, blob, 250, 100);

        document.addSection({
            children: [
                this.createHeader(image1),
                new Paragraph({text: ""}),
                this.createFirstPage(analysts),
                this.createDisclaimerPage()
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

    analystsToString(analysts) {
        let str = "By, "

        for (var i = 0, len = analysts.length; i < len; i++) {
            str += analysts[i].role + " " + analysts[i].name + ", ";
        }
        return str
    }


}
