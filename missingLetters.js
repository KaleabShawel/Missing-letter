const letter = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_find');

button.addEventListener('click', () => { 

    let findLetter = letter.value;

    if (findLetter === "") {
        
        alert("Pleas Enter the Letters");

    }

    let missingLetter = fearNotLetters(findLetter);
    display.innerHTML = `The Missing Letter is :  ${missingLetter}`;

    setTimeout(() => { 
        display.innerHTML = "";
    }, 8000);
});


const fearNotLetters = (string) => { 

    if (string === "") {
        
        //return "Please Enter the letter";
        display.style.display = "none";
    }

    let currCharCode = string.charCodeAt(0);
    let missing = undefined;

    string.split("").forEach(letter => { 

        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });

    return missing;
};
