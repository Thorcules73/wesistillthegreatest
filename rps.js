var hand = ['rock','paper','scissors'];
function getHand() {
    return parseInt(Math.random()*10)%3;
} 
var playerOne = {firstName: "Ukeba", getHand()}
var playerTwo = {firstName: "Natasha", getHand()}
function playRound(playerOne, playerTwo) {
    if(playerOne === playerTwo) {
        return "The result is a tie!";
    }
    if(playerOne === "rock") {
        if(playerTwo === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if(playerOne === "paper") {
        if(playerTwo === "rock") {
            return "paper wins";
        } else {
            if(playerTwo=== "scissors") {
                return "scissors wins";
        }
    }
    if(playerOne === "scissors") {
        if(playerTwo=== "rock") {
            return "rock wins";
        } else {
            if(playerTwo === "paper") {
                return "scissors wins";
            }
        }
    }
    }
}