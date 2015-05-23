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
    extraButtons: document.getElementById("extrabuttons"),
    back: document.getElementById("back"),
    backButton: document.getElementById("backbutton"),
    strategyButton: document.getElementById("strategybutton"),
    tutorialDiv: document.getElementById("tutorialdiv"),
    tutorialText: document.getElementById("tutorialtext"),
    nextButton: document.getElementById("nextbutton"),

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
        
        Sound.ambianceStart();
        
        // Döljer "loading" meddelandet, inititerar spelet och visar huvudmenyn.
        
        Game.loadingImage.className = "inactive";
        Game.loading.className = "inactive";
        Game.container.style.visibility = "visible";
        
        Table.fadeTable();
    
        Game.betButton.className = "inactive";
        Game.hitButton.className = "inactive";
        Game.standButton.className = "inactive";
        Game.doubleButton.className = "inactive";
        Game.chipCount.className = "inactive";
        Game.betAmount.className = "inactive";
        Game.toggleStrategy.className = "inactive";
        Game.back.className = "inactive";
        
        Game.totalWin.style.visibility = "hidden";
        
        Game.tutorialDiv.className = "inactive";
        Game.nextButton.style.backgroundColor = "green";
        
        //Här kan det skapas en logo sedan!
        
        Game.playerChips = localStorage.getItem('playerchips');
        
        var tutButton = document.createElement("button");
        tutButton.id = "tutbutton";
        tutButton.innerHTML = "HOW TO PLAY";
        
        var resumeGameButton = document.createElement("button");
        resumeGameButton.id = "resumegamebutton";
        resumeGameButton.innerHTML = "RESUME GAME ($" + Game.playerChips + ")";
        
        if (localStorage.getItem("playerchips") !== null && Game.playerChips >= 100) {
            
            document.getElementById("playerbuttons").appendChild(resumeGameButton);
            
            resumeGameButton.onclick = function () {
                
                Sound.clickStart();
                resumeGameButton.className = "inactive";
                newGameButton.className = "inactive";
                Game.extraButtons.className = "inactive";
                Sound.welcomebackStart();
                GameProgress.load();
                Game.newGame();
            };
        } 
        
        var newGameButton = document.createElement("button");
        newGameButton.id = "newgamebutton";
        newGameButton.innerHTML = "NEW GAME";
        
        document.getElementById("playerbuttons").appendChild(newGameButton);
        
        var sizeButton1 = document.createElement("button");
        sizeButton1.id = "sizebutton1";
        sizeButton1.innerHTML = "NORMAL VIEW";
        
        document.getElementById("extrabuttons").appendChild(sizeButton1);
        
        var sizeButton2 = document.createElement("button");
        sizeButton2.id = "sizebutton2";
        sizeButton2.innerHTML = "LARGE VIEW";
        
        document.getElementById("extrabuttons").appendChild(sizeButton2);
        
        document.getElementById("extrabuttons").appendChild(tutButton);
        
        
        newGameButton.onclick = function () {
            
            Sound.clickStart();
            
            if(localStorage.getItem("playerchips") !== null && Game.playerChips >= 100) {
                
                if (confirm("You have an existing game! Proceed anyway?")) { 
                    
                    newGameButton.className = "inactive";
                    resumeGameButton.className = "inactive";
                    Game.extraButtons.className = "inactive";
                    Game.playerChips = 2000;
                    GameProgress.save();
                    Game.newGame();
                }
                
            } else {
                    
                newGameButton.className = "inactive";
                resumeGameButton.className = "inactive";
                Game.extraButtons.className = "inactive";
                Game.playerChips = 2000;
                GameProgress.save();
                Game.newGame();
            } 
        };
        
        sizeButton1.onclick = function () {
            
            Sound.clickStart();
            
            document.getElementById("mybody").style.zoom = "1";
            document.getElementById("container").style.marginTop = "80px";
        };
        
        sizeButton2.onclick = function () {
            
            Sound.clickStart();
            
            document.getElementById("mybody").style.zoom = "1.2";
            document.getElementById("container").style.marginTop = "40px";
        };
        
        tutButton.onclick = function () {
            
            Sound.clickStart();
            
            if(Game.tutorialDiv.className === "inactive") {
                
                newGameButton.className = "inactive";
                resumeGameButton.className = "inactive";
                Game.tutorialDiv.className = "active2";
                tutButton.style.backgroundColor = "red";
                Game.tutorialText.innerHTML = "This is blackjack played with only one deck of cards.<br /><br />The rules are pretty simple:<br />*Get a higher score than the dealer without exceeding 21 points.<br />*Aces are worth 11 or 1 points.<br />*Kings, queens, jacks and tens are worth 10 points.<br />*All cards from 2-9 are worth their specific value in points.<br />*Dealer must stand on 17 points.<br />*21 points with two cards (a blackjack) beats 21 regular points.";
                Game.nextButton.innerHTML = "NEXT";
                Game.nextButton.style.backgroundColor = "green";
                
            } else {
                
                newGameButton.className = "active";
                resumeGameButton.className = "active";
                Game.tutorialDiv.className = "inactive";
                tutButton.style.backgroundColor = "green";
            }
        };
        
        Game.nextButton.onclick = function() {
            
            Sound.clickStart();
            
            if(Game.nextButton.style.backgroundColor === "green") {
                
                Game.tutorialText.innerHTML = "*The player may choose to stand, hit or double.<br />*Double is available on the first two cards and gives ONE more card.<br />*Winning hands pays out 2:1.<br />*Tied hands returns the betamount.<br />*Blackjack pays out 2.5:1.<br />*If the dealer has blackjack as well, it counts as a tie.";
                Game.nextButton.innerHTML = "PREVIOUS";
                Game.nextButton.style.backgroundColor = "red";
                
            } else {
                
                Game.tutorialText.innerHTML = "*Get a higher score than the dealer without exceeding 21 points.<br />*Aces are worth 11 or 1 points.<br />*Kings, queens, jacks and tens are worth 10 points.<br />*All cards from 2-9 are worth their specific value in points.<br />*Dealer must stand on 17 points.<br />*21 points with two cards (a blackjack) beats 21 regular points.";
                Game.nextButton.innerHTML = "NEXT";
                Game.nextButton.style.backgroundColor = "green";
            }
        };
    },
     
    newGame: function() {
        
        // Startar ett nytt spel.
        
        Table.showTable();
        
        Deck.createDeck();
        Deck.shuffleDeck();
        
        Game.back.className = "active2";
        
        Game.chips.innerHTML = "$" + Game.playerChips;
        Game.chipCount.className = "active2";
        
        Game.statusColor();
        
        Table.showRadioButtons();
        Game.betButton.className = "active";
        Game.betAmount.className = "active2";
        
        Game.betButton.onclick = function () {
            
            Game.betButton.className = "inactive";
            Table.fadeRadiobuttons();
            Game.newRound();
        };
        
        Game.strategyButton.onclick = function() {
            
            Sound.clickStart();
            
            if(Game.toggleStrategy.className === "inactive") {
                
                Game.toggleStrategy.className = "active2";
                Game.strategyButton.style.backgroundColor = "red";
                
            } else {
        
                Game.toggleStrategy.className = "inactive";
                Game.strategyButton.style.backgroundColor = "green";
            }
        };
        
        Game.backButton.onclick = function() {
            
            Sound.clickStart();
            
            document.location.reload();
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
            Chip.textColor = "dodgerblue";
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
            
            GameProgress.save();
            
            Game.statusColor();
            
            Chip.displayChip();
        
            setTimeout(function(){
                
                Game.playerHits();
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
                    Game.doubleButton.style.backgroundColor = Chip.textColor;
                    Game.doubleButton.style.opacity = 0.7;
                }
                    
            },2000); 
    
            // Härifrån bestämmer spelaren vad som händer.
            
            Game.hitButton.onclick = function () {
                
                Game.playerHits();
                Strategy.calculate();
                Game.doubleButton.disabled = true;
                Game.doubleButton.style.opacity = 0.3;
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
            
            Game.statusColor();
            
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
        
        // Rensar canvas, nollställer variabler och sparar antalet marker i localstorage.
        
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
                    
                    Game.chips.style.fontWeight = "normal";
                    Game.chips.style.color = "silver";
                
                },400);
                
                Game.statusColor();
           
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
            
        },2000);
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
    
    statusColor: function() {
        
        if(Game.playerChips <= 500) {
    
            Game.chips.style.borderColor = "red";
            
        } else if(Game.playerChips >= 10000 && Game.playerChips < 20000) {
                
            Game.chips.style.borderColor = "chartreuse";
                
        } else if(Game.playerChips >= 20000) {
                
            Game.chips.style.borderColor = "gold";
                
        } else {
                
            Game.chips.style.borderColor = "dodgerblue";
        }
    },
};

window.onload = Game.init;