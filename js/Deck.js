"use strict";

// Funktioner för kortleken.

var Deck = {
    
    cards: [],
    currentCard: null,
    cardsInPlay: [],
    usedCards: [],
    
    createDeck: function() {
        
        // Kollar om det är första gången en kortlek skapas.
        if(Deck.usedCards.length == 0)
        {
            // Skapar en ny kortlek med 52 kort.
            Deck.cards = [
            "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13",
            "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13",
            "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13",
            "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13"];
        }
        else
        {
            // Skapar en kortlek av alla de använda korten.
            for (var i = 0; i < Deck.usedCards.length; i+=1) {
            
                Deck.cards.push(Deck.usedCards[i]);
            }
            
            // Rensar arrayen för använda kort.
            Deck.usedCards.length = 0;
        }
    },
    
    shuffleDeck: function() {
      
        // Blandar kortleken. Från http://bost.ocks.org/mike/shuffle/
        var m = Deck.cards.length, t, i;
        
        while (m) {
            
            i = Math.floor(Math.random() * m--);
            
            t = Deck.cards[m];
            Deck.cards[m] = Deck.cards[i];
            Deck.cards[i] = t;
        }
        
        var shuffleMessage = "  SHUFFLING..";
        Messages.displayMessageOther(shuffleMessage);
        
        Sound.shuffleStart();
    },
    
    drawCard: function() {
        
        // Drar nästa kort i kortleken. 
        Deck.currentCard = Deck.cards.shift();
        
        // Håller reda på vilka kort som är i spel i en separat array.
        Deck.cardsInPlay.push(Deck.currentCard);
        
        // Om kortleken tar slut så skapas och blandas en ny direkt.
        if (Deck.cards.length === 0)
        {
            Deck.createDeck();
            Deck.shuffleDeck();
        }
    },
};