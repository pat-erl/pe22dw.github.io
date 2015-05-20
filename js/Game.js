"use strict";


// Spelets gång från början av en runda till slutet av rundan.

var Game = {
    
    container: document.getElementById("container"),
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
    strategyTips: document.getElementById("strategytips"),
    toggleStrategy: document.getElementById("togglestrategy"),
    loadingImage: document.getElementById("loadingimage"),
    loading: document.getElementById("loading"),
    totalWin: document.getElementById("totalwin"),
    totalWinAmountP: document.getElementById("totalwinamount"),

    playerScore: 0,
    dealerScore: 0,
    playerChips: 0,
    playerBet: 0,
    playerCardCounter: 0,
    dealerCardCounter: 0,
    playerHasAce: 0,
    dealerHasAce: 0,
    playerHasDoubled: false,
    totalWinAmount: 0,

    init: function() {
        
        Game.loadingImage.className = "inactive";
        Game.loading.className = "inactive";
        Game.container.style.visibility = "visible";
        
        Table.fadeTable();
        
        Sound.ambianceStart();
    
        Game.betButton.className = "inactive";
        Game.hitButton.className = "inactive";
        Game.standButton.className = "inactive";
        Game.doubleButton.className = "inactive";
        Game.chipCount.className = "inactive";
        Game.betAmount.className = "inactive";
        
        Game.totalWin.style.visibility = "hidden";
        
        Game.strategyTips.style.display = 'none';
        
        //Här kan det skapas en logo sedan!
        
        Game.playerChips = localStorage.getItem('playerchips');
        
        var resumeGameButton = document.createElement("button");
        resumeGameButton.id = "resumegamebutton";
        resumeGameButton.innerHTML = "RESUME GAME ($" + Game.playerChips + ")";
        
        var removeButton = document.createElement("button");
        removeButton.id = "removebutton";    
        removeButton.innerHTML = "RESET";
        
        if (localStorage.getItem("playerchips") !== null) {
            
            document.getElementById("playerbuttons").appendChild(resumeGameButton);
            
            document.getElementById("playerbuttons").appendChild(removeButton);
            
            resumeGameButton.onclick = function () {
                
                Sound.clickStart();
                resumeGameButton.className = "inactive";
                newGameButton.className = "inactive";
                removeButton.className = "inactive";
                Game.resumeGame();
            };
            
            removeButton.onclick = function () {
                
                Sound.clickStart();
                localStorage.removeItem('playerchips');
                document.location.reload();
            };
        } 
        
        var newGameButton = document.createElement("button");
        newGameButton.id = "newgamebutton";
        newGameButton.innerHTML = "NEW GAME ($2000)";
        
        document.getElementById("playerbuttons").appendChild(newGameButton);
        
        newGameButton.onclick = function () {
            
            Sound.clickStart();
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
            
            Sound.clickStart();
            
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
        
        Sound.welcomebackStart();
        
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
            
            Sound.clickStart();
            
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
                    Game.doubleButton.style.color = "black";
                }
                    
            },2000); 
    
            // Härifrån bestämmer spelaren vad som händer.
            
            Game.hitButton.onclick = function () {
                
                Game.playerHits();
                Strategy.calculate();
                Game.doubleButton.disabled = true;
                Game.doubleButton.style.color = "grey";
            };
            
            Game.standButton.onclick = function () {
                
                Sound.clickStart();
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
       
            setTimeout(function() {
                
                Sound.cashingStart();
                
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
                Game.chips.innerHTML = "$" + Game.playerChips;
                Game.chips.style.color = "chartreuse";
            
                Game.totalWinAmountP.style.webkitAnimation = 'none'; 
            
                // http://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
            
                setTimeout(function() {
                    
                    Game.totalWin.style.visibility = "visible";
                    Game.totalWinAmountP.innerHTML = "+$" + Game.totalWinAmount;
                
                    Game.totalWinAmountP.style.webkitAnimation = '';
                
                },500);
                
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
                
                Sound.chipStart();
                
                // Rensar bort den första marken.
                var temp4 = document.getElementById("playercards");
                temp4.getContext('2d').clearRect(0, 20, 80, 60);
                
                // Denna del rensar bort det lilla som annars blir kvar efter en dubbling.
                var temp7 = document.getElementById("playercards");
                temp7.getContext('2d').clearRect(62, 65, 32, 27);
                
            },500);
        } 
        
        setTimeout(function(){
            
            Sound.swipeStart();
            
            // "Samlar" in alla kort, dvs rensar canvas.
            var temp1 = document.getElementById("playercards");
            temp1.getContext('2d').clearRect(0, 0, temp1.width, temp1.height);
        
            var temp2 = document.getElementById("dealercards");
            temp2.getContext('2d').clearRect(0, 0, temp2.width, temp2.height);
            
            Game.chips.style.fontWeight = "normal";
            Game.chips.style.color = "silver";
            
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
            Game.totalWinAmount = 0;
            
            if(Game.playerChips < 100) {
                
                Game.gameOver();
                
            } else {
                
                GameProgress.save();
                
                Table.showRadioButtons();
                Game.betButton.className = "active";
            
                Game.betButton.onclick = function () {
            
                    Game.betButton.className = "inactive";
                    Table.fadeRadiobuttons();
                    Game.newRound();
                };
            }
            
        },1500);
        
        setTimeout(function(){
            
            Game.totalWin.style.visibility = "hidden";
            
        },3000);
    },
    
    tutorial: function() {
        
        var tutorial = document.createElement("div");
        tutorial.id = "tutorial";
        document.getElementById("playerbuttons").appendChild(tutorial);
        
        var tutorialText = document.createElement("p");
        tutorialText.className = "tutorialtext";
        tutorialText.innerHTML = "*Get a higher score than the dealer without exceeding 21 points.<br />*Aces are worth 11 or 1 points.<br />*Kings, queens, jacks and tens are all worth 10 points.<br />*All cards from 2-9 are worth their specific number in points.<br />*Dealer must draw on 16 points and below.<br />*21 points gained with only two cards (a blackjack) beats 21 regular points.<br />*Winning hand pays out 2:1.<br />*Blackjack pays out 2.5:1.";
        tutorial.appendChild(tutorialText);
        
        var tutorialButton = document.createElement("button");
        tutorialButton.id = "tutorialbutton";
        tutorialButton.innerHTML = "SKIP TUTORIAL";
        tutorialText.appendChild(tutorialButton);
        
        tutorialButton.onclick = function() {
            
            Sound.clickStart();
            tutorial.className = "inactive";
            Game.newGame();
        };
    },
    
    gameOver: function() {
        
        if (confirm("You ran out of chips! Play again?")) { 
            
            localStorage.removeItem('playerchips');
            document.location.reload();
        
        } else {
            
            localStorage.removeItem('playerchips');
            document.location.reload();
        }
    },
};

window.onload = Game.init;