var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var deck = new Array();
var playerScore, computerScore, keepHitting;

window.onload = function newDeckAndShuffle() {
    for(var i=0; i<4; i++) {
        for(var j=1; j<=values.length; j++) {
            deck.push(j);
        }
    }
    for (var i=deck.length-1; i>0; i--) {
        var j = Math.floor(Math.random()*(i+1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    this.playerScore=0;
    this.computerScore=0;
    this.keepHitting=true;
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;

    var temp = deck.shift();
    console.log("Player drew: " + temp);
    playerScore+=temp;
    document.getElementById("playerScore").innerHTML = this.playerScore;
    console.log("Player score: " + playerScore);
    for(var i=0; i<2; i++) {
        temp = deck.shift();
        console.log("Computer drew: " + temp);
        computerScore+=temp;
        document.getElementById("computerScore").innerHTML = this.computerScore;
        console.log("Computer score: " + this.computerScore);
    }
    
}

function keepPlaying() {
    if(keepHitting===true) {
        if(playerScore<21) {
            var temp = deck.shift();
            console.log("Player drew: " + temp);
            playerScore+=temp;
            console.log("Player score: " + playerScore);
            document.getElementById("playerScore").innerHTML = this.playerScore;
            if(playerScore===21) {
                scoreCalculation();
            }
            else if(playerScore>21) {
                scoreCalculation();
            }
        }
    }
}

function stopPlaying() {
    if(keepHitting!=false) {
        keepHitting = false;
        var temp = deck.shift();
        console.log("Computer drew: " + temp);
        computerScore+=temp;
        console.log("Computer score: " + this.computerScore);
        document.getElementById("computerScore").innerHTML = this.computerScore;
    }
    scoreCalculation();
}

function scoreCalculation() {
    keepHitting = false;
    document.getElementById("modal").style.display = "inline";
    document.getElementById("popupWindow").style.display = "block";
    if(computerScore>21) {
        
        document.getElementById("message").innerHTML = "You win!";
    }
    else if(playerScore>21) {
        document.getElementById("message").innerHTML = "You lose!";
    }
    else if(computerScore===21) {
        document.getElementById("message").innerHTML = "You lose!";
    }
    else if(playerScore===21) {
        document.getElementById("message").innerHTML = "You win!";
    }
    else if(playerScore===computerScore) {
        document.getElementById("message").innerHTML = "Tie!";
    }
    else if(computerScore<21 && playerScore<21) {
        if(playerScore>computerScore) {
            document.getElementById("message").innerHTML = "You win!";
        }
        else {      
            document.getElementById("message").innerHTML = "You lose!";
        }
    }
}