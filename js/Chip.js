"use strict";

// Funktioner för visning av visuella spelmarker med canvas.

var Chip = {
    
    textColor: "",
    
    blackjackAmount: 0,
    
    displayChip: function() {
        
        var canvas3 = document.getElementById("playercards");
        var context3 = canvas3.getContext('2d');
        var canvas6 = document.getElementById("dealercards");
        var context6 = canvas6.getContext('2d');
        
        // Chips som visas vid vinst.
        
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
            
            // Extrachips för blackjack.
            
            if(Game.playerScore === 21 && Game.playerCardCounter === 2) {
            
                Chip.blackjackAmount = Math.round(Game.playerBet / 2);
            
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
            
            // Extrachips för vinst vid dubbling.
            
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
            
            // Chip som visas när spelaren gör en satsning.
            
            Sound.chipStart();
            
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
        
        // Chip som visas när spelaren gör en dubbling.
        
        Sound.chipStart();
        
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