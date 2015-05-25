"use strict";

// Funktioner för spelbordet.

var Table = {
    
    fadeTable: function() {
        
        Game.gameArea.style.opacity = "0.7";
    },
    
    showTable: function() {
        
        Game.gameArea.style.opacity = "1";
    },
    
    fadeRadiobuttons: function() {
        
        Game.bet100.disabled = true;
        Game.bet500.disabled = true;
        Game.bet2500.disabled = true;
        
        Game.betAmount.style.opacity = 0.3;
    },
    
    showRadioButtons: function() {
        
        Game.bet100.disabled = false;
        Game.bet500.disabled = false;
        Game.bet2500.disabled = false;
        
        Game.betAmount.style.opacity = 1;
    },
};