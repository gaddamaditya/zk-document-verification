const fs = require("fs");

function generateNameInput(attributes) {

    const input = {

        name: attributes.name

    };

    fs.writeFileSync(
        "inputs/nameInput.json",
        JSON.stringify(input, null, 4)
    );

    console.log("Name Circuit Input Generated.");
}

module.exports = generateNameInput;