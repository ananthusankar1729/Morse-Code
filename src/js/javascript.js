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
import Ka from './ka.js'
function getComputerChoice(){
    let m = Ka.mulberry32(1);
    let x = m();
    if (x<=(1/10)) {
        let z = Ka.mulberry32(1)
        let y = z()
        let a = ["ART", "EAR", "TEA", "RAT", "SET"];
        let b = ["A", "E", "T", "R", "S"];
        if (y<=1/5){
            b.push(a[0]);
        }
        else if (y<=2/5){
            b.push(a[1]);
        }
        else if (y<=3/5){
            b.push(a[2]);
        }
        else if (y<=4/5){
            b.push(a[3]);
        }
        else {
            b.push(a[4]);
        }
        return b;
    }
    else if (x<=2/10){
        let z = Ka.mulberry32(1)
        let y = z()
        let a = ["A", "I", "C", "K", "D"];
        let b = ["AID", "ICK", "CAD", "KID", "CAK"];
        if (y<=1/5){
            a.push(b[0]);
        }
        else if (y<=2/5){
            a.push(b[1]);
        }
        else if (y<=3/5){
            a.push(b[2]);
        }
        else if (y<=4/5){
            a.push(b[3]);
        }
        else {
            a.push(b[4]);
        }
        return a;
    }
    else if (x<=3/10){
        let z = Ka.mulberry32(1)
        let y = z()
        let a = ["A", "O", "G", "M", "P"];
        let b = ["GAM", "MOP", "PAM", "GAP", "MOG"];
        if (y<=1/5){
            a.push(b[0]);
        }
        else if (y<=2/5){
            a.push(b[1]);
        }
        else if (y<=3/5){
            a.push(b[2]);
        }
        else if (y<=4/5){
            a.push(b[3]);
        }
        else {
            a.push(b[4]);
        }
        return a;
    }
    else if (x<=4/10){return}
    else if (x<=5/10){return}
    else if (x<=6/10){return}
    else if (x<=7/10){return}
    else if (x<=8/10){return}
    else if (x<=9/10){return}
    else 
}
