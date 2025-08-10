import Ka from './ka.js'
let right = 0;
let wrong = 0;
const sky = document.querySelector(".sky");
const input = document.createElement("input");
const button = document.createElement("button");
button.textContent = "Start Game";
const text = document.createElement("p");
input.type = "text";
input.style.border = "2px solid red";
input.style.width = "200px";
input.style.height = "30px";
input.placeholder = "You can type here";
sky.appendChild(text);
sky.appendChild(input);
sky.appendChild(button);
text.margin = "2px";
text.textContent = "The lights blink in Morse Code. Type the word you see. Click the button to submit your answer. The following is the Morse Code for some of the letters you will see:";
text.appendChild(document.createElement("br"));
let video = document.querySelector("video");
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
        let userWord = '';
        let computerArray = choice();
        for (let i = 0; i < 6; i++) {
            if (i != 5) {
                const textNode = document.createTextNode(computerArray[i] + " is " + morseCode(computerArray[i]) + "  ,  ");
                text.appendChild(textNode);
            }
            else {
                const word = computerArray[5].split('').map(morseCode).join(' ');
                text.appendChild(document.createElement("br"));
                text.appendChild(document.createTextNode("The lighthouse flashes the word. Decode and enter below: "));
                let flashes = word.split(' ');
                function playFlashesSequentially(flashes) {
                    if (flashes.length === 0) {
                        return;
                    }
                    let flash = flashes.shift();
                    if (flash === '.') {
                        video.src = "./Media/Dot.mp4";
                    } else if (flash === '-') {
                        video.src = "./Media/Dash.mp4";
                    }
                    video.play();
                    video.onended = () => {
                        playFlashesSequentially(flashes);
                    };
                }
                playFlashesSequentially(flashes);
                button.textContent = "Submit Answer";
                button.onclick = function () {
                    userWord = input.value.trim();
                    input.value = '';
                    if (userWord === word) {
                        right++;
                        input.style.display = "none";
                        text.textContent = "Correct! Your score is: " + right
                        button.textContent = "Continue";
                        button.onclick = function () {
                            input.style.display = "inline";
                            window.gameStarted = true;
                            game();
                        };
                    } else {
                        wrong++;
                        input.style.display = "none";
                        text.textContent = "Wrong! The correct answer was: " + word
                        button.textContent = "Continue";
                        window.gameStarted = false;
                        button.onclick = function () {
                            input.style.display = "inline";
                            game();
                        };
                    }
                };
                let x = [userWord, word];
                return x;
            }
        }
        return userWord;
    }
}
function getComputerChoice() {
    let x = Ka.mulberry32(12345);
    let z = Ka.mulberry32(12345);
    return function () {
        let w = x();
        let y = z();
        if (w <= (1 / 10)) {
            let a = ["A", "E", "T", "R", "S"];
            let b = ["ART", "EAR", "TEA", "RAT", "SET"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 2 / 10) {
            let a = ["A", "I", "C", "K", "D"];
            let b = ["AID", "ICK", "CAD", "KID", "CAK"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 3 / 10) {
            let a = ["A", "O", "G", "M", "P"];
            let b = ["GAM", "MOP", "PAM", "GAP", "MOG"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 4 / 10) {
            let a = ["E", "I", "B", "L", "T"];
            let b = ["BET", "BIT", "LET", "LIT", "TIE"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 5 / 10) {
            let a = ["E", "O", "H", "W", "F"];
            let b = ["HOE", "WOE", "HEW", "FOE", "WHO"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 6 / 10) {
            let a = ["A", "U", "J", "Y", "G"];
            let b = ["JUG", "GAY", "YAK", "GUY", "JAY"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 7 / 10) {
            let a = ["I", "O", "P", "Z", "T"];
            let b = ["TIP", "TOP", "PIT", "POT", "ZIP"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 8 / 10) {
            let a = ["E", "U", "S", "N", "C"];
            let b = ["USE", "SUN", "NET", "NUT", "CUE"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else if (w <= 9 / 10) {
            let a = ["A", "I", "M", "L", "V"];
            let b = ["AIM", "VIA", "MIA", "MAL", "MIL"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
        else {
            let a = ["O", "U", "W", "R", "B"];
            let b = ["OUR", "ROW", "WOO", "RUB", "BOW"];
            if (y <= 1 / 5) {
                a.push(b[0]);
            }
            else if (y <= 2 / 5) {
                a.push(b[1]);
            }
            else if (y <= 3 / 5) {
                a.push(b[2]);
            }
            else if (y <= 4 / 5) {
                a.push(b[3]);
            }
            else {
                a.push(b[4]);
            }
            return a;
        }
    }
}
function playRound() {
    let level = 1;
    let h = getHumanChoice();
    let i = 0;
    window.gameStarted = false;
    return function () {
        if (window.gameStarted) {
            button.textContent = "Start Level " + (level + 1);
            text.textContent = "You are on level " + (level + 1)
            input.value = '';
            input.style.display = "none";
            button.onclick = function () {
                level++;
                startLevel();
            };
        }
        else {
            if (i == 0) {
                text.textContent = "Welcome to the Morse Code Game! Enter your level of progress: "
            } else {
                text.textContent = "Lets retry the Morse Code Game! Press Continue"
                input.style.display = "none";
            }
            i = 1;
            button.textContent = "Continue";
            button.onclick = function () {
                level = parseInt(input.value) || level;
                input.value = '';
                window.gameStarted = true;
                startLevel();
            };
        }

        function startLevel() {
            text.textContent = "Level " + level + " - Here are the morse codes: ";
            input.style.display = "inline";
            text.appendChild(document.createElement("br"));
            let choice = getComputerChoice();
            for (let i = 1; i < level; i++) {
                choice();
            }
            h(choice);
        }
    };
}
let game = playRound();
game();
