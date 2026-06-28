const path = require("path");

const extractPDF = require("./extractors/pdfExtractor");
const extractImage = require("./extractors/imageExtractor");

const detectDocumentType = require("./processors/documentType");
const extractAttributes = require("./processors/attributeExtractor");

const generateClaims = require("./processors/claims/claimGenerator");

const generateAgeInput = require("./processors/inputGenerators/ageInputGenerator");
const generateGenderInput = require("./processors/inputGenerators/genderInputGenerator");
const generateNameInput = require("./processors/inputGenerators/nameInputGenerator");

const generateResultInput = require("./processors/inputGenerators/resultInputGenerator");
const generateGradeInput = require("./processors/inputGenerators/gradeInputGenerator");
const generateGrandTotalInput = require("./processors/inputGenerators/grandTotalInputGenerator");
const generateStudentNameInput = require("./processors/inputGenerators/studentNameInputGenerator");

async function main() {

    const filePath = process.argv[2];
    const claim = process.argv[3];

    if (!filePath || !claim) {
        console.log("Usage:");
        console.log("node main.js <document> <claim>");
        return;
    }

    console.log("\n========== Selected File ==========\n");
    console.log(filePath);

    const extension = path.extname(filePath).toLowerCase();

    console.log("\n========== Detected File Type ==========\n");
    console.log(extension);

    let text = "";

    switch (extension) {

        case ".pdf":
            console.log("\nUsing PDF Extractor...");
            text = await extractPDF(filePath);
            break;

        case ".jpg":
        case ".jpeg":
        case ".png":
            console.log("\nUsing Image Extractor...");
            text = await extractImage(filePath);
            break;

        default:
            console.log("Unsupported File");
            return;
    }

    console.log("\n========== Extracted Text ==========\n");
    console.log(text);

    const documentType = detectDocumentType(text);

    console.log("\n========== Detected Document Type ==========\n");
    console.log(documentType);

    const attributes = extractAttributes(documentType, text);

    console.log("\n========== Extracted Attributes ==========\n");
    console.log(attributes);

    const claims = generateClaims(attributes);

    console.log("\n========== Available Claims ==========\n");
    console.log(claims);

    switch (claim) {

        case "AGE_18_PLUS":
            generateAgeInput(attributes);
            break;

        case "GENDER":
            generateGenderInput(attributes);
            break;

        case "NAME":
            generateNameInput(attributes);
            break;

        case "RESULT":
            generateResultInput(attributes);
            break;

        case "GRADE":
            generateGradeInput(attributes);
            break;

        case "GRAND_TOTAL":
            generateGrandTotalInput(attributes);
            break;

        case "STUDENT_NAME":
            generateStudentNameInput(attributes);
            break;

        default:
            console.log("Claim Not Supported");
            return;
    }

}

main();