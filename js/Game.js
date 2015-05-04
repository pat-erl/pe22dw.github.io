"use strict";


// Spelets gång från början av en runda till slutet av rundan.

var Game = {
    
    gameArea: document.getElementById("gamearea"),
    startButton: document.getElementById("startbutton"),
    betButton: document.getElementById("betbutton"),
    hitButton: document.getElementById("hitbutton"),
    standButton: document.getElementById("standbutton"),
    chipCount: document.getElementById("chipcount"),
    chips: document.getElementById("chips"),
    betAmount: document.getElementById("betamount"),
    bet100: document.getElementById("bet100"),
    bet500: document.getElementById("bet500"),
    bet1000: document.getElementById("bet1000"),
    messageText: document.getElementById("messagetext"),
    saveButton: document.getElementById("savebutton"),

    playerScore: 0,
    dealerScore: 0,
    playerChips: 0,
    playerBet: 0,
    playerCardCounter: 0,
    dealerCardCounter: 0,
    playerHasAce: 0,
    dealerHasAce: 0,
  
    init: function() {
        
        Table.fadeTable();
        
        Game.betButton.className = "inactive";
        Game.hitButton.className = "inactive";
        Game.standButton.className = "inactive";
        Game.chipCount.className = "inactive";
        Game.betAmount.className = "inactive";
        Game.saveButton.className = "inactive";
        
        
        // New game och resumegame borde gå att slå ihop på något sätt!
        
        var text = document.createElement("button");
        text.id = "newgamebutton";
        text.innerHTML = "NEW GAME";
        
        document.getElementById("dealerarea").appendChild(text);
        
        text.onclick = function () {
            
            text.className = "inactive";
            text2.className = "inactive";
            Game.newGame();
        };
        
        var text2 = document.createElement("button");
        text2.id = "resumegamebutton";
        text2.innerHTML = "RESUME PREVIOUS GAME";
        
        if (localStorage.getItem("playerchips") !== null) {
            
            document.getElementById("playerarea").appendChild(text2);
            
            text2.onclick = function () {
            
                text.className = "inactive";
                text2.className = "inactive";
                Game.resumeGame();
            };
        } 
    },
    
    newGame: function() {
        
        // localStorage.removeItem('playerchips'); // Om behöver rensa localstorage!
        
        Table.showTable();
        
        Deck.createDeck();
        Deck.shuffleDeck();
        
        Game.playerChips = 20000;
        
        Game.chips.innerHTML = "$" + Game.playerChips;
        Game.chipCount.className = "active2";
        
        // Här kan tutorial ligga sen!
        
        Game.betButton.className = "active";
        Game.betAmount.className = "active2";
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.newRound();
        };
    },
    
    resumeGame: function() {
        
        Table.showTable();
        
        Deck.createDeck();
        Deck.shuffleDeck();
        
        GameProgress.load();
        
        Game.chips.innerHTML = "$" + Game.playerChips;
        Game.chipCount.className = "active2";
        
        Game.betButton.className = "active";
        Game.betAmount.className = "active2";
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.newRound();
        };
    },
    
    newRound: function() {
        
        // Sker alltid vid varje ny spelrunda!
        
        if(Game.bet500.checked) {
            
            Game.playerBet = 500;
            
        } else if(Game.bet1000.checked) {
            
            Game.playerBet = 1000;
            
        } else {
            
            Game.playerBet = 100;
        }
        
        Game.playerChips -= Game.playerBet;
        Game.chips.innerHTML = "$" + Game.playerChips;
        
        Chip.displayChip();
        
        setTimeout(function(){
            
            Game.playerHits();
                    
        },500); 
        
        setTimeout(function(){
                    
            Game.dealerHits();
                    
        },500); 
        
        setTimeout(function(){
                    
            Game.playerHits();
            
        },1500); 
        
        setTimeout(function(){
            
            if(Game.playerScore === 21 && Game.dealerScore !== 11 && Game.dealerScore !== 10) {
                
                Score.compare();
                
            } else {
                
                Game.hitButton.className = "active";
                Game.standButton.className = "active";
            }
                
        },2000); 

        // Härifrån bestämmer spelaren vad som händer.
        
        Game.hitButton.onclick = function () {
            
            Game.playerHits();
        };
        
        Game.standButton.onclick = function () {
            
            Game.hitButton.className = "inactive";
            Game.standButton.className = "inactive";
            
            Game.dealerHits();
        };
    },
    
    playerHits: function() {
        
        Deck.drawCard();
        Game.playerCardCounter += 1;
        Card.displayPlayerCard(Deck.currentCard);
        Game.playerScore = Game.playerScore + Score.recalculate(Deck.currentCard);
        Score.displayPlayerScore();
        
        if(Deck.currentCard.substring(1) === "1") {
            
            Game.playerHasAce += 1;
        }
        
        if(Game.playerScore > 21) {
            
            // Kollar om det finns ett ess som kan göras om från 11 till 1.
            if(Game.playerHasAce > 0) {
                            
                Game.playerScore -= 10;
                Score.displayPlayerScore();
                Game.playerHasAce -= 1;
                        
            } else {
                
                Game.hitButton.className = "inactive";
                Game.standButton.className = "inactive";
                            
                //setTimeout(function(){
                            
                    Score.playerBust();
                    
                //},1000); 
            }
        }
    },
    
    dealerHits: function() {
        
        setTimeout(function () { 
            
            Deck.drawCard();
            Game.dealerCardCounter += 1;
            Card.displayDealerCard(Deck.currentCard);
            Game.dealerScore = Game.dealerScore + Score.recalculate(Deck.currentCard);  
            Score.displayDealerScore();
            
            if(Deck.currentCard.substring(1) === "1") {
            
                Game.dealerHasAce += 1;
            }
        
            // Körs när dealern har minst två kort.
            if(Game.dealerCardCounter >= 2) {
            
                // Dealern drar kort så länge poängen är under 17.
                if(Game.dealerScore < 17) {
                        
                    Game.dealerHits();
                        
                } else {
                    
                    if(Game.dealerScore > 21) {
                        
                        // Kollar om det finns ett ess som kan göras om från 11 till 1.
                        if(Game.dealerHasAce > 0) {
                            
                             Game.dealerScore -= 10;
                             Score.displayDealerScore();
                             Game.dealerHasAce -= 1;
                             
                             Game.dealerHits();
                        
                        } else {
                            
                            //setTimeout(function(){
                            
                                Score.dealerBust();
                    
                            //},1000); 
                        }
                        
                    } else {
                        
                        //setTimeout(function(){
                    
                            Score.compare();
                    
                        //},1000); 
                    }
                }
            }
        }, 500);
    },
    
    roundIsOver: function() {
        
        setTimeout(function(){
                    
            // Rensar meddelanden från föregående runda.
            Game.messageText.innerHTML = "";
                    
        },1000); 
        
        setTimeout(function(){
                    
            // "Samlar" in alla kort, dvs rensar canvas.
            var temp1 = document.getElementById("playercards");
            temp1.getContext('2d').clearRect(0, 0, temp1.width, temp1.height);
        
            var temp2 = document.getElementById("dealercards");
            temp2.getContext('2d').clearRect(0, 0, temp2.width, temp1.height);
            
            Game.chips.innerHTML = "$" + Game.playerChips;
                    
        },2000);
        
        setTimeout(function(){
                    
            // Flyttar de kort som varit i spel till en egen array.
            for (var i = 0; i < Deck.cardsInPlay.length; i+=1) {
            
                Deck.usedCards.push(Deck.cardsInPlay[i]);
            }
        
            // Rensar arrayen för kort i spel.
            Deck.cardsInPlay.length = 0;
        
            // Nollställer poäng, aktuellt kort och korträknare.
            Game.playerScore = 0;
            Game.dealerScore = 0;
            Deck.currentCard = null;
            Game.playerCardCounter = 0;
            Game.dealerCardCounter = 0;
            Game.playerHasAce = 0;
            Game.dealerHasAce = 0;
            
            Table.showRadioButtons();
            Game.betButton.className = "active";
            
            Game.saveButton.className = "active";
            
            Game.saveButton.onclick = function () {
                
                Game.saveButton.className = "inactive";
                GameProgress.save();
            };
                    
        },3000); 
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.saveButton.className = "inactive";
            Game.newRound();
        };
    },
};










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
        
        alert("Kortleken har blandats");
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










