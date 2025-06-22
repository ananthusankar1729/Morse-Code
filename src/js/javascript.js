let right = 0;
let wrong = 0;
function getHumanChoice() {
    const morse = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
                'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
                'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
                'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
                'Z': '--..'
    };
    function morseCode(letter) {
            return morse[letter];
    }
    return function (choice) {
        let userWord ='';
        let computerArray = choice();
    for (let i = 0; i < 5; i++) {
        if (i != 4)
            prompt("Try typing the morse code of " + computerArray[i] + ", " + morseCode(computerArray[i]) + " in the console");
        else {
            const word = computerArray[4].split('').map(morseCode).join(' ');
            userWord = prompt("Try typing the morse code of " + computerArray[i] + ", " + word + " in the console");
            let x = [userWord, word];
            return x;
        }
    }
        return userWord;
    }
}