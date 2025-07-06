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
            const word = computerArray[5].split('').map(morseCode).join(' ');
            userWord = prompt("Try typing the morse code of " + computerArray[i] + ", " + word + " in the console");
            let x = [userWord, word];
            return x;
        }
    }
        return userWord;
    }
}
import Ka from './ka.js'
function getComputerChoice(){
    let x = Ka.mulberry32(12345); 
    let z = Ka.mulberry32(12345);
    return function (){
        let w = x();
        let y = z();
        if (w<=(1/10)) {
            let a = ["A", "E", "T", "R", "S"];
            let b = ["ART", "EAR", "TEA", "RAT", "SET"];
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
        else if (w<=2/10){
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
        else if (w<=3/10){
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
        else if (w<=4/10){
            let a = ["E", "I", "B", "L", "T"];
            let b = ["BET", "BIT", "LET", "LIT", "TIE"];
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
        else if (w<=5/10){
            let a = [ "E", "O", "H", "W", "F"];
            let b = ["HOE", "WOE", "HEW", "FOE", "WHO"];
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
        else if (w<=6/10){
            let a = ["A","U", "J", "Y", "G"];
            let b = ["JUG", "GAY", "YAK", "GUY", "JAY"];
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
        else if (w<=7/10){
            let a = [ "I", "O", "P", "Z", "T"];
            let b = ["TIP", "TOP", "PIT", "POT", "ZIP"];
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
        else if (w<=8/10){
            let a = ["E", "U", "S", "N", "C"];
            let b = ["USE", "SUN", "NET", "NUT", "CUE"];
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
        else if (w<=9/10){
            let a = ["A", "I", "M", "L", "V"];
            let b = ["AIM", "VIA", "MIA", "MAL", "MIL"];
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
        else {
            let a = ["O","U", "W", "R", "B"];
            let b = ["OUR", "ROW", "WOO", "RUB", "BOW"];
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
    }  
}   