// Funktioner för beräkning av poäng.

var Score = {
    
    recalculate: function(card) {
    
        // Omvandlar varje kort till rätt poäng.  
        var score;
        
        card = card.substring(1);
        score = parseInt(card, 10);
        
        if(score >= 10) {
            
            return 10;
            
        } else {
            
            if(score === 1) {
                
                return 11;
            }
            return score;   
        }
    },
    
    compare: function() {
        
        // Jämför spelarens och dealerns poäng och ser till att rätt meddelande visas.
        
        if(Game.playerScore > Game.dealerScore && Game.playerScore === 21 && Game.playerCardCounter === 2) {
            
            var message6 = "BLACKJACK!!";
            Game.messageText.className = "blackjack";
            Messages.displayMessage(message6);    
            
            Chip.displayChip();
            
            Game.playerChips = Game.playerChips + (Game.playerBet * 2.5);
            
        } else if(Game.playerScore > Game.dealerScore) {
            
            var message = "PLAYER WINS";
            Game.messageText.className = "win";
            Messages.displayMessage(message);    
            
            Chip.displayChip();
            
            Game.playerChips = Game.playerChips + (Game.playerBet * 2);
                
        } else if(Game.playerScore < Game.dealerScore) {
                
            var message2 = "DEALER WINS";
            Game.messageText.className = "lose";
            Messages.displayMessage(message2);   
                
        } else {
            
            var message3 = "PLAYER AND DEALER TIES";
            Game.messageText.className = "tie";
            Messages.displayMessage(message3); 

            Game.playerChips = Game.playerChips + Game.playerBet;
        }
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },1000); 
    },
    
    playerBust: function() {
        
        var message4 = "PLAYER BUSTED";
        Game.messageText.className = "lose";
        Messages.displayMessage(message4);
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },1000); 
    },
    
    dealerBust: function() {
        
        var message5 = "DEALER BUSTED";
        Game.messageText.className = "win";
        Messages.displayMessage(message5);
        
        Chip.displayChip();
        
        Game.playerChips = Game.playerChips + (Game.playerBet * 2);
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },1000);
    },
    
    displayPlayerScore: function() {
        
        var canvas4 = document.getElementById("playercards");
        var context4 = canvas4.getContext('2d');
        
        context4.clearRect(0, 0, 80, 30);
        context4.font = "13px Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif";
        context4.fillStyle = "white";
        context4.fillText(Game.playerScore, 60, 15);
    },
    
    displayDealerScore: function() {
        
        var canvas5 = document.getElementById("dealercards");
        var context5 = canvas5.getContext('2d');
        
        context5.clearRect(0, 0, 80, 30);
        context5.font = "13px Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif";
        context5.fillStyle = "white";
        context5.fillText(Game.dealerScore, 60, 15);
    },
};










