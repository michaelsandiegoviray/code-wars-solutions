/*

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'







*/


function defineSuit(card) {

    if (card.includes('♣')) { return 'clubs' }
    else if (card.includes('♦')) { return 'diamonds' }
    else if (card.includes('♥')) { return 'hearts' }
    else if (card.includes('♠')) { return 'spades' }


}

// here we use the method includes to see if it includes a certain suit, if it does then we will return the appropriate text