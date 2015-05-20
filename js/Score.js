"use strict";

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
        
        // För att simulera blackjack vid testning
        /*Game.playerScore = 21;
        Game.playerCardCounter = 2;
        Game.playerHasBlackjack = true; */
        
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
    },
    
    blackJack: function() {
        
        Messages.textColorP = "gold";
        Messages.displayMessageP(Score.win);    
            
        Chip.displayChip();
            
        Game.playerChips = Game.playerChips + (Game.playerBet * 2.5);
        
        Game.totalWinAmount = Game.playerBet * 2.5;
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },7000); 
    },
    
    playerWin: function() {
        
        Messages.textColorP = "chartreuse";
        Messages.displayMessageP(Score.win);    
           
        Chip.displayChip();
            
        Game.playerChips = Game.playerChips + (Game.playerBet * 2);
        
        Game.totalWinAmount = Game.playerBet * 2;
        
        if(Game.playerHasDoubled === true) {
            
            setTimeout(function(){
                
                Game.roundIsOver();
                    
            },3000); 
            
        } else {
            
            setTimeout(function(){
                
                Game.roundIsOver();
                    
            },2000); 
        }
    },
    
    dealerWin: function() {
        
        Messages.textColorD = "red";    
        Messages.displayMessageD(Score.win);
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },2000); 
    },
    
    nobodyWin: function() {
        
        Messages.textColorP = "dodgerblue";
        Messages.textColorD = "dodgerblue";
        Messages.displayMessageP(Score.draw); 
        Messages.displayMessageD(Score.draw); 

        Game.playerChips = Game.playerChips + Game.playerBet;
        
        Game.totalWinAmount = Game.playerBet;
        
        setTimeout(function(){
            
            Game.roundIsOver();
                    
        },2000); 
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