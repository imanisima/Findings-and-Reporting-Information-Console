import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";

export class FinalReportCreator {

    create() {
        const document = new Document();

        document.addSection({
            children: [
                new Paragraph({
                    text: "Test Final Report",
                    heading: HeadingLevel.TITLE,
                }),
            ]
        })

        return document;
    }
}