"use strict";


// Spelets gång från början av en runda till slutet av rundan.

var Game = {
    
    gameArea: document.getElementById("gamearea"),
    startButton: document.getElementById("startbutton"),
    betButton: document.getElementById("betbutton"),
    hitButton: document.getElementById("hitbutton"),
    standButton: document.getElementById("standbutton"),
    doubleButton: document.getElementById("doublebutton"),
    chipCount: document.getElementById("chipcount"),
    chips: document.getElementById("chips"),
    betAmount: document.getElementById("betamount"),
    bet100: document.getElementById("bet100"),
    bet500: document.getElementById("bet500"),
    bet1000: document.getElementById("bet1000"),
    tinyMessage: document.getElementById("tinymessage"),
    saveButton: document.getElementById("savebutton"),
    strategyTips: document.getElementById("strategytips"),
    toggleStrategy: document.getElementById("togglestrategy"),

    playerScore: 0,
    dealerScore: 0,
    playerChips: 0,
    playerBet: 0,
    playerCardCounter: 0,
    dealerCardCounter: 0,
    playerHasAce: 0,
    dealerHasAce: 0,
    playerHasDoubled: false,

    init: function() {
        
        Table.fadeTable();
        
        Game.betButton.className = "inactive";
        Game.hitButton.className = "inactive";
        Game.standButton.className = "inactive";
        Game.doubleButton.className = "inactive";
        Game.chipCount.className = "inactive";
        Game.betAmount.className = "inactive";
        Game.saveButton.className = "inactive";
        Game.chips.className = "chipsnormal";
        Game.strategyTips.style.display = 'none';
        
        
        var resumeGameButton = document.createElement("button");
        resumeGameButton.id = "resumegamebutton";
        resumeGameButton.innerHTML = "RESUME LAST SAVED GAME";
        
        var removeButton = document.createElement("button");
        removeButton.id = "removebutton";    
        removeButton.innerHTML = "CLEAR";
        
        if (localStorage.getItem("playerchips") !== null) {
            
            document.getElementById("playerbuttons").appendChild(resumeGameButton);
            
            document.getElementById("playerbuttons").appendChild(removeButton);
            
            resumeGameButton.onclick = function () {
            
                resumeGameButton.className = "inactive";
                newGameButton.className = "inactive";
                removeButton.className = "inactive";
                Game.resumeGame();
            };
            
            removeButton.onclick = function () {
                
                localStorage.removeItem('playerchips');
                document.location.reload();
            };
        } 
        
        var newGameButton = document.createElement("button");
        newGameButton.id = "newgamebutton";
        newGameButton.innerHTML = "NEW GAME";
        
        document.getElementById("playerbuttons").appendChild(newGameButton);
        
        newGameButton.onclick = function () {
            
            newGameButton.className = "inactive";
            resumeGameButton.className = "inactive";
            removeButton.className = "inactive";
            Game.tutorial();
        };
    },
    
    
     // New game och resumegame borde gå att slå ihop på något sätt! om resumegame anropasnewgame men med med pareameter om resumegame, det som skiljer är markerantalet!
     
    newGame: function() {
        
        Table.showTable();
        
        Deck.createDeck();
        Deck.shuffleDeck();
        
        Game.playerChips = 2000;
        
        Game.chips.innerHTML = "$" + Game.playerChips;
        Game.chipCount.className = "active2";
        
        if(Game.playerChips <= 500) {
    
            Game.chips.style.borderColor = "red";
            
        } else if(Game.playerChips >= 5000 && Game.playerChips < 10000) {
                
            Game.chips.style.borderColor = "chartreuse";
                
        } else if(Game.playerChips >= 10000) {
                
            Game.chips.style.borderColor = "gold";
                
        } else {
                
            Game.chips.style.borderColor = "dodgerblue";
        }
        
        Table.showRadioButtons();
        Game.betButton.className = "active";
        Game.betAmount.className = "active2";
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.newRound();
        };
        
        Game.toggleStrategy.onclick = function() {
            
            if(Game.strategyTips.style.display === 'none') {
                
                Game.strategyTips.style.display = 'block';
                Game.toggleStrategy.style.backgroundColor = "#4c4c4c";
                //#698fbf
            } else {
                
                Game.strategyTips.style.display = 'none';
                Game.toggleStrategy.style.backgroundColor = "black";
            }
        };
    },
    
    resumeGame: function() {
        
        Table.showTable();
        
        Deck.createDeck();
        Deck.shuffleDeck();
        
        GameProgress.load();
        
        Game.chips.innerHTML = "$" + Game.playerChips;
        Game.chipCount.className = "active2";
        
        if(Game.playerChips <= 500) {
    
            Game.chips.style.borderColor = "red";
            
        } else if(Game.playerChips >= 5000 && Game.playerChips < 10000) {
                
            Game.chips.style.borderColor = "chartreuse";
                
        } else if(Game.playerChips >= 10000) {
                
            Game.chips.style.borderColor = "gold";
                
        } else {
                
            Game.chips.style.borderColor = "dodgerblue";
        }
        
        Table.showRadioButtons();
        Game.betButton.className = "active";
        Game.betAmount.className = "active2";
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.newRound();
        };
        
        Game.toggleStrategy.onclick = function() {
            
            if(Game.strategyTips.style.display === 'none') {
                
                Game.strategyTips.style.display = 'block';
                Game.toggleStrategy.style.backgroundColor = "#4c4c4c";
                
            } else {
                
                Game.strategyTips.style.display = 'none';
                Game.toggleStrategy.style.backgroundColor = "black";
            }
        };
    },
    
    newRound: function() {
        
        // Sker alltid vid varje ny spelrunda!
        
        if(Game.bet500.checked) {
            
            Game.playerBet = 500;
            Chip.textColor = "chartreuse";
            
            } else if(Game.bet1000.checked) {
            
            Game.playerBet = 1000;
            Chip.textColor = "gold";
            
            } else {
            
            Game.playerBet = 100;
            Chip.textColor = "cyan";
        }
        
        Game.doubleButton.style.backgroundColor = Chip.textColor;
        
        if(Game.playerChips < Game.playerBet) {
            
            var noChips = "NOT ENOUGH CHIPS!";
            Messages.textColor = "red";
            Messages.displayMessage(noChips);
            Table.showRadioButtons();
            Game.betButton.className = "active";
            
        } else {
            
            Game.playerChips -= Game.playerBet;
            Game.chips.innerHTML = "$" + Game.playerChips;
            
            if(Game.playerChips <= 500) {
    
                Game.chips.style.borderColor = "red";
            
            } else if(Game.playerChips >= 5000 && Game.playerChips < 10000) {
                
                Game.chips.style.borderColor = "chartreuse";
                
            } else if(Game.playerChips >= 10000) {
                
                Game.chips.style.borderColor = "gold";
                
            } else {
                
                Game.chips.style.borderColor = "dodgerblue";
            }
            
            Chip.displayChip();
        
            setTimeout(function(){
                
                Game.playerHits();
                        
            },500); 
            
            setTimeout(function(){
                        
                Game.dealerHits();
                        
            },500); 
            
            setTimeout(function(){
                        
                Game.playerHits();
                Strategy.calculate();
                
            },1500); 
            
            setTimeout(function(){
                
                if(Game.playerScore === 21 && Game.dealerScore !== 11 && Game.dealerScore !== 10) {
                    
                    Score.compare();
                    
                } else {
                    
                    Game.hitButton.className = "active";
                    Game.standButton.className = "active";
                    Game.doubleButton.className = "active";
                    Game.doubleButton.disabled = false;
                    Game.doubleButton.style.opacity = "0.7";
                }
                    
            },2000); 
    
            // Härifrån bestämmer spelaren vad som händer.
            
            Game.hitButton.onclick = function () {
                
                Game.playerHits();
                Strategy.calculate();
                Game.doubleButton.disabled = true;
                Game.doubleButton.style.opacity = "0.3";
            };
            
            Game.standButton.onclick = function () {
                
                Game.hitButton.className = "inactive";
                Game.standButton.className = "inactive";
                Game.doubleButton.className = "inactive";
                Game.strategyTips.innerHTML = "";
                
                Game.dealerHits();
            };
            
            Game.doubleButton.onclick = function () {
                
                Game.playerDoubles();
            };
        }
    },
    
    playerHits: function() {
        
        Deck.drawCard();
        Game.playerCardCounter += 1;
        Card.displayPlayerCard(Deck.currentCard);
        
        if(Deck.currentCard.substring(1) === "1") {
            
            Game.playerHasAce += 1;
        }
        
        if(Game.playerScore > 21) {
            
            // Kollar om det finns ett ess som kan göras om från 11 till 1.
            if(Game.playerHasAce > 0) {
                            
                Game.playerScore -= 10;
                Score.displayPlayerScore();
                Game.playerHasAce -= 1;
                
                if(Game.playerScore === 22) {
                    
                    Game.hitButton.className = "inactive";
                    Game.standButton.className = "inactive";
                    Game.doubleButton.className = "inactive";
                    Score.compare();
                }
                        
            } else {
                
                Game.hitButton.className = "inactive";
                Game.standButton.className = "inactive";
                Game.doubleButton.className = "inactive";
                
                Score.compare();
            }
        }
    },
    
    dealerHits: function() {
        
        setTimeout(function () { 
            
            Deck.drawCard();
            Game.dealerCardCounter += 1;
            Card.displayDealerCard(Deck.currentCard);
            
            if(Deck.currentCard.substring(1) === "1") {
            
                Game.dealerHasAce += 1;
            }
        
            // Körs bara när dealern har minst två kort.
            if(Game.dealerCardCounter >= 2) {
            
                // Dealern drar fler kort så länge poängen är under 17.
                if(Game.dealerScore < 17) {
                        
                    Game.dealerHits();
                        
                } else {
                    
                    if(Game.dealerScore > 21) {
                        
                        // Kollar om det finns ett ess som kan göras om från 11 till 1.
                        if(Game.dealerHasAce > 0) {
                            
                             Game.dealerScore -= 10;
                             Score.displayDealerScore();
                             Game.dealerHasAce -= 1;
                             
                             if(Game.dealerScore === 17) {
                                 
                                 Score.compare();
                                 
                             } else {
                                 
                                 Game.dealerHits();
                             }
                        
                        } else {
                            
                            Score.compare();
                        }
                        
                    } else {
                        
                        Score.compare();
                    }
                }
            }
        }, 500);
    },
    
    playerDoubles: function() {
        
        if(Game.playerChips < Game.playerBet) {
            
            var noChips = "NOT ENOUGH CHIPS!";
            Messages.textColor = "red";
            Messages.displayMessage(noChips);
            
        } else {
            
            Game.hitButton.className = "inactive";
            Game.standButton.className = "inactive";
            Game.doubleButton.className = "inactive";
            Game.strategyTips.innerHTML = "";
            
            Game.playerChips -= Game.playerBet;
            Game.chips.innerHTML = "$" + Game.playerChips;
            
            if(Game.playerChips <= 500) {
    
                Game.chips.style.borderColor = "red";
            
            } else if(Game.playerChips >= 5000 && Game.playerChips < 10000) {
                
                Game.chips.style.borderColor = "chartreuse";
                
            } else if(Game.playerChips >= 10000) {
                
                Game.chips.style.borderColor = "gold";
                
            } else {
                
                Game.chips.style.borderColor = "dodgerblue";
            }
            
            Game.playerBet = Game.playerBet * 2;
            Game.playerHasDoubled = true;
            
            Chip.displayDoubleChip();
        
            setTimeout(function(){
                
                Deck.drawCard();
                Game.playerCardCounter += 1;
                Card.displayPlayerCard(Deck.currentCard);
        
                if(Deck.currentCard.substring(1) === "1") {
            
                    Game.playerHasAce += 1;
                }
        
                if(Game.playerScore > 21) {
            
                    // Kollar om det finns ett ess som kan göras om från 11 till 1.
                    if(Game.playerHasAce > 0) {
                            
                        Game.playerScore -= 10;
                        Score.displayPlayerScore();
                        Game.playerHasAce -= 1;
                
                        if(Game.playerScore === 22) {
                    
                            Score.compare();
                        
                        } else {
                            
                            Game.dealerHits();
                        }
                        
                    } else {
                
                        Score.compare();
                    }
                    
                } else {
                
                    Game.dealerHits();
                }
                
            },500);
        }
    },
    
    roundIsOver: function() {
        
         if(Messages.textColorP === "chartreuse" || Messages.textColorP === "gold" || Messages.textColorP === "dodgerblue") {
       
            Game.chips.className = "chipswin";
            Game.chips.style.color = "silver";
        
            setTimeout(function() {
                
                // Rensar bort den första marken samt extramarkerna för Blackjack.
                var temp3 = document.getElementById("playercards");
                temp3.getContext('2d').clearRect(0, 20, 80, 60);
                
                // Denna del rensar bort det lilla som annars blir kvar efter en dubbling.
                var temp8 = document.getElementById("playercards");
                temp8.getContext('2d').clearRect(62, 65, 32, 27);
                
                var temp5 = document.getElementById("playercards");
                temp5.getContext('2d').clearRect(0, 0, 55, 60);
                
                var temp6 = document.getElementById("dealercards");
                temp6.getContext('2d').clearRect(0, 60, 60, 40);
                
                Game.chips.style.fontWeight = "bold";
                Game.chips.style.color = Chip.textColor;
                Game.chips.innerHTML = "$" + Game.playerChips;
                
                if(Game.playerChips <= 500) {
    
                    Game.chips.style.borderColor = "red";
            
                } else if(Game.playerChips >= 5000 && Game.playerChips < 10000) {
                
                    Game.chips.style.borderColor = "chartreuse";
                
                } else if(Game.playerChips >= 10000) {
                
                    Game.chips.style.borderColor = "gold";
                
                } else {
                
                    Game.chips.style.borderColor = "dodgerblue";
                }
           
            },500);
        
        } else {
            
            setTimeout(function() {
                
                // Rensar bort den första marken.
                var temp4 = document.getElementById("playercards");
                temp4.getContext('2d').clearRect(0, 20, 80, 60);
                
                // Denna del rensar bort det lilla som annars blir kvar efter en dubbling.
                var temp7 = document.getElementById("playercards");
                temp7.getContext('2d').clearRect(62, 65, 32, 27);
                
            },500);
        } 
        
        setTimeout(function(){
            
            // "Samlar" in alla kort, dvs rensar canvas.
            var temp1 = document.getElementById("playercards");
            temp1.getContext('2d').clearRect(0, 0, temp1.width, temp1.height);
        
            var temp2 = document.getElementById("dealercards");
            temp2.getContext('2d').clearRect(0, 0, temp2.width, temp2.height);
            
            Game.chips.style.fontWeight = "normal";
            Game.chips.style.color = "silver";
            Game.chips.className = "chipsnormal";
            
        },1000);
        
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
            Messages.textColorP = "";
            Game.playerHasDoubled = false;
            
            if(Game.playerChips < 100) {
                
                Game.gameOver();
                
            } else {
                
                Table.showRadioButtons();
                Game.betButton.className = "active";
            
                Game.betButton.onclick = function () {
            
                    Game.betButton.className = "inactive";
                    Table.fadeRadiobuttons();
                    Game.saveButton.className = "inactive";
                    Game.newRound();
                };
            
                Game.saveButton.className = "active";
            
                Game.saveButton.onclick = function () {
                
                    Game.saveButton.className = "inactive";
                    GameProgress.save();
                };
            }
            
        },1500);
    },
    
    tutorial: function() {
        
        var tutorial = document.createElement("div");
        tutorial.id = "tutorial";
        Game.gameArea.appendChild(tutorial);
        
        var tutorialText = document.createElement("p");
        tutorialText.className = "tutorialtext";
        tutorialText.innerHTML = "*Get a higher score than the dealer without exceeding 21 points.<br />*Aces are worth 11 or 1 points.<br />*Kings, queens, jacks and tens are all worth 10 points.<br />*All cards from 2-9 are worth their specific number in points.<br />*Dealer must draw on 16 points and below.<br />*21 points gained with only two cards beats 21 points gained from several.";
        tutorial.appendChild(tutorialText);
        
        var tutorialButton = document.createElement("button");
        tutorialButton.id = "tutorialbutton";
        tutorialButton.innerHTML = "SKIP TUTORIAL";
        tutorialText.appendChild(tutorialButton);
        
        tutorialButton.onclick = function() {
            
            Game.newGame();
            tutorial.className = "inactive";
        };
    },
    
    gameOver: function() {
        
        if (confirm("You ran out of chips! Play again?")) { 
            
            document.location.reload();
        
        } else {
            
            document.location.reload();
        }
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
        
        var shuffleMessage = "  SHUFFLING..";
        Messages.displayMessageOther(shuffleMessage);
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
    
    win: "WINS",
    draw: "TIES",
    
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
    
     // Jämför spelarens och dealerns poäng och ser till att rätt belopp och rätt meddelande visas.
    compare: function() {
        
        // Detta händer om spelaren har mer än 21 poäng.
        if(Game.playerScore > 21) {
            
            Score.dealerWin();
        
        // Detta händer om dealern har mer än 21 poäng.    
        } else if(Game.dealerScore > 21) {
            
            Score.playerWin();
            
        // Detta händer om spelaren har mer poäng än dealern.
        } else if(Game.playerScore > Game.dealerScore) {
            
            if(Game.playerScore === 21 && Game.playerCardCounter === 2) {
                
                Score.blackJack();
                
            } else {
                
                Score.playerWin();
            }
        
        // Detta händer om dealern har mer poäng än spelaren.
        } else if(Game.dealerScore > Game.playerScore) {
            
            Score.dealerWin();
        
        // Detta händer om spelaren och dealern har samma poäng.    
        } else {
            
            if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.dealerCardCounter > 2) {
                
                Score.blackJack();
                
            } else if(Game.dealerScore === 21 && Game.dealerCardCounter === 2 && Game.playerCardCounter > 2) {
                
                Score.dealerWin();
                
            } else {
                
                Score.nobodyWin();
            }
        }
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },2000); 
    },
    
    blackJack: function() {
        
        Messages.textColorP = "gold";
        Messages.displayMessageP(Score.win);    
            
        Chip.displayChip();
            
        Game.playerChips = Game.playerChips + (Game.playerBet * 2.5);
    },
    
    playerWin: function() {
        
        Messages.textColorP = "chartreuse";
        Messages.displayMessageP(Score.win);    
            
        Chip.displayChip();
            
        Game.playerChips = Game.playerChips + (Game.playerBet * 2);
    },
    
    dealerWin: function() {
        
        Messages.textColorD = "chartreuse";    
        Messages.displayMessageD(Score.win);
    },
    
    nobodyWin: function() {
        
        Messages.textColorP = "dodgerblue";
        Messages.textColorD = "dodgerblue";
        Messages.displayMessageP(Score.draw); 
        Messages.displayMessageD(Score.draw); 

        Game.playerChips = Game.playerChips + Game.playerBet;
    },
    
    displayPlayerScore: function() {
        
        var canvas4 = document.getElementById("playercards");
        var context4 = canvas4.getContext('2d');
        
        context4.clearRect(0, 0, 80, 30);
        context4.font = "14px Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif";
        context4.fillStyle = "white";
        context4.fillText(Game.playerScore, 60, 15);
    },
    
    displayDealerScore: function() {
        
        var canvas5 = document.getElementById("dealercards");
        var context5 = canvas5.getContext('2d');
        
        context5.clearRect(0, 0, 80, 30);
        context5.font = "14px Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif";
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
            
            context.drawImage(image2p, 110, 6, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 3) {
            
            var image3p = new Image();
            image3p.src = "../pics/cards/"+ card + ".png";
            image3p.onload = function() {
            
            context.drawImage(image3p, 125, 4, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 4) {
            
            var image4p = new Image();
            image4p.src = "../pics/cards/"+ card + ".png";
            image4p.onload = function() {
            
            context.drawImage(image4p, 140, 2, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 5) {
            
            var image5p = new Image();
            image5p.src = "../pics/cards/"+ card + ".png";
            image5p.onload = function() {
            
            context.drawImage(image5p, 155, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 6) {
            
            var image6p = new Image();
            image6p.src = "../pics/cards/"+ card + ".png";
            image6p.onload = function() {
            
            context.drawImage(image6p, 170, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 7) {
            
            var image7p = new Image();
            image7p.src = "../pics/cards/"+ card + ".png";
            image7p.onload = function() {
            
            context.drawImage(image7p, 185, 0, 64, 86);
            };
            
        } else if (Game.playerCardCounter === 8) {
            
            var image8p = new Image();
            image8p.src = "../pics/cards/"+ card + ".png";
            image8p.onload = function() {
            
            context.drawImage(image8p, 200, 0, 64, 86);
            };
        }
        
        Game.playerScore = Game.playerScore + Score.recalculate(Deck.currentCard);
        Score.displayPlayerScore();
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
            
            context2.drawImage(image2d, 110, 6, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 3) {
            
            var image3d = new Image();
            image3d.src = "../pics/cards/"+ card + ".png";
            image3d.onload = function() {
            
            context2.drawImage(image3d, 125, 4, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 4) {
            
            var image4d = new Image();
            image4d.src = "../pics/cards/"+ card + ".png";
            image4d.onload = function() {
            
            context2.drawImage(image4d, 140, 2, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 5) {
            
            var image5d = new Image();
            image5d.src = "../pics/cards/"+ card + ".png";
            image5d.onload = function() {
            
            context2.drawImage(image5d, 155, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 6) {
            
            var image6d = new Image();
            image6d.src = "../pics/cards/"+ card + ".png";
            image6d.onload = function() {
            
            context2.drawImage(image6d, 170, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 7) {
            
            var image7d = new Image();
            image7d.src = "../pics/cards/"+ card + ".png";
            image7d.onload = function() {
            
            context2.drawImage(image7d, 185, 0, 64, 86);
            };
            
        } else if (Game.dealerCardCounter === 8) {
            
            var image8d = new Image();
            image8d.src = "../pics/cards/"+ card + ".png";
            image8d.onload = function() {
            
            context2.drawImage(image8d, 200, 0, 64, 86);
            };
        }
        
        Game.dealerScore = Game.dealerScore + Score.recalculate(Deck.currentCard);  
        Score.displayDealerScore();
    },
};



// Funktioner för visning av en visuell spelmark med canvas.

var Chip = {
    
    textColor: "",
    
    blackjackAmount: 0,
    
    displayChip: function() {
        
        var canvas3 = document.getElementById("playercards");
        var context3 = canvas3.getContext('2d');
        var canvas6 = document.getElementById("dealercards");
        var context6 = canvas6.getContext('2d');
        
        if(Game.playerScore > Game.dealerScore || Game.dealerScore > 21) {
            
            var imageChip = new Image();
            
            setTimeout(function(){
            
                imageChip.src = "../pics/chips8.png";
                imageChip.onload = function() {
            
                context3.drawImage(imageChip, 9, 47, 32, 26);
            };
            
            context3.font = "bold 10px Futura, 'Trebuchet MS', Arial, sans-serif";
            context3.fillStyle = Chip.textColor;
            context3.fillText("$" + Game.playerBet, 9, 39);
                    
            },500); 
            
            if(Game.playerScore === 21 && Game.playerCardCounter === 2) {
            
                Chip.blackjackAmount = Game.playerBet / 2;
            
                var imageChip3 = new Image();
            
                setTimeout(function(){
            
                    imageChip3.src = "../pics/chips2.png";
                    imageChip3.onload = function() {
            
                    context3.drawImage(imageChip3, 0, 0, 60, 35);
                };
            
                context6.font = "bold 10px Futura, 'Trebuchet MS', Arial, sans-serif";
                context6.fillStyle = Chip.textColor;
                context6.fillText("$" + Chip.blackjackAmount, 15, 90);
                    
                },500); 
            }
            
            if (Game.playerHasDoubled === true) {
                
                var imageChip5 = new Image();
                
                setTimeout(function(){
                    
                    imageChip5.src = "../pics/chips8.png";
                    imageChip5.onload = function() {
            
                    context3.drawImage(imageChip5, 24, 60, 32, 26);
                    };
                },500); 
            }
            
        } else {
            
            var imageChip2 = new Image();
        
            imageChip2.src = "../pics/chips8.png";
            imageChip2.onload = function() {
            
            context3.drawImage(imageChip2, 45, 54, 32, 26);
            };
            
            context3.font = "bold 10px Futura, 'Trebuchet MS', Arial, sans-serif";
            context3.fillStyle = Chip.textColor;
            context3.fillText("$" + Game.playerBet, 45, 46);
        }
    },
    
    displayDoubleChip: function() {
        
        var canvas10 = document.getElementById("playercards");
        var context10 = canvas10.getContext('2d');
        
        var imageChip4 = new Image();
        
        imageChip4.src = "../pics/chips8.png";
        imageChip4.onload = function() {
            
        context10.drawImage(imageChip4, 62, 66, 32, 26);
        };
        
        context10.clearRect(45, 36, 32, 12);
        context10.font = "bold 10px Futura, 'Trebuchet MS', Arial, sans-serif";
        context10.fillStyle = Chip.textColor;
        context10.fillText("$" + Game.playerBet, 45, 46);
    },
};






// Funktioner för utskrift av meddelanden.

var Messages = {
    
    textColor: "",
    textColorP: "",
    textColorD: "",
    
    displayMessage: function(message) {
        
        Game.tinyMessage.style.color = Messages.textColor;
        Game.tinyMessage.innerHTML = message;
        
        setTimeout(function(){
            
            Game.tinyMessage.innerHTML = "";
            
        },1000);
    },
    
    displayMessageP: function(message) {
        
        var canvas7 = document.getElementById("playercards");
        var context7 = canvas7.getContext('2d');
        
        setTimeout(function(){
            
            context7.fillStyle = "black";
            context7.fillRect(88, 20, 92, 30);
            context7.font = "bold 24px Futura, 'Trebuchet MS', Arial, sans-serif";
            context7.fillStyle = Messages.textColorP;
            context7.fillText(message, 106, 44);
                    
        },500); 
    },
    
    displayMessageD: function(message) {
        
        var canvas8 = document.getElementById("dealercards");
        var context8 = canvas8.getContext('2d');
        
        setTimeout(function(){
            
            context8.fillStyle = "black";
            context8.fillRect(88, 20, 92, 30);
            context8.font = "bold 24px Futura, 'Trebuchet MS', Arial, sans-serif";
            context8.fillStyle = Messages.textColorD;
            context8.fillText(message, 106, 44);
                    
        },500); 
    },
    
    displayMessageOther: function(message) {
        
        var canvas9 = document.getElementById("dealercards");
        var context9 = canvas9.getContext('2d');
        
        setTimeout(function() {
            
            context9.fillStyle = "#1b2c3f";
            context9.fillRect(0, 30, 80, 20);
            context9.font = "bold 9px Verdana";
            context9.fillStyle = "white";
            context9.fillText(message, 0, 44);
        
        },500);
    
        setTimeout(function(){
            
            context9.clearRect(0, 30, 80, 20);
            
        },1500); 
    },
};










var Strategy = {
    
    calculate: function() {
        
        // Uträkningar för bästa strategi i varje situation.
        
        var optimalDecision = "";
        
        if(Game.playerHasAce === 0) {
            
            // Hard hands - Händer som inte innehåller ess eller som räknar ess som 1.
            
            if(Game.playerScore >= 17) {
                
                optimalDecision = "YOU SHOULD STAND.";
            
            } else if(Game.playerScore >= 5 && Game.playerScore < 12) {
                
                if(Game.playerScore === 8) {
                    
                    if(Game.dealerScore === 5 || Game.dealerScore === 6) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else if(Game.playerScore === 9) {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else if(Game.playerScore === 10) {
                    
                    if(Game.dealerScore === 10 || Game.dealerScore === 11) {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    }
                    
                } else if(Game.playerScore === 11) {
                    
                    optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                
                } else {
                    
                    optimalDecision = "YOU SHOULD HIT.";
                }
                
            } else {
                
                if(Game.playerScore === 12) {
                    
                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                    
                } else {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                }
            }
            
        } else {
            
            // Soft hands - Händer som räknar ess som 11.
            
            if(Game.playerScore >= 20) {
                
                optimalDecision = "YOU SHOULD STAND.";
                
            } else if(Game.playerScore >= 13 && Game.playerScore < 18) {
                
                if(Game.playerScore >= 13 && Game.playerScore < 17) {
                    
                    if(Game.dealerScore >= 4 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                
                } else {
                    
                    if(Game.dealerScore >= 2 && Game.dealerScore < 7) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE HIT.";
                    
                    } else {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                    }
                }

            } else {
                
                if(Game.playerScore === 18) {
                    
                    if(Game.dealerScore === 9 || Game.dealerScore === 10) {
                        
                        optimalDecision = "YOU SHOULD HIT.";
                        
                    } else {
                        
                        if(Game.dealerScore >= 3 && Game.dealerScore < 7) {
                            
                            optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.";
                            
                        } else {
                            
                            optimalDecision = "YOU SHOULD STAND.";
                        }
                    }
                
                } else {
                    
                    if(Game.dealerScore === 6) {
                        
                        optimalDecision = "YOU SHOULD DOUBLE IF POSSIBLE, OTHERWISE STAND.";
                        
                    } else {
                        
                        optimalDecision = "YOU SHOULD STAND.";
                    }
                }
            }
        }
        
        if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.dealerScore !== 11 && Game.dealerScore !== 10) {
            
            Game.strategyTips.innerHTML = "";
            
        } else if(Game.playerScore <= 21) {
            
            Game.strategyTips.innerHTML = "";
            Game.strategyTips.style.webkitAnimation = 'none'; 
            
            // http://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
            
            setTimeout(function() {
                
                Game.strategyTips.innerHTML = optimalDecision;
                Game.strategyTips.style.webkitAnimation = '';
                
            },500);
        }
        
        else {
            
            Game.strategyTips.innerHTML = "";
        }
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
        
        var saved = "SAVED!";
        Messages.textColor = "chartreuse";
        Messages.displayMessage(saved);
    },
    
    load: function() {
        
        Game.playerChips = localStorage.getItem('playerchips');
    },
};

















window.onload = Game.init();