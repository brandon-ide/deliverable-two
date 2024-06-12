let yourName = prompt ("Welcome to GC mini golf! What is your name?");
let holeCount = prompt ("Hi, " + yourName + "! Would you like to play 3 or 6 holes today?");

var puttNum = 1;

let totalOne = 0;
let totalTwo = 0;

for (let i = 0; i <= 2; i++) {
    if (holeCount == 3)
    var puttsOne = Number (prompt ("How many putts for hole " + puttNum++ + "? (par is 3)"));
    totalOne += puttsOne;
}

for (let i = 0; i <= 5; i++) {
    if (holeCount == 6)
    var puttsTwo = Number (prompt ("How many putts for hole " + puttNum++ + "? (par is 3)"));
    totalTwo += puttsTwo;
}

let parOne = (totalOne - 9);
let parTwo = (totalTwo - 18);

if (totalOne < 9) {
    console.log("Great job, " + yourName + "! Your total par was: " + parOne + ".")
}

if (totalOne == 9) {
    console.log("Good game, " + yourName + ". Your total par was: " + parOne + ".")
}

if (totalOne > 9) {
    console.log("Nice Try, " + yourName + "... Your total par was: +" + parOne + ".")
}

if (totalTwo < 18) {
    console.log("Great job, " + yourName + "! Your total par was: " + parTwo + ".")
}

if (totalTwo == 18) {
    console.log("Good game, " + yourName + ". Your total par was: " + parTwo + ".")
}

if (totalTwo > 18) {
    console.log("Nice Try, " + yourName + "... Your total par was: +" + parTwo + ".")
}

