// Funktioner för visning av kort med canvas.
// Spelkort från http://www.jfitz.com/cards/

var Card = {
    
    displayPlayerCard: function(card) {
        
         var canvas = document.getElementById("playercards");
         var context = canvas.getContext('2d');

        if (Game.playerCardCounter === 1) {
            
            var image1p = new Image();
            image1p.src = "../pics/cards/"+ card + ".png";
            image1p.onload = function() {
            
            context.drawImage(image1p, 95, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 2) {
            
            var image2p = new Image();
            image2p.src = "../pics/cards/"+ card + ".png";
            image2p.onload = function() {
            
            context.drawImage(image2p, 115, 6, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 3) {
            
            var image3p = new Image();
            image3p.src = "../pics/cards/"+ card + ".png";
            image3p.onload = function() {
            
            context.drawImage(image3p, 135, 4, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 4) {
            
            var image4p = new Image();
            image4p.src = "../pics/cards/"+ card + ".png";
            image4p.onload = function() {
            
            context.drawImage(image4p, 155, 2, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 5) {
            
            var image5p = new Image();
            image5p.src = "../pics/cards/"+ card + ".png";
            image5p.onload = function() {
            
            context.drawImage(image5p, 175, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 6) {
            
            var image6p = new Image();
            image6p.src = "../pics/cards/"+ card + ".png";
            image6p.onload = function() {
            
            context.drawImage(image6p, 195, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 7) {
            
            var image7p = new Image();
            image7p.src = "../pics/cards/"+ card + ".png";
            image7p.onload = function() {
            
            context.drawImage(image7p, 215, 0, 64, 86);
            };
        }
    },
    
    displayDealerCard: function(card) {
        
        var canvas2 = document.getElementById("dealercards");
        var context2 = canvas2.getContext('2d');

        if (Game.dealerCardCounter === 1) {
            
            var image1d = new Image();
            image1d.src = "../pics/cards/"+ card + ".png";
            image1d.onload = function() {
            
            context2.drawImage(image1d, 95, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 2) {
            
            var image2d = new Image();
            image2d.src = "../pics/cards/"+ card + ".png";
            image2d.onload = function() {
            
            context2.drawImage(image2d, 115, 6, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 3) {
            
            var image3d = new Image();
            image3d.src = "../pics/cards/"+ card + ".png";
            image3d.onload = function() {
            
            context2.drawImage(image3d, 135, 4, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 4) {
            
            var image4d = new Image();
            image4d.src = "../pics/cards/"+ card + ".png";
            image4d.onload = function() {
            
            context2.drawImage(image4d, 155, 2, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 5) {
            
            var image5d = new Image();
            image5d.src = "../pics/cards/"+ card + ".png";
            image5d.onload = function() {
            
            context2.drawImage(image5d, 175, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 6) {
            
            var image6d = new Image();
            image6d.src = "../pics/cards/"+ card + ".png";
            image6d.onload = function() {
            
            context2.drawImage(image6d, 195, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 7) {
            
            var image7d = new Image();
            image7d.src = "../pics/cards/"+ card + ".png";
            image7d.onload = function() {
            
            context2.drawImage(image7d, 215, 0, 64, 86);
            };
        }
    },
};



// Funktioner för visning av en visuell spelmark med canvas.

var Chip = {
    
    displayChip: function() {
        
        var canvas3 = document.getElementById("playercards");
        var context3 = canvas3.getContext('2d');
        
        if(Game.playerScore > Game.dealerScore || Game.dealerScore > 21) {
            
            var imageChip = new Image();
        
            imageChip.src = "../pics/chips8.png";
            imageChip.onload = function() {
            
            context3.drawImage(imageChip, 9, 47, 32, 26);
            };
        
        } else {
            
            var imageChip2 = new Image();
        
            imageChip2.src = "../pics/chips8.png";
            imageChip2.onload = function() {
            
            context3.drawImage(imageChip2, 45, 54, 32, 26);
            };
        }
        
        if(Game.playerScore === 21 && Game.playerCardCounter === 2) {
            
            var imageChip3 = new Image();
        
            imageChip3.src = "../pics/chips2.png";
            imageChip3.onload = function() {
            
            context3.drawImage(imageChip3, 0, 8, 70, 45);
            };
            
        }
    },
};






// Funktioner för utskrift av meddelanden.

var Messages = {
    
    displayMessage: function(message) {
        
        Game.messageText.innerHTML = message;
    },
};





























// Funktioner för spelbordet.

var Table = {
    
    fadeTable: function() {
        
        Game.gameArea.style.opacity = "0.6";
    },
    
    showTable: function() {
        
        Game.gameArea.style.opacity = "1";
    },
    
    fadeRadiobuttons: function() {
        
        Game.bet100.disabled = true;
        Game.bet500.disabled = true;
        Game.bet1000.disabled = true;
        
        Game.betAmount.style.opacity = 0.3;
    },
    
    showRadioButtons: function() {
        
        Game.bet100.disabled = false;
        Game.bet500.disabled = false;
        Game.bet1000.disabled = false;
        
        Game.betAmount.style.opacity = 1;
    },
};





// Funktioner för att spara och hämta antalet marker i local storage.

var GameProgress = {
    
    save: function() {
        
        localStorage.setItem('playerchips', Game.playerChips);
        
        var saved = "Game saved";
        Game.messageText.className = "win";
        Messages.displayMessage(saved);
    },
    
    load: function() {
        
        Game.playerChips = localStorage.getItem('playerchips');
    },
};

















window.onload = Game.init;