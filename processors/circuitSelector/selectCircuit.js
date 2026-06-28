function selectCircuit(claim) {

    switch (claim) {

        case "AGE_18_PLUS":

            return {

                circuitName: "ageGenderVerifier",

                inputFile: "inputs/ageInput.json"

            };

        case "GENDER":

            return {

                circuitName: "genderVerifier",

                inputFile: "inputs/genderInput.json"

            };

        case "RESULT":

            return {

                circuitName: "resultVerifier",

                inputFile: "inputs/resultInput.json"

            };

        default:

            return null;

    }

}

module.exports = selectCircuit;