"use strict";

// Funktioner för utskrift av meddelanden.

var Messages = {
    
    textColor: "",
    textColorP: "",
    textColorD: "",
    
    displayMessage: function(message) {
        
        Sound.loseStart();
        
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
            
            if(Game.playerHasDoubled === true && Game.playerScore !== Game.dealerScore) {
            
                Sound.doublewinStart();
            
            } else {
                
                if(Game.playerScore === 21 && Game.playerCardCounter === 2 && Game.playerScore !== Game.dealerScore) {
                    
                    Sound.blackjackStart();
                    
                } else if(Game.playerScore === Game.dealerScore) {
                    
                    Sound.tieStart();
                    
                } else {
                    
                    Sound.winStart(); 
                }
            }
            
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
            
            if(message === "WINS") {
                
                Sound.loseStart();
            }
            
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