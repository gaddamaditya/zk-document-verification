const Tesseract = require("tesseract.js");

Tesseract.recognize(
    "../images/aadhaar.png",
    "eng"
).then(({ data: { text } }) => {

    let lines = text.split("\n");

    for(let i=0;i<lines.length;i++){

        if(lines[i].includes("DOB")){

            let nameLine = lines[i-2];

            let words = nameLine.match(/[A-Z]+/g);

            let name=[];

            for(let word of words){

                if(word.length>=4){

                    name.push(word);

                }

            }

            console.log(
                "Extracted Name:",
                name.join(" ")
            );

        }

    }

});