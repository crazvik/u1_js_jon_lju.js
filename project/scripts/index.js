var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function newDeck() {
    var deck = new Array();
    for(var i=0; i<4; i++) {
        for(var j=0; j<values.length; j++) {
            deck.push(j);
        }
    }
    deck.shuffle();
}

function shuffle() {
    for(var i=0; i<208; i++) {
        var card1 = Math.round(Math.random*deck.length);
        var card2 = Math.round(Math.random*deck.length);
        var temp = deck[card1];
        deck[card1] = deck[card2];
        deck[card2] = temp;
    }
}