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
    for (let i = 0; i < 6; i++) {
        if (i != 5)
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
function playRound() {
    let level = 1;
    let h = getHumanChoice();
    return function () {
        level = prompt("Welcome to the Morse Code Game!Enter your level of progress:", level);
        level = parseInt(level) || 1;
        let choice = getComputerChoice();
        for (let i = 1; i < level; i++){
            choice();
        }
        const humanSelection = h(choice);
        if (humanSelection[0] === humanSelection[1]) {
            right++;
            alert("Correct! Your score is: " + right);
        } else {
            wrong++;
            alert("Wrong! The correct answer was: " + humanSelection[1] + ". Your score is: " + right);
        }
        alert("Right: " + right + ", Wrong: " + wrong);
        level++;
    }
}
let game = playRound();
let keepPlaying = true;
while (keepPlaying) {
    game();
    keepPlaying = confirm("Continue to next level?");
}
alert("Thanks for playing!");