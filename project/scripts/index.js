/**
 * @param int array för alla valörer, samt en tom som ska innehålla kortleken.
 * @param int playerScore och computerScore innehåller båda spelarnas poäng.
 * @param boolean keepHitting används för att fortsätta spelet tills det att man
 * väljer att stanna.
*/
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var deck = new Array();
var playerScore = 0,
    computerScore = 0,
    keepHitting = true;

/**
 * @description skapar en ny kortlek och blandar den med hjälp av den moderna
 * versionen av Fisher-Yates algoritmen. Koden sparar det sista elementet i
 * arrayen och byter sedan detta mot ett slumpvist valt element (kort) i
 * arrayen. Därefter när hela kortleken har blandats delas ett kort ut till
 * spelaren, och två till datorn.
 * @param int i och j används enligt "standard-sättet" i for-loopar.
 * @param int temp sparar det översta kortet i kortleken för att sedan läggas i
 * det slumpade kortets plats.
 * @param int card är kortet som dragits.
 */
window.onload = function newDeckAndShuffle() {
    for(let i=0; i<4; i++) {
        for(let j=1; j<=values.length; j++) {
            deck.push(j);
        }
    }
    for (var i=deck.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    let card = deck.shift();
    console.log("Player drew: " + card);
    playerScore+=card;
    console.log("Player score: " + this.playerScore);
    for(let i=0; i<2; i++) {
        card = deck.shift();
        console.log("Computer drew: " + card);
        computerScore+=card;
        console.log("Computer score: " + this.computerScore);
    }
}
/**
 * @description lägger till att sidan kan läsa av knapptryckningar på sidans
 * body. Keydown läser av när en tagent trycks ned, sedan kollar if-satserna om
 * knappen i fråga är knapp 68 eller 83 (D respektive S).
 */
document.body.addEventListener("keydown", function(event) {
    if (event.keyCode == 68) {
        keepPlaying();
    }
    else if(event.keyCode == 83) {
        stopPlaying();
    }
});

/**
 * @description först kollas om keepHitting är true. En if-sats används istället
 * for en while-loop eftersom man vill kolla "manuellt" efter varje
 * knapptryckning. En while-loop går tills villkoret inte stämmer längre.
 * Därefter om playerScore är mindre än 21 dras ett kort som läggs till i
 * spelarens poäng. Om detta gör att spelarens poäng blir lika med eller större
 * än 21 avslutas spelet med hjälp av result-funktionen.
 * @param card är kortet som dragits. (samma som ovan).
 */
function keepPlaying() {
    if(keepHitting===true) {
        if(playerScore<21) {
            let card = deck.shift();
            console.log("Player drew: " + card);
            playerScore+=card;
            console.log("Player score: " + playerScore);
            if(playerScore===21) {
                results();
            }
            else if(playerScore>21) {
                results();
            }
        }
    }
}

/**
 * @description när spelaren stannar kommer keepHitting ändras till false om
 * keepHitting inte redan är det (för att förhindra upprepning om man trycker
 * flera gånger på S). Därefter kommer datorn dra ETT kort om dennes poäng är
 * under 17, sedan räknas resultatet ut.
 * @param card är kortet som dragits. (samma som ovan).
 */
function stopPlaying() {
    if(keepHitting!=false) {
        keepHitting = false;
        if(computerScore<17) {
            let card = deck.shift();
            console.log("Computer drew: " + card);
            computerScore+=card;
            console.log("Computer score: " + this.computerScore);
        }
    }
    results();
}

/**
 * @description här räknas poängen för att se vem som vunnit. Resultatet dyker
 * sedan upp i en alert på sidan med respektive poäng och om det blev vinst,
 * förlust eller oavgjort.
 */
function results() {
    if(computerScore>21) {
        alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou win!");
    }
    else if(playerScore>21) {
        alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou lose!");
    }
    else if(computerScore===21) {
        alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou lose!");
    }
    else if(playerScore===21) {
        alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou win!");
    }
    else if(playerScore===computerScore) {
        alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nTie!");
    }
    else if(computerScore<21 && playerScore<21) {
        if(playerScore>computerScore) {
            alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou win!");
        }
        else {      
            alert("Player score: " + this.playerScore + "\n\nComputer score: " + this.computerScore + "\n\nYou lose!");
        }
    }
}